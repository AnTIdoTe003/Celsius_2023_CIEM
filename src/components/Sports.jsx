import React, { useEffect } from 'react'
import {Container, Heading, Stack} from '@chakra-ui/react'
import torneo from '../assets/torneo.png'
import shuttleup from '../assets/shuttleup.png'
import chess from '../assets/chess.png'
import smash from '../assets/smash.png'
import carrom from '../assets/carrom.png'
import howzat from '../assets/howzat.png'
import tt from '../assets/tt.jpg'
import EventCard from './EventCard'
// import AnimatedPage from './AnimatedPage'
// import Fade from 'react-reveal/Fade';
// import Slide from 'react-reveal/Slide';
import '../styles/sports.scss'
import Header from './Header'

const Sports = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const sportsData = [
    {
      key:1,
      title:'torneo',
      image: torneo
    },
    {
      key:2,
      title:'shuttleup',
      image: shuttleup
    },
    {
      key:3,
      title:'chess',
      image: chess
    },
    {
      key:4,
      title:'smash',
      image: smash
    },
    {
      key:5,
      title:'carrom',
      image: carrom
    },
    {
      key:6,
      title:'howzat',
      image: howzat
    },
    {
      key:7,
      title:'table tennis',
      image :tt
    }
  ]
  return (
    
    <Container maxW={'100vw'}   id={'sports'} className={'events_wrapper'} paddingBottom={10} paddingTop={5}>
      <Header></Header>
      <Heading color={'white'} fontSize={['5rem','7rem']} paddingBottom={'10'}  textAlign={'center'}>Sports</Heading>
      {/* <Fade top cascade> */}
        <Stack direction={['column','row']} wrap={'wrap'} justifyContent={'space-evenly'} alignContent={'center'} rowGap={'30px'}>
          {sportsData.map((item, index) => {
            return (
              // <Slide top>
              <EventCard
              key={item.key}
              title={item.title}
              image={item.image}
              />
              // </Slide>
            )
          })}
        </Stack>
        {/* </Fade> */}
    </Container>
    
  )
}

export default Sports