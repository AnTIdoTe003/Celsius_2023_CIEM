import {Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
// import Fade from 'react-reveal/Fade';
const TeamsDesign = (props3) => {
  return (
    //  <Fade left>
    <VStack w={['10rem','14rem']} h={['13.8rem','18rem']} >
      <Image w={'100%'} h={'80%'} borderRadius={'50%'} objectFit={'cover'} src={props3.pic}></Image>
      <Text fontFamily={'poppins'} color={"white"} fontSize={['0.7rem','1rem']}>{props3.name}</Text>
      <Text fontFamily={'poppins'} color={"white"} fontSize={['0.7rem','1rem']}>{props3.role}</Text>
    </VStack>
    // </Fade>
  )
}

export default TeamsDesign