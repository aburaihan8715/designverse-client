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
  const { classesData, classesLoading, classesError, isClassesError } =
    useClassesData();

  const {
    isLoading: enrolledClassesDataLoading,
    data: enrolledClassesData,
    error: enrolledClassesDataError,
    isError: isEnrolledClassesError,
  } = useQuery({
    queryKey: ["enrolledClasses", user?.email],
    enabled: !authLoading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user?.email}`);
      return res.data;
    },
  });

  const enrolledClassesList = enrolledClassesData?.flat();
  // console.log(enrolledClassesList);
  const enrolledClassesIds = enrolledClassesList?.map((item) => {
    return item.selectedIClassesIds;
  });

  const enrolledIdsList = enrolledClassesIds?.flat();
  const totalEnrolledClasses = enrolledIdsList?.map((id) => {
    return classesData.filter((item) => item.classId === id)[0];
  });

  const totalSpend = totalEnrolledClasses?.reduce((total, item) => {
    return total + item?.price;
  }, 0);
  // console.log(totalSpend);
  // console.log(totalEnrolledClasses);

  if (enrolledClassesDataLoading || authLoading || classesLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (enrolledClassesDataError || isEnrolledClassesError || isClassesError) {
    return (
      <p>
        something went wrong $
        {enrolledClassesDataError.message || classesError.message}
      </p>
    );
  }
  return (
    <div className="ml-3">
      <Helmet>
        <title>FashionVerse | MyEnrolledClassesPage</title>
      </Helmet>
      <div>
        <SectionHeading
          subHeading={`how many`}
          heading={`classes enrolled`}
        ></SectionHeading>
      </div>
      <h2 className="font-bold">
        {totalEnrolledClasses?.length} classes enrolled
      </h2>
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

              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {totalEnrolledClasses?.map((item, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={item?.classImage} alt="class cover photo" />
                    </div>
                  </div>
                </td>

                <td>{item?.className}</td>
                <td>{item?.instructorName}</td>
                <td>{item?.instructorEmail}</td>
                <td>$ {item?.price}</td>
                <td>
                  <button className="btn-info btn-xs btn">review</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentEnrolledClassesPage;
