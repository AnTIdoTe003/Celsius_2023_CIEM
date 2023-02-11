import { Box } from '@chakra-ui/react'
import React from 'react'
// import logo from '../assets/logo1.png'
// import ClockLoader from "react-spinners/ClockLoader";
// import loader from '../assets/loader.gif'
import loader from '../assets/loading_video.mp4'
import '../styles/loader.scss'
const Loader = () => {
  return (
    <Box>
 <video className='loader_vid' controls={false} preload='auto' autoPlay loop muted>
  <source src={loader} type="video/mp4"></source>
 </video>
 </Box>
    
  )
}

export default Loader