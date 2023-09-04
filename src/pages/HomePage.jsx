import { Helmet } from "react-helmet-async";
import Slider from "../ui/Slider";
import PopularClasses from "../features/classes/PopularClasses";
import PopularInstructors from "../features/classes/PopularInstructors";
import Testimonial from "../features/users/Testimonial";
// import PopularClasses from "../features/classes/PopularClasses";
// import PopularInstructors from "../features/classes/PopularInstructors";
// import Testimonial from "../features/users/Testimonial";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>FashionVerse | Home</title>
      </Helmet>
      <Slider />
      <PopularClasses />
      <PopularInstructors />
      <Testimonial />
    </>
  );
};

export default HomePage;
