const ManageClassesPage = () => {
  return <div>ManageClassesPage</div>;
};

export default ManageClassesPage;
/*
import { Helmet } from "react-helmet-async";
import useClassesData from "../hooks/useClassesData";
import LoadingSpinner from "../ui/LoadingSpinner";
import SectionHeading from "../ui/SectionHeading";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Modal from "../ui/Modal";
import AdminFeedbackForm from "../features/admin/AdminFeedbackForm";
import useFeedbackId from "../hooks/useFeedbackId";
import useModalOpen from "../hooks/useModalOpen";

const ManageClassesPage = () => {
  const { classesData, classesLoading, classesError, isClassesError, refetch } =
    useClassesData();
  const { axiosSecure } = useAxiosSecure();
  const { setFeedbackId } = useFeedbackId();
  const { modalOpen, setModalOpen } = useModalOpen();

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
    <>
      <div className="ml-2 ">
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

       
          <div className="mt-8 overflow-x-auto">
            <table className="table border border-success">
           
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
              
                {classesData?.map((item) => (
                  <tr key={item._id}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="w-12 h-12 mask mask-squircle">
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
                    <td className="">
                      {item.status === "approved" && (
                        <span className="capitalize badge badge-primary">
                          {item.status}
                        </span>
                      )}
                      {item.status === "denied" && (
                        <span className="capitalize badge badge-error">
                          {item.status}
                        </span>
                      )}
                    </td>

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
                          item.status === "approved" ||
                          item.adminFeedback ||
                          item.status === "pending" ||
                          item.status !== "denied"
                        }
                        onClick={() => {
                          setModalOpen(true);
                          setFeedbackId(item._id);
                        }}
                        className="btn-warning btn-xs btn"
                      >
                        feedback
                      </button>
                    </th>
                  </tr>
                ))}
              
              </tbody>
            </table>
          </div>
        </div>
      </div>
   
      <Modal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        bgColor="bg-stone-900"
      >
        <AdminFeedbackForm />
      </Modal>
    </>
  );
};

export default ManageClassesPage;
*/
