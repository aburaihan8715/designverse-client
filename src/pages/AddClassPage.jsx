import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const AddClassPage = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // FIXME:
  // const img_hosting_token = import.meta.env.VITE_image_hosting_api_key;
  // const img_hosting_url = `https://api.imgbb.com/1/upload?&key=${img_hosting_token}`;

  const submitHandler = (data) => {
    const classData = {
      user: {
        name: data.instructorName,
        image: data.instructorImage,
        email: data.instructorEmail,
        number_of_classes_taken: null,
        name_of_classes_taken: null,
        role: "student",
        follower: null,
        phone_no: data.phone,
        gender: data.gender,
      },
      class: {
        name: data.className,
        image: data.classImage,
        available_seats: Number(data.seats),
        price: Number(data.price),
        status: "pending",
        enroll_student: null,
        feedback: null,
        rating: null,
        rating_message: null,
        offer: data.offer || 0,
      },
    };
    console.log(classData);
    // send data to server using axios
    axios
      .post("https://fashion-verse-server.vercel.app/classes", classData)
      .then((data) => {
        if (data.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Class added successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });

    reset();

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
        <title>FashionVerse | Add class</title>
      </Helmet>

      <div className="p-1">
        <div className="border mx-auto p-8 bg-slate-50">
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="space-y-3">
              <div className="text-center ">
                <h4 className="text-3xl uppercase underline underline-offset-4 decoration-secondary">Add class</h4>
              </div>

              <div className="">
                <div>
                  {/* group 01 */}
                  <div className="sm:flex gap-2">
                    {/* class name input */}
                    <div className="w-full">
                      <label className="label">
                        <span className="label-text">Class Name*</span>
                      </label>
                      <input
                        {...register("className", { required: true })}
                        type="text"
                        placeholder="Enter class name"
                        className="input input-bordered w-full "
                      />
                      {errors.className?.type === "required" && <span className="text-error">Class name is required</span>}
                    </div>

                    {/* class image input type url */}
                    <div className="w-full ">
                      <label className="label">
                        <span className="label-text">Class image*</span>
                      </label>
                      <input
                        {...register("classImage", { required: true })}
                        type="url"
                        className="input input-bordered w-full"
                        placeholder="Enter class image url"
                      />
                      {errors.classImage?.type === "required" && <span className="text-error">Class image is required</span>}
                    </div>
                  </div>

                  {/* group 02 */}
                  <div className="sm:flex gap-2">
                    {/* price input */}
                    <div className="w-full ">
                      <label className="label">
                        <span className="label-text">Price*</span>
                      </label>
                      <input
                        {...register("price", { required: true })}
                        type="number"
                        placeholder="Enter price"
                        className="input input-bordered w-full "
                      />
                      {errors.price?.type === "required" && <span className="text-error">Price is required</span>}
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
                        className="input input-bordered w-full "
                      />
                      {errors.seats?.type === "required" && <span className="text-error">Seats is required</span>}
                    </div>
                  </div>

                  {/* group 03 */}
                  <div className="sm:flex gap-2">
                    {/* offer input */}
                    <div className="w-full ">
                      <label className="label">
                        <span className="label-text">Offer</span>
                      </label>
                      <input {...register("offer")} type="number" placeholder="Enter offer" className="input input-bordered w-full " />
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
                        className="input input-bordered w-full "
                      />
                      {errors.instructorName?.type === "required" && <span className="text-error">InstructorName is required</span>}
                    </div>
                  </div>

                  {/* group 04 */}
                  <div className="sm:flex gap-2">
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
                        className="input input-bordered w-full "
                      />
                      {errors.instructorEmail?.type === "required" && <span className="text-error">Instructor email is required</span>}
                    </div>

                    {/* instructor image input type url*/}
                    <div className="w-full ">
                      <label className="label">
                        <span className="label-text">Instructor image*</span>
                      </label>
                      <input
                        {...register("instructorImage", { required: true })}
                        type="url"
                        className="input input-bordered w-full"
                        placeholder="Enter instructor image url"
                      />
                      {errors.instructorImage?.type === "required" && <span className="text-error">Instructor image is required</span>}
                    </div>
                  </div>

                  {/* group 05 */}
                  <div className="sm:flex gap-2">
                    {/* phone no input */}
                    <div className="w-full">
                      <label className="label">
                        <span className="label-text">Phone No*</span>
                      </label>
                      <input
                        {...register("phone", { required: true })}
                        type="tel"
                        placeholder="Enter phone no"
                        className="input input-bordered w-full"
                      />
                      {errors.phone?.type === "required" && <span className="text-error">Phone no is required</span>}
                    </div>

                    <div className="w-full">
                      <label className="label">
                        <span className="label-text">Gender*</span>
                      </label>
                      <select {...register("gender", { required: true })} className="input input-bordered w-full">
                        <option value="">select gender</option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                      </select>
                      {errors.gender?.type === "required" && <span className="text-error">Gender is required</span>}
                    </div>
                  </div>

                  {/* add class button*/}
                  <div className="w-full mt-9">
                    <input type="submit" value="Submit" className="btn btn-block btn-secondary" />
                  </div>
                </div>

                {/* class image input type file */}
                {/* // FIXME: */}
                {/* <div className="w-full ">
                    <label className="label">
                      <span className="label-text">Class image*</span>
                    </label>
                    <input
                      {...register("classImage", { required: true })}
                      type="file"
                      className="file-input file-input-bordered file-input-warning w-full"
                    />
                    {errors.classImage?.type === "required" && <span className="text-error">Class image is required</span>}
                  </div> */}

                {/* right part */}
                <div>
                  {/* instructor image input type file*/}
                  {/* // FIXME: */}
                  {/* <div className="w-full ">
                    <label className="label">
                      <span className="label-text">Instructor image*</span>
                    </label>
                    <input
                      {...register("instructorImage", { required: true })}
                      type="file"
                      className="file-input file-input-bordered file-input-warning w-full"
                    />
                    {errors.instructorImage?.type === "required" && <span className="text-error">Instructor image is required</span>}
                  </div> */}
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
