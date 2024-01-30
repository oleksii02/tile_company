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

import bathroom from '../../imgs/Bathrooms/b3.jpg'
import bathroomtwo from '../../imgs/Bathrooms/b4.jpg'
import livingroom from '../../imgs/LivingRoom/l2.jpg'
import livingroomtwo from '../../imgs/LivingRoom/l4.jpg'

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
                    <img src={bathroom} alt={'bathroom img wall tile'}/>
                    <h4>HEAR WHAT OUR SATISFIED CUSTOMERS HAVE TO SAY!</h4>
                    <h5>-Kyle Smaines</h5>
                    <p>He is very nice and I dealt with the owner Ivan. They were very busy but they squeezed me in. The guys were super professional and worked from the time they got there to the time they left. They had extensive experience with high-quality tiles. The cleaning was incredible. They did a great job and everyone who looks at my bathroom asks me who should do it.</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bathroomtwo} alt={'bathroom img floor tile'}/>
                    <h4>HEAR WHAT OUR SATISFIED CUSTOMERS HAVE TO SAY!</h4>
                    <h5>-Phillip Decarlo</h5>
                    <p>Great job..very professional and our bathroom grout looks great..all the stains are gone. At an affordable price, I got a good job..
                        Thanks to Ivan and his team for a great job 👌👍. We recommend with pleasure</p>
                </SwiperSlide><SwiperSlide>
                <img src={livingroom} alt={'living room img floor tile'}/>
                <h4>HEAR WHAT OUR SATISFIED CUSTOMERS HAVE TO SAY!</h4>
                <h5>-Nicole King</h5>
                <p>My wife and I are very happy, our living room looks great. Great job..very fast and professional, we got a good job at a reasonable price. Ivan listened to our wishes and we are happy.
                    Thanks to Ivan and his team for a great job, we are very grateful.</p>
            </SwiperSlide><SwiperSlide>
                <img src={livingroomtwo} alt={'living room img fireplace'}/>
                <h4>HEAR WHAT OUR SATISFIED CUSTOMERS HAVE TO SAY!</h4>
                <h5>-Jeremy Morvai</h5>
                <p>We are so happy. The tile company did a great job redoing our living room. Everything as we planned. Reconstruction, selection of tiles, prompt work and at an affordable price for us. We are very grateful to Ivan and his team for their professionalism. These guys made our living room awesome. We are waiting for the repair of the whole house, thank you Ivan. See you soon🖐️</p>
            </SwiperSlide>
            </Swiper>
        </>
    );
}
