import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import '../styles/prevpartners.scss'
import PartperfDesign from './PartperfDesign';
import img2 from '../assets/partner_demo.png'
import { Heading, VStack } from '@chakra-ui/react';
// import Fade from'react-reveal/Fade'
const PrevPartners = () => {
const arr1 =[
            {
                key:1,
                imgPath: img2,
                text:"Hellow"
            },
];
  return (
    // <Fade bottom>
   <VStack bgColor={'white'} my={'-30px'} id="sponser">
      <Heading className='partner_heading' fontSize={['50px', '90px']} textAlign={'center'} color={'black'} paddingTop={'150px'} letterSpacing={'10px'}>
      Our  Previous Partners
       </Heading>
        <Swiper
        effect={"coverflow"}
        grabCursor={true}
        navigation={true}
        centeredSlides={true}
        slidesPerView={"3"}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 10,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        spaceBetween={200}
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
        className="mySwiper1"
      >
        {
                arr1.map((i)=>{
                    return(
                        <SwiperSlide key={i}>
                            <PartperfDesign
                            key={i.key}
                            image={i.imgPath}
                            text={i.text}
                            />
                        </SwiperSlide>
                    )
                    
                })
        }    
      </Swiper>        
    </VStack>
    // </Fade>
  )
}

export default PrevPartners