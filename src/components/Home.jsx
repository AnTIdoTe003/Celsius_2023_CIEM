import { Box, Button, HStack, Image, Text, VStack } from '@chakra-ui/react'
// import img1 from '../assets/logo1.png'
import '../styles/home.scss'
import { motion } from "framer-motion"
import{HashLink} from 'react-router-hash-link'
import home_vid1080 from '../assets/home_vid1080.mp4'
import React from 'react'
import Header from './Header'
import ResponsiveDrawer from './ResponsiveDrawer'
const Home = () => {
  return (
    <div className='home1'>
      <Box pos={'absolute'} zIndex={-1}>
      <video className='bg_video' controls={false} preload='auto' autoPlay loop muted>
       <source src={home_vid1080} type="video/mp4"></source>
        </video>
        </Box>
        <Header></Header>
        <ResponsiveDrawer></ResponsiveDrawer>
        <VStack w={'100vw'} overflow={'hidden'} px={['1rem','5rem']} alignItems={'center'} justifyContent={'flex-start'}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
        <Image src="https://i.ibb.co/M2jHcf6/logo1.png" w={'35rem'} paddingBottom={['50px','0']}></Image>
        </motion.div>  
        <Text textAlign={'center'}color={'white'} fontWeight={'400'} fontSize={['1rem','1.8rem']} transform={'translateY(-150px)'}>
        This is your chance to be a part of CIEM's most anticipated yearly festival, in which you can participate, enjoy yourself, and win prizes. We can't wait to see you at this spectacular event.
        </Text>
        <HStack spacing={'15'}>
        <HashLink smooth to={'#register'}>
        <Button bgColor={'orange.500'} color={'white'} w={['7.3rem','10.5rem']} height={['4rem','5rem']} fontSize={['1.3rem','1.7rem']} transform={['translateY(-100px)','translateY(-100px)']} _hover={{bgColor:"orange.700"}}>
            Register
        </Button>
        </HashLink>
        <a href="https://drive.google.com/file/d/16v728Pii4x29aQjdm9-ggw6aycXuBMwB/view?usp=drivesdk" target={'_blank'} rel="noreferrer">
           <Button  variant={'outline'} color={'white'} w={['7.5rem','10.5rem']} height={['4rem','5rem']} fontSize={['1.3rem','1.7rem']} transform={['translateY(-100px)','translateY(-100px)']} _hover={{bgColor:"orange.700"}}>
            Know More
        </Button>
        </a>       
        </HStack>       
    </VStack>
    </div> 
  )
}

export default Home