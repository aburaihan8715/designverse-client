import { Helmet } from "react-helmet-async";
import useClassesData from "../hooks/useClassesData";
import LoadingSpinner from "../ui/LoadingSpinner";
import ClassCard from "../features/classes/ClassCard";
import SectionHeading from "../ui/SectionHeading";

const ClassesPage = () => {
  const { classesData, classesLoading, classesError, isClassesError } =
    useClassesData();
  // console.log(classesData);

  if (classesLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (isClassesError) {
    return <p>something went wrong ${classesError}</p>;
  }
  return (
    <div className="mx-auto max-w-6xl px-2 py-8">
      <Helmet>
        <title>FashionVerse | ClassesPage</title>
      </Helmet>

      <div>
        <SectionHeading heading={`your classes`} subHeading={`collect`} />
      </div>
      <div>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {classesData?.map((item) => (
            <ClassCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassesPage;
