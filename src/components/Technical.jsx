import {Container, Heading, Stack} from '@chakra-ui/react'
import React, { useEffect } from 'react'
// import pcgaming from '../assets/pcgaming.png'
// import hackathon from '../assets/hackathon.png'
// import gripit from '../assets/gripit.png'
// import nitrocharge from '../assets/nitrocharge.png'
// import circuit from '../assets/circuit.png'
// import robocup from '../assets/robocup.png'
// import codedrift from '../assets/codedrift.png'
// import bridgebuilding from '../assets/bridgebuilding.png'
// import loc from '../assets/loc.png'
// import model from '../assets/model.png'
// import treasurehunt from '../assets/treasurehunt.png'
// import techquiz from '../assets/techquiz.png'
// import mobilegaming from '../assets/mobilegaming.png'
import EventCard from './EventCard'
// import Fade from 'react-reveal/Fade';
// import Slide from 'react-reveal/Slide';
import '../styles/sports.scss'
import Header from './Header'
import ResponsiveDrawer from './ResponsiveDrawer'
const Technical = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    const techData = [
      {
        key:1,
        title:'hackathon',
        image: "https://i.ibb.co/WVvcm1z/hackathon.png"
      },
      {
        key:2,
        title:'all terrain',
        image: "https://i.ibb.co/VjjmB5r/nitrocharge.png"
      },
      {
        key:3,
        title:'robo soccer',
        image: "https://i.ibb.co/bzK8Dbp/robocup.png"
      },
      {
        key:4,
        title:'codedrift',
        image: "https://i.ibb.co/grrqhvc/codedrift.png"
      },
      {
        key:5,
        title:'bridge building',
        image: "https://i.ibb.co/LPmBYL7/bridgebuilding.png"
      },
      {
        key:6,
        title:'line of control',
        image: "https://i.ibb.co/cCLS7Kb/loc.png"
      },
      {
        key:7,
        title:'treasure hunt',
        image: "https://i.ibb.co/vhjcvLw/treasurehunt.png"
      },
      {
        key:8,
        title:'model display',
        image: "https://i.ibb.co/gP1T1nM/model.png"
      },
      {
        key:9,
        title:'tech quiz',
        image: "https://i.ibb.co/tLSdHGk/techquiz.png"
      },
    ]
  return (
    <Container maxW={'100vw'}id={'sports'} className={'events_wrapper'} paddingBottom={10} >
      <Header></Header>
      <ResponsiveDrawer></ResponsiveDrawer>
    <Heading color={'white'} fontSize={['4rem','7rem']} py={2}  textAlign={'center'}>Technical</Heading>
    {/* <Fade top cascade> */}
      <Stack direction={['column','row']} wrap={'wrap'} justifyContent={'space-evenly'} alignContent={'center'} rowGap={'30px'}>
        {techData.map((item, index) => {
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

export default Technical