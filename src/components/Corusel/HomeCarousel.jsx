import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import carouselImg1 from '../../assets/carousel1.jpg'
import carouselImg2 from '../../assets/carousel2.jpg'
import carouselImg3 from '../../assets/carousel3.jpg'

export default function HomeCarousel() {
  return (
    <>
      <Swiper slidesPerView={2} breakpoints={{350: {slidesPerView: 1}, 1024: {slidesPerView: 2}}} spaceBetween={15} navigation={true} pagination={true} modules={[Navigation, Pagination]} className="mySwiper text-center object-cover rounded-2xl">
        <SwiperSlide>
          <img src={carouselImg1} alt="" className='w-full rounded-xl' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carouselImg3} alt="" className='w-full rounded-xl' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carouselImg2} alt="" className='w-full rounded-xl' />
        </SwiperSlide>
      </Swiper>
    </>
  );
}