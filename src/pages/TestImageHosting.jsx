const image_bb_api_key = import.meta.env.VITE_IMAGEBB_API_KEY;
const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_bb_api_key}`;

const TestImageHosting = () => {
  const submitHandler = (e) => {
    e.preventDefault();

    const file = e.target[1].files[0];

    let formData = new FormData();
    formData.append("image", file);

    e.target.reset();

    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const imgURL = data.data.display_url;
          console.log(imgURL);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });

    // let formData = new FormData();
    // formData.append("key1", "value1");
    // formData.append("key2", "value2");

    // const values = [...formData.entries()];
    // console.log(values);
    // console.log(values.flat());

    // List key/value pairs
    // for (let [name, value] of formData) {
    //   alert(`${name} = ${value}`); // key1 = value1, then key2 = value2
    // }
  };
  return (
    <div className="mx-auto my-10 max-w-md border p-4">
      <div>
        <h2 className="text-center text-4xl font-medium uppercase">Add data</h2>
      </div>
      <form onSubmit={submitHandler}>
        <div className="">
          {/* email input */}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Your email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              className="input-bordered input w-full "
            />
          </div>
          {/*user image input */}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Pick a user image</span>
            </label>
            <input
              type="file"
              name="userImage"
              className="file-input-bordered file-input w-full"
            />
          </div>
          {/* class image input  */}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Pick a class image</span>
            </label>
            <input
              name="userImage"
              type="file"
              className="file-input-bordered file-input w-full "
            />
          </div>
          {/* submit button */}
          <div className="mt-2 text-end">
            <input type="submit" value="Submit" className="btn" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default TestImageHosting;
