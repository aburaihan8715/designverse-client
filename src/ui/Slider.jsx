import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import slide1 from "../assets/images/slider/slider1.jpg";
import slide2 from "../assets/images/slider/slider2.jpg";
import slide3 from "../assets/images/slider/slider3.jpg";
import slide4 from "../assets/images/slider/slider4.jpg";
import slide5 from "../assets/images/slider/slider5.jpg";
import slide6 from "../assets/images/slider/slider6.jpg";

const Slider = () => {
  return (
    <div>
      <div className="text-center">
        <Carousel>
          {/* item 01 */}
          <div className="">
            <img className="max-h-screen" loading="lazy" src={slide1} />
            <div className="legend hidden sm:block">
              <h3 className="text-4xl">History of Fashion Design</h3>
              <p className="mt-4 text-sm sm:text-xl">
                This heading would explore the evolution of fashion design
                throughout different eras, from ancient civilizations to
                modern-day trends. It would cover influential designers, iconic
                fashion moments, and the impact of cultural and societal changes
                on fashion.
              </p>
            </div>
          </div>

          {/* item 02 */}
          <div className="">
            <img className="max-h-screen" loading="lazy" src={slide2} />

            <div className="legend hidden sm:block">
              <h3 className="text-4xl">Elements of Fashion Design</h3>
              <p className="mt-4 text-xl">
                Under this heading, one can delve into the fundamental elements
                that constitute fashion design. This would include topics such
                as color theory, fabric selection, silhouette, texture, pattern,
                and proportion. It would provide insights into how these
                elements are utilized to create visually appealing and
                harmonious designs.
              </p>
            </div>
          </div>

          {/* item 03 */}
          <div className="">
            <img className="max-h-screen" loading="lazy" src={slide3} />

            <div className="legend hidden sm:block">
              <h3 className="text-4xl">Fashion Design Techniques</h3>
              <p className="mt-4 text-xl">
                This heading would focus on the various techniques and processes
                involved in fashion design. It would encompass topics like
                sketching and illustration, draping, patternmaking, sewing,
                garment construction, and the integration of technology in the
                design process.
              </p>
            </div>
          </div>

          {/* item 04 */}
          <div className="">
            <img className="max-h-screen" loading="lazy" src={slide4} />

            <div className="legend hidden sm:block">
              <h3 className="text-4xl">Fashion Design and Sustainability</h3>
              <p className="mt-4 text-xl">
                With increasing awareness about the environmental impact of the
                fashion industry, this heading would explore the concept of
                sustainable fashion design. It would cover topics such as
                eco-friendly materials, ethical production practices, upcycling,
                slow fashion, and the role of designers in creating a more
                sustainable future.
              </p>
            </div>
          </div>

          {/* item 05 */}
          <div className="">
            <img className="max-h-screen" loading="lazy" src={slide5} />
            <div className="legend hidden sm:block">
              <h3 className="text-4xl">
                Fashion Design and Cultural Influences
              </h3>
              <p className="mt-4 text-xl">
                This heading would examine how culture and diversity influence
                fashion design. It would explore the interplay between different
                cultures, traditions, and fashion trends, showcasing how
                designers draw inspiration from global perspectives to create
                unique and inclusive designs.
              </p>
            </div>
          </div>

          {/* item 06 */}
          <div className="">
            <img className="max-h-screen" loading="lazy" src={slide6} />
            <div className="legend hidden sm:block">
              <h3 className="text-4xl">Fashion Design and Technology</h3>
              <p className="mt-4 text-xl">
                In this heading, the intersection of fashion design and
                technology would be explored. It would cover topics such as
                digital design tools, 3D printing, wearable technology, smart
                textiles, and the integration of artificial intelligence in
                fashion design processes. It would highlight the innovative ways
                in which technology is shaping the future of fashion.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
