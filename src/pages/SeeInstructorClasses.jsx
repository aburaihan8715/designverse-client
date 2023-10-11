import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import LoadingSpinner from "../ui/LoadingSpinner";
import SectionHeading from "../ui/SectionHeading";
import useRole from "../hooks/useRole";
import useAuth from "../hooks/useAuth";
import useCartData from "../hooks/useCartData";
import Swal from "sweetalert2";
import axios from "axios";
// import { useQuery } from "react-query";

const SeeInstructorClasses = () => {
  const [seeInstructorClassData, setInstructorClassData] = useState([]);
  const [seeInstructorClassDataLoading, setSeeInstructorClassDataLoading] =
    useState(true);
  const [seeInstructorClassDataError, setSeeInstructorClassDataError] =
    useState("");
  const { email } = useParams();

  const { roleData } = useRole();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const { refetch } = useCartData(true);

  const addToCartHandler = (item) => {
    const addToCartData = {
      selectedClassId: item._id,
      classImage: item.classImage,
      className: item.className,
      instructorName: item.user.userName,
      price: item.price,
      email: user?.email,
    };
    // console.log(item);

    if (!user) {
      Swal.fire({
        title: "Please login first!",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          // navigate to the login page
          navigate("/login", { state: { from: location } });
        }
      });
    } else if (roleData?.role !== "student") {
      Swal.fire(`${roleData?.role} are not allow to take this course!!`);
      return;
    } else {
      axios
        .post("https://fashion-verse-server.vercel.app/cart", addToCartData)
        .then((data) => {
          if (data.data.acknowledged) {
            refetch();
            Swal.fire({
              position: "center",
              title: "Class has been added to cart!",
              showConfirmButton: false,
              timer: 1500,
            });
          }

          if (data.data.alreadyAdded) {
            Swal.fire("Already added the class!!");
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  // console.log(seeInstructorClassData);

  // const {
  //   isLoading: seeInstructorClassDataLoading,
  //   data: seeInstructorClassData = [],
  //   error: seeInstructorClassDataError,
  //   isError: isSeeInstructorClassError,
  // } = useQuery({
  //   queryKey: ["classes", email],
  //   queryFn: async () => {
  //     const res = await fetch(`https://fashion-verse-server.vercel.app/classes/${email}`);
  //     return res.data;
  //   },
  // });
  // console.log(seeInstructorClassData);

  useEffect(() => {
    const getInstructorClassesByEmail = async () => {
      setSeeInstructorClassDataLoading(true);
      try {
        const res = await fetch(
          `https://fashion-verse-server.vercel.app/classes?email=${email}`,
        );
        const data = await res.json();
        setSeeInstructorClassDataLoading(false);
        setInstructorClassData(data);
      } catch (error) {
        setSeeInstructorClassDataLoading(false);
        setSeeInstructorClassDataError(error.message);
        console.log(error.message);
      }
    };
    getInstructorClassesByEmail();
  }, [email]);

  if (seeInstructorClassDataLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (seeInstructorClassDataError) {
    return (
      <p className="mt-10 text-center text-red-400">
        something went wrong ${seeInstructorClassDataError}
      </p>
    );
  }
  return (
    <div className="py-10">
      <div className="mb-10">
        <SectionHeading
          subHeading={`glance over`}
          heading={`The Instructor Classes`}
        />
      </div>

      <ul className="mx-auto flex max-w-5xl flex-col gap-10">
        {seeInstructorClassData?.map((item) => (
          <li
            data-aos="zoom-in"
            className="relative rounded shadow-xl"
            key={item._id}
          >
            <div className="gap-10 sm:flex">
              <figure className="flex-1 p-5">
                <img className="rounded" src={item?.classImage} alt="Movie" />
              </figure>

              <div className="flex flex-1 flex-col justify-between p-5">
                <div className="flex flex-col gap-5">
                  <h2 className="card-title">{item?.className}!</h2>
                  <p>Seats : {item?.seats}</p>
                  <p>Enroll : {item.studentEnrolled}</p>
                  <p>Price : {item.price}</p>
                  <p>Rating : {item.rating}</p>
                </div>

                <div className="text-end">
                  <button
                    onClick={() => addToCartHandler(item)}
                    className="btn-secondary btn-sm btn"
                    disabled={!item.seats}
                  >
                    select now
                  </button>
                </div>
              </div>
            </div>

            {!item.seats && (
              <div className="absolute left-0 top-0 h-full w-full rounded bg-red-400 opacity-50"></div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SeeInstructorClasses;
