import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import LoadingSpinner from "../ui/LoadingSpinner";
import SectionHeading from "../ui/SectionHeading";
import useRole from "../hooks/useRole";
import useAuth from "../hooks/useAuth";
import useCartData from "../hooks/useCartData";
import Swal from "sweetalert2";
import ErrorMessage from "../ui/ErrorMessage";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { v4 as uuidv4 } from "uuid";
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
  const { axiosSecure } = useAxiosSecure();

  const approvedClasses = seeInstructorClassData?.filter(
    (item) => item.status === "approved",
  );
  // console.log(approvedClasses);

  const addToCartHandler = (item) => {
    const addToCartData = {
      cartId: uuidv4(),
      selectedClassId: item.classId,
      classImage: item.classImage,
      className: item.className,
      instructorName: item.instructorName,
      instructorEmail: item.instructorEmail,
      price: item.price,
      offerPercent: item.offerPercent,
      userEmail: user?.email,
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
      axiosSecure
        .post("/cart", addToCartData)
        .then((data) => {
          refetch();
          if (data.data.acknowledged) {
            Swal.fire({
              position: "center",
              icon: "success",
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
  //     const res = await fetch(`http://localhost:5000/classes/${email}`);
  //     return res.data;
  //   },
  // });
  // console.log(seeInstructorClassData);

  useEffect(() => {
    const getInstructorClassesByEmail = async () => {
      setSeeInstructorClassDataLoading(true);
      try {
        const res = await axiosSecure.get(`/classes?email=${email}`);
        const data = res.data;
        setSeeInstructorClassDataLoading(false);
        setInstructorClassData(data);
      } catch (error) {
        setSeeInstructorClassDataLoading(false);
        setSeeInstructorClassDataError(error.message);
        console.log(error.message);
      }
    };
    getInstructorClassesByEmail();
  }, [email, axiosSecure]);

  if (seeInstructorClassDataLoading) {
    return <LoadingSpinner />;
  }

  if (seeInstructorClassDataError)
    return (
      <ErrorMessage>
        something went wrong ${seeInstructorClassDataError}
      </ErrorMessage>
    );

  return (
    <div className="py-10">
      <div className="mb-10">
        <SectionHeading
          subHeading={`glance over`}
          heading={`The Instructor Classes`}
        />
      </div>

      <ul className="mx-auto flex max-w-5xl flex-col gap-10">
        {approvedClasses &&
          approvedClasses?.map((item) => (
            <li
              data-aos="zoom-in"
              className="relative rounded-md border hover:shadow-md hover:shadow-white"
              key={item._id}
            >
              <div className="gap-10 sm:flex">
                <figure className="flex  p-5">
                  <img className="rounded" src={item?.classImage} alt="Movie" />
                </figure>

                <div className="flex flex-1 flex-col justify-between p-5">
                  <div className="flex flex-col gap-5">
                    <h2 className="card-title">{item?.className} 📖</h2>
                    <p>Seats : {item?.seats} 🪑</p>
                    <p>Enrolled : {item.studentEnrolled} 👩</p>
                    <p>Price : ${item.price} 💰</p>

                    <p>Offer : ${item.offerPercent || 0} 💪</p>
                    <p>Instructor : {item.instructorName} 👨‍🏫</p>
                    <p>Email : {item.instructorEmail} ✉</p>
                    <p>Phone : {item.phoneNumber} ☎</p>
                    <p>Rating : {item.rating} ⭐⭐⭐⭐⭐</p>
                  </div>

                  <div className="mt-2 text-end">
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

        {/* if the instructor no classes */}
        {approvedClasses.length < 1 && (
          <ErrorMessage>No class added yet</ErrorMessage>
        )}
      </ul>
    </div>
  );
};

export default SeeInstructorClasses;
