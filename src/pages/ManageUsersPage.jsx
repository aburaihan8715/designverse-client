import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useUsersData from "../hooks/useUsersData";
import LoadingSpinner from "../ui/LoadingSpinner";
import SectionHeading from "../ui/SectionHeading";
import { useState } from "react";

const ManageUsersPage = () => {
  const { users, userLoading, userError, isUserError } = useUsersData();

  if (userLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (isUserError) {
    return (
      <p className="text-center text-red-600">
        something went wrong {userError.message}
      </p>
    );
  }

  return (
    <div className="">
      <Helmet>
        <title>FashionVerse | All user</title>
      </Helmet>
      <div>
        <SectionHeading
          subHeading={`How many?`}
          heading={`MANAGE ALL USERS`}
        ></SectionHeading>

        <div className="text-3xl">
          <span>Total users: </span>
          <span>{users?.length}</span>
        </div>

        {/* table */}
        <div className="mt-2 overflow-x-auto">
          <table className="table border border-success">
            {/* head */}
            <thead className="capitalize">
              <tr className="border border-success">
                <th>#</th>
                <th>name</th>
                <th>email</th>
                <th>role</th>
                <th className="text-center">change role</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {/* row start */}
              {users?.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item?.role ? item.role : "student"}</td>

                  <td className="">
                    <div className="flex flex-col gap-2 ">
                      <MakeAdminBtn item={item} admin="admin" key={item._id} />

                      <MakeInstructorBtn
                        item={item}
                        instructor="instructor"
                        key={item._id}
                      />
                    </div>
                  </td>

                  <th>
                    <UserDeleteBtn item={item} key={item._id} />
                  </th>
                </tr>
              ))}
              {/* row end */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsersPage;

// make admin button component
const MakeAdminBtn = ({ item, admin }) => {
  const [makeAdminLoading, setMakeAdminLoading] = useState(false);
  const { refetch } = useUsersData();

  const makeAdminHandler = (item, role) => {
    setMakeAdminLoading(true);
    fetch(`http://localhost:5000/users/role/${item._id}`, {
      method: "PATCH",
      body: JSON.stringify({
        role,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then(() => {
        setMakeAdminLoading(false);
        refetch();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <button
      disabled={item.role}
      onClick={() => makeAdminHandler(item, admin)}
      className="btn-xs btn h-7"
    >
      {makeAdminLoading ? " loading.." : "make admin"}
    </button>
  );
};

// make instructor button component
const MakeInstructorBtn = ({ item, instructor }) => {
  const [makeInstructorLoading, setMakeInstructorLoading] = useState(false);
  const { refetch } = useUsersData();

  const makeInstructorHandler = (item, role) => {
    setMakeInstructorLoading(true);
    fetch(`http://localhost:5000/users/role/${item._id}`, {
      method: "PATCH",
      body: JSON.stringify({
        role,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then(() => {
        setMakeInstructorLoading(false);
        refetch();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <button
      disabled={item.role}
      onClick={() => makeInstructorHandler(item, instructor)}
      className="btn-xs btn h-7"
    >
      {makeInstructorLoading ? " loading.." : "make instructor"}
    </button>
  );
};

// user delete button component
const UserDeleteBtn = ({ item }) => {
  const [deleteLoading, setDeleteLoading] = useState(false);
  const { refetch } = useUsersData();

  const deleteHandler = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setDeleteLoading(true);
        fetch(`http://localhost:5000/users/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
            if (data.deletedCount > 0) {
              setDeleteLoading(false);
              Swal.fire("Deleted!", "Your file has been deleted.");
            }
          })
          .catch((error) => {
            console.log(error.message);
          });
      }
    });
  };

  return (
    <button
      onClick={() => deleteHandler(item)}
      className="btn-xs btn bg-red-600 text-white hover:bg-red-800"
    >
      {deleteLoading ? " deleting.." : <FaTrashAlt></FaTrashAlt>}
    </button>
  );
};
