const ForgetPasswordForm = () => {
  return <div>ForgetPasswordForm</div>;
};

export default ForgetPasswordForm;
/*

import { Link } from "react-router-dom";

const ForgetPasswordForm = () => {
  return (
    <>
   
        // <div className="rounded-md alert alert-error">
        //   <svg
        //     xmlns="http://www.w3.org/2000/svg"
        //     className="w-6 h-6 stroke-current shrink-0"
        //     fill="none"
        //     viewBox="0 0 24 24"
        //   >
        //     <path
        //       strokeLinecap="round"
        //       strokeLinejoin="round"
        //       strokeWidth="2"
        //       d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        //     />
        //   </svg>
        //   <span>{error}</span>
        // </div>
  

     
      <form>
        <div className="w-full form-control">
          <label className="label">
            <span className="label-text">Enter email</span>
          </label>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full input-bordered input"
          />
        </div>

      
        <div className="flex justify-end gap-2 mt-2">
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
*/
