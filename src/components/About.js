import React from 'react'
import {motion} from 'framer-motion/dist/framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
   


   const sections =[
      {
        id: 1,
        img:'https://dev.nitex.com/wp-content/uploads/2021/01/i1.png', 
        heading: 'Care & love', 
        text: 'Build Titanium support system for customers, taking care of them Customers are more like lifelong friends than business partners'
      },
      {
        id: 2,
        img:'https://dev.nitex.com/wp-content/uploads/2021/01/i2.png' ,
        heading: 'Entrepreneurship', 
        text: 'Everyone is a go-getter & problem-solver who takes initiatives willingly Individual accountability & integrity play a role in organizational growth',
      },
      {
        id: 3, 
        img:'https://dev.nitex.com/wp-content/uploads/2021/01/i5.png' ,
        heading: 'Empowerment', 
        text: 'Make apparel manufacturing easily accessible and simplified for all sGive sophisticated experiences to our customers at reasonable prices'
      }
      

   ]
    

    return (
        <div className="about" id="aboutUs">
         <h1 className='aboutUs_heading_text'>About Us</h1>
        <div className="container">
          <div className="text_container">
            <div className="col-3">
              <h4 className="about__h4">Who we are?</h4>
            </div>
            <div className="col-9">
              <div className="about__text">
                <p>
                We take your headache out of manufacturing products, so you can focus on growing your brand sustainably.
                We created our own Design Studio for our clients to provide sophisticated & comfortable designs with customized support. 
                Our diversified team does background research on geography & cultural variations to create products for different localities.
                We don’t afford to pollute the mother planet anymore. It’s now an urgent call to go all in for sustainable fashion, and for all 
                at reasonable cost. NITEX is driving that movement for sustainable clothing across the world.
                </p>
              </div>
            </div>
          </div>
          

          <div className=" mt-60 about_all_cards">
            {sections.map((section) => (
              <motion.div
                className="col-4 pl-15 about__section about_card "
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="about__section-icon"><img src={section.img} alt=''/></div>
                <div className="about__section-heading">
                  <h6>{section.heading}</h6>
                </div>
                <div className="about__section-text">
                  <p>{section.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    )
}

export default About
