import React from 'react';
import './Footer.css';
import gpt3Logo from '../../assets/logo.svg';


const Footer = () => {
  return (
    <div className='footer section_padding'>
      <div className='footer_heading'>
      <h1 className='gradient_text'>Do you want to step in to the future before others</h1>
      </div>  
   
      <div className='footer_btn'>
      <p>Request Early Access</p>
      </div>
      
      <div className='footer_links'>
        <div className='footer_links_logo'>
          <img src={gpt3Logo} alt="logo" />
          <p>Do you want to step in to the future before others.Do you want </p>
        </div>
        <div className='footer_links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
          </div> 
          <div className='footer_links_div'>
          <h4>Company</h4>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div> 
        
        <div className='footer_links_div'>
          <h4>Get  in touch</h4>
          <p>this is nothing andsjndjmcd</p>
          <p>Social Media</p>
          <p>0923948048</p>
          <p>ingo@gmail.com</p>
          </div> 
      </div>
      <div className='footer_copyright'>
       <p>All rights reserved</p> 
      </div>
    </div>
  )
}
 
export default Footer;