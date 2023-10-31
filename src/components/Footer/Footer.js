// Footer.js
import React from 'react';
import './Footer.css';

import footer_logo from '../../assets/nitex_logo.png'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={footer_logo} alt="Web Logo" />
      </div>
      <div className="">
        <h1 className='my_info_text1'>H.M Merajul hasan</h1>
        <hr/>
        <p className='my_info_text2'>Email : mmerajulhasan24@gmail.com</p> 
        <p className='my_info_text3'>Whatsapp : +880 1704357909</p>
        <hr/>
        <div className='footer-right'>
          <a href='https://www.facebook.com/merajoulehasan.utsho' target='_blank'><img src='https://png.pngtree.com/png-vector/20230225/ourmid/pngtree-facebook-social-media-logo-png-image_6618432.png' alt="Facebook" /></a> 
          <a href='https://github.com/HNMerajulhasan'><img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt="Instagram" /></a>
          <a href='https://www.linkedin.com/in/h-m-merajul-hasan-62687b23a/'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png' alt="Instagram" /></a>
          <a href='https://www.instagram.com/h_m_merajoule_hasasn/'><img src='https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png' alt="Twitter" /></a>
         
        </div>
      </div>
      <div className="">
        
      </div>
      <div className="footer-bottom">
        &copy; 2023 Your Website. All Rights Reserved.
        <p>Designed by H.M Merajul Hasan</p>
      </div>
    </footer>
  );
};

export default Footer;








