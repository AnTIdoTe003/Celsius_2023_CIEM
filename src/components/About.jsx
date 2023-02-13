import {Image } from '@chakra-ui/react'
import React from 'react'
import '../styles/about.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import one from '../assets/3.jpg'
// import two from '../assets/4.jpg'
// import three from '../assets/5.jpg'
import '../'
const About = () => {
  const settings = {
      dots: false,
      fade: true,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
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
  return (
      <div className={'about_wrapper'}>
      <Slider {...settings}>
      <Image src="https://i.ibb.co/hFxpNCT/3.jpg" w={'100vw'} height={'auto'} objectFit={'cover'}/>
      <Image src="https://i.ibb.co/hFxpNCT/3.jpghttps://i.ibb.co/SdVTfYC/4.jpg" w={'100vw'} height={'auto'}  objectFit={'cover'}/>
      <Image src="https://i.ibb.co/YBK9GmQ/5.jpg" w={'100vw'} height={'auto'} objectFit={'cover'}/>
     </Slider>
    </div>
 
  
  )
}

export default About