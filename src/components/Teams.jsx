import React from 'react'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../styles/prevpartners.scss'
import  bimlesh from '../assets/bimlesh.jpeg'
import debmalya from '../assets/Debmalya.jpg'
import  abir from '../assets/Abir.jpg'
import roshan from '../assets/Roshan.jpg'
import sudipta from '../assets/Sudipta.jpg'
import debgandhar from '../assets/debgandhar.jpeg'
import suchinta from '../assets/suchinta.jpg'
import ananya from '../assets/ananya.jpg'
import debargha from '../assets/debargha.jpeg'
import manodeep from '../assets/manodeep.jpg'
import satyaki from '../assets/satyaki.jpg'
import moinak from '../assets/moinak.jpg'
import abeer from '../assets/abeer.jpg'
import aniruddha from  '../assets/aniruddha.jpg'
import chandan from '../assets/chandan.jpg'
import mustafa from '../assets/mustafa.jpg'
import pratyush from '../assets/pratyush.jpg'
import shuvam from '../assets/shuvam.jpg'
import sourina from '../assets/sourina.jpg'
import souvik from '../assets/souvik.jpg'
import ankit from '../assets/ankit.jpg'
import saptarshi from '../assets/saptarshi.jpg'
import surottama from '../assets/surottama.jpeg'
import sukanya from '../assets/sukanya.jpeg'
import deep from '../assets/deep.jpeg'
import subhdradeep from '../assets/subhradeep.jpeg'
import chandrayee from '../assets/chandrayee.jpeg'
import subhajit from '../assets/subhajit.JPG'
import suman from '../assets/suman.jpeg'
import ankit1 from '../assets/ankit.jpeg'
import aritra from '../assets/aritra.jpeg'
import shashank from '../assets/shashank.jpeg'
import { Box, Container, Heading, Stack } from '@chakra-ui/react'
import TeamsDesign from './TeamsDesign'
// import Fade from 'react-reveal/Fade';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../styles/teams.scss'
import eight from '../assets/8.jpg'
import nine from '../assets/9.jpg'
import ten from '../assets/10.jpg'
import eleven from '../assets/11.jpg'
import twelve from '../assets/twelve.jpg'
import thirteen from '../assets/eventdetails_bg.jpg'

