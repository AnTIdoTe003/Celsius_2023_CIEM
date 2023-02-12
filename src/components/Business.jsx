import React, { useEffect } from 'react'
import { Container, Heading,  Stack,  } from '@chakra-ui/react'
import EventCard from './EventCard'
// import Fade from 'react-reveal/Fade';
// import Slide from 'react-reveal/Slide';
import ideathon from '../assets/ideathon.jpg'
import debate from '../assets/debate.jpg'
import publicspeaking from '../assets/publicspeaking.jpg'
import ResponsiveDrawer from './ResponsiveDrawer'
import Header from './Header';

const Business = () => {
  
      useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      const businessData = [
        {
          key:1,
          title:'ideathon',
          image: ideathon
        },
        {
          key:2,
          title:'debate',
          image: debate
        },
       {
          key:3,
          title:'public speaking',
          image: publicspeaking
        },]
      return (
        
        <Container maxW={'100vw'}   id={'sports'} className={'events_wrapper'} paddingBottom={10}>
          <Header></Header>
          <ResponsiveDrawer></ResponsiveDrawer>
          <Heading color={'white'} fontSize={['4rem','7rem']} paddingBottom={'10'}  textAlign={'center'}>Business</Heading>
          {/* <Fade top cascade> */}
            <Stack direction={['column','row']} wrap={'wrap'} justifyContent={'space-evenly'} alignContent={'center'} rowGap={'30px'}>
              {businessData.map((item, index) => {
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


export default Business