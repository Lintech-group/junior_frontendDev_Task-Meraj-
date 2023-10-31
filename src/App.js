import React from 'react';
import "./sass/main.scss"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Showcase from "./components/Showcase"
import Blank from "./components/Blank"
import Portfolio from "./components/Portfolio"
import Services from './components/Services/Services';
import OurMission from './components/OurMission';
import Testimonial from './components/Testimonial/Testimonial';
import ContactUs from './components/ContactUs/ContactUs';
import ShowCase from './components/ShowCase/ShowCase';
import Footer from './components/Footer/Footer';
import Certification from './components/Certifications/Certification';


function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Certification/>
      <About />
     
      <Showcase />
      <Services/>
      <Blank />
      <Portfolio />
      <OurMission/> 
      <ShowCase/>
      <Testimonial/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
