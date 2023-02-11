/* eslint-disable no-useless-escape */
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/carousel.scss";


// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import Cards from "./Cards";

const  CardCarousel=()=> {
const arr =[1,2,3,4,5,6,7,8,9,10];
  return (
<div id="carousel">
        <Swiper
        effect={"coverflow"}
        grabCursor={true}
        navigation={true}
        centeredSlides={true}
        slidesPerView={"3"}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        spaceBetween={100}
        pagination={{
          clickable: true,
          dynamicBullets:true
        }}
        breakpoints={{
          0:{
            slidesPerView:1
          },
          520:{
            slidesPerView:2
          },
          950:{
            slidesPerView:3
          }
        }}
        modules={[EffectCoverflow,Navigation,Pagination]}
        className="mySwiper"
      >
        {
                arr.map((i)=>{
                    return(
                        <SwiperSlide key={i}>
                            <Cards imagePath={"src\assets\cultural.png"} />
                        </SwiperSlide>
                    )
                    
                })
        }
       
      </Swiper>
           
      
        )

</div>
  )
}

export default CardCarousel;
