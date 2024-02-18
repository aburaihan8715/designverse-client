const ContactUsPage = () => {
  return <div>ContactUsPage</div>;
};

export default ContactUsPage;
/*

import { Helmet } from "react-helmet-async";
import SectionHeading from "../ui/SectionHeading";

const ContactUsPage = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    alert("Not implement yet...");
  };
  return (
    <div className="py-8">
      <Helmet>
        <title>FashionVerse | ContactUsPage</title>
      </Helmet>
      <div>
        <div className="max-w-md p-8 mx-auto border rounded-md shadow-lg">
          <SectionHeading
            subHeading={`Send Us a Message`}
            heading={`contact form`}
          ></SectionHeading>

          <div className="">
           
            <div>
              <form onSubmit={submitHandler}>
                <div className="grid gap-4 sm:grid-cols-2 ">
                  <div className="w-full form-control ">
                    <label className="label">
                      <span className="label-text">Name*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter name"
                      className="w-full input-bordered input "
                    />
                  </div>

                  <div className="w-full form-control ">
                    <label className="label">
                      <span className="label-text">Email*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter email"
                      className="w-full input-bordered input "
                    />
                  </div>
                </div>

                <div className="">
                  <div className="w-full form-control ">
                    <label className="label">
                      <span className="label-text">Phone*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter phone"
                      className="w-full input-bordered input "
                    />
                  </div>
                </div>

                <div className="">
                  <div className="w-full form-control ">
                    <label className="label">
                      <span className="label-text">Message*</span>
                    </label>
                    <textarea
                      placeholder="Your message (0-250) characters"
                      rows="2"
                      className="w-full textarea-bordered textarea"
                    ></textarea>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <button className="btn-secondary btn-block btn">
                    Send Message 🚀
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
*/
