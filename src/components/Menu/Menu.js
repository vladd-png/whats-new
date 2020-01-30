import React, { Component } from 'react';
import './Menu.css';
import location from '../../loaction.png';
import technology from '../../lightbulb.png';
import entertainment from '../../tickets.png';
import science from '../../rocket.png';
import health from '../../health.png';


class Menu extends Component {
  constructor() {
    super();
    this.state = {
      newsType: 'local'
    }
  }
  handleChange = (newsString) => {
    this.setState({newsType: newsString});
  }
  render() {
    return (
      <nav>
        <h1>What's <span className='newsTitle'>New ?</span></h1>
        <ul>
          <li className='newsType' onClick={() => this.handleChange('local')}><img className='imgIcon' src={location} alt='news icon' />Local News</li>
          <li className='newsType' onClick={() => this.handleChange('technology')}><img className='imgIcon' src={technology} alt='news icon' />Technology</li>
          <li className='newsType' onClick={() => this.handleChange('entertainment')}><img className='imgIcon' src={entertainment} alt='news icon' />Entertainment</li>
          <li className='newsType' onClick={() => this.handleChange('science')}><img className='imgIcon' src={science} alt='news icon' />Science</li>
          <li className='newsType' onClick={() => this.handleChange('health')}><img className='imgIcon' src={health} alt='news icon'/>Health</li>
        </ul>
      </nav>
    )
  }
}

export default Menu;
