import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
    >
      <SwiperSlide>
        <img
          className="w-full lg:h-screen object-fill"
          src="https://i.ibb.co.com/6FCPG9t/venom.png"
          alt=""
        />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <img
          className="w-full lg:h-screen   object-fill"
          src="https://i.ibb.co.com/pzppsqC/d-w.webp"
          alt=""
        />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <img
          className="w-full lg:h-screen   object-fill"
          src="https://i.ibb.co.com/yddKTc0/dune2-2.webp"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
