import React from 'react'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../styles/prevpartners.scss'
// import  bimlesh from '../assets/bimlesh.jpeg'
// import debmalya from '../assets/Debmalya.jpg'
// import  abir from '../assets/Abir.jpg'
// import roshan from '../assets/Roshan.jpg'
// import sudipta from '../assets/Sudipta.jpg'
// import debgandhar from '../assets/debgandhar.jpeg'
// import suchinta from '../assets/suchinta.jpg'
// import ananya from '../assets/ananya.jpg'
// import debargha from '../assets/debargha.jpeg'
// import manodeep from '../assets/manodeep.jpg'
// import satyaki from '../assets/satyaki.jpg'
// import moinak from '../assets/moinak.jpg'
// import abeer from '../assets/abeer.jpg'
// import aniruddha from  '../assets/aniruddha.jpg'
// import chandan from '../assets/chandan.jpg'
// import mustafa from '../assets/mustafa.jpg'
// import pratyush from '../assets/pratyush.jpg'
// import shuvam from '../assets/shuvam.jpg'
// import sourina from '../assets/sourina.jpg'
// import souvik from '../assets/souvik.jpg'
// import ankit from '../assets/ankit.jpg'
// import saptarshi from '../assets/saptarshi.jpg'
// import surottama from '../assets/surottama.jpeg'
// import sukanya from '../assets/sukanya.jpeg'
// import deep from '../assets/deep.jpeg'
// import subhdradeep from '../assets/subhradeep.jpeg'
// import chandrayee from '../assets/chandrayee.jpeg'
// import subhajit from '../assets/subhajit.JPG'
// import suman from '../assets/suman.jpeg'
// import ankit1 from '../assets/ankit.jpeg'
// import aritra from '../assets/aritra.jpeg'
// import shashank from '../assets/shashank.jpeg'
import { Box, Container, Heading, Stack } from '@chakra-ui/react'
import TeamsDesign from './TeamsDesign'
// import Fade from 'react-reveal/Fade';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../styles/teams.scss'
// import eight from '../assets/8.jpg'
// import nine from '../assets/9.jpg'
// import ten from '../assets/10.jpg'
// import eleven from '../assets/11.jpg'
// import twelve from '../assets/twelve.jpg'
// import thirteen from '../assets/eventdetails_bg.jpg'

