import React from 'react';
import './App.css';

import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers';
import {  Brand, CTA,  Navbar } from './components';

const App=()=> {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header/>
      </div>

      <Brand/>
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog/>
      <Footer/>
      <p color='white'>xnsxbznc</p>
      <Footer/>
    </div>
  );
}

export default App;
