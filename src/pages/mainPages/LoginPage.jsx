import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import SocialLogin from "../../components/ui/SocialLogin";
import useUserAuth from "../../hooks/useUserAuth";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { user } = useUserAuth();

  if (user) return <Navigate to="/" />;

  return (
    <div className="max-w-md p-8 mx-auto border rounded-md">
      <form>
        <div className="space-y-3">
          <div className="text-center ">
            <h4 className="text-4xl uppercase">Login</h4>
          </div>
          {/* EMAIL */}
          <div className="relative w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full input-bordered input "
            />
          </div>
          {/* PASSWORD */}
          <div className="w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>

            <div className="relative">
              <input
                placeholder="Enter password"
                className="w-full input-bordered input "
                type={showPassword ? "text" : "password"}
              />

              <span
                className="absolute -translate-y-1/2 right-6 top-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {!showPassword && (
                  <FaEyeSlash className="w-6 h-6 text-gray-500" />
                )}
                {showPassword && <FaEye className="w-6 h-6 text-gray-500" />}
              </span>
            </div>
          </div>

          {/* PASSWORD CONFIRM */}
          <div className="w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>

            <div className="relative">
              <input
                placeholder="Enter password"
                className="w-full input-bordered input "
                type={showPassword ? "text" : "password"}
              />

              <span
                className="absolute -translate-y-1/2 right-6 top-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {!showPassword && (
                  <FaEyeSlash className="w-6 h-6 text-gray-500" />
                )}
                {showPassword && <FaEye className="w-6 h-6 text-gray-500" />}
              </span>
            </div>
          </div>

          {/* FORGET PASSWORD LINK */}
          <div className="text-right">
            <Link to="/forgetPassword" className="link-error link">
              Forget password?
            </Link>
          </div>

          <div className="w-full ">
            <button type="submit" className="btn-secondary btn-block btn">
              login
            </button>
          </div>
        </div>
      </form>

      <div className="divider">OR</div>

      {/* SOCIAL LOGIN */}
      <SocialLogin />

      <div className="p-3 mt-3 space-x-1 text-center border rounded-md">
        <span>New user?</span>
        <span>
          <Link className="font-bold text-orange-600" to="/signUp">
            Sign up
          </Link>
        </span>
        <span>here.</span>
      </div>
    </div>
  );
};

export default LoginPage;

/*
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../features/authentication/SocialLogin";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { useEffect } from "react";

const LoginPage = () => {
  const { authenticationUsingEmailPassword, user } = useAuth();
  const [disableLoginBtn, setDisableLoginBtn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
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

  const submitHandler = async (data) => {
    if (!user) {
      setLoginError("");
      setLoginLoading(true);
      const { email, password } = data;

      try {
        await authenticationUsingEmailPassword(email, password);
        setLoginLoading(false);
        setLoginError("");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login success!!",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
        navigate(from, { replace: true });
      } catch (error) {
        setLoginLoading(false);
        setLoginError(error.message);
        console.log(error.message);
      }
    }

    // authenticationUsingEmailPassword(email, password)
    //   .then(() => {
    //     setLoginLoading(false);
    //     setLoginError("");
    //     // const loggedInUser = result.user;
    //     // console.log(loggedInUser);
    //     Swal.fire({
    //       position: "center",
    //       icon: "success",
    //       title: "Login success!!",
    //       showConfirmButton: false,
    //       timer: 1500,
    //     });
    //     reset();
    //     navigate(from, { replace: true });
    //   })
    //   .catch((error) => {
    //     setLoginLoading(false);
    //     setLoginError(error.message);
    //     console.log(error.message);
    //   });
  };

  return (
    <div className="my-4">
      <Helmet>
        <title>FashionVerse | Login</title>
      </Helmet>

      <div className="">
        <div className="max-w-md p-8 mx-auto border rounded-md">
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="space-y-3">
              <div className="text-center ">
                <h4 className="text-4xl uppercase">Login</h4>
              </div>

           
              {loginError && (
                <div className="rounded-md alert alert-error">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 stroke-current shrink-0"
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
                  <span>{loginError}</span>
                </div>
              )}

         
              <div className="relative w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Enter your email"
                  className="w-full input-bordered input "
                />
                {errors.email?.type === "required" && (
                  <span className="text-error">Email is required</span>
                )}
              </div>

            
              <div className="w-full">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>

                <div className="relative">
                  <input
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/i,
                    })}
                    placeholder="Enter your password"
                    className="w-full input-bordered input "
                    type={showPassword ? "text" : "password"}
                  />

                  <span
                    className="absolute -translate-y-1/2 right-6 top-1/2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {!showPassword && (
                      <FaEyeSlash className="w-6 h-6 text-gray-500" />
                    )}
                    {showPassword && (
                      <FaEye className="w-6 h-6 text-gray-500" />
                    )}
                  </span>
                </div>

            
                <div className="text-right">
                  <Link to="/forget-password" className="link-error link">
                    Forget password?
                  </Link>
                </div>

                {errors.password?.type === "required" && (
                  <span className="text-error">Password is required</span>
                )}
              </div>

        
              <div className="w-full ">
                <LoadCanvasTemplate />
                <input
                  onBlur={captchaHandler}
                  name="captcha"
                  type="text"
                  placeholder="Type captcha"
                  className="w-full input-bordered input"
                  required
                />
                <span className="mt-2 btn-secondary btn-xs btn">Check</span>
              </div>

       
              <div className="w-full ">
                <button
                  type="submit"
                  className="btn-secondary btn-block btn"
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

          <div className="divider">OR</div>

       
          <div>
            <SocialLogin></SocialLogin>
          </div>

     
          <div className="p-3 mt-3 space-x-1 text-center border rounded-md">
            <span>New user?</span>
            <span>
              <Link className="font-bold text-orange-600" to="/signUp">
                Sign up
              </Link>
            </span>
            <span>here.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
*/
