const InstructorMyClassesPage = () => {
  return <div>InstructorMyClassesPage</div>;
};

export default InstructorMyClassesPage;
/*
import { Helmet } from "react-helmet-async";
import SectionHeading from "../ui/SectionHeading";
import { useState } from "react";
import LoadingSpinner from "../ui/LoadingSpinner";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useInstructorMyClassData from "../hooks/useInstructorMyClassData";

const InstructorMyClassesPage = () => {
  const {
    instructorMyClassData,
    instructorMyClassLoading,
    instructorMyClassError,
    isInstructorMyClassError,
    refetch,
  } = useInstructorMyClassData();

  if (instructorMyClassLoading) return <LoadingSpinner />;

  if (isInstructorMyClassError) {
    return <p>something went wrong ${instructorMyClassError.message}</p>;
  }

  return (
    <div className="px-5">
      <Helmet>
        <title>FashionVerse | MyClassesPage</title>
      </Helmet>
      <div>
        <SectionHeading subHeading={`how many`} heading={`my classes`} />
      </div>
      <p className="text-xl">Total classes :{instructorMyClassData?.length}</p>
      <div className="overflow-x-auto">
        <table className="table border border-success">
         
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
           
            {instructorMyClassData?.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-12 h-12 mask mask-squircle">
                      <img src={item?.classImage} alt="class cover photo" />
                    </div>
                  </div>
                </td>

                <td>{item?.className}</td>
                <td>{item?.seats}</td>
                <td>${item?.price}</td>
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
                    <InstrMyClassDeleteBtn
                      key={item._id}
                      id={item._id}
                      refetch={refetch}
                    />
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
const InstrMyClassDeleteBtn = ({ id, refetch }) => {
  const [classDeleteLoading, setClassDeleteLoading] = useState(false);
  const { axiosSecure } = useAxiosSecure();

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
        axiosSecure
          .delete(`/classes/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
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
      {classDeleteLoading && (
        <span className="loading loading-spinner loading-xs"></span>
      )}
      delete
    </button>
  );
};
*/
