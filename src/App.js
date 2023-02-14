import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import About from './components/About';
// import CardCarousel from './components/CardCraousel';
// import CardDesign from './components/CardDesign';
// import Cards from './components/Cards';
import Cultural from './components/Cultural';
import Gaming from './components/Gaming';
// import Header from './components/Header';
// import Home from './components/Home';
// import PartperfDesign from './components/PartperfDesign';
// import PrevPartners from './components/PrevPartners';
// import PrevPerformers from './components/PrevPerformers';
// import ResponsiveDrawer from './components/ResponsiveDrawer';
import Sports from './components/Sports';
import Technical from './components/Technical';
// import Timeline from './components/Timeline';
// import EventList from './components/EventDetailsDesign';
import EventDetails from './components/EventDetails';
import './styles/app.scss'
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Business from './components/Business';
import Teams from './components/Teams';
import FAQs from './components/FAQs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}/>
        <Route path="/technical" element={<Technical></Technical>}/>
        <Route path ="/sports" element={<Sports></Sports>}/>
        <Route path ="/cultural" element={<Cultural></Cultural>}/>
        <Route path ="/gaming" element={<Gaming></Gaming>}/>
        <Route path = "/business" element ={<Business></Business>}/>
        <Route path ="/eventdetails/:id" element ={<EventDetails></EventDetails>}/>
        <Route path ="/teams" element ={<Teams></Teams>}/>
        <Route path ="/faqs" element ={<FAQs></FAQs>}/>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
