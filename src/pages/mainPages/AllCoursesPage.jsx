import SectionHeading from "../../components/ui/SectionHeading";

const AllCoursesPage = () => {
  return (
    <div className="mx-auto max-w-6xl px-2 py-8">
      <div>
        <SectionHeading heading={`All Courses`} subHeading={`collect`} />
      </div>
      <div>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* CLASS CARD */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
            <div
              key={item}
              className="card relative rounded-md border shadow-md hover:shadow-white"
            >
              <figure className="">
                <img
                  className="h-40 w-full object-cover transition duration-500 hover:scale-105"
                  src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Shoes"
                />
              </figure>

              <div className="badge badge-success absolute right-5 top-5">
                <strong className="text-slate-50">Price: ${`10`}</strong>
              </div>
              <div className="card-body relative">
                <div className="badge badge-secondary badge-lg absolute left-1/2 top-0 h-10 -translate-x-1/2 -translate-y-1/2 rounded">
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

                <div className="card-actions justify-end">
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
