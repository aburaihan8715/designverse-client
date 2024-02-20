import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// import slide1 from "../../assets/images/slider/slider1.jpg";
// import slide2 from "../../assets/images/slider/slider2.jpg";
// import slide3 from "../../assets/images/slider/slider3.jpg";

const Slider = () => {
  return (
    <section className="text-center">
      <Carousel>
        {/* item 01 */}
        <div className="">
          <img
            className="max-h-screen"
            loading="lazy"
            src="https://images.pexels.com/photos/56759/pexels-photo-56759.jpeg?auto=compress&cs=tinysrgb&w=2000"
          />
        </div>

        {/* item 02 */}
        <div className="">
          <img
            className="max-h-screen"
            loading="lazy"
            src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=2000"
          />
        </div>

        {/* item 03 */}
        <div className="">
          <img
            className="max-h-screen"
            loading="lazy"
            src="https://images.pexels.com/photos/245032/pexels-photo-245032.jpeg?auto=compress&cs=tinysrgb&w=2000"
          />
        </div>
      </Carousel>
    </section>
  );
};

export default Slider;
