const AdminFeedbackForm = () => {
  return <div>AdminFeedbackForm</div>;
};

export default AdminFeedbackForm;

/*
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useClassesData from "../../hooks/useClassesData";
import useFeedbackId from "../../hooks/useFeedbackId";
import useModalOpen from "../../hooks/useModalOpen";

const AdminFeedbackForm = () => {
  const { axiosSecure } = useAxiosSecure();
  const { feedbackId } = useFeedbackId();
  const { refetch } = useClassesData();
  const { setModalOpen } = useModalOpen();

  const submitHandler = async (e) => {
    e.preventDefault();
    const feedback = e.target[0].value;
    if (!feedback) return alert("Please input message!!");

    try {
      const res = await axiosSecure.patch(`/classes/feedback/${feedbackId}`, {
        feedback,
      });
      const data = res.data;
      if (data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Feedback has been sent!!",
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
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="feedback" className="label">
          <span className="label-text">Your feedback</span>
        </label>
        <textarea
          id="feedback"
          rows="2"
          minLength="2"
          maxLength="100"
          className="textarea-bordered textarea"
          placeholder="Feedback within (0-150)"
        ></textarea>
      </div>
      <div className="mt-2 text-right">
        <button className="btn-secondary btn-xs btn">send feedback 🚀</button>
      </div>
    </form>
  );
};

export default AdminFeedbackForm;
*/
