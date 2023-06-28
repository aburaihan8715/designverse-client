import Container from "../../../components/Container/Container";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import useClassesData from "../../../hooks/useClassesData";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import { Link } from "react-router-dom";

const PopularClasses = () => {
  const [classesData, classesLoading, classesError] = useClassesData();
  const sortedInstructors = classesData?.sort((a, b) => b.students - a.students);
  const popularSixInstructors = sortedInstructors?.slice(0, 6);

  if (classesLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (classesError) {
    return <p>something went wrong {classesError.message}</p>;
  }
  return (
    <div className="py-8">
      <Container>
        <SectionHeading subHeading={`stay with`} heading={`popular instructors`}></SectionHeading>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {popularSixInstructors?.map((item) => (
            <div key={item._id} className="card bg-base-100 shadow-md rounded">
              <figure>
                <img src={item.instructorImage} alt="instructor" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Name: {item.instructorName}</h2>
                <p>Email: {item.instructorEmail}</p>
                <div className="card-actions justify-end">
                  <Link to="/seeClasses">
                    <button className="btn btn-sm btn-secondary">See Classes</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PopularClasses;
