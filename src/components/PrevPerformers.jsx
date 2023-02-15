import React from 'react'
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import {Pagination, Navigation, EffectFade } from "swiper";
import '../styles/prevperformers.scss'
import PartperfDesign from './PartperfDesign';
import Slider from "react-slick";
// import arjunsonakshi from '../assets/arjunsonakshi.jpg'
// import epr from '../assets/epr.jpg'
// import morphine from '../assets/morphine.jpg'
// import euphoria from '../assets/euphoria.jpg'
// import surojit from '../assets/surojit.jpg'
// import akriti from '../assets/akriti.jpg'
// import papon from '../assets/papon.jpg'
// import anupamroy from '../assets/anupamroy.jpg'
// import trap from '../assets/trap.PNG'
// import eventdetails_bg from '../assets/eventdetails_bg.jpg'
import { Heading} from '@chakra-ui/react';

const PrevPerformers = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay:true,
    autoplaySpeed:2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
const arr1 =[
        {
              key:1,
              imgPath: "https://i.ibb.co/qnkQvWM/anupamroy.jpg",
              text: "Anupam Roy"
        },
        {
              key:2,
              imgPath: "https://i.ibb.co/xsknQ8G/epr.jpg",
              text:"Underground Authority"
          },
          {
              key:3,
              imgPath: "https://i.ibb.co/VqHS5tR/31-Arjun-Sonakshi.jpg",
              text:"Arjun Kapoor and Sonakshi Sinha"

          },
          {
              key:4,
              imgPath: "https://i.ibb.co/mBGySwX/morphine.jpg",
              text:"Morphine"
          },
          {
              key:5,
              imgPath: "https://i.ibb.co/8P8v1h7/papon.jpg",
              text:"Papon"
          },
          {
              key:6,
              imgPath: "https://i.ibb.co/0rHXDcM/euphoria.jpg",
              text:"Euphoria"
          },
          {
              key:7,
              imgPath: "https://i.ibb.co/xgN2LCz/akriti.jpg",
              text:"Akriti Kakkar"
          },
          {
              key:8,
              imgPath:"https://i.ibb.co/4K8w0tX/surojit.jpg",
              text:"Surojeet Chatterjee"
          },
          {
              key:9,
              imgPath: "https://i.ibb.co/gTNrB4t/trap.png",
              text:"T.R.A.P"
          },
];
  return (
    // <VStack className='performers_wrapper'width={'100vw'} 
    // flexWrap={'wrap'}
    // >
    <div className='performers_wrapper'>
      <Heading className='partner_heading' fontSize={['2rem', '5rem']} textAlign={'center'} color={'white'} paddingTop={'10'} letterSpacing={'10px'} paddingBottom={'2rem'}>
      Our Previous Performers
       </Heading>
       <Slider {...settings}>
        {
                arr1.map((i)=>{
                    return(
                     
                        
                            <PartperfDesign
                            key={i.key}
                            image={i.imgPath}
                            text={i.text}
                            />
                            
                    )      
                })
        }
       </Slider> 
       </div>
    // </VStack>
    
  )
}

export default PrevPerformers