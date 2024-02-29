import { Rating } from "@smastrom/react-rating";
import SectionHeading from "../../components/ui/SectionHeading";

const AddReviewPage = () => {
  return (
    <div className="w-full">
      <div>
        <SectionHeading
          heading={`Sharing is Caring!!!`}
          subHeading={`GIVE A REVIEW...`}
        />
      </div>
      <div>
        <div className="max-w-lg p-10 mx-auto border rounded-md ">
          <h3 className="text-3xl font-semibold text-center text-transparent uppercase bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text">
            Rate Us
          </h3>
          <div className="flex justify-center mt-2">
            <Rating className="" style={{ maxWidth: 150 }} value={5} readOnly />
          </div>
          <form>
            <div className="w-full form-control">
              <label htmlFor="rating" className="label">
                <span className="label-text">Rate</span>
              </label>
              <select
                defaultValue=""
                id="rating"
                className="select-bordered select"
              >
                <option value="" disabled selected>
                  Rate (1-5)
                </option>
                <option defaultValue="1">1</option>
                <option defaultValue="2">2</option>
                <option defaultValue="3">3</option>
                <option defaultValue="4">4</option>
                <option defaultValue="5">5</option>
              </select>
            </div>

            <div className="mt-2 form-control">
              <label htmlFor="message" className="label">
                <span className="label-text">Your message</span>
              </label>
              <textarea
                className="w-full textarea-bordered textarea"
                name=""
                id="message"
                rows="3"
                maxLength="500"
                minLength="100"
                placeholder="Please review within (250 characters)"
              ></textarea>
            </div>

            <div className="mt-2 text-right">
              <button className="btn-secondary btn-sm btn" type="submit">
                submit &rarr;
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReviewPage;
/*
import AddTestimonialForm from "../features/student/AddTestimonialForm";
import SectionHeading from "../ui/SectionHeading";

const AddTestimonialPage = () => {
  return (
    <div className="w-full">
      <div>
        <SectionHeading
          heading={`Sharing is Caring!!!`}
          subHeading={`GIVE A REVIEW...`}
        />
      </div>
      <div>
        <AddTestimonialForm />
      </div>
    </div>
  );
};

export default AddTestimonialPage;
*/
