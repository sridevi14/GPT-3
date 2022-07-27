import React from 'react';
import './Possibility.css';
import possibilityImage from '../../assets/possibility.png';


const Possibility = () => {
  return (
   <div className="possibility section_padding" id="possibility">
      <div className='possibility_image'>
        <img src={possibilityImage} alt="possibility"></img>
</div>
      <div className="possibility_content">
        <h4>some content to type.i dont know any other content</h4>
        <h1 className='gradient_text'>The possibilities are beyond the imagination</h1>
        <p>The Future is Now and You Just Need To Realize It.Step into Future Today and Make it Happen.</p>
        <h4> Request Early Access to Get Started</h4>
</div>
   </div>
  )
}
 
export default Possibility;