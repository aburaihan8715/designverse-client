import { Helmet } from "react-helmet-async";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import useAuth from "../../../hooks/useAuth";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import useMyClassesData from "../../../hooks/useMyClassesData";

const MyClassesPage = () => {
  const { authLoading } = useAuth();
  const { myClassesDataLoading, myClassesDataError, myClassesData } = useMyClassesData();

  if (myClassesDataLoading || authLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (myClassesDataError) {
    return <p>something went wrong ${myClassesDataError.message}</p>;
  }

  return (
    <div className="ml-3">
      <Helmet>
        <title>FashionVerse | MyClassesPage</title>
      </Helmet>
      <div>
        <SectionHeading subHeading={`how many`} heading={`my classes`}></SectionHeading>
      </div>
      <p className="text-xl">Total classes :{myClassesData?.length}</p>
      <div className="overflow-x-auto">
        <table className="table border border-success">
          {/* head */}
          <thead className="capitalize">
            <tr className="border border-success">
              <th>#</th>
              <th>image</th>
              <th>name</th>
              <th>seats</th>
              <th>price</th>
              <th>status</th>
              <th>enrolled</th>
              <th>feedback</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myClassesData?.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item?.classImage} alt="class cover photo" />
                    </div>
                  </div>
                </td>

                <td>{item?.className}</td>
                <td>{item?.seats}</td>
                <td>$ {item?.price}</td>
                <td>{item?.status}</td>
                <td>{item?.enrolled ? item.enrolled : "not enrolled yet"}</td>
                <td>{item?.feedback ? item.feedback : "no feedback"}</td>

                <th className="space-y-2">
                  <button className="btn btn-info btn-xs">update</button>
                  <button className="btn btn-error btn-xs">delete</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClassesPage;
