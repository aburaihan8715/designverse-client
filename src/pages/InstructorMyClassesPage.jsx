import { Helmet } from "react-helmet-async";
import useAuth from "../hooks/useAuth";

import SectionHeading from "../ui/SectionHeading";
import { useState } from "react";
import { useEffect } from "react";
import LoadingSpinner from "../ui/LoadingSpinner";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useClassesData from "../hooks/useClassesData";

// import axios from "axios";

const InstructorMyClassesPage = () => {
  const [myClassData, setMyClassData] = useState([]);
  const [myClassLoading, setMyClassLoading] = useState(false);
  const [myClassError, setMyClassError] = useState("");

  const { user, authLoading } = useAuth();
  // console.log(user);

  useEffect(() => {
    setMyClassLoading(true);
    fetch(`http://localhost:5000/classes?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyClassLoading(false);
        setMyClassData(data);
      })
      .catch((error) => {
        setMyClassLoading(false);
        setMyClassError(error.message);
        console.log(error.message);
      });
  }, [user?.email]);

  if (myClassLoading || authLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (myClassError) {
    return <p>something went wrong ${myClassError.message}</p>;
  }

  return (
    <div className="px-5">
      <Helmet>
        <title>FashionVerse | MyClassesPage</title>
      </Helmet>
      <div>
        <SectionHeading
          subHeading={`how many`}
          heading={`my classes`}
        ></SectionHeading>
      </div>
      <p className="text-xl">Total classes :{myClassData?.length}</p>
      <div className="overflow-x-auto">
        <table className="table border border-success">
          {/* head */}
          <thead className="capitalize">
            <tr className="border border-success">
              <th>#</th>
              <th>image</th>
              <th>name</th>
              <th>seats</th>
              <th>price</th>
              <th>status</th>
              <th>enrolled</th>
              <th>feedback</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody className="">
            {/* row 1 */}
            {myClassData?.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={item?.classImage} alt="class cover photo" />
                    </div>
                  </div>
                </td>

                <td>{item?.className}</td>
                <td>{item?.seats}</td>
                <td>$ {item?.price}</td>
                <td>{item?.status}</td>
                <td>
                  {item?.studentEnrolled
                    ? item.studentEnrolled
                    : "not enrolled yet"}
                </td>
                <td>
                  {item?.adminFeedback ? item.adminFeedback : "no feedback"}
                </td>

                <td className="">
                  <div className="flex gap-2">
                    <Link to={`/dashboard/updateClass/${item._id}`}>
                      <button className="btn-info btn-xs btn">update</button>
                    </Link>
                    <InstrMyClassDeleteBtn key={item._id} id={item._id} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InstructorMyClassesPage;

// instructor my class delete button component
const InstrMyClassDeleteBtn = ({ id }) => {
  const [classDeleteLoading, setClassDeleteLoading] = useState(false);

  const { refetch } = useClassesData();

  const classDeleteHandler = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        setClassDeleteLoading(true);
        fetch(`http://localhost:5000/classes/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setClassDeleteLoading(false);
              Swal.fire("Class has been deleted.!");
              refetch();
            }
          })
          .catch((error) => {
            setClassDeleteLoading(false);
            console.log(error.message);
          });
      }
    });
  };

  return (
    <button onClick={classDeleteHandler} className="btn-error btn-xs btn">
      {classDeleteLoading ? "loading.." : "delete"}
    </button>
  );
};
