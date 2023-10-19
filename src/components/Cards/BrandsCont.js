"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./brandscont.module.css";

// import required modules
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const BrandsCont = ({ brands }) => {

  const [openSmall,setOpenSmall]=useState(false)
  
  useEffect(() => {
    const handleResize = () => {
      setOpenSmall(window.innerWidth < 700);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call handleResize initially
    handleResize();

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      {
        !openSmall?
        <Swiper
        spaceBetween={10}
        centeredSlides={true}
        slidesPerView={5}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className={styles.swipercont}
      >
        {brands &&
          brands.map((list) => (
            <SwiperSlide key={list._id} className={styles.slide}>
              <Image
                src={`/${list.partnerLogo}`}
                alt={list.partnerName}
                width={100}
                height={100}
              />
            </SwiperSlide>
          ))}
      </Swiper>
      :
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        slidesPerView={3}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className={styles.swipercontsmall}
      >
        {brands &&
          brands.map((list) => (
            <SwiperSlide key={list._id} className={styles.slidesmall}>
              <Image
                src={`/${list.partnerLogo}`}
                alt={list.partnerName}
                width={100}
                height={100}
              />
            </SwiperSlide>
          ))}
      </Swiper>
      }
    </>
  );
};

export default BrandsCont;
