import React from 'react'
import { Card,  CardBody,  Stack, Heading, Text, Button, Image } 
from '@chakra-ui/react'
import img1 from '../assets/cultural.png'
import { Link } from 'react-router-dom'
const Cards = ({imagePath}) => {
  return (
    
  <Card maxW='lg' >
  <CardBody>
    <Image
      src={img1}

      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='xl' textTransform={'uppercase'} textAlign={'center'}>Technical</Heading>
      <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia laboriosam vel qui. Quisquam dicta voluptates corporis quis adipisci officia temporibus laboriosam quo animi, inventore debitis illum quaerat, voluptatibus error libero!
      </Text>
      <Link to={'/technical'}>
      <Button>
        See More
      </Button>
       </Link>
    </Stack>
  </CardBody>
</Card>
   
   
  )
}

export default Cards