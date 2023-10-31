import React, { useEffect, useState } from "react";

const Showcase = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000); // Change image every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);





  

  return (
    <div className="show">
      <div className="container rel">
        <div className="show__content">
          <h1>NITEX, </h1>
          <h1>International partners</h1>
        
        </div>
        <div className="show__card">
          <div
            className={`image-container ${
              activeImageIndex === 0 ? "active" : ""
            }`}
          >
            <img
              src="https://dev.nitex.com/wp-content/uploads/2021/01/Accelerating_Asia_cohort_2.jpg"
              alt=""
            />
          </div>
          <div
            className={`image-container ${
              activeImageIndex === 1 ? "active" : ""
            }`}
          >
            <img
              src="https://dev.nitex.com/wp-content/uploads/2021/01/AllS20FoundersGroupColage_forwebsite_PhotoIllustration.jpg"
              alt=""
            />
          </div>
          <div
            className={`image-container ${
              activeImageIndex === 2 ? "active" : ""
            }`}
          >
            <img
              src="https://dev.nitex.com/wp-content/uploads/2021/01/nitex-ou-startup-estonia.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
{
  /* <h6 className="show__card-h6">OUR HAPPY CLIENTS</h6>
                  
                   <div className="show__card-h4">What Client's Say?</div>
                   <div className="show__card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. At sequi dolor, facere alias praesentium officiis labore mollitia saepe, accusamus nam deleniti veritatis.</div> */
}
