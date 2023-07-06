import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import Container from "../../../components/Container/Container";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AddClassPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { user } = useAuth();
  // FIXME:
  // const img_hosting_token = import.meta.env.VITE_image_hosting_api_key;
  // const img_hosting_url = `https://api.imgbb.com/1/upload?&key=${img_hosting_token}`;

  const submitHandler = (data) => {
    const classData = {
      className: data.className,
      classImage: data.classImage,
      instructorName: data.instructorName,
      instructorImage: data.instructorImage,
      instructorEmail: data.instructorEmail,
      seats: Number(data.seats),
      price: Number(data.price),
      status: "pending",
    };
    console.log(classData);
    // send data to server using axios
    axios
      .post("https://fashion-verse-server-aburaihan8715.vercel.app/classes", classData)
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

      <Container className="">
        <div className="border max-w-2xl mx-auto p-8 bg-slate-50">
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="space-y-3">
              <div className="text-center ">
                <h4 className="text-3xl uppercase underline underline-offset-4 decoration-secondary">Add class</h4>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {/* left part */}
                <div>
                  {/* class name input */}
                  <div className="w-full ">
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

                {/* right part */}
                <div>
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

                  {/* instructor email input */}
                  <div className="w-full ">
                    <label className="label">
                      <span className="label-text">Instructor email*</span>
                    </label>
                    <input
                      {...register("instructorEmail", { required: true })}
                      type="text"
                      defaultValue={user?.email}
                      readOnly
                      placeholder="Enter instructor email"
                      className="input input-bordered w-full "
                    />
                    {errors.instructorEmail?.type === "required" && <span className="text-error">Instructor email is required</span>}
                  </div>

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

                  {/* add class button*/}
                  <div className="w-full mt-9">
                    <input type="submit" value="Submit" className="btn btn-block btn-secondary" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default AddClassPage;
