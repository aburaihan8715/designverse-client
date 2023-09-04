import { Helmet } from "react-helmet-async";
import useAuth from "../hooks/useAuth";

import SectionHeading from "../ui/SectionHeading";
import { useState } from "react";
import { useEffect } from "react";
import LoadingSpinner from "../ui/LoadingSpinner";

const InstructorMyClassesPage = () => {
  const [myClassData, setMyClassData] = useState([]);
  const [myClassLoading, setMyClassLoading] = useState(false);
  const [myClassError, setMyClassError] = useState("");

  const { user, authLoading } = useAuth();
  // console.log(user);

  useEffect(() => {
    setMyClassLoading(true);
    fetch(`https://fashion-verse-server.vercel.app/classes?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyClassLoading(false);
        setMyClassData(data);
      })
      .catch((error) => {
        setMyClassLoading(false);
        setMyClassError(error.message);
        console.log(error.message);
      });
  }, [user?.email]);

  if (myClassLoading || authLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (myClassError) {
    return <p>something went wrong ${myClassError.message}</p>;
  }

  return (
    <div className="px-5">
      <Helmet>
        <title>FashionVerse | MyClassesPage</title>
      </Helmet>
      <div>
        <SectionHeading subHeading={`how many`} heading={`my classes`}></SectionHeading>
      </div>
      <p className="text-xl">Total classes :{myClassData?.length}</p>
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
            {myClassData?.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item?.class.image} alt="class cover photo" />
                    </div>
                  </div>
                </td>

                <td>{item?.class.name}</td>
                <td>{item?.class.available_seats}</td>
                <td>$ {item?.class.price}</td>
                <td>{item?.class.status}</td>
                <td>{item?.class.enroll_student ? item.class.enroll_student : "not enrolled yet"}</td>
                <td>{item?.class.feedback ? item.class.feedback : "no feedback"}</td>

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

export default InstructorMyClassesPage;
