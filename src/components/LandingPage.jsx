import React, { useState,useEffect } from 'react'
import About from './About'
import Home from './Home'
// import PrevPartners from './PrevPartners'
import PrevPerformers from './PrevPerformers'
import Timeline from './Timeline'
import Loader from './Loader'
import FAQs from './FAQs'
import Thistime from'./Thistime'
const LandingPage = () => {
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
  },[])
  return (
    <div>
        {
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
        }
        
    </div>
  )
}

export default LandingPage