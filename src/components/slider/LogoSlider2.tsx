'use client'
import React from 'react'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    }
}


const LogoSlider2:React.FC<{}> = () => {
  return (
    <>
    <Swiper {...swiperOptions} className="logos logos2 owl-carousel">
        <SwiperSlide className="single-logo">
            <img src="/assets/img/logo/logo21.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="single-logo">
            <img src="/assets/img/logo/logo22.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="single-logo">
            <img src="/assets/img/logo/logo23.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="single-logo">
            <img src="/assets/img/logo/logo24.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="single-logo">
            <img src="/assets/img/logo/logo25.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="single-logo">
            <img src="/assets/img/logo/logo21.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="single-logo">
            <img src="/assets/img/logo/logo22.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="single-logo">
            <img src="/assets/img/logo/logo23.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="single-logo">
            <img src="/assets/img/logo/logo24.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="single-logo">
            <img src="/assets/img/logo/logo25.png" alt="" />
        </SwiperSlide>
    </Swiper>
</>
  )
}

export default LogoSlider2