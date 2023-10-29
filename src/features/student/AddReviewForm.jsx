import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";

const AddReviewForm = () => {
  const { axiosSecure } = useAxiosSecure();
  const navigate = useNavigate();
  const { user } = useAuth();
  const submitHandler = async (e) => {
    e.preventDefault();
    const rating = e.target[0].value;
    const message = e.target[1].value;

    if (!rating || !message)
      return alert("Rating and message should not be empty!!");

    const testimonialData = {
      rating: Number(rating),
      message,
      userName: user?.displayName,
      email: user?.email,
      photo: user?.photoURL,
    };
    const res = await axiosSecure.post("/testimonials", testimonialData);
    const data = res.data;
    if (data.insertedId) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    }
  };

  return (
    <div className="mx-auto max-w-lg rounded-md border p-10 ">
      <h3 className="bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-center text-3xl font-semibold uppercase text-transparent">
        Rate Us
      </h3>
      <div className="mt-2 text-center text-3xl">
        <span>⭐</span>
        <span>⭐</span>
        <span>⭐</span>
        <span>⭐</span>
        <span>⭐</span>
      </div>
      <form onSubmit={submitHandler}>
        <div className="form-control w-full">
          <label htmlFor="rating" className="label">
            <span className="label-text">Rate</span>
          </label>
          <select id="rating" className="select-bordered select">
            <option value="" disabled selected>
              Rate (1-5)
            </option>
            <option defaultValue="1">1</option>
            <option defaultValue="2">2</option>
            <option defaultValue="3">3</option>
            <option defaultValue="4">4</option>
            <option defaultValue="5">5</option>
          </select>
        </div>

        <div className="form-control mt-2">
          <label htmlFor="message" className="label">
            <span className="label-text">Your message</span>
          </label>
          <textarea
            className="textarea-bordered textarea w-full"
            name=""
            id="message"
            rows="3"
            maxLength="500"
            minLength="100"
            placeholder="Please review within (250 characters)"
          ></textarea>
        </div>

        <div className="mt-2 text-right">
          <button className="btn-secondary btn-sm btn" type="submit">
            submit 🚀
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReviewForm;
