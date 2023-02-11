import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Pagination, Navigation } from "swiper";
import '../styles/prevperformers.scss'
import PartperfDesign from './PartperfDesign';
import arjunsonakshi from '../assets/arjunsonakshi.jpg'
import epr from '../assets/epr.jpg'
import morphine from '../assets/morphine.jpg'
import euphoria from '../assets/euphoria.jpg'
import surojit from '../assets/surojit.jpg'
import akriti from '../assets/akriti.jpg'
import papon from '../assets/papon.jpg'
import anupamroy from '../assets/anupamroy.jpg'
import trap from '../assets/trap.PNG'
import eventdetails_bg from '../assets/eventdetails_bg.jpg'
import { Heading, VStack } from '@chakra-ui/react';
const PrevPerformers = () => {
const arr1 =[
            {
                key:1,
                imgPath: anupamroy,
                text:"Anupam Roy"
            },
            {
              key:2,
              imgPath: epr,
              text:"Underground Authority"
          },
        {
              key:3,
              imgPath: arjunsonakshi,
              text:"Arjun Kapoor and Sonakshi Sinha"

          },
        {
              key:4,
              imgPath: morphine,
              text:"Morphine"
          },
        {
              key:5,
              imgPath: papon,
              text:"Papon"
          },
          {
              key:6,
              imgPath: euphoria,
              text:"Euphora"
          },
        {
              key:7,
              imgPath: akriti,
              text:"Akriti Kakkar"
          },
          {
              key:8,
              imgPath:surojit,
              text:"Surojeet Chatterjee"
          },
          {
              key:9,
              imgPath: trap,
              text:"T.R.A.P"
          },
];
  return (
    <VStack className='performers_wrapper' bgImage={eventdetails_bg} >
      <Heading className='partner_heading' fontSize={['45px', '90px']} textAlign={'center'} color={'white'} paddingTop={'10'} letterSpacing={'10px'}>
      Our Previous Performers
       </Heading>
        <Swiper
        // effect={"coverflow"}
        grabCursor={true}
        navigation={true}
        centeredSlides={true}
        slidesPerView={5}
        loop={true}
        // coverflowEffect={{
        //   rotate: 0,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 1,
        //   slideShadows: false,
        // }}
        spaceBetween={30}
        pagination={{
          clickable: true,
          dynamicBullets:true
        }}
        breakpoints={{
          0:{
            slidesPerView:2,
            spaceBetween:30
          },
          600:{
            slidesPerView:3
          },
          1024:{
            slidesPerView:4
          }
        }}
        modules={[Navigation,Pagination]}
        className="mySwiper1_1"
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
    
  )
}

export default PrevPerformers