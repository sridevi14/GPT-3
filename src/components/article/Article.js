import React from 'react';
import './Article.css';



const Article = ({imageUrl,date,title}) => {
  return (
    <div className='blog_container_article'>
      <div className='blog_container_article_image'>
        <img src={imageUrl} alt="blog_image"/>
      </div>
      <div className='blog_container_article_content'>
        <div>
        <p>{date}</p>
        <h3>{title}</h3>
        </div>
       
        <p>Read full article</p>
      </div>
      
    </div>
  )
}
 
export default Article;