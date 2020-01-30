import React from 'react';
import './Menu.css';
import location from '../../loaction.png';
import technology from '../../lightbulb.png';
import entertainment from '../../tickets.png';
import science from '../../rocket.png';
import health from '../../health.png';


const Menu = props => {
    return (
      <nav>
        <h1>What's <span className='newsTitle'>New ?</span></h1>
        <ul>
          <li className='newsType' onClick={() => props.handleChange('local')}><img className='imgIcon' src={location} alt='news icon' />Local News</li>
          <li className='newsType' onClick={() => props.handleChange('technology')}><img className='imgIcon' src={technology} alt='news icon' />Technology</li>
          <li className='newsType' onClick={() => props.handleChange('entertainment')}><img className='imgIcon' src={entertainment} alt='news icon' />Entertainment</li>
          <li className='newsType' onClick={() => props.handleChange('science')}><img className='imgIcon' src={science} alt='news icon' />Science</li>
          <li className='newsType' onClick={() => props.handleChange('health')}><img className='imgIcon' src={health} alt='news icon'/>Health</li>
        </ul>
      </nav>
    )
}

export default Menu;
