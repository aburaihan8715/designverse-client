import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../features/authentication/SocialLogin";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const LoginPage = () => {
  const { authenticationUsingEmailPassword } = useAuth();
  const [disableLoginBtn, setDisableLoginBtn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  // console.log(from);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  // captcha validation handler
  const captchaHandler = (event) => {
    const user_captcha_value = event.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisableLoginBtn(false);
    } else {
      setDisableLoginBtn(true);
    }
  };

  const submitHandler = (data) => {
    setLoginLoading(true);
    const { email, password } = data;
    authenticationUsingEmailPassword(email, password)
      .then(() => {
        setLoginLoading(false);
        setAuthError("");
        // const loggedInUser = result.user;
        // console.log(loggedInUser);
        Swal.fire({
          position: "center",
          title: `login success!`,
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLoginLoading(false);
        setAuthError(error.message);
        console.log(error.message);
      });
  };

  return (
    <div className="my-4">
      <Helmet>
        <title>FashionVerse | Login</title>
      </Helmet>

      <div className="">
        <div className="mx-auto max-w-md border p-8">
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="space-y-3">
              <div className="text-center ">
                <h4 className="text-4xl capitalize">Login</h4>
              </div>

              {/* error message */}
              {authError && (
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
                  <span>{authError}</span>
                </div>
              )}

              {/* email input */}
              <div className="relative w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Enter your email"
                  className="input-bordered input w-full "
                />
                {errors.email?.type === "required" && (
                  <span className="text-error">Email is required</span>
                )}
              </div>

              {/* password input */}
              <div className="relative w-full">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/i,
                  })}
                  placeholder="Enter your password"
                  className="input-bordered input w-full "
                  type={showPassword ? "text" : "password"}
                />

                <span
                  className="absolute right-6 top-1/2 translate-y-1/4"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {!showPassword && (
                    <FaEyeSlash className="h-6 w-6 text-gray-500" />
                  )}
                  {showPassword && <FaEye className="h-6 w-6 text-gray-500" />}
                </span>
                {errors.password?.type === "required" && (
                  <span className="text-error">Password is required</span>
                )}
              </div>

              {/* captcha input */}
              <div className="w-full ">
                <LoadCanvasTemplate />
                <input
                  onBlur={captchaHandler}
                  name="captcha"
                  type="text"
                  placeholder="Type captcha"
                  className="input-bordered input w-full"
                  required
                />
                <span className="btn-accent btn-xs btn mt-2">Check</span>
              </div>

              {/* login button*/}
              <div className="w-full ">
                <button
                  type="submit"
                  className="btn-primary btn-block btn"
                  disabled={disableLoginBtn}
                >
                  {loginLoading ? (
                    <img
                      className="rounded-full"
                      src="/spinner.gif"
                      alt="spinner"
                    />
                  ) : (
                    "login"
                  )}
                </button>
              </div>
            </div>
          </form>

          <p className="mt-2 text-center">
            New here?
            <Link className="text-orange-700 hover:underline" to="/signUp">
              Create an account
            </Link>
          </p>

          <p className="mb-2 text-center">Or login with</p>

          {/* social login */}
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
