import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";

const image_bb_api_key = import.meta.env.VITE_IMAGEBB_API_KEY;
const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_bb_api_key}`;

const AddClassPage = () => {
  const { user } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { axiosSecure } = useAxiosSecure();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = async (data) => {
    // console.log(data);
    setLoading(true);
    setError("");
    const file = data.classImage[0];
    let imgURL;
    let formData = new FormData();
    formData.append("image", file);

    try {
      const imageRes = await axios.post(image_hosting_url, formData);
      const imageData = imageRes.data;
      // console.log(data);

      if (imageData?.success) {
        imgURL = imageData.data.display_url;
      }

      const newClassData = {
        classId: uuidv4(),
        className: data?.className,
        classImage: imgURL,
        seats: Number(data?.seats),
        price: Number(data?.price),
        status: "pending",
        studentEnrolled: null,
        adminFeedback: "",
        rating: [],
        ratingMessage: [],
        offerPercent: Number(data?.offer) || null,
        instructorName: data?.instructorName,
        instructorImage: data?.instructorImage,
        instructorEmail: data?.instructorEmail,
        role: "instructor",
        follower: null,
        phoneNumber: data?.phone,
        gender: data?.gender,
        address: data?.address,
      };

      // console.log(newClassData);

      const classResponse = await axiosSecure.post(
        "http://localhost:5000/classes",
        newClassData,
      );
      const classData = classResponse.data;
      if (classData.insertedId) {
        setLoading(false);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Class added successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
        navigate("/dashboard/instructorClasses");
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    <div className="my-4">
      <Helmet>
        <title>FashionVerse | Add class</title>
      </Helmet>

      <div className="p-1">
        <div className="mx-auto max-w-lg rounded-md border p-8">
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="space-y-3">
              <div className="text-center ">
                <h4 className="text-3xl uppercase underline decoration-secondary underline-offset-4">
                  Add class
                </h4>
              </div>

              <div className="">
                {/* error */}
                {error && (
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
                )}
                <div>
                  {/* group 01 */}
                  <div className="gap-2 sm:flex">
                    {/* class name input */}
                    <div className="w-full">
                      <label className="label">
                        <span className="label-text">Class Name*</span>
                      </label>
                      <input
                        {...register("className", { required: true })}
                        type="text"
                        placeholder="Enter class name"
                        className="input-bordered input w-full "
                      />
                      {errors.className?.type === "required" && (
                        <span className="text-error">
                          Class name is required
                        </span>
                      )}
                    </div>

                    {/* class image input type url */}
                    <div className="w-full">
                      <label className="label">
                        <span className="label-text">Class image*</span>
                      </label>
                      <input
                        {...register("classImage", { required: true })}
                        type="file"
                        className="file-input-secondary file-input input-bordered w-full"
                        placeholder="Enter class image url"
                      />
                      {errors.classImage?.type === "required" && (
                        <span className="text-error">
                          Class image is required
                        </span>
                      )}
                    </div>
                  </div>

                  {/* group 02 */}
                  <div className="gap-2 sm:flex">
                    {/* price input */}
                    <div className="w-full ">
                      <label className="label">
                        <span className="label-text">Price*</span>
                      </label>
                      <input
                        {...register("price", { required: true })}
                        type="number"
                        placeholder="Enter price"
                        className="input-bordered input w-full "
                      />
                      {errors.price?.type === "required" && (
                        <span className="text-error">Price is required</span>
                      )}
                    </div>

                    {/* seats input */}
                    <div className="w-full ">
                      <label className="label">
                        <span className="label-text">Seats*</span>
                      </label>
                      <input
                        {...register("seats", { required: true })}
                        type="number"
                        placeholder="Enter seats"
                        className="input-bordered input w-full "
                      />
                      {errors.seats?.type === "required" && (
                        <span className="text-error">Seats is required</span>
                      )}
                    </div>
                  </div>

                  {/* group 03 */}
                  <div className="gap-2 sm:flex">
                    {/* offer input */}
                    <div className="w-full ">
                      <label className="label">
                        <span className="label-text">Offer</span>
                      </label>
                      <input
                        {...register("offer")}
                        type="number"
                        placeholder="Enter offer"
                        className="input-bordered input w-full "
                      />
                    </div>

                    {/* instructor name input */}
                    <div className="w-full ">
                      <label className="label">
                        <span className="label-text">Instructor name*</span>
                      </label>
                      <input
                        {...register("instructorName", { required: true })}
                        type="text"
                        defaultValue={user?.displayName}
                        readOnly
                        placeholder="Enter instructor name"
                        className="input-bordered input w-full "
                      />
                      {errors.instructorName?.type === "required" && (
                        <span className="text-error">
                          InstructorName is required
                        </span>
                      )}
                    </div>
                  </div>

                  {/* group 04 */}
                  <div className="gap-2 sm:flex">
                    {/* instructor email input */}
                    <div className="w-full ">
                      <label className="label">
                        <span className="label-text">Instructor email*</span>
                      </label>
                      <input
                        {...register("instructorEmail", { required: true })}
                        type="email"
                        defaultValue={user?.email}
                        readOnly
                        placeholder="Enter instructor email"
                        className="input-bordered input w-full "
                      />
                      {errors.instructorEmail?.type === "required" && (
                        <span className="text-error">
                          Instructor email is required
                        </span>
                      )}
                    </div>

                    {/* instructor image input type url*/}
                    <div className="w-full ">
                      <label className="label">
                        <span className="label-text">Instructor image*</span>
                      </label>
                      <input
                        {...register("instructorImage", { required: true })}
                        type="url"
                        defaultValue={user?.photoURL}
                        readOnly
                        className="input-bordered input w-full"
                        placeholder="Enter instructor image url"
                      />
                      {errors.instructorImage?.type === "required" && (
                        <span className="text-error">
                          Instructor image is required
                        </span>
                      )}
                    </div>
                  </div>

                  {/* group 05 */}
                  <div className="gap-2 sm:flex">
                    {/* phone no input */}
                    <div className="w-full">
                      <label className="label">
                        <span className="label-text">Phone No*</span>
                      </label>
                      <input
                        {...register("phone", { required: true })}
                        type="tel"
                        placeholder="Enter phone no"
                        className="input-bordered input w-full"
                      />
                      {errors.phone?.type === "required" && (
                        <span className="text-error">Phone no is required</span>
                      )}
                    </div>

                    <div className="w-full">
                      <label className="label">
                        <span className="label-text">Gender*</span>
                      </label>
                      <select
                        {...register("gender", { required: true })}
                        className="input-bordered input w-full"
                      >
                        <option value="">Select gender</option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                      </select>
                      {errors.gender?.type === "required" && (
                        <span className="text-error">Gender is required</span>
                      )}
                    </div>
                  </div>

                  {/* group 06 */}
                  <div className="items-center gap-2  sm:flex">
                    {/* address input */}
                    <div className="w-full">
                      <label className="label">
                        <span className="label-text">Address*</span>
                      </label>
                      <input
                        {...register("address", { required: true })}
                        type="text"
                        placeholder="Enter address"
                        className="input-bordered input w-full"
                      />
                      {errors.address?.type === "required" && (
                        <span className="text-error">Address is required</span>
                      )}
                    </div>

                    {/* button*/}
                    <div className="w-full self-stretch">
                      <label className="label invisible">
                        <span className="label-text">only place holder</span>
                      </label>
                      <button
                        type="submit"
                        className="btn-secondary btn-block btn"
                      >
                        {loading && (
                          <span className="loading loading-spinner text-primary" />
                        )}
                        <span>submit</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddClassPage;
