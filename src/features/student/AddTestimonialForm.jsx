const AddTestimonialForm = () => {
  return <div>AddTestimonialForm</div>;
};

export default AddTestimonialForm;

/*
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

const AddTestimonialForm = () => {
  const { axiosSecure } = useAxiosSecure();
  const navigate = useNavigate();
  const { user } = useAuth();
  const submitHandler = async (e) => {
    e.preventDefault();
    const rating = e.target[0].value;
    const message = e.target[1].value;

    if (!rating || !message)
      return Swal.fire("Rating and message should not be empty!!");
    // console.log(rating);
    // console.log(message);

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
    <div className="max-w-lg p-10 mx-auto border rounded-md ">
      <h3 className="text-3xl font-semibold text-center text-transparent uppercase bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text">
        Rate Us
      </h3>
      <div className="flex justify-center mt-2">
        <Rating className="" style={{ maxWidth: 150 }} value={5} readOnly />
      </div>
      <form onSubmit={submitHandler}>
        <div className="w-full form-control">
          <label htmlFor="rating" className="label">
            <span className="label-text">Rate</span>
          </label>
          <select
            defaultValue=""
            id="rating"
            className="select-bordered select"
          >
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

        <div className="mt-2 form-control">
          <label htmlFor="message" className="label">
            <span className="label-text">Your message</span>
          </label>
          <textarea
            className="w-full textarea-bordered textarea"
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

export default AddTestimonialForm;
*/
