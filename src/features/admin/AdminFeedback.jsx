import Modal from "../../ui/Modal";

const AdminFeedback = () => {
  return (
    <Modal>
      <div>
        <div className="form-control">
          <label htmlFor="feedback" className="label">
            <span className="label-text">Your message</span>
          </label>
          <textarea
            id="feedback"
            rows="6"
            className="textarea-bordered textarea"
            placeholder="Feedback message"
          ></textarea>
        </div>
        <div className="mt-2 text-right">
          <button className="btn-secondary btn-xs btn">send message 🚀</button>
        </div>
      </div>
    </Modal>
  );
};

export default AdminFeedback;
