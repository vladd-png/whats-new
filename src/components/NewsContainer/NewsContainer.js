import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle.js';

const NewsContainer = (props) => {
  const localNews = props.newsType.map(news => {
    return <NewsArticle
      key={news.id}
      headline={news.headline}
      body={news.description}
      img={news.img}
      link={news.url}
    />
  })
  return (
    <section className='newsContainer'>
      {localNews}
    </section>
  )
}

export default NewsContainer;
