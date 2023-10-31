import React from "react";

// import { motion } from 'framer-motion/dist/framer-motion'

import "../../Css/service.css";

import Simg1 from "../../assets/service1.png";
import Simg2 from "../../assets/service2.png";
import Simg3 from "../../assets/service3.png";

// import { fadeIn, textVariant } from "../../sass/utils/motion";
// import ServicesCard from "./ServicesCard";

const serviceInfo = [
  {
    id: 1,
    serviceImg: Simg1,
    serviceName: "Design Lab",
    serviceDetails:
      "Nitex collaborates and creates innovative designs with highly-skilled global design teams, and incorporates their year-long experience of working with remarkable brands to produce apparel from formalwear to luxurious clothing to high street and streetwear.",
  },
  {
    id: 2,
    serviceImg: Simg2,
    serviceName: "Production Lab",
    serviceDetails:
      "We provide brands with a flexible supply chain to make responsible fashion choices more affordable and accessible.Our team is dedicated to making everything from sourcing to production run smoothly to deliver in 14 days. Making Nitex 4x times faster.",
  },
  {
    id: 3,
    serviceImg: Simg3,
    serviceName: "Protect Earth",
    serviceDetails:
      "With our passion for sustainable and organic designs, we craft apparels that are kind to the environment. We are inspired to produce sustainable fashion from the ground up.Our team does extensive research to produce sustainable, stylish, and affordable fabrics.",
  },
];

const Services = () => {
  return (
    <div className="full_container" id="services">
      <div className="services_text_area">
        <div>
          <p className="services_heading_text">Our Services</p>
        </div>

        <div className="">
          <p className="paragraph_text">
            Our team ensures sustainable processes in every step,
            from design to sourcing to manufacturing.We take your headache 
            out of manufacturing clothing products, so you can focus on selling them
            In our inspirations of color, fabric, trims, or packaging, we keep
            sustainability at the very center of our design
          </p>
        </div>
      </div>

      <div className="container2">
        {serviceInfo.map((service) => (
          <div className="container2" key={service.id}>
            <div className="card_height">
              <div className="card2">
                <div className="image2">
                  <img src={service.serviceImg} className="" alt="" />
                </div>
                <div className="content2 ">
                  <h3 className="service_name_heading">
                    {service.serviceName}
                  </h3>
                  <p className="serviceDetails_text">
                    {service.serviceDetails}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
