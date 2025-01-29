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
      className=""
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
    >
      <SwiperSlide>
        <img
          className="w-full md:h-[550px] object-cover"
          src="https://i.ibb.co.com/6FCPG9t/venom.png"
          alt=""
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-black/40 to-transparent"></div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full md:h-[550px] object-top"
          src="https://i.ibb.co.com/pzppsqC/d-w.webp"
          alt=""
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-black/40 to-transparent"></div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full md:h-[550px] object-cover"
          src="https://i.ibb.co.com/dkLwdTS/dune.jpg"
          alt=""
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-black/40 to-transparent"></div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full md:h-[550px] lg:object-cover"
          src="https://i.ibb.co.com/dr7Lt5B/FNUS4-Fp-X0-Ac-UE1c.jpg"
          alt=""
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-black/40 to-transparent"></div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full md:h-[550px] lg:object-cover"
          src="https://i.ibb.co.com/Bs8pm8Z/Fvn-RS1t-Xw-AMZTN.jpg"
          alt=""
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-black/40 to-transparent"></div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full md:h-[550px] lg:object-fill"
          src="https://i.ibb.co.com/r0SFtqX/ant-man.jpg"
          alt=""
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-black/40 to-transparent"></div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full md:h-[550px] lg:object-fill"
          src="https://i.ibb.co.com/F69D2Q8/Maharaja-Movie-Review-2024-Indian-Community.webp"
          alt=""
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-black/40 to-transparent"></div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full md:h-[550px] lg:object-fill"
          src="https://i.ibb.co.com/RCzc31y/hq720.jpg"
          alt=""
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-black/40 to-transparent"></div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full md:h-[550px] lg:object-fill"
          src="https://i.ibb.co.com/DRWc9XH/et00417088-vdyrehwuyn-landscape.jpg"
          alt=""
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-black/40 to-transparent"></div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
