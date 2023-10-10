const AddReviewForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    alert("Not implemented yet......");
  };

  return (
    <div className="mx-auto max-w-lg p-10 shadow-md">
      <h3 className="bg-gradient-to-r from-pink-700 to-purple-900 bg-clip-text text-center text-3xl font-semibold uppercase text-transparent">
        Rate Us
      </h3>
      <div className="mt-2 text-center text-3xl">
        <span>⭐</span>
        <span>⭐</span>
        <span>⭐</span>
        <span>⭐</span>
        <span>⭐</span>
      </div>
      <form onSubmit={submitHandler}>
        <div className="mt-4">
          <textarea
            className="w-full border p-2 ring-1  focus:outline-none"
            name=""
            id=""
            rows="5"
            placeholder="Please review within (250 characters)"
          ></textarea>
        </div>

        <div className="text-right">
          <button className="btn-secondary btn-sm btn" type="submit">
            submit 🚀
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReviewForm;
