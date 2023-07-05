import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useSelectedClassesData from "../../hooks/useSelectedClassesData";

const Card = ({ item }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const { refetch } = useSelectedClassesData();
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
    } else {
      axios
        .post("http://localhost:5000/selectedClasses", selectedData)
        .then((data) => {
          if (data.data.acknowledged) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
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
    <div className="card card-compact bg-base-100 shadow-md rounded relative">
      <figure>
        <img src={item.classImage} alt="Shoes" />
      </figure>
      <div className="badge badge-success absolute right-5 top-5">
        <strong className="text-slate-50">Price: ${item.price}</strong>
      </div>
      <div className="card-body">
        <h2 className="card-title">{item.className}</h2>
        <p>Available seats: {item.seats}</p>
        <p>Instructor: {item.instructorName}</p>
        <div className="card-actions justify-end">
          <button onClick={() => selectedClassesHandler(item)} disabled={!item.seats} className="btn btn-secondary btn-sm">
            Select Now
          </button>
        </div>
      </div>
      {!item.seats && <div className="absolute w-full h-full bg-red-400 top-0 left-0 opacity-50 rounded"></div>}
    </div>
  );
};

export default Card;
