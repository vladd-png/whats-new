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
      <section>
        <input type='type' name='newsSearch' placeholder='Search For News Articles Here'/>
        <button type='button'>Search Now</button>
      </section>
    )
  }
}

export default SearchForm;
