import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import SectionHeading from "../../ui/SectionHeading";

const Testimonial = () => {
  return (
    <div className="py-8">
      <div>
        <SectionHeading subHeading={`What Our Clients Say`} heading={`testimonials`}></SectionHeading>
        <div className="text-center">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {[...Array(6).keys()].map((item) => (
              <SwiperSlide key={item}>
                <div className="py-6 px-12">
                  <div className="flex justify-center">
                    <Rating className="" style={{ maxWidth: 180 }} value={4} readOnly />
                  </div>
                  <div className="mt-4">
                    <span className="text-5xl">&ldquo;</span>
                  </div>
                  <div className="">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel iusto hic debitis odio repudiandae. Odit modi, qui obcaecati
                      eveniet unde quos itaque asperiores amet blanditiis aperiam laboriosam, placeat labore atque.
                    </p>
                    <div className="mt-4">
                      <span className="uppercase text-2xl font-semibold text-orange-700">Rony</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
