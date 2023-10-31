import Swal from "sweetalert2";
import { Rating } from "@smastrom/react-rating";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useClassesData from "../../hooks/useClassesData";
import useModalOpen from "../../hooks/useModalOpen";

const ClassReviewForm = ({ reviewId }) => {
  const { axiosSecure } = useAxiosSecure();
  const { refetch } = useClassesData();
  const { setModalOpen } = useModalOpen();

  const submitHandler = async (e) => {
    e.preventDefault();
    const rating = e.target[0].value;
    if (!rating) return Swal.fire("Rating should not be empty!!");
    const newRating = Number(rating);
    // console.log(newRating);

    try {
      const res = await axiosSecure.patch(`/classes/review/${reviewId}`, {
        newRating,
      });
      const data = res.data;
      if (data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Review sent successfully!!",
          showConfirmButton: false,
          timer: 1500,
        });
        setModalOpen(false);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="mx-auto max-w-lg rounded-md  p-10 ">
      <h3 className="bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-center text-3xl font-semibold uppercase text-transparent">
        Rate please
      </h3>
      <div className="mt-2 flex justify-center">
        <Rating className="" style={{ maxWidth: 150 }} value={5} readOnly />
      </div>
      <form onSubmit={submitHandler}>
        <div className="form-control w-full">
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

        {/* <div className="form-control mt-2">
          <label htmlFor="message" className="label">
            <span className="label-text">Your Review</span>
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
        </div> */}

        <div className="mt-2 text-right">
          <button className="btn-secondary btn-sm btn" type="submit">
            submit 🚀
          </button>
        </div>
      </form>
    </div>
  );
};

export default ClassReviewForm;
