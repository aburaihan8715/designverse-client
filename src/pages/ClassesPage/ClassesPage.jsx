import { Helmet } from "react-helmet-async";
import Card from "../../components/Card/Card";
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
      <Helmet>
        <title>FashionVerse | ClassesPage</title>
      </Helmet>
      <div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {classesData?.map((item) => (
            <Card key={item._id} item={item}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassesPage;
