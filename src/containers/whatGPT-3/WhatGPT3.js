import React from 'react';
import { Feature } from '../../components';

import './WhatGPT3.css';



const WhatGPT3 = () => {
  return (
    <div className='whatgpt3 section_margin' id="whatGPT-3">
      <div className='whatgpt3_feature'>
        <Feature title="WhatGPT3" text="this is small text about what is gp3.its going to be 3 line..but i dont have time to type.The flex CSS shorthand property sets how a flex item will grow or shrink to fit the space available."/>
      </div>
      <div className='whatgpt3_heading'>
        <h1 className='gradient_text'>
          The Possibilities are beyond your imagination
        </h1>
        <p>Explore the library</p>
      </div>
      <div className='whatgpt3_container'>
        <Feature title="Chatbot" text="this is small text about what is gp3.its going to be 3 line..but i dont have time to type." />

        <Feature title="Knowledgebace" text="this is small text about what is gp3.its going to be 3 line..but i dont have time to type.The flex CSS shorthand property sets how a flex item will grow or shrink to fit the space." />
        
        <Feature title="Education" text="this is small text about what is gp3.its going to be 3 line..but i dont have time to type.The flex CSS shorthand property sets how a flex item will grow or shrink to fit the space available in its flex container..."/>
      </div>
    </div>
  )
}
 
export default WhatGPT3;