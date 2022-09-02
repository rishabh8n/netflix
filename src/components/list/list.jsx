import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss/navigation";
import "swiper/scss";
import "./list.scss";
import Cards from "../cards/cards";

function List() {
  return (
    <div className="list">
      <span>New Releases</span>
      <Swiper
        className="myslider"
        modules={[Navigation]}
        loop={true}
        freeMode={true}
        spaceBetween={10}
        slidesPerView={5}
        loopAdditionalSlides={5}
        speed={500}
        navigation={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Cards />
        </SwiperSlide>
        <SwiperSlide>
          <Cards />
        </SwiperSlide>
        <SwiperSlide>
          <Cards />
        </SwiperSlide>
        <SwiperSlide>
          <Cards />
        </SwiperSlide>
        <SwiperSlide>
          <Cards />
        </SwiperSlide>
        <SwiperSlide>
          <Cards />
        </SwiperSlide>
        <SwiperSlide>
          <Cards />
        </SwiperSlide>
        <SwiperSlide>
          <Cards />
        </SwiperSlide>
        <SwiperSlide>
          <Cards />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default List;
