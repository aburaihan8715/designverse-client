import { Link, Navigate } from "react-router-dom";
import useUserAuth from "../../hooks/useUserAuth";

const ForgetPasswordPage = () => {
  const { user } = useUserAuth();

  if (user) return <Navigate to="/" />;

  return (
    <div className="py-4">
      <div className="max-w-md p-4 mx-auto border rounded-md shadow-lg">
        <div>
          <h1 className="mb-4 text-3xl text-center uppercase">
            forget password
          </h1>
        </div>

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
                <span>submit</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;

/*
import ForgetPasswordForm from "../features/authentication/ForgetPasswordForm";

const ForgetPassword = () => {
  return (
    <div className="py-4">
      <div className="max-w-md p-4 mx-auto border rounded-md shadow-lg">
        <div>
          <h1 className="mb-4 text-3xl text-center uppercase">
            forget password
          </h1>
        </div>

        <div>
          <ForgetPasswordForm />
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
*/
