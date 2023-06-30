import { Helmet } from "react-helmet-async";
import Container from "../../components/Container/Container";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

const ContactUsPage = () => {
  return (
    <div className="py-8">
      <Helmet>
        <title>FashionVerse | ContactUsPage</title>
      </Helmet>
      <Container>
        <div className="border p-8 max-w-xl mx-auto">
          <SectionHeading subHeading={`Send Us a Message`} heading={`contact form`}></SectionHeading>

          <div className="">
            {/* FIXME: div with form*/}
            <div>
              <div className="">
                <div className="grid sm:grid-cols-2 gap-4 ">
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text">Name*</span>
                    </label>
                    <input type="text" placeholder="Enter your name" className="input input-bordered w-full " />
                  </div>

                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text">Email*</span>
                    </label>
                    <input type="text" placeholder="Enter your email" className="input input-bordered w-full " />
                  </div>
                </div>

                <div className="">
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text">Phone*</span>
                    </label>
                    <input type="text" placeholder="Enter your name" className="input input-bordered w-full " />
                  </div>
                </div>

                <div className="">
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text">Message*</span>
                    </label>
                    <textarea placeholder="Your message" rows="6" className="textarea textarea-bordered w-full"></textarea>
                  </div>
                </div>

                <div className=" inline-flex bg-white mt-4 p-2 gap-10 items-center">
                  <div className="inline-flex gap-2 items-center">
                    <input type="checkbox" className="w-5 h-5" />
                    <label htmlFor="">I am not a robot</label>
                  </div>
                  <div>🔄</div>
                </div>
                <div className="text-center">
                  <button className="btn btn-secondary btn-sm">Send Message 🚀</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactUsPage;
