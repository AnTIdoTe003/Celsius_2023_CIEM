import React, { useEffect } from 'react'
import {Container, Heading,  Stack } from '@chakra-ui/react'
import EventCard from './EventCard'
// import mobilegaming from '../assets/mobilegaming.png'
// import pcgaming from '../assets/pcgaming.png'
import Header from './Header';
import ResponsiveDrawer from './ResponsiveDrawer'
const Gaming = () => {
      useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      const gamingData = [
        {
          key:1,
          title:'mobile gaming',
          image: "https://i.ibb.co/7NcvNNj/mobilegaming.png"
        },
        {
          key:2,
          title:'pc gaming',
          image: "https://i.ibb.co/ypvbrMt/pcgaming.png" 
        },]
      return (
        
        <Container maxW={'100vw'}   id={'sports'} className={'events_wrapper'} paddingBottom={10}>
          <Header></Header>
          <ResponsiveDrawer></ResponsiveDrawer>
          <Heading color={'white'} fontSize={['4rem','7rem']} paddingBottom={'10'}  textAlign={'center'}>Gaming</Heading>

            <Stack direction={['column','row']} wrap={'wrap'} justifyContent={'space-evenly'} alignContent={'center'} rowGap={'30px'}>
              {gamingData.map((item, index) => {
                return (
       
                  <EventCard
                  key={item.key}
                  title={item.title}
                  image={item.image}
                  />

                )
              })}
            </Stack>
        </Container>
        
      )
    }


export default Gaming