// ContactUsSection.js

import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return ( 
       <div id="ContactUs">
         <h1 className='contact_heading_text'>Get In Touch</h1>
         <p className='contact_paragraph_text'>We are here to Provide Our Service!</p>
         <div className="contactUs_container container">

        <div className="contact_row">
          
          <div className="animated-image">
            <img src='https://finwave.co/images/gif/Contact-1.gif' alt=''/>
          </div>

          <div className="contact-form">
            <h2>Contact Us</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" className="form-control" id="phone" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" rows="5"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>

        </div>
         </div>
       </div> 
    );
  };

export default ContactUs;
