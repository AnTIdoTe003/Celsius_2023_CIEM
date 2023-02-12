import { Box} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/eventcards.scss'
const EventCard = (props1) => {
  return (
    <Link to={`/eventdetails/${props1.title}`}> 
    <Box className='eventcard' h={'20rem'} w={['95vw','30rem']} borderRadius={'5px'}  display={'flex'} justifyContent={'center'} alignItems={'center'} boxShadow='2xl' p='6' rounded='md'
    backgroundImage={props1.image} backgroundRepeat={'no-repeat'} backgroundSize={'cover'} color={'white'} 
    >
      <h1>{props1.title}</h1>
    </Box>
    </Link>
  )
}

export default EventCard