import { Box, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import '../styles/partperf.scss'
// import Fade from 'react-reveal/Fade';
const PartperfDesign = (props) => {
  return (
    // <Fade bottom>
      <VStack>
        <Box className='image_wrapper_border' backgroundColor={'blueviolet'} display={'flex'} justifyContent={'center'} alignItems={'center'} borderRadius={'50%'} height={['150px','350px']} width={['150px','350px']} >
      <Box className='image_wrapper' width={'95%'} height={'95%'} overflow={'hidden'} borderRadius={'50%'}>
      <Image width={'100%'} h={'full'} objectFit={'cover'} src={props.image} alt={props.text} ></Image>
    </Box>
    </Box>
    <Box>
      <Text color={'white'} fontFamily={'poppins'} textAlign={'center'} fontSize={['lg','2xl']}>{props.text}</Text>
      </Box>
      </VStack>
    
    // </Fade>
   
  )
}

export default PartperfDesign