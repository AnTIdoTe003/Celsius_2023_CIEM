import React from 'react';
import {HiMenuAlt1} from 'react-icons/hi'
import{
  Drawer,
  DrawerBody,
  // DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  Box,
  HStack,

} from '@chakra-ui/react';
import {Menu,
  MenuButton,
  MenuList,
  MenuItem,
 } from '@chakra-ui/react'
import {ChevronDownIcon}  from '@chakra-ui/icons'
import logo from '../assets/logo1.png'
import '../styles/drawer.scss'
import linkedin from '../assets/linkedin.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
// import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
const ResponsiveDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <HStack justifyContent={'space-between'} height={'auto'} display={['yes', 'none']}>
      <Box>
      <Button
        colorScheme="white"
        onClick={onOpen}
        zIndex={'1'}
        background={'blackAlpha.700'}
        color={'white'}
        borderRadius={'10%'}
      >
        <HiMenuAlt1 size={'1.6rem'}></HiMenuAlt1>
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bgColor={'black'}>
          <DrawerCloseButton color={'white'} />
          <DrawerHeader textTransform={'uppercase'} color={'white'}>
            Celsius 2023
          </DrawerHeader>

          <DrawerBody>
            <VStack>
              <Link to={'/'}>
            <Button
                fontSize={'20px'}
                variant={'unstyled'}
                textTransform={'uppercase'}
                color={'white'}
                onClick={onClose}
              >
                Home
              </Button>
              </Link>
              <Menu>
            <MenuButton id='buttons' fontSize={'20px'} variant={'unstyled'} textTransform={'uppercase'} color={'whiteAlpha.800'}  as={Button} rightIcon={<ChevronDownIcon/>}>
            Events
            </MenuButton>
            <MenuList>
            <Link to={'/sports'}><MenuItem color={'black'}>Sports</MenuItem></Link>
            <Link to={'/technical'}><MenuItem color={'black'} >Technical</MenuItem></Link>
            <Link to={'/cultural'}><MenuItem color={'black'}>Cultural</MenuItem></Link>
            <Link to={'/gaming'}><MenuItem color={'black'}>Gaming</MenuItem></Link>
            <Link to={'/business'}><MenuItem color={'black'}>Business</MenuItem></Link>
            </MenuList>
            </Menu>
            <NavLink smooth to={'/faqs'}>
              <Button
                fontSize={'20px'}
                variant={'unstyled'}
                textTransform={'uppercase'}
                color={'white'}
                onClick={onClose}
              >
                FAQS
              </Button>
              </NavLink>
              <Link to={'/teams'}>
              <Button
                fontSize={'20px'}
                variant={'unstyled'}
                textTransform={'uppercase'}
                color={'white'}
                onClick={onClose}
              >
                Teams
              </Button>
              </Link>
              <NavLink to={'/contactus'}>
              <Button
                fontSize={'20px'}
                variant={'unstyled'}
                textTransform={'uppercase'}
                color={'white'}
                onClick={onClose}
              >
                Contact us
              </Button>
              </NavLink>
            </VStack>
            <HStack spacing={'8'} alignItems={'flex-end'} height={'50vh'} className={'social_icons'}>
                    <a href="https://www.linkedin.com/company/celsiusciem/" target="_blank" rel="noreferrer" onClick={onClose}><img src={linkedin} alt="" /></a> 
                    <a href="https://www.facebook.com/ciem.CelsiuS?mibextid=ZbWKwL" target="_blank" rel="noreferrer" onClick={onClose}><img src={facebook} alt="" /></a>
                    <a href="https://www.instagram.com/ciem_celsius/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noreferrer" onClick={onClose}><img src={instagram} alt=""/></a>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      </Box>
      <Box className={'drawer_img'} overflow={'hidden'}>
      <img src={logo} alt=""/>
      </Box>
    </HStack>
  );
};

export default ResponsiveDrawer;
