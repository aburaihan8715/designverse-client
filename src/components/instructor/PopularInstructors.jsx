const PopularInstructors = () => {
  return <div>PopularInstructors</div>;
};

export default PopularInstructors;
/*
import useClassesData from "../../hooks/useClassesData";
import LoadingSpinner from "../../ui/LoadingSpinner";
import SectionHeading from "../../ui/SectionHeading";
import { removeDuplicateObjects } from "../../utils/utilities";
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

  // same instructor should not be twice
  const unique = removeDuplicateObjects(
    sortedInstructorBasedOnEnrolledStudent,
    "instructorEmail",
  );

  // display some classes on ui
  const somePopularInstructor = unique?.slice(0, 8);

  if (classesLoading) return <LoadingSpinner />;
  if (classesError) return <p>something went wrong {classesError.message}</p>;
  return (
    <div className="py-8">
      <div className="max-w-6xl p-2 mx-auto">
        <SectionHeading
          subHeading={`stay with`}
          heading={`popular instructors`}
        />

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {somePopularInstructor?.map((item) => (
            <PopularInstructorCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularInstructors;
*/
