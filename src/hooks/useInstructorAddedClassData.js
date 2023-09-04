// import { useQuery } from "react-query";
// import useAuth from "./useAuth";
// import useAxiosSecure from "./useAxiosSecure";

// const useInstructorAddedClassData = () => {
//   const { user, authLoading } = useAuth();
//   const {axiosSecure }= useAxiosSecure();
//   const {
//     isLoading: instructorAddedClassDataLoading,
//     error: instructorAddedClassDataError,
//     isError: IsInstructorAddedClassDataError,
//     data: instructorAddedClassData,
//   } = useQuery({
//     queryKey: ["classes", user?.email],
//     enabled: !authLoading,
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/classes?email=${user?.email}`);
//       return res.data;
//     },
//   });

//   return { instructorAddedClassDataLoading, instructorAddedClassDataError, IsInstructorAddedClassDataError, instructorAddedClassData };
// };

// export default useInstructorAddedClassData;
