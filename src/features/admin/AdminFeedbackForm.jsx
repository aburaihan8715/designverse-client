import useAxiosSecure from "../../hooks/useAxiosSecure";
import useFeedbackId from "../../hooks/useFeedbackId";

const AdminFeedbackForm = () => {
  const { feedbackId } = useFeedbackId();
  const { axiosSecure } = useAxiosSecure();

  const submitHandler = async (e) => {
    e.preventDefault();
    const feedback = e.target[0].value;
    if (!feedback) return alert("Please input message!!");

    try {
      const res = await axiosSecure.patch(`/classes/feedback/${feedbackId}`, {
        feedback,
      });
      const data = res.data;
      console.log(data);
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
