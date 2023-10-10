import AddReviewForm from "../features/student/AddReviewForm";
import SectionHeading from "../ui/SectionHeading";

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
        <AddReviewForm />
      </div>
    </div>
  );
};

export default AddReviewPage;
