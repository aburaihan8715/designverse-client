import axios from "axios";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useCartData from "../hooks/useCartData";

const Card = ({ item }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const { refetch } = useCartData();
  const selectedClassesHandler = (selectedItem) => {
    const selectedData = {
      selectedId: selectedItem._id,
      classImage: selectedItem.classImage,
      className: selectedItem.className,
      instructorName: selectedItem.instructorName,
      price: selectedItem.price,
      email: user?.email,
    };
    // console.log(selectedData);

    if (!user) {
      Swal.fire({
        title: "Please login first!",
        text: "then you will be able to select class",
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
    } else {
      axios
        .post(
          "https://fashion-verse-server.vercel.app/selectedClasses",
          selectedData,
        )
        .then((data) => {
          if (data.data.acknowledged) {
            refetch();
            Swal.fire({
              position: "center",
              title: "Class has been selected!",
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
    <div className="relative rounded bg-base-100 shadow-md">
      <figure>
        <img
          className="h-40 w-full object-cover"
          src={item.class.image}
          alt="Shoes"
        />
      </figure>
      <div className="badge badge-success absolute right-5 top-5">
        <strong className="text-slate-50">Price: ${item.class.price}</strong>
      </div>
      <div className="card-body">
        <h2 className="card-title">{item.class.name}</h2>
        <p>Available seats: {item.class.available_seats}</p>
        <p>Instructor: {item.user.name}</p>

        <div className="card-actions justify-end">
          <button
            onClick={() => selectedClassesHandler(item)}
            disabled={!item.class.available_seats}
            className="btn-secondary btn-sm btn"
          >
            Select Now
          </button>
        </div>
      </div>
      {!item.class.available_seats && (
        <div className="absolute left-0 top-0 h-full w-full rounded bg-red-400 opacity-50"></div>
      )}
    </div>
  );
};

export default Card;
