import { Box, Heading, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo1.png'
import linkedin from '../assets/linkedin.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import '../styles/footer.scss'

const Footer = () => {
  return (
        <Stack direction={['column','row']} justifyContent={['center','space-evenly']} alignItems={'center'} flexWrap={'wrap'} bgColor={'blackAlpha.900'} id={'footer'} className={'footer_wrapper'}
        > 
        <Box>
           <p> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.5396145909062!2d88.34291951541735!3d22.483928641884763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0270ecc09b4691%3A0x7f99d48523fd066a!2sCalcutta%20Institute%20of%20Engineering%20And%20Management%20(CIEM)!5e0!3m2!1sen!2sin!4v1674467466661!5m2!1sen!2sin" title='College Map'></iframe></p>
        </Box>
        <Box>
            <VStack alignItems={'flex-start'} color={'white'} transform={['translateY(25px)','translateY(0px)']}>
                <Heading size={'4xl'}>Contact</Heading>
                <Text fontSize={'xl'}>Satyaki Saha : 8777098328
                </Text>
                <Text fontSize={'xl'}>Debgandhar Ghosh : 8334860877
                </Text>
                <Text fontSize={'xl'}>Ananya Chatterjee : 7980833623
                </Text>
            </VStack>
        </Box>
        <Box >
            <VStack>
                <Image src= {logo} w={['20rem','20rem']} h={'20rem'}>
                </Image>
                <HStack spacing={'8'} className={'social_icons'}>
                    <img src={linkedin} alt="" />
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                    
                </HStack>
            </VStack>
        </Box>
         </Stack> 

  )
}

export default Footer