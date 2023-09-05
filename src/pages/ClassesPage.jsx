import { Helmet } from "react-helmet-async";
import useClassesData from "../hooks/useClassesData";
import LoadingSpinner from "../ui/LoadingSpinner";
import ClassCard from "../features/classes/ClassCard";
import SectionHeading from "../ui/SectionHeading";

const ClassesPage = () => {
  const { classesData, classesLoading, classesError, isClassesError } = useClassesData();
  // console.log(classesData);

  if (classesLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (isClassesError) {
    return <p>something went wrong ${classesError}</p>;
  }
  return (
    <div className="py-8 max-w-6xl mx-auto px-2">
      <Helmet>
        <title>FashionVerse | ClassesPage</title>
      </Helmet>

      <div>
        <SectionHeading heading={`your classes`} subHeading={`collect`} />
      </div>
      <div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {classesData?.map((item) => (
            <ClassCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassesPage;
