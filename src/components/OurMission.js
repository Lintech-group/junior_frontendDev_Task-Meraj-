import React, { useState, useEffect } from 'react';
import '../sass/components/_ourmission.scss';

const missionData = [
  {
    heading_text: 'Our Own Design Studio',
    text:'We created our own Design Studio for our clients to provide sophisticated & comfortable designs with customized support. Our diversified team does background research on geography & cultural variations to create products for different localities.',
    imageUrl: 'https://dev.nitex.com/wp-content/uploads/2021/01/Group-20834-300x209.png',
  },
  {
    heading_text: 'Sustainable fashion for all',
    text:'We don’t afford to pollute the mother planet anymore. It’s now an urgent call to go all in for sustainable fashion, and for all at reasonable cost. NITEX is driving that movement for sustainable clothing across the world.',
    imageUrl: 'https://dev.nitex.com/wp-content/uploads/2021/01/Group-20848-300x232.png',
  },
  {
    heading_text: 'Transparent Monitoring & Quality Control',
    text:'Medium Sized Clothing brands like yours want to run production overseas to save cost. We partner with you to manufacture the goods in our own factory. Besides product cost, quality and on-time delivery are very important as well.',
    imageUrl: 'https://dev.nitex.com/wp-content/uploads/2020/05/Startup@2x-1024x877-1-300x257.png',
  },
  {
    heading_text: 'Cloud platform for real-time update',
    text:'One-Stop platform for managing overseas production from design to manufacturing to shipment. Clients can visualize every part of the production process 24/7 via our own online digital platform.',
    imageUrl: 'https://dev.nitex.com/wp-content/uploads/2020/05/Start-from-Design@2x-300x251.png',
  },
  {
    heading_text: 'Efficient Logistic & Shipping',
    text:'Until the goods reach your warehouse it’s our responsibility to execute the whole process smoothly. We take care of Air and Sea Freight, Clearing & Forwarding on the port, Custom Broker Management to reduce clients’ trouble, and ensure on-time delivery. ',
    imageUrl: 'https://dev.nitex.com/wp-content/uploads/2020/05/1M@2x-1024x782-1-300x229.png',
  },
];

const OurMission = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSectionIndex((prevIndex) => (prevIndex + 1) % missionData.length);
    }, 5000); // Adjust the interval as needed (5000 milliseconds = 5 seconds)

    return () => clearInterval(interval);
  }, []);

  return (
   <div className='mission_main_container' id="OurMission">
      <h1 className='mission_heading'>Our Mission</h1>
      <p className='mission_paragraph_text'>Making production easier for sustainable clothing brands<br/>
      Our diversified team does background research on geography & 
      cultural<br/> variations to create products for different localities.
      </p>
    <div className='mission-section-container container'>
      {missionData.map((mission, index) => (
        <div
          key={index}
          className={`mission-section ${currentSectionIndex === index ? 'active' : ''}`}
        >
          <div className='left-section'>
            <h1 className='heading_text'>{mission.heading_text}</h1>
            <h1 className='normal_text'>{mission.text}</h1>
          </div>
          <div className='right-section'>
            <img className='img_size' src={mission.imageUrl} alt='' />
          </div>
        </div>
      ))}
    </div>
   </div> 
  );
};

export default OurMission;
