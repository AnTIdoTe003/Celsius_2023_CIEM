import React, { useState,useEffect } from 'react'
import About from './About'
import Home from './Home'
// import PrevPartners from './PrevPartners'
import PrevPerformers from './PrevPerformers'
import Timeline from './Timeline'
import Loader from './Loader'
import FAQs from './FAQs'
import Thistime from'./Thistime'
import Timer from './Timer'
const LandingPage = () => {
const [days, setDays] = useState(0);
const [hours, setHours] = useState(0);
const [minutes, setMinutes] = useState(0);
const [seconds, setSeconds] = useState(0);

const deadline = "February 17, 2023 11:15:00"
// const deadline = "February 16, 2023 23:30:00"

const  getTime = () =>{
    const timeleft = Date.parse(deadline)- Date.now()
    setDays(Math.floor(timeleft / (1000 * 60 * 60 * 24)))
    setHours(Math.floor(
        (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ))
    setMinutes(Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)))
    setSeconds(Math.floor((timeleft % (1000 * 60)) / 1000))
    console.log( timeleft / (1000 * 60 * 60 * 24));
}
useEffect(() => {
setInterval(getTime, 1000)
return () => clearInterval()   
}, [ ])
useEffect(() => {
		window.history.scrollRestoration = "manual";
	}, []);
useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
const [loading, setLoading] = useState(false)
useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[ ])
  return (
    <div>
        {
          (days+hours+minutes+seconds<=0)?
          loading?(
            <Loader></Loader>
          ):
          (
            <div>
                  <Home/>
                  <About/>
                  <Timeline  />
                  {/* <PrevPartners/> */}
                  <PrevPerformers/>
                  <Thistime/>
                  <FAQs/>
            </div>
          )
          :
          <Timer
          days={days} hours={hours} minutes={minutes} seconds={seconds}
          >

          </Timer>
        }
        
    </div>
  )
}

export default LandingPage