import { Box, Button, HStack, Image, Text, VStack } from '@chakra-ui/react'
import img1 from '../assets/logo1.png'
import '../styles/home.scss'
import { motion } from "framer-motion"
import{HashLink} from 'react-router-hash-link'
import home_vid1080 from '../assets/home_vid1080.mp4'
import React, { useEffect } from 'react'
import Header from './Header'


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='home1'>
      <Box pos={'absolute'} zIndex={-1}>
      <video className='bg_video' controls={false} preload='auto' autoPlay loop muted>
       <source src={home_vid1080} type="video/mp4"></source>
        </video>
        </Box>
        <Header></Header>
        <VStack w={'100vw'} overflow={'hidden'}>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          >
        <Image src={img1} w={'700px'} paddingBottom={['50px','0']}></Image>
        </motion.div>
          
        <Text textAlign={'center'} w={['350px','1000px']} color={'white'} fontWeight={'400'} fontSize={'30px'} transform={'translateY(-150px)'}>
        This is your chance to be a part of CIEM's most anticipated yearly festival, in which you can participate, enjoy yourself, and win prizes. We can't wait to see you at this spectacular event.
        </Text>
        <HStack spacing={'15'}>
          <HashLink smooth to={'#register'}>
        <Button bgColor={'orange.500'} color={'white'} w={'175px'} height={'75px'} fontSize={'25px'} transform={['translateY(-100px)','translateY(-100px)']} _hover={{bgColor:"orange.700"}}>
            Register
        </Button>
        </HashLink>

        <HashLink to={"#about"}>
           <Button  variant={'outline'} color={'white'} w={'175px'} height={'75px'} fontSize={'25px'} transform={['translateY(-100px)','translateY(-100px)']} _hover={{bgColor:"orange.700"}}>
            Know More
        </Button>
        </HashLink>
        
        </HStack>
       
    </VStack>
    </div>
    
    
    
  )
}

export default Home