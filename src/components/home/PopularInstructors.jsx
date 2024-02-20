import { Link } from "react-router-dom";
import SectionHeading from "../ui/SectionHeading";

const PopularInstructors = () => {
  return (
    <div className="py-8">
      <div className="mx-auto max-w-6xl p-2">
        {/* HEADING */}
        <SectionHeading
          subHeading={`stay with`}
          heading={`popular instructors`}
        />

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* POPULAR INSTRUCTOR CARD */}
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="card relative rounded-md border shadow-md hover:shadow-white"
            >
              <figure className="">
                <img
                  className="h-40 w-full object-cover transition duration-500 hover:scale-105"
                  src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="instructor"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  <span>{`Name of Instructor`}</span>
                </h2>

                <p>{`example@gmail.com`} 💌</p>
                <p>{`01711111111`} ☎</p>

                <div className="">
                  <Link to={`#`}>
                    <button className="btn-secondary btn-outline btn-block btn-sm btn">
                      Courses &rarr;
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
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
