import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useUsersData from "../hooks/useUsersData";
import LoadingSpinner from "../ui/LoadingSpinner";
import SectionHeading from "../ui/SectionHeading";

const ManageUsersPage = () => {
  const { users, refetch, userIsLoading, userError } = useUsersData();

  // delete user
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
        fetch(`https://fashion-verse-server.vercel.app/users/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          })
          .catch((error) => {
            console.log(error.message);
          });
      }
    });
  };

  // make role handler
  const makeRoleHandler = (item, role) => {
    fetch(`https://fashion-verse-server.vercel.app/users/role/${item._id}`, {
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
        refetch();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  if (userIsLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (userError) {
    return <p className="text-center text-red-600">something went wrong {userError.message}</p>;
  }

  return (
    <div className="">
      <Helmet>
        <title>FashionVerse | All user</title>
      </Helmet>
      <div>
        <SectionHeading subHeading={`How many?`} heading={`MANAGE ALL USERS`}></SectionHeading>

        <div className="text-3xl">
          <span>Total users: </span>
          <span>{users?.length}</span>
        </div>

        {/* table */}
        <div className="overflow-x-auto mt-2">
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

                  <td className="space-y-2">
                    <button disabled={item.role} onClick={() => makeRoleHandler(item, "admin")} className="btn btn-xs">
                      make admin
                    </button>
                    <button disabled={item.role} onClick={() => makeRoleHandler(item, "instructor")} className="btn btn-xs">
                      make instructor
                    </button>
                  </td>

                  <th>
                    <button onClick={() => deleteHandler(item)} className="btn btn-xs bg-red-600 text-white hover:bg-red-800">
                      <FaTrashAlt></FaTrashAlt>
                    </button>
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
