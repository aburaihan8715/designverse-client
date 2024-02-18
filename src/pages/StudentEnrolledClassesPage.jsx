const StudentEnrolledClassesPage = () => {
  return <div>StudentEnrolledClassesPage</div>;
};

export default StudentEnrolledClassesPage;

/* 
import useAuth from "../hooks/useAuth";
import LoadingSpinner from "../ui/LoadingSpinner";
import useClassesData from "../hooks/useClassesData";
import { Helmet } from "react-helmet-async";
import SectionHeading from "../ui/SectionHeading";
import Modal from "../ui/Modal";
import ClassReviewForm from "../features/student/ClassReviewForm";
import useModalOpen from "../hooks/useModalOpen";
import useReviewId from "../hooks/useReviewId";
import useStudentEnrolledClass from "../hooks/useStudentEnrolledClass";

const StudentEnrolledClassesPage = () => {
  const { modalOpen, setModalOpen } = useModalOpen();
  const { setReviewId, reviewId } = useReviewId();
  const { authLoading } = useAuth();
  const { classesData, classesLoading, classesError, isClassesError } =
    useClassesData();
  const {
    enrolledClassesDataLoading,
    enrolledClassesData,
    enrolledClassesDataError,
    isEnrolledClassesError,
  } = useStudentEnrolledClass();

  const enrolledClassesList = enrolledClassesData?.flat();
  const enrolledClassesIds = enrolledClassesList?.map((item) => {
    return item.selectedIClassesIds;
  });

  const enrolledIdsList = enrolledClassesIds?.flat();
  const totalEnrolledClasses = enrolledIdsList?.map((id) => {
    return classesData.filter((item) => item.classId === id)[0];
  });

  const totalSpend = totalEnrolledClasses?.reduce((total, item) => {
    return total + item?.price;
  }, 0);

  if (enrolledClassesDataLoading || authLoading || classesLoading) {
    return <LoadingSpinner />;
  }

  if (enrolledClassesDataError || isEnrolledClassesError || isClassesError) {
    return (
      <p>
        something went wrong $
        {enrolledClassesDataError.message || classesError.message}
      </p>
    );
  }
  return (
    <>
      <div className="ml-3">
        <Helmet>
          <title>FashionVerse | MyEnrolledClassesPage</title>
        </Helmet>
        <div className="text-center">
          <SectionHeading
            subHeading={`how many`}
            heading={`classes enrolled`}
          />
        </div>
        <h2 className="font-bold">
          {totalEnrolledClasses?.length} classes enrolled
        </h2>
        <h2 className="font-bold">${totalSpend} dollars spend</h2>
        <div className="overflow-x-auto">
          <table className="table">
        
            <thead className="capitalize">
              <tr>
                <th>#</th>
                <th>image</th>
                <th>name</th>
                <th>instructor</th>
                <th>instructor email</th>
                <th>price</th>

                <th>action</th>
              </tr>
            </thead>
            <tbody>
         
              {totalEnrolledClasses?.map((item, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="w-12 h-12 mask mask-squircle">
                        <img src={item?.classImage} alt="class cover photo" />
                      </div>
                    </div>
                  </td>

                  <td>{item?.className}</td>
                  <td>{item?.instructorName}</td>
                  <td>{item?.instructorEmail}</td>
                  <td>$ {item?.price}</td>
                  <td>
                    <button
                      onClick={() => {
                        setModalOpen(true);
                        setReviewId(item._id);
                      }}
                      className="btn-info btn-xs btn"
                    >
                      review
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
     
      <Modal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        bgColor="bg-stone-900"
      >
        <ClassReviewForm reviewId={reviewId} />
      </Modal>
    </>
  );
};

export default StudentEnrolledClassesPage;
*/
