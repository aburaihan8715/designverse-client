const UpdateMyCourse = () => {
  return (
    <div className="my-4">
      <div className="p-1">
        <div className="max-w-lg p-8 mx-auto border rounded-md">
          <form>
            <div className="space-y-3">
              <div className="text-center ">
                <h4 className="text-3xl underline uppercase decoration-secondary underline-offset-4">
                  Update My Course
                </h4>
              </div>

              <div className="">
                <div>
                  <div className="gap-2 sm:flex">
                    <div className="w-full">
                      <label className="label">
                        <span className="label-text">Class Name*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter class name"
                        className="w-full input-bordered input "
                      />
                    </div>

                    <div className="w-full">
                      <label className="label">
                        <span className="label-text">Class image*</span>
                      </label>
                      <input
                        type="url"
                        className="w-full input-bordered input"
                        placeholder="Enter class image url"
                      />
                    </div>
                  </div>

                  <div className="gap-2 sm:flex">
                    <div className="w-full ">
                      <label className="label">
                        <span className="label-text">Price*</span>
                      </label>
                      <input
                        type="number"
                        placeholder="Enter price"
                        className="w-full input-bordered input "
                      />
                    </div>

                    <div className="w-full ">
                      <label className="label">
                        <span className="label-text">Seats*</span>
                      </label>
                      <input
                        type="number"
                        placeholder="Enter seats"
                        className="w-full input-bordered input "
                      />
                    </div>
                  </div>

                  <div className="gap-2 sm:flex">
                    <div className="w-full ">
                      <label className="label">
                        <span className="label-text">Offer</span>
                      </label>
                      <input
                        type="number"
                        placeholder="Enter offer"
                        className="w-full input-bordered input "
                      />
                    </div>

                    <div className="w-full ">
                      <label className="label">
                        <span className="label-text">Instructor name*</span>
                      </label>
                      <input
                        type="text"
                        readOnly
                        placeholder="Enter instructor name"
                        className="w-full input-bordered input "
                      />
                    </div>
                  </div>

                  <div className="gap-2 sm:flex">
                    <div className="w-full ">
                      <label className="label">
                        <span className="label-text">Instructor email*</span>
                      </label>
                      <input
                        type="email"
                        readOnly
                        placeholder="Enter instructor email"
                        className="w-full input-bordered input "
                      />
                    </div>

                    <div className="w-full ">
                      <label className="label">
                        <span className="label-text">Instructor image*</span>
                      </label>
                      <input
                        type="url"
                        className="w-full input-bordered input"
                        placeholder="Enter instructor image url"
                      />
                    </div>
                  </div>

                  <div className="gap-2 sm:flex">
                    <div className="w-full">
                      <label className="label">
                        <span className="label-text">Phone No*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="Enter phone no"
                        className="w-full input-bordered input"
                      />
                    </div>

                    <div className="w-full">
                      <label className="label">
                        <span className="label-text">Gender*</span>
                      </label>
                      <select className="w-full input-bordered input">
                        <option value="">select gender</option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                      </select>
                    </div>
                  </div>

                  <div className="items-center gap-2 sm:flex">
                    <div className="w-full">
                      <label className="label">
                        <span className="label-text">Address*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter address"
                        className="w-full input-bordered input"
                      />
                    </div>

                    <div className="self-stretch w-full">
                      <label className="invisible label">
                        <span className="label-text">Address*</span>
                      </label>
                      <input
                        type="submit"
                        value="Submit"
                        className="btn-secondary btn-block btn"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full ">
                  <label className="label">
                    <span className="label-text">Class image*</span>
                  </label>
                  <input
                    type="file"
                    className="w-full file-input-bordered file-input-warning file-input"
                  />
                </div>

                <div>
                  <div className="w-full ">
                    <label className="label">
                      <span className="label-text">Instructor image*</span>
                    </label>
                    <input
                      type="file"
                      className="w-full file-input-bordered file-input-warning file-input"
                    />
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

export default UpdateMyCourse;
/*
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";

const InstructorMyClassUpdatePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { axiosSecure } = useAxiosSecure();
  const form = useForm({
    defaultValues: async () => {
      const res = await fetch(`http://localhost:5000/classes/${id}`);
      const data = await res.json();
      return {
        className: data?.className,
        classImage: data?.classImage,
        price: data?.price,
        seats: data?.seats,
        offer: data?.offerPercent,
        instructorName: data?.userName,
        instructorEmail: data?.userEmail,
        instructorImage: data?.userImage,
        phone: data?.phoneNumber,
        gender: data?.gender,
        address: data?.address,
      };
    },
  });
  const { register, handleSubmit, formState, reset } = form;
  const { errors } = formState;

  // FIXME:
  // const img_hosting_token = import.meta.env.VITE_image_hosting_api_key;
  // const img_hosting_url = `https://api.imgbb.com/1/upload?&key=${img_hosting_token}`;

  const submitHandler = (data) => {
    // console.log(data);

    const classData = {
      className: data.className,
      classImage: data.classImage,
      seats: Number(data.seats),
      price: Number(data.price),
      status: "pending",
      studentEnrolled: null,
      adminFeedback: "",
      rating: null,
      ratingMessage: "",
      offerPercent: Number(data.offer) || null,

      user: {
        userName: data.instructorName,
        userImage: data.instructorImage,
        userEmail: data.instructorEmail,
        numberOfClasses: null,
        nameOfClasses: [],
        role: "instructor",
        follower: null,
        phoneNumber: data.phone,
        gender: data.gender,
        address: data.address,
      },
    };
    // console.log(classData);

    // send data to server using axios
    axiosSecure
      .put(`/classes/${id}`, classData)
      .then((data) => {
        console.log(data);
        if (data.data.acknowledged) {
          Swal.fire({
            position: "center",
            title: "Class updated successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
          navigate("/dashboard/instructorClasses");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });

    // FIXME: upload image on image bb
    // const formData = new FormData();
    // formData.append("classImage", data.classImage[0]);

    // fetch(img_hosting_url, {
    //   method: "PUT",
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //   });
  };

  return (
    <div className="my-4">
      <Helmet>
        <title>FashionVerse | Update class</title>
      </Helmet>

      <div className="p-1">
        <div className="max-w-lg p-8 mx-auto border rounded-md">
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="space-y-3">
              <div className="text-center ">
                <h4 className="text-3xl underline uppercase decoration-secondary underline-offset-4">
                  Update class
                </h4>
              </div>

              <div className="">
                <div>
                 
                  <div className="gap-2 sm:flex">
                    
                    <div className="w-full">
                      <label className="label">
                        <span className="label-text">Class Name*</span>
                      </label>
                      <input
                        {...register("className", { required: true })}
                        type="text"
                        placeholder="Enter class name"
                        className="w-full input-bordered input "
                      />
                      {errors.className?.type === "required" && (
                        <span className="text-error">
                          Class name is required
                        </span>
                      )}
                    </div>

                   
                    <div className="w-full">
                      <label className="label">
                        <span className="label-text">Class image*</span>
                      </label>
                      <input
                        {...register("classImage", { required: true })}
                        type="url"
                        className="w-full input-bordered input"
                        placeholder="Enter class image url"
                      />
                      {errors.classImage?.type === "required" && (
                        <span className="text-error">
                          Class image is required
                        </span>
                      )}
                    </div>
                  </div>

            
                  <div className="gap-2 sm:flex">
               
                    <div className="w-full ">
                      <label className="label">
                        <span className="label-text">Price*</span>
                      </label>
                      <input
                        {...register("price", { required: true })}
                        type="number"
                        placeholder="Enter price"
                        className="w-full input-bordered input "
                      />
                      {errors.price?.type === "required" && (
                        <span className="text-error">Price is required</span>
                      )}
                    </div>

                  
                    <div className="w-full ">
                      <label className="label">
                        <span className="label-text">Seats*</span>
                      </label>
                      <input
                        {...register("seats", { required: true })}
                        type="number"
                        placeholder="Enter seats"
                        className="w-full input-bordered input "
                      />
                      {errors.seats?.type === "required" && (
                        <span className="text-error">Seats is required</span>
                      )}
                    </div>
                  </div>

              
                  <div className="gap-2 sm:flex">
                  
                    <div className="w-full ">
                      <label className="label">
                        <span className="label-text">Offer</span>
                      </label>
                      <input
                        {...register("offer")}
                        type="number"
                        placeholder="Enter offer"
                        className="w-full input-bordered input "
                      />
                    </div>

                 
                    <div className="w-full ">
                      <label className="label">
                        <span className="label-text">Instructor name*</span>
                      </label>
                      <input
                        {...register("instructorName", { required: true })}
                        type="text"
                        readOnly
                        placeholder="Enter instructor name"
                        className="w-full input-bordered input "
                      />
                      {errors.instructorName?.type === "required" && (
                        <span className="text-error">
                          InstructorName is required
                        </span>
                      )}
                    </div>
                  </div>

               
                  <div className="gap-2 sm:flex">
                  
                    <div className="w-full ">
                      <label className="label">
                        <span className="label-text">Instructor email*</span>
                      </label>
                      <input
                        {...register("instructorEmail", { required: true })}
                        type="email"
                        readOnly
                        placeholder="Enter instructor email"
                        className="w-full input-bordered input "
                      />
                      {errors.instructorEmail?.type === "required" && (
                        <span className="text-error">
                          Instructor email is required
                        </span>
                      )}
                    </div>

                
                    <div className="w-full ">
                      <label className="label">
                        <span className="label-text">Instructor image*</span>
                      </label>
                      <input
                        {...register("instructorImage", { required: true })}
                        type="url"
                        className="w-full input-bordered input"
                        placeholder="Enter instructor image url"
                      />
                      {errors.instructorImage?.type === "required" && (
                        <span className="text-error">
                          Instructor image is required
                        </span>
                      )}
                    </div>
                  </div>

             
                  <div className="gap-2 sm:flex">
              
                    <div className="w-full">
                      <label className="label">
                        <span className="label-text">Phone No*</span>
                      </label>
                      <input
                        {...register("phone", { required: true })}
                        type="tel"
                        placeholder="Enter phone no"
                        className="w-full input-bordered input"
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
                        className="w-full input-bordered input"
                      >
                        <option value="">select gender</option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                      </select>
                      {errors.gender?.type === "required" && (
                        <span className="text-error">Gender is required</span>
                      )}
                    </div>
                  </div>

                  <div className="items-center gap-2 sm:flex">
                 
                    <div className="w-full">
                      <label className="label">
                        <span className="label-text">Address*</span>
                      </label>
                      <input
                        {...register("address", { required: true })}
                        type="text"
                        placeholder="Enter address"
                        className="w-full input-bordered input"
                      />
                      {errors.address?.type === "required" && (
                        <span className="text-error">Address is required</span>
                      )}
                    </div>
                 
                    <div className="self-stretch w-full">
                      <label className="invisible label">
                        <span className="label-text">Address*</span>
                      </label>
                      <input
                        type="submit"
                        value="Submit"
                        className="btn-secondary btn-block btn"
                      />
                    </div>
                  </div>
                </div>

              
          
           <div className="w-full ">
                    <label className="label">
                      <span className="label-text">Class image*</span>
                    </label>
                    <input
                      {...register("classImage", { required: true })}
                      type="file"
                      className="w-full file-input file-input-bordered file-input-warning"
                    />
                    {errors.classImage?.type === "required" && <span className="text-error">Class image is required</span>}
                  </div> 

               
                <div>
               
               <div className="w-full ">
                    <label className="label">
                      <span className="label-text">Instructor image*</span>
                    </label>
                    <input
                      {...register("instructorImage", { required: true })}
                      type="file"
                      className="w-full file-input file-input-bordered file-input-warning"
                    />
                    {errors.instructorImage?.type === "required" && <span className="text-error">Instructor image is required</span>}
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

export default InstructorMyClassUpdatePage;
*/
