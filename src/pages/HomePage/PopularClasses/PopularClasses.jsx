import Container from "../../../components/Container/Container";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import useClassesData from "../../../hooks/useClassesData";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";

const PopularClasses = () => {
  const [classesData, classesLoading, classesError] = useClassesData();
  const sortedClasses = classesData.sort((a, b) => b.students - a.students);
  const popularSixClasses = sortedClasses.slice(0, 6);

  if (classesLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (classesError) {
    return <p>something went wrong {classesError.message}</p>;
  }
  return (
    <Container>
      <SectionHeading subHeading={`connect with`} heading={`popular classes`}></SectionHeading>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {popularSixClasses.map((item) => (
          <div key={item._id} className="relative card bg-base-100 shadow-md rounded">
            <figure>
              <img src={item.classImage} alt="Shoes" />
            </figure>
            <div className="badge badge-accent absolute right-5 top-5">
              <strong className="text-gray-600">Price: ${item.price}</strong>
            </div>
            <div className="card-body">
              <h2 className="card-title">{item.className}</h2>
              <p>Seats: {item.seats}</p>
              <p>Instructor: {item.instructorName}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-sm btn-secondary">Select Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default PopularClasses;