import Header from './Header';
import ResponsiveDrawer from './ResponsiveDrawer';
const Teams = () => {
  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 4,
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
    const cementing =[ {
            key:4,
            name:'Roshan Kumar Singh',
            pic : "https://i.ibb.co/W5Hwrsw/Roshan.jpg",
            role:'Sports head'
    },
{
            key:1,
            name:'Bimlesh singh',
            pic : "https://i.ibb.co/Sn1rxkC/bimlesh.jpg",
            role:'Sports Co head'
    },
{
            key:2,
            name:'Debmalya Biswas',
            pic : "https://i.ibb.co/XYKMhCm/Debmalya.jpg",
            role:'Web Developer'

    },
{
            key:3,
            name:'Abir Bhattacharya',
            pic : "https://i.ibb.co/tJyWMFQ/Abir.webp",
            role:'Graphic Head'
    },
 {
            key:5,
            name:'Sudipta Das',
            pic : "https://i.ibb.co/qN0rMXC/Sudipta.jpg",
            role:'Graphics co head'
    },
    {
      key:6,
      name:'Surottama Roy',
      pic : "https://i.ibb.co/r5f43Vh/surottama.jpg",
      role:'Cultural co Head'
      
},
  ]
  const foundation=[
 {
            key:6,
            name:'Satyaki Saha',
            pic : "https://i.ibb.co/PrZhj4B/satyaki.jpg",
            role:'Fest Head Coordinator',
            quote:"Say hello to the Captain of this Ship."
  },
  {
            key:5,
            name:'Manodeep Maity',
            pic : "https://i.ibb.co/nMBPRPF/manodeep.jpg",
            role:'Treasurer',
            quote:"Talks less but talks sense."
            
  },
  {
            key:3,
            name:'Ananya Chatterjee',
            pic : "https://i.ibb.co/bmGPQKJ/ananya.jpg",
            role:'PR and Marketing Head',
            quote:"The girl who knows how to get her stuff done."
            
  },
{
            key:2,
            name:'Suchinta Chanda',
            pic : "https://i.ibb.co/Y3F1GZg/suchinta.jpg",
            role:'Tech head',
            quote:"You'll know my name if you know my voice."
            
  },
  {
            key:4,
            name:'Debargha Dutta',
            pic : "https://i.ibb.co/S0mRW0d/debargha.jpg",
            role:'Tech co head',
            quote:"Can make you dance on the count of five."
            
  },
  {
            key:1,
            name:'Debgandhar Ghosh',
            pic : "https://i.ibb.co/mFnsC5G/debgandhar.jpg",
            role:'Cultural Head',
            quote:"With a musical mind and a dream to fly."
            
  },
  {
            key:7,
            name:'Sourina Rom',
            pic : "https://i.ibb.co/D1RTr6m/sourina.jpg",
            role:'Cultural Co Head',
            quote:"She's graceful in her dance like a dolphin in a sea."
},
]
const core=[{
            key:1,
            name:'Moinak Das',
            pic : "https://i.ibb.co/ypVZq9Z/moinak.jpg",
            role:'Cultural Coordinator'
},
{
            key:7,
            name:'Shuvam Halder',
            pic : "https://i.ibb.co/qsf06dw/shuvam.jpg",
            role:'Cricket coordinator'
},
{
            key:5,
            name:'Mustafa Rakib',
            pic : "https://i.ibb.co/b3Hx2Sb/mustafa.jpg",
            role:'Tech coordinator'
    
},
{
            key:4,
            name:'Chandan Thakur',
            pic : "https://i.ibb.co/pdnyH7C/chandan.jpg",
            role:'Tech coordinator'
},
{
            key:2,
            name:'Abeer Sekh',
            pic : "https://i.ibb.co/CV57HK9/abeer.jpg",
            role:'Business coordinator'
},
{
            key:6,
            name:'Pratyush Sarkar',
            pic : "https://i.ibb.co/Th8TJ6y/pratyush.jpg",
            role:'Business coordinator'
},
{
            key:8,
            name:'Souvik Sarkar',
            pic :"https://i.ibb.co/qp2sJh5/souvik.jpg",
            role:'Gaming coordinator'
},
{
            key:3,
            name:'Aniruddha Kumar Dutta',
            pic : "https://i.ibb.co/xgBb2sp/aniruddha.jpg",
            role:'Gaming coordinator'
},
]
const prHead=[
  {
            key:1,
            name:'Ankit Mondal',
            pic : "https://i.ibb.co/jkPZTdy/ankit.jpg",
            role:'Tech PR Head'
},
{
            key:2,
            name:'Saptarshi Dassarma',
            pic : "https://i.ibb.co/grst1z8/saptarshi.jpg",
            role:'Sports PR Head'
},

]
const prMembers=[{
            key:1,
            name:'Sukanya Mondal',
            pic : "https://i.ibb.co/bzzqgCw/sukanya.jpg"
},
{
            key:2,
            name:'Deep',
            pic : "https://i.ibb.co/zPRKL9t/deep.jpg"
},
{
            key:3,
            name:'Subhradeep Samanta',
            pic : "https://i.ibb.co/0ZwtCcQ/subhradeep.jpg"
},
{
            key:4,
            name:'Chandrayee Ghosh',
            pic : "https://i.ibb.co/BtQQtVY/chandrayee.jpg"
},
]
const sportsMembers=[
{
            key:1,
            name:'Subhajit Koley',
            pic : "https://i.ibb.co/4R3Zw3S/subhajit.jpg"
},
{
            key:2,
            name:'Suman Choubey',
            pic : "https://i.ibb.co/mCth5XF/suman.jpg"
},
{
            key:3,
            name:'Ankit Keshri',
            pic : "https://i.ibb.co/WWPk86L/ankit.jpg"
},
{
            key:4,
            name:'Aritra Naharay',
            pic : "https://i.ibb.co/T1bknCM/aritra.jpg"
},
{
            key:5,
            name:'Shashank Ranjan',
            pic : "https://i.ibb.co/n6LQrPw/shashank.jpg"
},
]

  return (
    <Box className={'teams_wrapper'}>
      
    <Container maxW={'100vw'} paddingBottom={'2rem'} backgroundImage="url('https://i.ibb.co/qmNtdLK/11.jpg')" backgroundSize={'cover'} backgroundPosition={'center'} backgroundRepeat={'no-repeat'}>
      <Header></Header>
      <ResponsiveDrawer></ResponsiveDrawer>
      {/* <Fade left> */}
      <Heading color={'white'} paddingBottom={5} textAlign={'center'}>
        The Foundation Members
      </Heading>
      <Slider {...settings}>
     {/* <Stack direction={['row']}  justifyContent={'space-evenly'} alignContent={'center'} rowGap={3} wrap={'wrap'}> */}
        {
          foundation.map((i,index)=>{
            return (
            <TeamsDesign
            name={i.name}
            pic={i.pic}
            role={i.role}
            quote={i.quote}
            >
            </TeamsDesign>)
          })
        }
        </Slider>
    {/* </Stack> */}
    {/* </Fade> */}
    </Container>

    <Container maxW={'100vw'} py={'5rem'} backgroundImage="url('https://i.ibb.co/Svfs1V1/9.jpg')" >
      <Heading color={'white'} paddingBottom={5} textAlign={'center'} backgroundSize={'cover'} backgroundPosition={'center'} backgroundRepeat={'no-repeat'}>
        The Core Commitee
      </Heading>
      <Slider {...settings}>
     {/* <Stack direction={['row']}  justifyContent={'space-evenly'} alignContent={'center'} rowGap={3} wrap={'wrap'}> */}      
         {
          core.map((i,index)=> <TeamsDesign name={i.name} pic={i.pic}  role={i.role} />)}
    {/* </Stack> */}
     </Slider>
    </Container>

    <Container maxW={'100vw'} py={'5rem'} backgroundImage="url('https://i.ibb.co/kQ6MSRH/10.jpg')" backgroundSize={'cover'} backgroundPosition={'center'} backgroundRepeat={'no-repeat'}>
      <Heading color={'white'} paddingBottom={5} textAlign={'center'}>
        Cementing the Foundation
      </Heading>
     {/* <Stack direction={['row']}  justifyContent={'space-evenly'} alignContent={'center'} rowGap={3} wrap={'wrap'}> */}
     <Slider {...settings}>
        {
          cementing.map((i,index)=>{
            return (
            <TeamsDesign
            name={i.name}
            pic={i.pic}
            role={i.role}
            >
            </TeamsDesign>)
          })
        }
      </Slider>
    {/* </Stack> */}
    </Container>

    <Container maxW={'100vw'} py={'5rem'} backgroundImage="url('https://i.ibb.co/26KQ2vR/8.jpg')" backgroundSize={'cover'} backgroundPosition={'center'} backgroundRepeat={'no-repeat'}>
      <Heading color={'white'} paddingBottom={5} textAlign={'center'}>
        The PR Heads
      </Heading>
     <Stack direction={['row']}  justifyContent={'space-evenly'} alignContent={'center'} rowGap={3} wrap={'wrap'}>
        {
          prHead.map((i,index)=>{
            return (
            <TeamsDesign
            name={i.name}
            pic={i.pic}
            role={i.role}
            >
            </TeamsDesign>)
          })
        }
    </Stack>
    </Container>

     <Container maxW={'100vw'} py={'5rem'} backgroundImage="url('https://i.ibb.co/wrFqDDk/twelve.jpg')" backgroundSize={'cover'} backgroundPosition={'center'} backgroundRepeat={'no-repeat'}>
      <Heading color={'white'} paddingBottom={5} textAlign={'center'}>
        PR Members
      </Heading>
     <Stack direction={['row']}  justifyContent={'space-evenly'} alignContent={'center'} rowGap={3} wrap={'wrap'}>
        {
          prMembers.map((i,index)=>{
            return (
            <TeamsDesign
            name={i.name}
            pic={i.pic}
            >
            </TeamsDesign>)
          })
        }
    </Stack>
    </Container>
        <Container maxW={'100vw'} py={'5rem'} backgroundImage="url('https://i.ibb.co/x6xNcfw/eventdetails-bg.jpg')" backgroundSize={'cover'} backgroundPosition={'center'} backgroundRepeat={'no-repeat'}>
      <Heading color={'white'} paddingBottom={5} textAlign={'center'}>
        Sports Cooridnators
      </Heading>
     <Stack direction={['row']}  justifyContent={'space-evenly'} alignContent={'center'} rowGap={3} wrap={'wrap'}>
        {
          sportsMembers.map((i,index)=>{
            return (
            <TeamsDesign
            name={i.name}
            pic={i.pic}
            >
            </TeamsDesign>)
          })
        }
    </Stack>
    </Container>
    </Box>
  )
}

export default Teams