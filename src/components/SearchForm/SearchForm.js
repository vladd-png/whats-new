import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <form className='newsSearch'>
        <input className='userSearch' type='text' placeholder='Search for news article here.' />
        <button className='searchBtn' type='button'>Search Now</button>
      </form>
    )
  }
}

export default SearchForm;
