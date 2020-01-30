import React, { Component } from 'react';
import Menu from '../Menu/Menu.js';
import SearchForm from '../SearchForm/SearchForm.js'
import NewsContainer from '../NewsContainer/NewsContainer.js';
import local from '../../data/local';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local
      // ??
    }
  }

  render () {
    return (
      <div className="app">
        <Menu />
        <SearchForm />
        <NewsContainer localNews={this.state.local}/>
      </div>
    );
  }
}

export default App;
