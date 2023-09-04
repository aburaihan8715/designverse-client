import SectionHeading from "../../ui/SectionHeading";
import useClassesData from "../../hooks/useClassesData";
import LoadingSpinner from "../../ui/LoadingSpinner";
import PopularInstructorCard from "./PopularInstructorCard";

const PopularInstructors = () => {
  const { classesData, classesLoading, classesError } = useClassesData();
  // const sortedInstructors = classesData?.sort((a, b) => b.students - a.students);
  // const popularSixInstructors = sortedInstructors?.slice(0, 6);

  const sortedInstructors = classesData?.sort((a, b) => b.class.enroll_student - a.class.enroll_student);
  const popularSixInstructors = sortedInstructors?.slice(0, 8);

  if (classesLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (classesError) {
    return <p>something went wrong {classesError.message}</p>;
  }
  return (
    <div className="py-8">
      <div className="max-w-6xl mx-auto p-2">
        <SectionHeading subHeading={`stay with`} heading={`popular instructors`}></SectionHeading>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {popularSixInstructors?.map((item) => (
            <PopularInstructorCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularInstructors;
