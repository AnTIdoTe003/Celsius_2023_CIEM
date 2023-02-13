import React, { useEffect } from 'react'
import {Container, Heading, Stack } from '@chakra-ui/react'
import EventCard from './EventCard'
// import singing from '../assets/singing.jpg'
// import dancing from '../assets/dancing.jpg'
// import fashionshow from '../assets/fashionshow.jpg'
// import duet from '../assets/duet.jpg'
// import easterndance from '../assets/easterndance.jpg'
import ResponsiveDrawer from './ResponsiveDrawer'
import Header from './Header';
const Cultural = () => {
  
      useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      const businessData = [
        {
          key:1,
          title:'eastern solo singing',

          image: "https://i.ibb.co/YhjK8Nh/singing.jpg"
        },
     
     
        {
          key:4,
          title:'western solo singing',
          image: "https://i.ibb.co/YhjK8Nh/singing.jpg"
        },
        {
          key:5,
          title:'duo singing',
          image: "https://i.ibb.co/Y3gL0dh/duet.jpg"
        },
           {
          key:2,
          title:'eastern solo dancing',
          image: "https://i.ibb.co/RjK28zc/easterndance.jpg"
        },
         {
          key:6,
          title:'western solo dancing',

          image:"https://i.ibb.co/6vC6RS2/dancing.jpg"
        },
         {
          key:7,
          title:'group dance',
          image:"https://i.ibb.co/6vC6RS2/dancing.jpg"
        },
        {
          key:3,
          title:'fashion show',
          image: "https://i.ibb.co/0DLTgdY/fashionshow.jpg"
        },
      
      
      ]
      return (
        
        <Container maxW={'100vw'}   id={'sports'} className={'events_wrapper'} paddingBottom={10} paddingTop={5}>
          <Header></Header>
          <ResponsiveDrawer></ResponsiveDrawer>
          <Heading color={'white'} fontSize={['4rem','7rem']} paddingBottom={'10'}  textAlign={'center'}>Cultural</Heading>

          <Stack direction={['column','row']} wrap={'wrap'} justifyContent={'space-evenly'} alignContent={'center'} rowGap={'30px'}>
              {businessData.map((item, index) => {
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


export default Cultural