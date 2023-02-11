import { Box, Button, Container, Heading, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper";
import '../styles/moments.scss';
// import Fade from 'react-reveal/Fade';
import {FiPhoneCall} from 'react-icons/fi'
import eventdetails_bg from '../assets/eventdetails_bg.jpg'
import { useEffect } from 'react';
import Header from './Header';

const EventDetailsDesign = (props2) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Container maxW={'100vw'} bgImage={eventdetails_bg} backgroundRepeat={'no-repeat'} backgroundSize={'cover'} h={['190vh','120vh']} paddingTop={[12,3]}>
      <Header></Header>
      {/* <Fade top> */}
      <Heading  textTransform={'uppercase'} size={'3xl'} color={'white'} textAlign={'center'} pos={'relative'} _after={{
        content: '" "',
        height: '4px',
        width: '8%',
        position: 'absolute',
        left: '0',
        right:'0',
        bottom:'-10px',
        margin:'0 auto',
        backgroundColor: 'white',
        zIndex:'1'
        
      }}>{props2.title}</Heading>
      {/* </Fade> */}
      <Stack direction={['column','row']}  justifyContent={'space-evenly'} alignItems={'center'}>
        {/* <Fade left> */}
        <Box w={['100vw','40vw']}  h={'100vh'} p={'10'} overflow={'hidden'}>
        <Image  borderRadius={'10px'} objectFit={'contain'} w={'100%'} h={['50%','80%']} src={props2.image}></Image>
        </Box>
        {/* </Fade> */}
        {/* <Fade right> */}
        <Box w={['90vw','40vw']}  h={'100vh'} top={['-350px','60px']} pos={'relative'} p={'5'}>
          <Heading color={'white'}  textAlign={'left'} textTransform={'uppercase'} fontSize={['50px','40px']} fontFamily={'sans-serif'} paddingBottom={2}>Contact</Heading>
          {/* <Text color={'white' } textAlign={'left'} textTransform={'uppercase'} fontFamily={'sans-serif'} fontSize={['20px','30px']}>
            {props2.person1} :  <a href={`tel:${props2.contact1}`}>{props2.contact1}</a>
          </Text>
          <Box color={'white'}textAlign={'left'} textTransform={'uppercase'} fontFamily={'sans-serif'}fontSize={['20px','30px']} >
               {props2.person2} 
          </Box> */}
          <HStack>
          <a href={`tel:${props2.contact1}`}><Button color={'white'}backgroundColor={'#08B586'} _hover={{backgroundColor:'green'}}><FiPhoneCall></FiPhoneCall>{`\xa0  ${props2.person1}`} </Button></a>
          <a href={`tel:${props2.contact2}`}><Button color={'white'}backgroundColor={'#08B586'}  _hover={{backgroundColor:'green'}}><FiPhoneCall></FiPhoneCall>{`\xa0  ${props2.person2}`} </Button></a>
          </HStack>
          <VStack alignItems={'flex-start'}>
            <Text paddingTop={2} fontFamily={'poppins'} fontSize={'2xl'} color={'white'}>Date :- {props2.date}</Text>
            <Text fontFamily={'poppins'} fontSize={'2xl'} color={'white'}>Fee :- {props2.fee}</Text>
            <Text color={'white'} display={`${props2.category==='sports'||props2.category==='cultural'?'none':'yes'}`}fontFamily={'poppins'} fontSize={'2xl'}>Prize Money :- {props2.prize}</Text>
          </VStack>
          <HStack justifyContent={'flex-start'} my={'4'} paddingBottom={2} display={`${props2.category==='sports'?'none':'yes'}`}>
           <a href={props2.rule} target="_blank" rel='noreferrer'><Button>Rule</Button></a>
           <a href={props2.register} target="_blank" rel='noreferrer'><Button visibility={`${props2.category==='cultural'?'hidden':'visible'}`}>Register</Button></a>
          </HStack>
          <Box objectFit={'contain'} my={['0%','1%']}>
      <Heading color={'white'} textTransform={'uppercase'} size={'2xl'} textAlign={'left'}>Moments from {props2.title}</Heading>
      <Swiper
        spaceBetween={30}
        grabCursor={true}
        effect={"fade"}
        navigation={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <Image w={'100%'} objectFit={'cover'}  src={props2.carousel1}></Image>
        </SwiperSlide>
        <SwiperSlide>
        <Image w={'100%'} objectFit={'cover'}  src={props2.carousel2}></Image>
        </SwiperSlide>
        <SwiperSlide>
        <Image  w={'100%'} objectFit={'cover'}  src={props2.carousel3}></Image>
        </SwiperSlide>
        <SwiperSlide>
        <Image w={'100%'} objectFit={'cover'}  src={props2.carousel4}></Image>
        </SwiperSlide>
      </Swiper>
       </Box> 
        </Box>
        {/* </Fade> */}
      </Stack>
      
    </Container>
  )
}

export default EventDetailsDesign