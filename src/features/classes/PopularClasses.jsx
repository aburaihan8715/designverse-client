import useClassesData from "../../hooks/useClassesData";
import LoadingSpinner from "../../ui/LoadingSpinner";
import SectionHeading from "../../ui/SectionHeading";
import PopularClassesCard from "./PopularClassesCard";

const PopularClasses = () => {
  const { classesData, classesLoading, classesError, isClassesError } = useClassesData();

  const sortedClasses = classesData?.sort((a, b) => b.studentEnrolled - a.studentEnrolled);
  const popularThreeClasses = sortedClasses?.slice(0, 4);
  // console.log(popularThreeClasses);

  if (classesLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (isClassesError) {
    return <p>something went wrong {classesError}</p>;
  }
  return (
    <section className="bg-gradient-to-r from-violet-200 to-fuchsia-200 py-10">
      <div className="sm:max-w-6xl mx-auto px-2">
        <SectionHeading subHeading={`connect with`} heading={`popular classes`}></SectionHeading>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* FIXME: */}
          {popularThreeClasses?.map((item) => (
            <PopularClassesCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularClasses;
