import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Container from "../../../components/Container/Container";

import slide1 from "../../../assets/images/slider/slider1.jpg";
import slide2 from "../../../assets/images/slider/slider2.jpg";
import slide3 from "../../../assets/images/slider/slider3.jpg";
import slide4 from "../../../assets/images/slider/slider4.jpg";
import slide5 from "../../../assets/images/slider/slider5.jpg";
import slide6 from "../../../assets/images/slider/slider6.jpg";

const Slider = () => {
  return (
    <div>
      <Container className="text-center">
        <Carousel>
          <div className="bg-slate-500">
            <img loading="lazy" src={slide1} />
            <p className="legend">
              History of Fashion Design: This heading would explore the evolution of fashion design throughout different eras, from ancient
              civilizations to modern-day trends. It would cover influential designers, iconic fashion moments, and the impact of cultural and
              societal changes on fashion.
            </p>
          </div>
          <div className="bg-slate-500">
            <img loading="lazy" src={slide2} />
            <p className="legend">
              Elements of Fashion Design: Under this heading, one can delve into the fundamental elements that constitute fashion design. This would
              include topics such as color theory, fabric selection, silhouette, texture, pattern, and proportion. It would provide insights into how
              these elements are utilized to create visually appealing and harmonious designs.
            </p>
          </div>
          <div className="bg-slate-500">
            <img loading="lazy" src={slide3} />
            <p className="legend">
              Fashion Design Techniques: This heading would focus on the various techniques and processes involved in fashion design. It would
              encompass topics like sketching and illustration, draping, patternmaking, sewing, garment construction, and the integration of
              technology in the design process.
            </p>
          </div>
          <div className="bg-slate-500">
            <img loading="lazy" src={slide4} />
            <p className="legend">
              Fashion Design and Sustainability: With increasing awareness about the environmental impact of the fashion industry, this heading would
              explore the concept of sustainable fashion design. It would cover topics such as eco-friendly materials, ethical production practices,
              upcycling, slow fashion, and the role of designers in creating a more sustainable future.
            </p>
          </div>
          <div className="bg-slate-500">
            <img loading="lazy" src={slide5} />
            <p className="legend">
              Fashion Design and Cultural Influences: This heading would examine how culture and diversity influence fashion design. It would explore
              the interplay between different cultures, traditions, and fashion trends, showcasing how designers draw inspiration from global
              perspectives to create unique and inclusive designs.
            </p>
          </div>
          <div className="bg-slate-500">
            <img loading="lazy" src={slide6} />
            <p className="legend">
              Fashion Design and Technology: In this heading, the intersection of fashion design and technology would be explored. It would cover
              topics such as digital design tools, 3D printing, wearable technology, smart textiles, and the integration of artificial intelligence in
              fashion design processes. It would highlight the innovative ways in which technology is shaping the future of fashion.
            </p>
          </div>
        </Carousel>
      </Container>
    </div>
  );
};

export default Slider;
