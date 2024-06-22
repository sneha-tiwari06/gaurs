import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Navigation } from 'swiper/modules';
function Gallery() {
    return (
        <div className='w-100  gallery '>
            <h6 className=' py-4 main-heading text-center'>A WORLD BUILT TO MAKE <br />EVERY MOMENT LUXURIOUS,
                EVERY EXPERIENCE, MEMORABLE.</h6>
            <div className='container'>
                <Swiper
                    spaceBetween={50}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Navigation]}
                    pagination={{ clickable: true }}
                    navigation={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    <SwiperSlide>
                        <img className='gallery-img' src='https://ecis.in/gaurs-landing-page/assets/interior/Atrium-Cam 01.jpg' alt='' />

                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='gallery-img' src='https://ecis.in/gaurs-landing-page/assets/interior/Dining.jpg' alt='' />

                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='gallery-img' src='https://ecis.in/gaurs-landing-page/assets/interior/Kitchen.jpg' alt='' />

                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='gallery-img' src='https://ecis.in/gaurs-landing-page/assets/interior/Living.jpg' alt='' />

                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='gallery-img' src='https://ecis.in/gaurs-landing-page/assets/interior/M_Washroom.jpg' alt='' />

                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='gallery-img' src='https://ecis.in/gaurs-landing-page/assets/interior/Master-Bedroom.jpg' alt='' style={{ height: "100%", width: "100%" }} />

                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='gallery-img' src='https://ecis.in/gaurs-landing-page/assets/interior/shutterstock_690959176.jpg' alt='' style={{ height: "100%", width: "100%" }} />

                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='gallery-img' src='https://ecis.in/gaurs-landing-page/assets/interior/shutterstock_1377104441.jpg' alt='' />

                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='gallery-img' src='https://ecis.in/gaurs-landing-page/assets/interior/spa-pik-from-google.jpg' alt='' />

                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Gallery