import React, { Component } from 'react';
import './Menu.css'

// MENU COMPONENT CODE GOES HERE

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      newsType: ''
    }
  }
  render() {
    return (
      <nav>
        <h1>What's New</h1>
        <ul>
          <li><img src='./image.png' alt='news icon' />Local News</li>
          <li><img src='./image.png' alt='news icon' />Technology</li>
          <li><img src='./image.png' alt='news icon' />Entertainment</li>
          <li><img src='./image.png' alt='news icon' />Science</li>
          <li><img src='./image.png' alt='news icon' />Health</li>
        </ul>
      </nav>
    )
  }
}

export default Menu;
