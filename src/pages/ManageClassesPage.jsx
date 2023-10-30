import { Helmet } from "react-helmet-async";
import useClassesData from "../hooks/useClassesData";
import LoadingSpinner from "../ui/LoadingSpinner";
import SectionHeading from "../ui/SectionHeading";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Modal from "../ui/Modal";
import { useState } from "react";
import AdminFeedbackForm from "../features/admin/AdminFeedbackForm";
import useFeedbackId from "../hooks/useFeedbackId";

const ManageClassesPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const { classesData, classesLoading, classesError, isClassesError, refetch } =
    useClassesData();
  const { axiosSecure } = useAxiosSecure();
  const { setFeedbackId } = useFeedbackId();

  const classStatusHandler = (id, status) => {
    // console.log(id);
    // console.log(status);
    axiosSecure
      .patch(`/classes/${id}`, {
        status,
      })
      .then(() => {
        refetch();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  if (classesLoading) return <LoadingSpinner />;

  if (isClassesError) {
    return (
      <p className="text-center text-red-600">
        something went wrong {classesError}
      </p>
    );
  }
  return (
    <div className=" ml-2">
      <Helmet>
        <title>Bistro | My selected class</title>
      </Helmet>
      <div>
        <div className="mt-4">
          <SectionHeading subHeading={`manage`} heading={`all classes`} />
        </div>

        <div className="text-3xl ">
          <div className="">
            <span>Total classes: </span>
            <span>{classesData?.length}</span>
          </div>
        </div>

        {/* table */}
        <div className="mt-8 overflow-x-auto">
          <table className="table border border-success">
            {/* head */}
            <thead className="">
              <tr className="border border-success">
                <th>image</th>
                <th>class</th>
                <th>instructor</th>
                <th>instructor email</th>
                <th>seats</th>
                <th>price</th>
                <th>status</th>
                <th>actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row start */}
              {classesData?.map((item) => (
                <tr key={item._id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={item.classImage} />
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="">{item.className}</td>
                  <td className="">{item.instructorName}</td>
                  <td className="">{item.instructorEmail}</td>
                  <td className="">{item.seats}</td>
                  <td className="">{item.price}</td>
                  <td className="capitalize">{item.status}</td>

                  <th className="flex flex-col gap-2">
                    <button
                      disabled={
                        item.status === "approved" || item.status === "denied"
                      }
                      onClick={() => classStatusHandler(item._id, "approved")}
                      className="btn-success btn-xs btn "
                    >
                      approve
                    </button>
                    <button
                      disabled={
                        item.status === "approved" || item.status === "denied"
                      }
                      onClick={() => classStatusHandler(item._id, "denied")}
                      className="btn-error btn-xs btn "
                    >
                      deny
                    </button>
                    <button
                      disabled={
                        item.status === "approved" || item.adminFeedback
                      }
                      onClick={() => {
                        setOpenModal(true);
                        setFeedbackId(item._id);
                      }}
                      className="btn-warning btn-xs btn"
                    >
                      feedback
                    </button>
                  </th>
                </tr>
              ))}
              {/* row end */}
            </tbody>
          </table>
        </div>
      </div>
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        bgColor="bg-stone-900"
      >
        <AdminFeedbackForm />
      </Modal>
    </div>
  );
};

export default ManageClassesPage;
