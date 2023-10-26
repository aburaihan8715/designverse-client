import { Link } from "react-router-dom";

const ForgetPasswordForm = () => {
  return (
    <>
      {/* {error && (
        <div className="alert alert-error rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{error}</span>
        </div>
      )} */}

      {/* form for input OTP */}
      <form>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Enter email</span>
          </label>
          <input
            type="email"
            placeholder="Enter email"
            className="input-bordered input w-full"
          />
        </div>

        {/*action buttons */}
        <div className="mt-2 flex justify-end gap-2">
          <Link className="btn-error btn" to="/login">
            cancel
          </Link>

          <div className="inline-block">
            <button className="btn-secondary btn">
              <span className="loading loading-spinner text-primary" />
              <span>submit</span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ForgetPasswordForm;
