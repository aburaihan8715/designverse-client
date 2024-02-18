const ClassCard = () => {
  return <div>ClassCard</div>;
};

export default ClassCard;
/*
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
      className="relative border rounded-md shadow-md card hover:shadow-white"
    >
      <figure className="">
        <img
          className="object-cover w-full h-40 transition duration-500 hover:scale-105"
          src={item.classImage}
          alt="Shoes"
        />
      </figure>

      <div className="absolute badge badge-success right-5 top-5">
        <strong className="text-slate-50">Price: ${item.price}</strong>
      </div>
      <div className="relative card-body">
        {item?.offerPercent && (
          <div className="absolute top-0 h-10 -translate-x-1/2 -translate-y-1/2 rounded badge badge-secondary badge-lg left-1/2">
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

        <div className="justify-end card-actions">
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
        <div className="absolute top-0 left-0 w-full h-full bg-red-400 rounded opacity-50"></div>
      )}
    </div>
  );
};

export default ClassCard;
*/
