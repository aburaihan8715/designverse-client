const ClassReviewForm = () => {
  return <div>ClassReviewForm</div>;
};

export default ClassReviewForm;

/*

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
    <div className="max-w-lg p-10 mx-auto rounded-md ">
      <h3 className="text-3xl font-semibold text-center text-transparent uppercase bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text">
        Rate please
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

        // <div className="mt-2 form-control">
        //   <label htmlFor="message" className="label">
        //     <span className="label-text">Your Review</span>
        //   </label>
        //   <textarea
        //     className="w-full textarea-bordered textarea"
        //     name=""
        //     id="message"
        //     rows="3"
        //     maxLength="500"
        //     minLength="100"
        //     placeholder="Please review within (250 characters)"
        //   ></textarea>
        // </div>

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
*/
