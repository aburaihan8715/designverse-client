import PopularClasses from "./PopularClasses/PopularClasses";
import PopularInstructors from "./PopularInstructors/PopularInstructors";
import Slider from "./Slider/Slider";
import Testimonial from "./Testimonial/Testimonial";

const HomePage = () => {
  return (
    <>
      <Slider></Slider>
      <PopularClasses></PopularClasses>
      <PopularInstructors></PopularInstructors>
      <Testimonial></Testimonial>
    </>
  );
};

export default HomePage;