import Header from './Header';
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
            pic : roshan,
            role:'Sports head'
    },
{
            key:1,
            name:'Bimlesh singh',
            pic : bimlesh,
            role:'Sports Co head'
    },
{
            key:2,
            name:'Debmalya Biswas',
            pic : debmalya,
            role:'Web Developer'

    },
{
            key:3,
            name:'Abir Bhattacharya',
            pic : abir,
            role:'Graphic Head'
    },
 {
            key:5,
            name:'Sudipta Das',
            pic : sudipta,
            role:'Graphics co head'
    },
  ]
  const foundation=[
 {
            key:6,
            name:'Satyaki Saha',
            pic : satyaki,
            role:'Fest Head Coordinator'
  },
  {
            key:5,
            name:'Manodeep Maity',
            pic : manodeep,
            role:'Treasurer'
  },
  {
            key:3,
            name:'Ananya Chatterjee',
            pic : ananya,
            role:'PR and Marketing Head'
  },
{
            key:2,
            name:'Suchinta Chanda',
            pic : suchinta,
            role:'Tech head'
  },
  {
            key:4,
            name:'Debargha Dutta',
            pic : debargha,
            role:'Tech co head'
  },
  {
            key:1,
            name:'Debgandhar Ghosh',
            pic : debgandhar,
            role:'Cultural Head'
  },
  {
            key:7,
            name:'Sourina Rom',
            pic : sourina,
            role:'Cultural Co Head'
},
]
const core=[{
            key:1,
            name:'Moinak Das',
            pic : moinak,
            role:'Cultural Coordinator'
},
{
            key:7,
            name:'Shuvam Halder',
            pic : shuvam,
            role:'Cricket coordinator'
},
{
            key:5,
            name:'Mustafa Rakib',
            pic : mustafa,
            role:'Tech coordinator'
    
},
{
            key:4,
            name:'Chandan Thakur',
            pic : chandan,
            role:'Tech coordinator'
},
{
            key:2,
            name:'Abeer Sekh',
            pic : abeer,
            role:'Business coordinator'
},
{
            key:6,
            name:'Pratyush Sarkar',
            pic : pratyush,
            role:'Business coordinator'
},
{
            key:8,
            name:'Souvik Sarkar',
            pic : souvik,
            role:'Gaming coordinator'
},
{
            key:3,
            name:'Aniruddha Kumar Dutta',
            pic : aniruddha,
            role:'Gaming coordinator'
},
]
const prHead=[
  {
            key:1,
            name:'Ankit Mondal',
            pic : ankit,
            role:'Tech PR Head'
},
{
            key:2,
            name:'Saptarshi Dassarma',
            pic : saptarshi,
            role:'Sports PR Head'
},
{
            key:3,
            name:'Surottama Roy',
            pic : surottama,
            role:'Cultural PR Head'
},
]
const prMembers=[{
            key:1,
            name:'Sukanya Mondal',
            pic : sukanya
},
{
            key:2,
            name:'Deep',
            pic : deep
},
{
            key:3,
            name:'Subhradeep Samanta',
            pic : subhdradeep
},
{
            key:4,
            name:'Chandrayee Ghosh',
            pic : chandrayee
},
]
const sportsMembers=[
{
            key:1,
            name:'Subhajit Koley',
            pic : subhajit
},
{
            key:2,
            name:'Suman Choubey',
            pic : suman
},
{
            key:3,
            name:'Ankit Keshri',
            pic : ankit1
},
{
            key:4,
            name:'Aritra Naharay',
            pic : aritra
},
{
            key:5,
            name:'Shashank Ranjan',
            pic : shashank
},
]

  return (
    <Box className={'teams_wrapper'}>
      
    <Container maxW={'100vw'} paddingBottom={'2rem'} bgImage={eleven} backgroundSize={'cover'} backgroundPosition={'center'} backgroundRepeat={'no-repeat'}>
      <Header></Header>
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
            >
            </TeamsDesign>)
          })
        }
        </Slider>
    {/* </Stack> */}
    {/* </Fade> */}
    </Container>

    <Container maxW={'100vw'} py={'5rem'} bgImage={nine} >
      <Heading color={'white'} paddingBottom={5} textAlign={'center'} backgroundSize={'cover'} backgroundPosition={'center'} backgroundRepeat={'no-repeat'}>
        The Core Commitee
      </Heading>
      <Slider {...settings}>
     {/* <Stack direction={['row']}  justifyContent={'space-evenly'} alignContent={'center'} rowGap={3} wrap={'wrap'}> */}
       
         {
          core.map((i,index)=> <TeamsDesign name={i.name} pic={i.pic}  role={i.role}/>)}
       
    {/* </Stack> */}
     </Slider>
    </Container>

    <Container maxW={'100vw'} py={'5rem'} bgImage={ten} backgroundSize={'cover'} backgroundPosition={'center'} backgroundRepeat={'no-repeat'}>
      <Heading color={'white'} paddingBottom={5} textAlign={'center'}>
        Cementing the Foundation
      </Heading>
     <Stack direction={['row']}  justifyContent={'space-evenly'} alignContent={'center'} rowGap={3} wrap={'wrap'} columnGap={10}>
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
    </Stack>
    </Container>

    <Container maxW={'100vw'} py={'5rem'} bgImage={eight} backgroundSize={'cover'} backgroundPosition={'center'} backgroundRepeat={'no-repeat'}>
      <Heading color={'white'} paddingBottom={5} textAlign={'center'}>
        The PR Heads
      </Heading>
     <Stack direction={['row']}  justifyContent={'space-evenly'} alignContent={'center'} rowGap={3} wrap={'wrap'} columnGap={10}>
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

     <Container maxW={'100vw'} py={'5rem'} bgImage={twelve} backgroundSize={'cover'} backgroundPosition={'center'} backgroundRepeat={'no-repeat'}>
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
        <Container maxW={'100vw'} py={'5rem'} bgImage={thirteen} backgroundSize={'cover'} backgroundPosition={'center'} backgroundRepeat={'no-repeat'}>
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