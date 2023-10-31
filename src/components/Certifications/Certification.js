import React from "react";
import { motion } from "framer-motion";
import "./Certification.css";

const marqueeVariants = {
  animate: {
    x: [0, -700],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 8,
        ease: "linear",
      },
    },
  },
};

const Certification = () => {
  return (
    <div className="">
      <div className="marquee">
        <motion.div
          className="track"
          variants={marqueeVariants}
          animate="animate"
        >
          <div className="marque_main_div">
            <h1>
               Certifications that we comply
            </h1>
           <div className="marque_img">
              <img src="https://dev.nitex.com/wp-content/uploads/2020/11/5.png" alt=""/>
              <img src="https://dev.nitex.com/wp-content/uploads/2020/11/2.png" alt=""/>
            <img src="https://dev.nitex.com/wp-content/uploads/2020/12/ISO_14001_Logo6984-1.png" alt=""/>
             <img src="https://dev.nitex.com/wp-content/uploads/2020/11/3.png" alt=""/>
            <img src="https://dev.nitex.com/wp-content/uploads/2020/11/4.png" alt=""/>
            <img src="https://dev.nitex.com/wp-content/uploads/2020/12/Group-1-1.png" alt=""/>
          </div>
            </div>
         
        </motion.div>
      </div>
    </div>
  );
};

export default Certification;