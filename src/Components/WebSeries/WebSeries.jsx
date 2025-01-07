import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./WebSeries.css";
import { EffectCoverflow, Pagination } from "swiper/modules";
const WebSeries = () => {
  return (
    <Swiper
      style={{ height: "400px" }}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img
          className="w-1/2 mx-auto"
          src="https://i.ibb.co.com/jfd5Kdr/5c6d4df70c302af86d89050bb97081e29f3b3d9b588471580ccc3395ee659644.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-1/2 mx-auto"
          src="https://i.ibb.co.com/M8XdhLW/All-of-us-are-dead.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-1/2 mx-auto"
          src="https://i.ibb.co.com/wKYjPtx/7e091c161324913-63c3824eed49e.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-1/2 mx-auto"
          src="https://i.ibb.co.com/r5RbTHf/GXu2cr-LXYAAe-AYH-900x900.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
      </SwiperSlide>
    </Swiper>
  );
};

export default WebSeries;
