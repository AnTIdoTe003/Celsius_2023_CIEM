import React from 'react'
import '../styles/timer.scss'
import logo from '../assets/logo1.png'
const Timer = ({days, hours, minutes,seconds}) => {
  return (
    <div className="timeline_container">
      <div className="logo_img">
        <img src={logo} alt="" />
      </div>
      <div className='header_wrapper'>
        <p>The heat wave will crash you in !!!</p>
      </div>
      <div className='timer_wrapper'>
      <div className='timeline_content'>
            <h1>{days<10?"0"+days:days}</h1>
            <p>Days</p>
            </div>
        <div  className='timeline_content'>
            <h1>{hours<10?"0"+hours:hours}</h1>
            <p>Hours</p>
            </div>
        <div  className='timeline_content'>
            <h1>{minutes<10?"0"+minutes:minutes}</h1>
            <p>Minutes</p>
            </div>
        <div  className='timeline_content'>
            <h1>{seconds<10?"0"+seconds:seconds}</h1>
            <p>Seconds</p>
            </div>
    </div>
    </div>
    
  )
}

export default Timer