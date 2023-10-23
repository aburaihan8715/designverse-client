import axios from "axios";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useCartData from "../../hooks/useCartData";
import useRole from "../../hooks/useRole";

const PopularClassesCard = ({ item }) => {
  const { roleData } = useRole();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const { refetch } = useCartData();

  const addToCartHandler = (item) => {
    const addToCartData = {
      selectedClassId: item._id,
      classImage: item.classImage,
      className: item.className,
      instructorName: item.user.userName,
      price: item.price,
      email: user?.email,
    };
    // console.log(cartData);

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
        .post("http://localhost:5000/cart", addToCartData)
        .then((data) => {
          if (data.data.acknowledged) {
            refetch();
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
      className="card relative rounded shadow-md hover:shadow-white"
    >
      <figure>
        <img
          className="h-40 w-full object-cover transition duration-500 hover:scale-105"
          src={item.classImage}
          alt="Shoes"
        />
      </figure>
      <div className="badge badge-success absolute right-5 top-5">
        <strong className="text-slate-50">Price: ${item.price}</strong>
      </div>
      <div className="card-body">
        <h2 className="card-title">{item.className}</h2>
        <p>Available seats: {item.seats}</p>
        <p>Instructor: {item.user.userName}</p>

        <div className="card-actions justify-end">
          <button
            onClick={() => addToCartHandler(item)}
            disabled={!item.seats}
            className="btn-secondary btn-outline btn-sm btn"
          >
            Select Now
          </button>
        </div>
      </div>
      {!item.seats && (
        <div className="absolute left-0 top-0 h-full w-full rounded bg-red-400 opacity-50"></div>
      )}
    </div>
  );
};

export default PopularClassesCard;
