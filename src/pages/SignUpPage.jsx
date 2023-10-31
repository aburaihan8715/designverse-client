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
        <div className="mx-auto max-w-md rounded-md border p-8">
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="space-y-3">
              <div className="text-center ">
                <h4 className="text-4xl uppercase">Sign up</h4>
              </div>
              {/* error message */}
              {signUpError && (
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
                  <span>{signUpError}</span>
                </div>
              )}

              {/* name input */}
              <div className="w-full ">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Enter your name"
                  className="input-bordered input w-full "
                />
                {errors.name?.type === "required" && (
                  <span className="text-error">Name is required</span>
                )}
              </div>

              {/* photo url input */}
              {/* <div className="w-full ">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  {...register("photo", { required: true })}
                  type="url"
                  placeholder="Enter photo url"
                  className="input-bordered input w-full "
                />
                {errors.name?.type === "required" && (
                  <span className="text-error">Photo url is required</span>
                )}
              </div> */}

              {/* email input */}
              <div className="w-full ">
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
                    className="input-bordered input w-full "
                    type={showPassword ? "text" : "password"}
                  />

                  {/* password hide and show handler */}
                  <span
                    className="absolute right-6 top-1/2 -translate-y-1/2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {!showPassword && <FaEyeSlash className="h-6 w-6" />}
                    {showPassword && <FaEye className="h-6 w-6" />}
                  </span>
                </div>

                {/* error message for password */}
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

              {/* sign up button*/}
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

          {/* social login */}
          <div>
            <SocialLogin />
          </div>

          {/* link to sign up */}
          <div className="mt-3 space-x-1 rounded-md border p-3 text-center">
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
