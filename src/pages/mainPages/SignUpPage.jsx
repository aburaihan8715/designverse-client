import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "../../components/ui/SocialLogin";
import { Link, Navigate } from "react-router-dom";
import useUserAuth from "../../hooks/useUserAuth";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { user } = useUserAuth();

  if (user) return <Navigate to="/" />;

  return (
    <div className="my-4">
      <div className="">
        <div className="max-w-md p-8 mx-auto border rounded-md">
          <form>
            <div className="space-y-3">
              <div className="text-center ">
                <h4 className="text-4xl uppercase">Sign up</h4>
              </div>

              {/* USER NAME */}
              <div className="w-full ">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter username"
                  className="w-full input-bordered input "
                />
              </div>

              {/* EMAIL */}
              <div className="w-full ">
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
                    {showPassword && (
                      <FaEye className="w-6 h-6 text-gray-500" />
                    )}
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
                    {showPassword && (
                      <FaEye className="w-6 h-6 text-gray-500" />
                    )}
                  </span>
                </div>
              </div>

              {/* LOGIN BUTTON */}
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
            <span>Already registered?</span>
            <span>
              <Link className="font-bold text-orange-600" to="/login">
                Login
              </Link>
            </span>
            <span>here.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
/*
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../features/authentication/SocialLogin";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const SignUpPage = () => {
  const { createUserUsingEmailPassword, updateUserProfile } = useAuth();
  const [signUpError, setSignUpError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [signUpLoading, setSignUpLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = async (data) => {
    setSignUpError("");
    setSignUpLoading(true);
    const { email, password, name } = data;
    try {
      await createUserUsingEmailPassword(email, password);
      await updateUserProfile(name);
      const res = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      const data = await res.json();

      if (data.acknowledged) {
        setSignUpLoading(false);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Sign up success!!",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
        navigate("/");
      }
    } catch (error) {
      setSignUpLoading(false);
      setSignUpError(error.message);
      console.log(error.message);
    }
  };

  return (
    <div className="my-4">
      <Helmet>
        <title>FashionVerse | SignUp</title>
      </Helmet>

      <div className="">
        <div className="max-w-md p-8 mx-auto border rounded-md">
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="space-y-3">
              <div className="text-center ">
                <h4 className="text-4xl uppercase">Sign up</h4>
              </div>
             
              {signUpError && (
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
                  <span>{signUpError}</span>
                </div>
              )}

          
              <div className="w-full ">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Enter your name"
                  className="w-full input-bordered input "
                />
                {errors.name?.type === "required" && (
                  <span className="text-error">Name is required</span>
                )}
              </div>

           
              <div className="w-full ">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  {...register("photo", { required: true })}
                  type="url"
                  placeholder="Enter photo url"
                  className="w-full input-bordered input "
                />
                {errors.name?.type === "required" && (
                  <span className="text-error">Photo url is required</span>
                )}
              </div>

             
              <div className="w-full ">
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
                    {!showPassword && <FaEyeSlash className="w-6 h-6" />}
                    {showPassword && <FaEye className="w-6 h-6" />}
                  </span>
                </div>

            
                {errors.password?.type === "required" && (
                  <span className="text-error">Password is required</span>
                )}

                {errors.password?.type === "minLength" && (
                  <span className="text-error">
                    Password need to be minimum 6 characters!
                  </span>
                )}

                {errors.password?.type === "maxLength" && (
                  <span className="text-error">
                    Password should not exceeds 20 characters!
                  </span>
                )}

                {errors.password?.type === "pattern" && (
                  <span className="text-error">
                    Password should have one uppercase, one lowercase, one
                    special character and one digits!
                  </span>
                )}
              </div>

          
              <div className="w-full ">
                <button type="submit" className="btn-secondary btn-block btn">
                  {signUpLoading ? (
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
            <SocialLogin />
          </div>

         
          <div className="p-3 mt-3 space-x-1 text-center border rounded-md">
            <span>Already registered?</span>
            <span>
              <Link className="font-bold text-orange-600" to="/login">
                Login
              </Link>
            </span>
            <span>here.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
*/
