const Modal = ({ children, bgColor, isOpen, setIsOpen }) => {
  // 1) Need button for open the modal,where we call it
  // 2) Need to declare state (const [isOpen,setIsOpen]=useState())
  // 3) Need to pass children
  // 4) Need to pass (bgColor) optional
  return (
    <>
      {isOpen && (
        <div onClick={() => setIsOpen(false)} className="fixed inset-0 z-50">
          {/* div for backdrop */}
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/60" />
          <div className="relative flex items-center justify-center w-full h-full">
            <div
              className={`max-h-96 max-w-xl overflow-y-auto rounded border p-5 ${
                bgColor ? bgColor : "bg-[#333]"
              }`}
            >
              <div className="flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex justify-center w-10 h-10 text-2xl text-white bg-red-500 border rounded-full hover:bg-red-700"
                >
                  &times;
                </button>
              </div>
              {/* content goes here */}
              <div>{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
