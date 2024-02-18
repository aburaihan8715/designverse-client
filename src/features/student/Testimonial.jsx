const Testimonial = () => {
  return <div>Testimonial</div>;
};

export default Testimonial;

/*
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import SectionHeading from "../../ui/SectionHeading";
import { useQuery } from "react-query";
import LoadingSpinner from "../../ui/LoadingSpinner";
import ErrorMessage from "../../ui/ErrorMessage";
import axios from "axios";

const Testimonial = () => {
  const {
    isPending,
    error,
    data: testimonials = [],
  } = useQuery({
    queryKey: ["testimonialsData"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/testimonials");
      return res.data;
    },
  });

  // console.log(testimonials);

  if (isPending) return <LoadingSpinner />;
  if (error) return <ErrorMessage>{error.message}</ErrorMessage>;

  return (
    <div className="relative bg-[url('/banner2.jpg')] bg-center px-10 py-8">
      <div className="relative pt-24">
        <div className="absolute top-0 z-10 -translate-x-1/2 left-1/2">
          <SectionHeading
            subHeading={`What Our Clients Say`}
            heading={`testimonials`}
          />
        </div>
        <div className="text-center">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {testimonials.map((item) => (
              <SwiperSlide key={item._id}>
                <div className="px-12 py-6 ">
                
                  <div className="mt-4">
                    <div className="avatar">
                      <div className="rounded-full w-14 ring ring-primary ring-offset-2 ring-offset-base-100">
                        <img src={item.photo} alt="user photo" />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <Rating
                      className=""
                      style={{ maxWidth: 180 }}
                      value={item.rating}
                      readOnly
                    />
                  </div>

                  <div className="">
                    <p className="text-white opacity-80">{item.message}</p>
                    <div className="mt-1">
                      <span className="text-xl font-semibold text-white">
                        -{item.userName}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
    </div>
  );
};

export default Testimonial;
*/
