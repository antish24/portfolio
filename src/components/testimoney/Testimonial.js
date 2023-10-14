"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./testimonial.module.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { MdPerson } from "react-icons/md";

const Testimonial = ({testmony}) => {
  
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className={styles.swipercont}
    >
      {testmony && testmony.map((list) => (
        <SwiperSlide key={list.id} className={styles.slide}>
          <span>
            <MdPerson size={50} />
          </span>
          <span className={styles.name}>{list.name}</span>
          <span className={styles.msg}>{list.msg}</span>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Testimonial;
