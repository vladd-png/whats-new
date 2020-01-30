import React, { Component } from 'react';
import Menu from '../Menu/Menu.js';
import SearchForm from '../SearchForm/SearchForm.js'
import NewsContainer from '../NewsContainer/NewsContainer.js';
import local from '../../data/local';
import health from '../../data/health';
import entertainment from '../../data/entertainment';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { articles: {
      local: local,
      technology: technology,
      health: health,
      science: science,
      entertainment: entertainment
    },
    chosen: local
    }
  }
  handleChange = (newsString) => {
    let chosenSubject = this.state.articles[newsString]
    this.setState({chosen: chosenSubject});
  }
  updateNews = (newsString) => {
    let searchedNews = [];
    let allNews = [local, technology, health, science, entertainment];
    allNews.forEach(genre => {
      genre.forEach(article => {
        if(article.headline.includes(newsString) || article.description.includes(newsString)) {
          searchedNews.push(article)
        }
      })
    })
    this.setState({ chosen: searchedNews });
  }
  render () {
    return (
      <div className="app">
        <Menu handleChange={this.handleChange}/>
        <SearchForm updateNews={this.updateNews}/>
        <NewsContainer newsType={this.state.chosen}/>
      </div>
    );
  }
}

export default App;
