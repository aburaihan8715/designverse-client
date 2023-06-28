import { Helmet } from "react-helmet-async";
// import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import { useQuery } from "react-query";
import Swal from "sweetalert2";

const ManageUsersPage = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const data = await fetch(`http://localhost:5000/users`);
      return data.json();
    },
  });

  // const deleteHandler = (user) => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       fetch(`http://localhost:5000/users/${user._id}`, {
  //         method: "DELETE",
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           refetch();
  //           if (data.deletedCount > 0) {
  //             Swal.fire("Deleted!", "Your file has been deleted.", "success");
  //           }
  //         })
  //         .catch((error) => {
  //           console.log(error.message);
  //         });
  //     }
  //   });
  // };

  // make admin handler
  const makeAdminHandler = (item) => {
    fetch(`http://localhost:5000/users/admin/${item._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${item.name} is admin now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // make instructor handler
  const makeInstructorHandler = (item) => {
    fetch(`http://localhost:5000/users/instructor/${item._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${item.name} is instructor now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

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
                <th className="text-center">make role</th>
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

                  <td className="space-x-2">
                    <button disabled={item.role} onClick={() => makeAdminHandler(item)} className="btn btn-xs">
                      make admin
                    </button>
                    <button disabled={item.role} onClick={() => makeInstructorHandler(item)} className="btn btn-xs">
                      make instructor
                    </button>
                  </td>

                  <th>
                    <button className="btn btn-xs bg-red-600 text-white hover:bg-red-800">
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
