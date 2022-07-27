import React from 'react';
import './Blog.css';
import { Article } from '../../components';
import {blog01,blog02,blog03,blog04,blog05} from './import'
const Blog = () => {
  return (

<div className="blog section_padding" id="blog">

      <div className='blog_heading'>
        <h1 className="gradient_text">A lot is happening.We are blogging about it</h1>
        </div>
      <div className='blog_container'>
        <div className='blog_container_groupA'>
<Article imageUrl={blog01} date="sep 26,2021" title="GPT-3 and Open All is the future.Let us explore how it is?"/>
        </div>
        <div className='blog_container_groupB'>
          <Article imageUrl={blog02} date="sep 26,2021" title="GPT-3 and Open All is the future.Let us explore how it is?"/>
          <Article imageUrl={blog03} date="sep 26,2021" title="GPT-3 and Open All is the future.Let us explore how it is?"/>
          <Article imageUrl={blog04} date="sep 26,2021" title="GPT-3 and Open All is the future.Let us explore how it is?"/>
          <Article imageUrl={blog05} date="sep 26,2021" title="GPT-3 and Open All is the future.Let us explore how it is?"/>
        </div>
        </div>
      
</div>


  )
}
 
export default Blog;