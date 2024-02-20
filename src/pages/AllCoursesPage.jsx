import SectionHeading from "../components/ui/SectionHeading";

const AllCoursesPage = () => {
  return (
    <div className="max-w-6xl px-2 py-8 mx-auto">
      <div>
        <SectionHeading heading={`All Courses`} subHeading={`collect`} />
      </div>
      <div>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* CLASS CARD */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
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
    </div>
  );
};

export default AllCoursesPage;
/*
import { Helmet } from "react-helmet-async";
import useClassesData from "../hooks/useClassesData";
import LoadingSpinner from "../ui/LoadingSpinner";
import ClassCard from "../features/classes/ClassCard";
import SectionHeading from "../ui/SectionHeading";

const ClassesPage = () => {
  const { classesData, classesLoading, classesError, isClassesError } =
    useClassesData();
  // console.log(classesData);

  const approvedClasses = classesData?.filter(
    (item) => item.status === "approved",
  );
  // console.log(approvedClasses);

  if (classesLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (isClassesError) {
    return <p>something went wrong ${classesError}</p>;
  }
  return (
    <div className="max-w-6xl px-2 py-8 mx-auto">
      <Helmet>
        <title>FashionVerse | ClassesPage</title>
      </Helmet>

      <div>
        <SectionHeading heading={`your classes`} subHeading={`collect`} />
      </div>
      <div>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {approvedClasses?.map((item) => (
            <ClassCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassesPage;
*/
