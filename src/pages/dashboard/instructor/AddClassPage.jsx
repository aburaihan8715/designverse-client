import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import Container from "../../../components/Container/Container";

const AddClassPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    // console.log(data);
    console.log(data.classImage[0].name);
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

                  {/* class image input */}
                  <div className="w-full ">
                    <label className="label">
                      <span className="label-text">Class image*</span>
                    </label>
                    <input
                      {...register("classImage", { required: true })}
                      type="file"
                      className="file-input file-input-bordered file-input-warning w-full"
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
                      placeholder="Enter instructor email"
                      className="input input-bordered w-full "
                    />
                    {errors.instructorEmail?.type === "required" && <span className="text-error">Instructor email is required</span>}
                  </div>

                  {/* instructor image input */}
                  <div className="w-full ">
                    <label className="label">
                      <span className="label-text">Instructor image*</span>
                    </label>
                    <input
                      {...register("instructorImage", { required: true })}
                      type="file"
                      className="file-input file-input-bordered file-input-warning w-full"
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
