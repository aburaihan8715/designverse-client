import PopularCourses from "../../components/home/PopularCourses";
import PopularInstructors from "../../components/home/PopularInstructors";
import Slider from "../../components/home/Slider";

const HomePage = () => {
  return (
    <>
      <Slider />
      <PopularCourses />
      <PopularInstructors />
    </>
  );
};

export default HomePage;

/*
import { Helmet } from "react-helmet-async";
import PopularClasses from "../features/classes/PopularClasses";
import PopularInstructors from "../features/instructor/PopularInstructors";
import Testimonial from "../features/student/Testimonial";
import Slider from "../ui/Slider";

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
*/
