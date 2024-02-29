import { Link } from "react-router-dom";
import SectionHeading from "../../components/ui/SectionHeading";

const AllInstructorsPage = () => {
  return (
    <div className="mx-auto max-w-6xl py-8">
      <SectionHeading heading={`All Instructors`} subHeading={`stay with`} />

      <div className="overflow-x-auto">
        <table className="table">
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
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map(
              (item) => (
                <tr key={item}>
                  <th>{1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="instructor"
                          />
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>{`Name of Instructor`}</td>

                  <td>{`example@gmail.com`}</td>
                  <td>{`Name of Course`}</td>

                  <th>
                    <Link to={`#}`}>
                      <button className="btn-secondary btn-sm btn">
                        Courses
                      </button>
                    </Link>
                  </th>
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllInstructorsPage;

/*
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
    <div className="max-w-6xl py-8 mx-auto">
      <Helmet>
        <title>FashionVerse | InstructorsPage</title>
      </Helmet>
      <div className="">
        <div>
          <SectionHeading heading={`Instructors`} subHeading={`stay with`} />
        </div>
        <div className="overflow-x-auto">
          <table className="table">
        
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
         
              {unique?.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="w-12 h-12 mask mask-squircle">
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
*/
