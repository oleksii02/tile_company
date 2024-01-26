import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Carousel.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

import kitchenOne from '../../imgs/Kitchen//modern-kitchen-interior-design.jpg'
import kitchenTwo from '../../imgs/Kitchen/luxury-kitchen-with-stainless-steel-appliances-and-marble-generated-by-ai.jpg'

import kitchenThree from '../../imgs/Kitchen/healthy-cooking-in-modern-domestic-kitchen-indoors-generated-by-ai.jpg'


export default function Carousel() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={kitchenOne} alt={'kitchenThree'}/>
                    <h4>HEAR WHAT OUR SATISFIED CUSTOMERS HAVE TO SAY!</h4>
                    <h5>-Anthony & Terry D.</h5>
                    <p>Tony's team did a wonderful job on our kitchen remodel. They made it look easy. Our kitchen was totally gutted and remodeled within 3 weeks. His team was professional, clean, and did a quality job from beginning to end. My Wife and I can't wait to have Tony do more improvements to our home.</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={kitchenTwo} alt={'kitchenThree'}/>
                    <h4>HEAR WHAT OUR SATISFIED CUSTOMERS HAVE TO SAY!</h4>
                    <h5>-Anthony & Terry D.</h5>
                    <p>Tony's team did a wonderful job on our kitchen remodel. They made it look easy. Our kitchen was totally gutted and remodeled within 3 weeks. His team was professional, clean, and did a quality job from beginning to end. My Wife and I can't wait to have Tony do more improvements to our home.</p>
                </SwiperSlide><SwiperSlide>
                <img src={kitchenThree} alt={'kitchenThree'}/>
                <h4>HEAR WHAT OUR SATISFIED CUSTOMERS HAVE TO SAY!</h4>
                <h5>-Anthony & Terry D.</h5>
                <p>Tony's team did a wonderful job on our kitchen remodel. They made it look easy. Our kitchen was totally gutted and remodeled within 3 weeks. His team was professional, clean, and did a quality job from beginning to end. My Wife and I can't wait to have Tony do more improvements to our home.</p>
            </SwiperSlide>
            </Swiper>
        </>
    );
}
