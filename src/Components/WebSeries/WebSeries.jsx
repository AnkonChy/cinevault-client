import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./WebSeries.css";

const WebSeries = () => {
  return (
    <div className="webSe">
      <Swiper
        // speed={7000}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={false}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          waitForTransition: true,
        }}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co.com/jfd5Kdr/5c6d4df70c302af86d89050bb97081e29f3b3d9b588471580ccc3395ee659644.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co.com/M8XdhLW/All-of-us-are-dead.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co.com/wKYjPtx/7e091c161324913-63c3824eed49e.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co.com/r5RbTHf/GXu2cr-LXYAAe-AYH-900x900.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co.com/nMjrKL9F/mirzapur-season-3-release-date.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co.com/XPK9nxj/photo.webp" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default WebSeries;
