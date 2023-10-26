import useClassesData from "../../hooks/useClassesData";
import LoadingSpinner from "../../ui/LoadingSpinner";
import SectionHeading from "../../ui/SectionHeading";
import PopularInstructorCard from "./PopularInstructorCard";

const PopularInstructors = () => {
  const { classesData, classesLoading, classesError } = useClassesData();
  // classes are approved by the admin
  const approvedClasses = classesData?.filter(
    (item) => item.status === "approved",
  );
  // sorted classes based on enrolled student
  const sortedInstructorBasedOnEnrolledStudent = approvedClasses?.sort(
    (a, b) => b.studentEnrolled - a.studentEnrolled,
  );

  // display some classes on ui
  const somePopularInstructor = sortedInstructorBasedOnEnrolledStudent?.slice(
    0,
    5,
  );

  if (classesLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (classesError) {
    return <p>something went wrong {classesError.message}</p>;
  }
  return (
    <div className="py-8">
      <div className="mx-auto max-w-6xl p-2">
        <SectionHeading
          subHeading={`stay with`}
          heading={`popular instructors`}
        ></SectionHeading>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* FIXME: */}
          {somePopularInstructor?.map((item) => (
            <PopularInstructorCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularInstructors;
