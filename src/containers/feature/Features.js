import React from 'react';
import { Feature } from '../../components';
import './Features.css';

const featuresDate = [
  {
    title: 'Improving end disturb instantly',
    text: ' The Future is Now and You Just Need To Realize It.Step into Future Today and Make it Happen.'
  },
  {
    title: 'become a tended active',
    text: ' The Future is Now and You Just Need To Realize It.Step into Future Today and Make it Happen.'
  },
  {
    title: 'message of am nothing',
    text: ' The Future is Now and You Just Need To Realize It.Step into Future Today and Make it Happen.'
  },
  {
    title: 'deadly boy law country',
    text: ' The Future is Now and You Just Need To Realize It.Step into Future Today and Make it Happen.'
  }
  
]

const Features = () => {
  return (<div className='features section_padding' id="features">
    <div className='features_heading'>
      <h1 className='gradient_text'>
        The Future is Now and You Just Need To Realize It.Step into Future Today and Make it Happen.
      </h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className='features_container'>
      {featuresDate.map((item, index) =>(
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))
        
}
    </div>




  </div>)
}
 
export default Features;