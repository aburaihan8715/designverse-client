import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useCartData from "../../hooks/useCartData";
import useRole from "../../hooks/useRole";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { v4 as uuidv4 } from "uuid";
import { Rating } from "@smastrom/react-rating";

const ClassCard = ({ item }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { roleData } = useRole();
  const { user } = useAuth();
  const { refetch } = useCartData();
  const { axiosSecure } = useAxiosSecure();

  // rating calculation
  let rating;
  const length = item?.rating.length;
  if (length > 1) {
    rating = Math.round(
      item?.rating.reduce((total, item) => total + item) / length,
    );
  } else if (length === 1) {
    rating = length;
  } else {
    rating = 0;
  }
  // console.log(rating);

  // add to cart
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

    if (!user) {
      Swal.fire({
        title: "Please login first!",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
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

  return (
    <div
      data-aos="zoom-in"
      className="card relative rounded-md border shadow-md hover:shadow-white"
    >
      <figure className="">
        <img
          className="h-40 w-full object-cover transition duration-500 hover:scale-105"
          src={item.classImage}
          alt="Shoes"
        />
      </figure>

      <div className="badge badge-success absolute right-5 top-5">
        <strong className="text-slate-50">Price: ${item.price}</strong>
      </div>
      <div className="card-body relative">
        {item?.offerPercent && (
          <div className="badge badge-secondary badge-lg absolute left-1/2 top-0 h-10 -translate-x-1/2 -translate-y-1/2 rounded">
            <strong className="text-slate-50">
              Offer {item?.offerPercent}% 💪
            </strong>
          </div>
        )}
        <h2 className="card-title">{item.className}</h2>
        <p> Seats: {item.seats} 💺</p>
        <p> Instr: {item.instructorName} 👨‍🏫</p>
        <p> Enrolled: {item?.studentEnrolled || 0} 👫</p>
        <div>
          <Rating
            className=""
            style={{ maxWidth: 120 }}
            value={rating}
            readOnly
          />
        </div>

        <div className="card-actions justify-end">
          <button
            onClick={() => addToCartHandler(item)}
            disabled={!item.seats}
            className="btn-secondary btn-outline btn-block btn-sm btn"
          >
            Select Now 🚀
          </button>
        </div>
      </div>
      {!item.seats && (
        <div className="absolute left-0 top-0 h-full w-full rounded bg-red-400 opacity-50"></div>
      )}
    </div>
  );
};

export default ClassCard;
