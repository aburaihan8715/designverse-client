const Modal = ({ openModal, setOpenModal, children, bgColor }) => {
  return (
    <>
      {openModal && (
        <div className="fixed inset-0 z-10 bg-black/50">
          <div className="flex h-screen items-center justify-center">
            <div className="w-screen">
              <div
                className={`mx-auto max-w-lg rounded-md border p-3 ${
                  bgColor ? bgColor : "bg-[#F4F4F5]"
                }`}
              >
                <div className="flex justify-end">
                  <button
                    onClick={() => setOpenModal(false)}
                    className="flex h-10 w-10 justify-center rounded-full border bg-red-500 text-2xl text-white hover:bg-red-700"
                  >
                    &times;
                  </button>
                </div>
                {/* content goes here */}
                <div>{children}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
