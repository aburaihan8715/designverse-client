import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useUsersData from "../hooks/useUsersData";
import LoadingSpinner from "../ui/LoadingSpinner";
import SectionHeading from "../ui/SectionHeading";
import { useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const ManageUsersPage = () => {
  const { users, userLoading, userError, isUserError } = useUsersData();

  if (userLoading) {
    return <LoadingSpinner />;
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
        <div className="mt-4">
          <SectionHeading
            subHeading={`How many?`}
            heading={`MANAGE ALL USERS`}
          />
        </div>

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
                      <MakeAdminBtn item={item} admin="admin" />

                      <MakeInstructorBtn item={item} instructor="instructor" />
                    </div>
                  </td>

                  <th>
                    <UserDeleteBtn item={item} />
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
  const { axiosSecure } = useAxiosSecure();

  const makeAdminHandler = (item, role) => {
    setMakeAdminLoading(true);
    axiosSecure
      .patch(`/users/role/${item?._id}`, { role })
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
      disabled={item?.role}
      onClick={() => makeAdminHandler(item, admin)}
      className="btn-primary btn-xs btn h-7"
    >
      {makeAdminLoading ? " loading.." : "make admin"}
    </button>
  );
};

// make instructor button component
const MakeInstructorBtn = ({ item, instructor }) => {
  const [makeInstructorLoading, setMakeInstructorLoading] = useState(false);
  const { refetch } = useUsersData();
  const { axiosSecure } = useAxiosSecure();

  const makeInstructorHandler = async (item, role) => {
    try {
      setMakeInstructorLoading(true);
      const res = await axiosSecure.patch(`/users/role/${item?._id}`, {
        role,
      });
      const data = res.data;
      if (data.modifiedCount > 0) {
        setMakeInstructorLoading(false);
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Make instructor success!!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      setMakeInstructorLoading(false);
      console.log(error.message);
    }

    // fetch(`https://fashion-verse-server.vercel.app/users/role/${item._id}`, {
    //   method: "PATCH",
    //   body: JSON.stringify({
    //     role,
    //   }),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then(() => {
    //     setMakeInstructorLoading(false);
    //     refetch();
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //   });
  };
  return (
    <button
      disabled={item?.role}
      onClick={() => makeInstructorHandler(item, instructor)}
      className="btn-secondary btn-xs btn h-7"
    >
      {makeInstructorLoading ? " loading.." : "make instructor"}
    </button>
  );
};

// user delete button component
const UserDeleteBtn = ({ item }) => {
  const [deleteLoading, setDeleteLoading] = useState(false);
  const { refetch } = useUsersData();
  const { axiosSecure } = useAxiosSecure();

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
        axiosSecure
          .delete(`/users/${item?._id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              setDeleteLoading(false);
              Swal.fire("Deleted!", "Your file has been deleted.");
            }
          })
          .catch((error) => {
            console.log(error.message);
            setDeleteLoading(false);
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
