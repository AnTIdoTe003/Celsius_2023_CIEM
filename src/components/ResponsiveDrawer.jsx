import React from 'react';
import { IoIosOptions } from 'react-icons/io';
import {
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
import logo from '../assets/logo1.png'
import '../styles/drawer.scss'
// import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
const ResponsiveDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <HStack justifyContent={'space-between'} height={'auto'} display={['yes', 'none']}>
      <Box>
      <Button
        colorScheme="white"
        onClick={onOpen}
        pos={'absolute'}
        top={'20px'}
        left={'5px'}
        zIndex={'1'}
        background={'none'}
        color={'white'}
      >
        <IoIosOptions size={'40px'}></IoIosOptions>
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
              <Button
                fontSize={'20px'}
                variant={'unstyled'}
                textTransform={'uppercase'}
                color={'white'}
                onClick={onClose}
              >
                Schedule
              </Button>
              <Button
                fontSize={'20px'}
                variant={'unstyled'}
                textTransform={'uppercase'}
                color={'white'}
                onClick={onClose}
              >
                Activities
              </Button>
              <Button
                fontSize={'20px'}
                variant={'unstyled'}
                textTransform={'uppercase'}
                color={'white'}
                onClick={onClose}
              >
                Sponsers
              </Button>
              <Link smooth to={'/sports'}>
              <Button
                fontSize={'20px'}
                variant={'unstyled'}
                textTransform={'uppercase'}
                color={'white'}
                onClick={onClose}
              >
                About us
              </Button>
              </Link>
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
              <Link to={'/footer'}>
              
              <Button
                fontSize={'20px'}
                variant={'unstyled'}
                textTransform={'uppercase'}
                color={'white'}
                onClick={onClose}
              >
                Contact us
              </Button>
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      </Box>
      <Box w={'7rem'} className={'drawer_img'} overflow={'hidden'}>
      <img src={logo} alt=""/>
      </Box>
    </HStack>
  );
};

export default ResponsiveDrawer;
