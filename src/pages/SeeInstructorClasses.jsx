// import { Helmet } from "react-helmet-async";

// const SeeInstructorClasses = () => {
//   return (
//     <div className="py-8">
//       <Helmet>
//         <title>FashionVerse | MyClassesPage</title>
//       </Helmet>

//       <div>
//         <div className="text-center text-2xl">coming soon..........</div>
//         {/* <div className="ml-3">
//           <Helmet>
//             <title>FashionVerse | MyClassesPage</title>
//           </Helmet>
//           <div>
//             <SectionHeading subHeading={`how many`} heading={`classes`}></SectionHeading>
//           </div>
//           <p className="text-xl">Total classes :{myClassesData?.length}</p>
//           <div className="overflow-x-auto">
//             <table className="table border border-success">

//               <thead className="capitalize">
//                 <tr className="border border-success">
//                   <th>#</th>
//                   <th>image</th>
//                   <th>name</th>
//                   <th>seats</th>
//                   <th>price</th>

//                   <th>enrolled</th>
//                 </tr>
//               </thead>
//               <tbody>

//                 {myClassesData?.map((item, index) => (
//                   <tr key={item._id}>
//                     <th>{index + 1}</th>
//                     <td>
//                       <div className="avatar">
//                         <div className="mask mask-squircle w-12 h-12">
//                           <img src={item?.classImage} alt="class cover photo" />
//                         </div>
//                       </div>
//                     </td>

//                     <td>{item?.className}</td>
//                     <td>{item?.seats}</td>
//                     <td>$ {item?.price}</td>

//                     <td>{item?.enrolled ? item.enrolled : "not enrolled yet"}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default SeeInstructorClasses;

import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import LoadingSpinner from "../ui/LoadingSpinner";
import SectionHeading from "../ui/SectionHeading";

const SeeInstructorClasses = () => {
  const [seeInstructorClassData, setInstructorClassData] = useState({});
  const [seeInstructorClassDataLoading, setSeeInstructorClassDataLoading] = useState(true);
  const [seeInstructorClassDataError, setSeeInstructorClassDataError] = useState("");
  const { id } = useParams();

  // const {
  //   isLoading: isInstructorClassLoading,
  //   data: instructorClassData,
  //   error: instructorClassError,
  //   isError: isInstructorClassError,
  // } = useQuery({
  //   queryKey: ["classes", id],
  //   queryFn: async () => {
  //     const res = await fetch(`http://localhost:5000/classes/${id}`);
  //     return res.data;
  //   },
  // });
  // console.log(instructorClassData);

  useEffect(() => {
    setSeeInstructorClassDataLoading(true);
    fetch(`http://localhost:5000/classes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSeeInstructorClassDataLoading(false);
        setInstructorClassData(data);
        console.log(data);
      })
      .catch((error) => {
        setSeeInstructorClassDataLoading(false);
        setSeeInstructorClassDataError(error.message);
        console.log(error.message);
      });
  }, [id]);

  if (seeInstructorClassDataLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (seeInstructorClassDataError) {
    return <p className="text-red-400 text-center mt-10">something went wrong ${seeInstructorClassDataError}</p>;
  }
  return (
    <div className="py-10">
      <div className="mb-10">
        <SectionHeading subHeading={`glance over`} heading={`Your Class`} />
      </div>

      <div className="sm:flex justify-center gap-10">
        <figure className="border p-5">
          <img className="rounded" src={seeInstructorClassData?.class.image} alt="Movie" />
        </figure>
        <div className="border p-5 flex flex-col justify-between">
          <div className="flex flex-col gap-5">
            <h2 className="card-title">{seeInstructorClassData?.class.name}!</h2>
            <p>Seats : {seeInstructorClassData?.class.available_seats}</p>
            <p>Enroll : {seeInstructorClassData?.class.enroll_student}</p>
            <p>Price : {seeInstructorClassData?.class.price}</p>
          </div>

          <div className="text-end">
            <button className="btn btn-sm btn-secondary">select class</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeInstructorClasses;
