import Modal from "../../../components/Modal/Modal";

const FeedbackModal = () => {
  return (
    <Modal>
      <div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your message</span>
          </label>
          <textarea rows="6" className="textarea textarea-bordered" placeholder="Feedback message"></textarea>
        </div>
        <div className="text-right mt-2">
          <button className="btn btn-xs btn-secondary">send message 🚀</button>
        </div>
      </div>
    </Modal>
  );
};

export default FeedbackModal;
