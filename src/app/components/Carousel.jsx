import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import React from "react";
import { CERTIFICATES } from "../constants";
import Image from "./Image";

function Carousel() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper h-56 w-56"
      >
        <SwiperSlide>
          <Image
            path={CERTIFICATES.image}
            alt={CERTIFICATES.title}
            height={952}
            width={1280}
            className="rounded-md object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            path="js.jpg"
            alt="js course"
            height={952}
            width={1280}
            className="rounded-md object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            path="letbigin.jpg"
            alt="let bigin fsd course"
            height={952}
            width={1280}
            className="rounded-md object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            path="htmlcss.jpg"
            alt="html css course"
            height={952}
            width={1280}
            className="rounded-md object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            path="git.jpg"
            alt="git course"
            height={952}
            width={1280}
            className="rounded-md object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Carousel;
