import SectionHeading from "../ui/SectionHeading";

const PopularCourses = () => {
  return (
    <section className="py-10">
      <div className="px-2 mx-auto sm:max-w-6xl">
        {/* HEADING */}
        <SectionHeading
          subHeading={`connect with`}
          heading={`popular courses`}
        />

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* CLASS CARD */}
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="relative border rounded-md shadow-md card hover:shadow-white"
            >
              <figure className="">
                <img
                  className="object-cover w-full h-40 transition duration-500 hover:scale-105"
                  src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Shoes"
                />
              </figure>

              <div className="absolute badge badge-success right-5 top-5">
                <strong className="text-slate-50">Price: ${`10`}</strong>
              </div>
              <div className="relative card-body">
                <div className="absolute top-0 h-10 -translate-x-1/2 -translate-y-1/2 rounded badge badge-secondary badge-lg left-1/2">
                  <strong className="text-slate-50">Offer {10}% 💪</strong>
                </div>

                <h2 className="card-title">{`Name of course`}</h2>
                <p> Instr: {`Joy kalam`} 👨‍🏫</p>
                <p> Enrolled: {20} 👫</p>
                <div className="text-2xl">
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                </div>

                <div className="justify-end card-actions">
                  <button className="btn-secondary btn-outline btn-block btn-sm btn">
                    Enroll Now &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
/*
import useClassesData from "../../hooks/useClassesData";
import LoadingSpinner from "../../ui/LoadingSpinner";
import SectionHeading from "../../ui/SectionHeading";
import PopularClassesCard from "./PopularClassesCard";

const PopularClasses = () => {
  const { classesData, classesLoading, classesError, isClassesError } =
    useClassesData();
  // classes are approved by the admin
  const approvedClasses = classesData?.filter(
    (item) => item.status === "approved",
  );
  // sorted classes based on enrolled student
  const sortedClassesBasedOnEnrolledStudent = approvedClasses?.sort(
    (a, b) => b.studentEnrolled - a.studentEnrolled,
  );

  // display some classes on ui
  const somePopularClasses = sortedClassesBasedOnEnrolledStudent?.slice(0, 8);
  // console.log(popularThreeClasses);

  if (classesLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (isClassesError) {
    return <p>something went wrong {classesError}</p>;
  }
  return (
    <section className="py-10">
      <div className="px-2 mx-auto sm:max-w-6xl">
        <SectionHeading
          subHeading={`connect with`}
          heading={`popular classes`}
        ></SectionHeading>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
       
          {somePopularClasses?.map((item) => (
            <PopularClassesCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularClasses;
*/
