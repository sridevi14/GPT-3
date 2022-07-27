import React from 'react';
import './Header.css';
import  people  from '../../assets/people.png';
import  ai  from '../../assets/ai.png';
const Header = () => {
  return (

    <div className='header section_padding' id="home">
      <div className='header_content'>
  
          <h1 className="gradient_text">Let's Build Something amazing with GPT-3 OpenAI</h1>
          <p>this is some text be as a lorem ipsum..nothing more special</p>
 
        <div className='header_content_input'>
          <input type="email" placeholder='enter your email address'></input>
          <button type='button'>Get Started</button>
        </div>
        <div className='header_content_people'>
          <img src={people} alt='people'></img>
          <p>1600 peopls like and joined this course</p>
        </div>

       
      </div>
      <div className='header_image'>
          <img src={ai} alt="ai"></img>
        </div>

</div>



  )
}
 
export default Header;