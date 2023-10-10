import useClassesData from "../../hooks/useClassesData";
import LoadingSpinner from "../../ui/LoadingSpinner";
import SectionHeading from "../../ui/SectionHeading";
import PopularInstructorCard from "./PopularInstructorCard";

const PopularInstructors = () => {
  const { classesData, classesLoading, classesError } = useClassesData();
  const sortedInstructor = classesData?.sort(
    (a, b) => b.studentEnrolled - a.studentEnrolled,
  );
  const popularFourInstructor = sortedInstructor?.slice(0, 4);
  // console.log(popularFourInstructor);

  if (classesLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (classesError) {
    return <p>something went wrong {classesError.message}</p>;
  }
  return (
    <div className="bg-gradient-to-r from-lime-100 to-pink-200 py-8">
      <div className="mx-auto max-w-6xl p-2">
        <SectionHeading
          subHeading={`stay with`}
          heading={`popular instructors`}
        ></SectionHeading>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* FIXME: */}
          {popularFourInstructor?.map((item) => (
            <PopularInstructorCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularInstructors;
