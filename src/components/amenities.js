import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Navigation } from 'swiper/modules';

function Amenities() {
  return (
    <div className='w-100  gold-coast'>
        <h6 className='text-center main-heading'>World Class Super Amenities</h6>
        <div className='container'>
            <p>The Ivory Coast is the foundation of living apart. Where luxurious amenities and an active lifestyle come together. This is the place, where life at The Islands begins and awaits you at any time of day or night. With activity zones for you and your family, walking track, water bodies, open gym and more, come rejuvenate & connect with friends and family in a way that transcends life into lifestyle.</p>
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
                        <img className='gallery-img' src='https://ecis.in/gaurs-landing-page/assets/Amenities/climibing-wall.jpg' alt='' />

                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='gallery-img' src='https://ecis.in/gaurs-landing-page/assets/Amenities/kids-play.jpg' alt='' />

                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='gallery-img' src='https://ecis.in/gaurs-landing-page/assets/Amenities/open gym.jpg' alt='' />

                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='gallery-img' src='https://ecis.in/gaurs-landing-page/assets/Amenities/open-gym.jpg' alt='' />

                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='gallery-img' src='https://ecis.in/gaurs-landing-page/assets/Amenities/petplay.jpg' alt='' />

                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='gallery-img' src='https://ecis.in/gaurs-landing-page/assets/Amenities/senior-citizen.jpg' alt='' />

                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='gallery-img' src='https://ecis.in/gaurs-landing-page/assets/Amenities/sit-out.jpg' alt='' />

                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='gallery-img' src='https://ecis.in/gaurs-landing-page/assets/Amenities/Swimming.jpg' alt='' />

                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='gallery-img' src='https://ecis.in/gaurs-landing-page/assets/Amenities/walking-track.jpg' alt='' />

                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
        </div>
  )
}

export default Amenities