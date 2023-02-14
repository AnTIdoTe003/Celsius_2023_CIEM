import { Box, Button, HStack, Image,Menu,
    MenuButton,
    MenuList,
    MenuItem,
   } from '@chakra-ui/react'
import {ChevronDownIcon}  from '@chakra-ui/icons'
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
            <Menu>
            <MenuButton id='buttons' fontSize={'20px'} variant={'unstyled'} textTransform={'uppercase'} color={'whiteAlpha.800'}  as={Button} rightIcon={<ChevronDownIcon/>}>
            Events
            </MenuButton>
            <MenuList>
            <Link to={'/sports'}><MenuItem>Sports</MenuItem></Link>
            <Link to={'/technical'}><MenuItem>Technical</MenuItem></Link>
            <Link to={'/cultural'}><MenuItem>Cultural</MenuItem></Link>
            <Link to={'/gaming'}><MenuItem>Gaming</MenuItem></Link>
            <Link to={'/business'}><MenuItem>Business</MenuItem></Link>
            </MenuList>
            </Menu>
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