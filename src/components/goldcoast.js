import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Navigation } from 'swiper/modules';

function Goldcoast() {
  return (
    <div className='w-100 gold-coast'>
        <h6 className='text-center main-heading'>The Gold Coast</h6>
        <p className='text-center'>(THE CLUBHOUSE)</p>
        <div className='container'>
            <p>Good times begin at The Gold Coast, your clubhouse at The Islands. A spectacle in itself with an area of about 2787 sq.mt. (30000 sq.ft.), it is home to everything you need for a weekend, full of relaxation and rejuvenation for your whole family.</p>
            <div className='super-amenities-img'>
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
                        <img className='gallery-img' src='https://ecis.in/gaurs-landing-page/assets/interior/Master-Bedroom.jpg' alt=''  />

                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='gallery-img' src='https://ecis.in/gaurs-landing-page/assets/interior/shutterstock_690959176.jpg' alt=''/>

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
        </div>
  )
}

export default Goldcoast