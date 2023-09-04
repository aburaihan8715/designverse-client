// import { Helmet } from "react-helmet-async";
// import { useQuery } from "react-query";
// import useAuth from "../hooks/useAuth";
// import useAxiosSecure from "../hooks/useAxiosSecure";
// import LoadingSpinner from "../ui/LoadingSpinner";
// import SectionHeading from "../ui/SectionHeading";

// const StudentEnrolledClassesPage = () => {
//   const { user, authLoading } = useAuth();
//   const [axiosSecure] = useAxiosSecure();
//   const {
//     isLoading: enrolledClassesDataLoading,
//     error: enrolledClassesDataError,
//     data: enrolledClassesData,
//   } = useQuery({
//     queryKey: ["enrolledClasses", user?.email],
//     enabled: !authLoading,
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/payments?email=${user?.email}`);
//       return res.data;
//     },
//   });

//   console.log(enrolledClassesData);

//   if (enrolledClassesDataLoading || authLoading) {
//     return <LoadingSpinner></LoadingSpinner>;
//   }

//   if (enrolledClassesDataError) {
//     return <p>something went wrong ${enrolledClassesDataError.message}</p>;
//   }

//   return (
//     <div className="ml-3">
//       <Helmet>
//         <title>FashionVerse | MyEnrolledClassesPage</title>
//       </Helmet>
//       <div>
//         <SectionHeading subHeading={`how many`} heading={`classes enrolled`}></SectionHeading>
//       </div>
//       <h2>Total data :{0}</h2>
//       <div className="overflow-x-auto">
//         <table className="table">
//           {/* head */}
//           <thead className="capitalize">
//             <tr>
//               <th>#</th>
//               <th>image</th>
//               <th>name</th>
//               <th>instructor</th>
//               <th>instructor email</th>
//               <th>price</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* row 1 */}
//             {[...Array(5).keys()].map((index) => (
//               <tr key={index}>
//                 <th>{index + 1}</th>
//                 <td>
//                   <div className="avatar">
//                     <div className="mask mask-squircle w-12 h-12">
//                       <img src="http://placehold.it/40x40" alt="class cover photo" />
//                     </div>
//                   </div>
//                 </td>

//                 <td>Sustainable Fashion Design and Ethical Practices</td>
//                 <td>Jonson Roy</td>
//                 <td>jonson@gmail.com</td>
//                 <td>$ 12</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default StudentEnrolledClassesPage;

const StudentEnrolledClassesPage = () => {
  return (
    <div>
      <div>StudentEnrolledClassesPage</div>
      <div>coming soon.....</div>
    </div>
  );
};

export default StudentEnrolledClassesPage;
