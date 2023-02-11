import React, { useEffect } from 'react'
import {Container, Heading, Stack } from '@chakra-ui/react'
import EventCard from './EventCard'
import singing from '../assets/singing.jpg'
import dancing from '../assets/dancing.jpg'
import fashionshow from '../assets/fashionshow.jpg'
import duet from '../assets/duet.jpg'
import easterndance from '../assets/easterndance.jpg'

import Header from './Header';
const Cultural = () => {
  
      useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      const businessData = [
        {
          key:1,
          title:'eastern solo singing',

          image: singing
        },
     
     
        {
          key:4,
          title:'western solo singing',
          image:singing
        },
        {
          key:5,
          title:'duo singing',
          image:duet
        },
           {
          key:2,
          title:'eastern solo dancing',
          image: easterndance
        },
         {
          key:6,
          title:'western solo dancing',

          image:dancing
        },
         {
          key:7,
          title:'group dance',
          image:dancing
        },
        {
          key:3,
          title:'fashion show',
          image:fashionshow
        },
      
      
      ]
      return (
        
        <Container maxW={'100vw'}   id={'sports'} className={'events_wrapper'} paddingBottom={10} paddingTop={5}>
          <Header></Header>
          <Heading color={'white'}fontSize={['5rem','7rem']} paddingBottom={'10'}  textAlign={'center'}>Cultural</Heading>

            <Stack direction={['column','row']} wrap={'wrap'} justifyContent={'space-evenly'} alignItems={'center'} rowGap={10} columnGap={8}>
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