import React from 'react';
import './NewsArticle.css';
import arrow from '../../arrow.png';

const NewsArticle = (props) => {
  return (
    <section className='newsCard'>
      <section className='imgContainer'>
        <img src={props.img} alt={props.headline}/>
      </section>
      <h2 className='newsHeadline'>{props.headline}</h2>
      <p className='newsDescription'>{props.body}</p>
      <footer className='footerInfo'>
        <a className='urlLink' href={props.link}>Link To Article<img className='arrowImg' src={arrow} alt='arrow icon'/></a>
      </footer>
    </section>
  )
}

export default NewsArticle;
