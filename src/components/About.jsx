import React from 'react'
import '../styles/about.scss'
import Slider from "react-slick";
// import bg from '../assets/bg.jpg'
import logo from '../assets/logo1.png'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const About = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:3000
  };
  return (
    <div className="about_wrapper">
      <Slider {...settings}>
        <div>
        <div className="about_content">
            <div className="about_img">
                <img src={logo} alt="" />
            </div>
            <div className="about_text">
                <h1>About us</h1>
                <p>Celsius, the annual celebration of CIEM and CISM has been a platform for many bright minds around the city. After many successful events, Celsius is back with even more new events. We host a variety of events, including technical, cultural and sporting events. From fashion shows to cricket, dance performances to robo-soccer, football to singing, treasure hunts to chess games, Celsius has got you covered. Amazing artists such as T.R.A.P, The Anupam Roy Band, Fakira, Morphine, Surajit o Bondhura, Papon, Akriti Kakkar and Underground Authority have joined the festivities. What makes Celsius so successful is the tiresome efforts and exemplary motivation of the students. Celsius strives to gather and showcase new talent for the masses. Just like every year, Celsius promises to prove itself again this year.</p>
            </div>
        </div>
        </div>
        <div>
        <div className="about_content">
            <div className="about_img">
                <img src={logo} alt="" />
            </div>
            <div className="about_text">
                <h1>Why Celsius?</h1>
                <p>Every year, many new participants make their mark at Celsius. By providing participants with a platform to showcase their unique talent and offering a break from the monotony of assessment and academic work, Celsius is critical to the overall development of a student's personality. Celsius is branded throughout the Tollygunge area each year and even ours has set up a variety of stalls serving refreshments. Our tech fests are known for hosting different types of events that help sharpen the tech mindset of our attendees. Our sporting events are no less than the tech event, with over fifty colleges competing to prove their worth in the large ground and this makes Celsius a non-skippable event.</p>
            </div>
        </div>
        </div>
        
        <div>
        <div className="about_content">
            <div className="about_img">
                <img src={logo} alt="" />
            </div>
            <div className="about_text">
                <h1>Director's Desk</h1>
                <p>We believe that education does not imply stuffing the brain with some ideas and information. Education is illumination of heart and mind and it is a journey from darkness to light. I want our students to excel academically as well as in other fields. Our ambition is to make our students a wise combination of brain and brawn and that they should be the perfect combination of strength and humility. We are always ready to extend our hands to our students in times of their dire need in all possible ways.</p>
            </div>
        </div>
        </div>
        </Slider>
    </div>
  )
}

export default About