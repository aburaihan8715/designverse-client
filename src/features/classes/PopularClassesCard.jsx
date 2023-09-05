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
    const cartData = {
      selectedClassId: item._id,
      classImage: item.class.image,
      className: item.class.name,
      instructorName: item.user.name,
      price: item.class.price,
      email: user?.email,
    };
    // console.log(cartData);

    if (!user) {
      Swal.fire({
        title: "Please login first!",
        icon: "warning",
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
        .post("https://fashion-verse-server.vercel.app/cart", cartData)
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
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };
  return (
    <div data-aos="zoom-in" className="card shadow-md rounded relative hover:shadow-xl">
      <figure>
        <img className="w-full h-40 object-cover transition duration-700 hover:scale-105" src={item.class.image} alt="Shoes" />
      </figure>
      <div className="badge badge-success absolute right-5 top-5">
        <strong className="text-slate-50">Price: ${item.class.price}</strong>
      </div>
      <div className="card-body">
        <h2 className="card-title">{item.class.name}</h2>
        <p>Available seats: {item.class.available_seats}</p>
        <p>Instructor: {item.user.name}</p>

        <div className="card-actions justify-end">
          <button onClick={() => addToCartHandler(item)} disabled={!item.class.available_seats} className="btn btn-secondary btn-outline btn-sm">
            Select Now
          </button>
        </div>
      </div>
      {!item.class.available_seats && <div className="absolute w-full h-full bg-red-400 top-0 left-0 opacity-50 rounded"></div>}
    </div>
  );
};

export default PopularClassesCard;
