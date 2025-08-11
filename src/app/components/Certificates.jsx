"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards, Autoplay } from "swiper/modules";
import React from "react";
import { CERTIFICATES } from "../constants";
import Image from "./Image";
import SectionHeader from "./SectionHeader";

const constantVariable = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

function Certificate() {
  return (
    <div id="certificates">
    
       <SectionHeader title={"Certificates"}/>
    
      {/* Caursoul */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={constantVariable}
        className="p-3 sm:p-1"
      >
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: true }}
          className="mySwiper h-[20rem] max-w-md sm:h-[33rem] sm:max-w-2xl"
        >
          {CERTIFICATES.map((elem, index) => (
            <SwiperSlide key={index}>
              <Image
                path={elem.image}
                alt={elem.title}
                height={952}
                width={1280}
                className="rounded-md object-cover pb-1"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
}

export default Certificate;
