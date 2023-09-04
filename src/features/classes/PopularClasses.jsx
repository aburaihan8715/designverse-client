import useClassesData from "../../hooks/useClassesData";
import LoadingSpinner from "../../ui/LoadingSpinner";
import SectionHeading from "../../ui/SectionHeading";
import PopularClassesCard from "./PopularClassesCard";

const PopularClasses = () => {
  const { classesData, classesLoading, classesError, isClassesError } = useClassesData();

  // console.log(classesData);
  const sortedClasses = classesData?.sort((a, b) => b.class.enroll_student - a.class.enroll_student);
  const popularSixClasses = sortedClasses?.slice(0, 8);

  if (classesLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (isClassesError) {
    return <p>something went wrong {classesError}</p>;
  }
  return (
    <div className="sm:max-w-6xl mx-auto px-2 mb-10">
      <SectionHeading subHeading={`connect with`} heading={`popular classes`}></SectionHeading>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {popularSixClasses?.map((item) => (
          <PopularClassesCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
