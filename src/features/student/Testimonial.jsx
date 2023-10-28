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
    <div className="relative bg-[url('/banner2.jpg')] bg-center px-10 py-8">
      <div>
        <SectionHeading
          subHeading={`What Our Clients Say`}
          heading={`testimonials`}
        ></SectionHeading>
        <div className="text-center">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {[...Array(6).keys()].map((item) => (
              <SwiperSlide key={item}>
                <div className="px-12 py-6 ">
                  <div className="flex justify-center">
                    <Rating
                      className=""
                      style={{ maxWidth: 180 }}
                      value={4}
                      readOnly
                    />
                  </div>
                  {/* user image */}
                  <div className="mt-4">
                    <div className="avatar">
                      <div className="w-14 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
                        <img src="user-demo.jpg" />
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <p className="text-white opacity-80">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Vel iusto hic debitis odio repudiandae. Odit modi, qui
                      obcaecati eveniet unde quos itaque asperiores amet
                      blanditiis aperiam laboriosam, placeat labore atque.
                    </p>
                    <div className="mt-4">
                      <span className="text-2xl font-semibold uppercase  text-white">
                        Rony
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="absolute left-0 top-0 h-full w-full bg-black opacity-50" />
    </div>
  );
};

export default Testimonial;
