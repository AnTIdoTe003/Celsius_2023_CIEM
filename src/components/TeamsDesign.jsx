import {Box, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
// import Fade from 'react-reveal/Fade';
const TeamsDesign = (props3) => {
  return (
    //  <Fade left>
    <VStack w={['8rem','14rem']} h={['13rem','18rem']}  objectFit={'cover'}>
      <Box w={['8rem','10rem']} h={['8rem','10rem']} overflow={'hidden'}>
      <Image w={'100%'} h={'100%'} borderRadius={'50%'} objectFit={'cover'} src={props3.pic}></Image>
      </Box>
      <Text fontFamily={'poppins'} textAlign={'center'} color={"white"} fontSize={['0.8rem','1rem']}>{props3.name}</Text>
      <Text fontFamily={'poppins'} textAlign={'center'} color={"white"} fontSize={['0.8rem','1rem']}>{props3.role}</Text>
      <Text fontFamily={'cursive'} textAlign={'center'} color={"white"} fontSize={['0.8rem','1rem']}>{props3.quote}</Text>
    </VStack>
    // </Fade>
  )
}

export default TeamsDesign