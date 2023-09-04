import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useClassesData from "../hooks/useClassesData";
import LoadingSpinner from "../ui/LoadingSpinner";

const InstructorsPage = () => {
  const { classesData, classesLoading, classesError, isClassesError } = useClassesData();
  // console.log(classesData);

  if (classesLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (isClassesError) {
    return <p>something went wrong {classesError}</p>;
  }
  return (
    <div className="py-8 max-w-6xl mx-auto">
      <Helmet>
        <title>FashionVerse | InstructorsPage</title>
      </Helmet>
      <div className="">
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
              {classesData?.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.user.image} alt="instructor" />
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>{item.user.name}</td>

                  <td>{item.user.email}</td>
                  <td>{item.class.name}</td>

                  <th>
                    <Link to={`/seeClasses/${item._id}`}>
                      <button className="btn btn-sm btn-secondary">See Classes</button>
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
