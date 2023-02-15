import { Box, Button, HStack, Image
   } from '@chakra-ui/react'
// import {ChevronDownIcon}  from '@chakra-ui/icons'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import img1 from '../assets/logo1.png'
import '../styles/header.scss'
import { Link } from 'react-router-dom'

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
            <Link to={'/'}>
            <Button id='buttons' fontSize={'20px'} variant={'unstyled'} textTransform={'uppercase'} color={'whiteAlpha.800'}>
                Home
            </Button>
            </Link>
            {/* <Button  id='buttons' fontSize={'20px'} variant={'unstyled'} textTransform={'uppercase'} color={'whiteAlpha.800'}>
                Events
            </Button> */}
            <HashLink smooth to={'#register'}>
            <Button id='buttons'fontSize={'20px'} variant={'unstyled'} textTransform={'uppercase'} color={'whiteAlpha.800'}>
                Events
            </Button>
            </HashLink>

            <NavLink to={'/teams'}>
                <Button id='buttons' fontSize={'20px'} variant={'unstyled'} textTransform={'uppercase'} color={'whiteAlpha.800'}>
                Teams
            </Button>
            </NavLink>
            
            

            <NavLink to='/faqs'>
            <Button id='buttons' fontSize={'20px'} variant={'unstyled'} textTransform={'uppercase'} color={'whiteAlpha.800'}>
               Faqs
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