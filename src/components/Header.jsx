import { Box, Button, HStack, Image } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import img1 from '../assets/logo1.png'
import '../styles/header.scss'

const Header = () => {
      
  return (
        <HStack alignItems={'center'} justifyContent={'space-between'} display={['none',' yes']} px={'10'}
        className='navbar'
        >
            <NavLink to={'/'}>
            <Box >  
            <Image src={img1} w={'200px'} height={'200px'} transform={'translateY(-3.5rem)'}/>
            </Box>
            </NavLink>
            <Box>
            <HStack justifyContent={'space-evenly'} spacing={'30px'}>
            <Button id='buttons' fontSize={'20px'} variant={'unstyled'} textTransform={'uppercase'} color={'whiteAlpha.800'}>
                About us
            </Button>
            <Button  id='buttons' fontSize={'20px'} variant={'unstyled'} textTransform={'uppercase'} color={'whiteAlpha.800'}>
                Activities
            </Button>
            <HashLink smooth to={"#sponser"}>
                <Button id='buttons' fontSize={'20px'} variant={'unstyled'} textTransform={'uppercase'} color={'whiteAlpha.800'}>
                Sponsers
            </Button>
            </HashLink>
            <NavLink to={'/teams'}>
            <Button id='buttons' fontSize={'20px'} variant={'unstyled'} textTransform={'uppercase'} color={'whiteAlpha.800'}>
               Teams
            </Button>
            </NavLink>
            <HashLink smooth to={'#footer'}>
            <Button id='buttons'fontSize={'20px'} variant={'unstyled'} textTransform={'uppercase'} color={'whiteAlpha.800'}>
                Contact us
            </Button>
            </HashLink>
            </HStack>
            </Box>
        </HStack>
  )
}

export default Header