import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import useClassesData from "../../hooks/useClassesData";
import { Helmet } from "react-helmet-async";

const InstructorsPage = () => {
  const [classesData, classesLoading, classesError] = useClassesData();
  // console.log(classesData);

  if (classesLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (classesError) {
    return <p>something went wrong {classesError.message}</p>;
  }
  return (
    <div className="py-8">
      <Helmet>
        <title>FashionVerse | InstructorsPage</title>
      </Helmet>
      <Container>
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
                          <img src={item.instructorImage} alt="instructor" />
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>{item.instructorName}</td>

                  <td>{item.instructorEmail}</td>
                  <td>{item.className}</td>

                  <th>
                    <Link to="/seeClasses">
                      <button className="btn btn-sm btn-secondary">See Classes</button>
                    </Link>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};

export default InstructorsPage;
