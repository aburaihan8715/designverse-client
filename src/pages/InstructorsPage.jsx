import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useClassesData from "../hooks/useClassesData";
import LoadingSpinner from "../ui/LoadingSpinner";
import SectionHeading from "../ui/SectionHeading";
import { removeDuplicateObjects } from "../utils/utilities";

const InstructorsPage = () => {
  const { classesData, classesLoading, classesError, isClassesError } =
    useClassesData();
  // console.log(classesData);

  const unique = removeDuplicateObjects(classesData, "instructorEmail");

  if (classesLoading) {
    return <LoadingSpinner />;
  }
  if (isClassesError) {
    return <p>something went wrong {classesError}</p>;
  }
  return (
    <div className="mx-auto max-w-6xl py-8">
      <Helmet>
        <title>FashionVerse | InstructorsPage</title>
      </Helmet>
      <div className="">
        <div>
          <SectionHeading heading={`Instructors`} subHeading={`stay with`} />
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Class</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row */}
              {unique?.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={item.instructorImage} alt="instructor" />
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>{item.instructorName}</td>

                  <td>{item.instructorEmail}</td>
                  <td>{item.className}</td>

                  <th>
                    <Link to={`/seeClasses/${item.instructorEmail}`}>
                      <button className="btn-secondary btn-sm btn">
                        See Classes
                      </button>
                    </Link>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InstructorsPage;
