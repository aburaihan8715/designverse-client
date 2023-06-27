import Container from "../../components/Container/Container";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import useClassesData from "../../hooks/useClassesData";

const ClassesPage = () => {
  const [classesData, classesLoading, classesError] = useClassesData();
  // console.log(classesData);

  if (classesLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (classesError) {
    return <p>something went wrong ${classesError.message}</p>;
  }
  return (
    <div className="py-8">
      <Container>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {classesData.map((item) => (
            <div key={item._id} className="card card-compact bg-base-100 shadow-md rounded relative">
              <figure>
                <img src={item.classImage} alt="Shoes" />
              </figure>
              <div className="badge badge-accent absolute right-5 top-5">
                <strong className="text-gray-600">Price: ${item.price}</strong>
              </div>
              <div className="card-body">
                <h2 className="card-title">{item.className}</h2>
                <p>Available seats: {item.seats}</p>
                <p>Instructor: {item.instructorName}</p>
                <div className="card-actions justify-end">
                  <button disabled={!item.seats} className="btn btn-secondary btn-sm">
                    Select Now
                  </button>
                </div>
              </div>
              {!item.seats && <div className="absolute w-full h-full bg-red-400 top-0 left-0 opacity-50"></div>}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ClassesPage;
