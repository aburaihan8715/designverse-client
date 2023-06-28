import Card from "../../components/Card/Card";
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
          {classesData?.map((item) => (
            <Card key={item._id} item={item}></Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ClassesPage;