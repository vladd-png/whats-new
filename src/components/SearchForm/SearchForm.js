import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }
  handleChange = e => {
    this.setState({ input: e.target.value })
  }
  render() {
    return (
      <form className='newsSearch'>
        <input className='userSearch' name='input' type='text' placeholder='Search for news article here.' onChange={this.handleChange}/>
        <button className='searchBtn' type='button' onClick={() => this.props.updateNews(this.state.input)}>Search Now</button>
      </form>
    )
  }
}

export default SearchForm;
