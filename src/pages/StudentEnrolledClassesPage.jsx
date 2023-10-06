import { useQuery } from "react-query";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import LoadingSpinner from "../ui/LoadingSpinner";
import useClassesData from "../hooks/useClassesData";
import { Helmet } from "react-helmet-async";
import SectionHeading from "../ui/SectionHeading";

const StudentEnrolledClassesPage = () => {
  const { user, authLoading } = useAuth();
  const { axiosSecure } = useAxiosSecure();
  const { classesData, classesLoading, classesError, isClassesError } = useClassesData();
  const {
    isLoading: enrolledClassesDataLoading,
    error: enrolledClassesDataError,
    data: enrolledClassesData,
  } = useQuery({
    queryKey: ["enrolledClasses", user?.email],
    enabled: !authLoading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user?.email}`);
      return res.data;
    },
  });

  const enrolledClassesList = enrolledClassesData?.flat();
  const enrolledClassesIds = enrolledClassesList?.map((item) => {
    return item.classItemsIds;
  });

  const enrolledIdsList = enrolledClassesIds?.flat();
  const totalEnrolledClasses = enrolledIdsList?.map((id) => {
    return classesData.filter((item) => item._id === id)[0];
  });

  const totalSpend = totalEnrolledClasses?.reduce((total, item) => {
    return total + item.price;
  }, 0);
  // console.log(totalSpend);
  // console.log(totalEnrolledClasses);

  if (enrolledClassesDataLoading || authLoading || classesLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (enrolledClassesDataError || isClassesError) {
    return <p>something went wrong ${enrolledClassesDataError.message || classesError.message}</p>;
  }
  return (
    <div className="ml-3">
      <Helmet>
        <title>FashionVerse | MyEnrolledClassesPage</title>
      </Helmet>
      <div>
        <SectionHeading subHeading={`how many`} heading={`classes enrolled`}></SectionHeading>
      </div>
      <h2 className="font-bold">{totalEnrolledClasses?.length} classes enrolled</h2>
      <h2 className="font-bold">${totalSpend} dollars spend</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="capitalize">
            <tr>
              <th>#</th>
              <th>image</th>
              <th>name</th>
              <th>instructor</th>
              <th>instructor email</th>
              <th>price</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {totalEnrolledClasses.map((item, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.classImage} alt="class cover photo" />
                    </div>
                  </div>
                </td>

                <td>{item.className}</td>
                <td>{item.user.userName}</td>
                <td>{item.user.userEmail}</td>
                <td>$ {item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentEnrolledClassesPage;
