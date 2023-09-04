const Modal = ({ children }) => {
  return (
    <dialog id="my_modal_3" className="modal">
      <form method="dialog" className="modal-box">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        {children}
      </form>
    </dialog>
  );
};

export default Modal;
