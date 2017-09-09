import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

export default class SearchBar extends Component {

  constructor(props){
    super(props);

    this.state = {term: ''}

    // if callback onInputChange has a reference to this (this.setState), then bind
    this.onInputChange = this.onInputChange.bind(this)
  }

  // all DOM event handlers come with the event object in parameter
  onInputChange(event){
    this.setState({term: event.target.value})
  }

  onFormSubmit(event){
    // tells browser not to submit the form
    event.preventDefault();
  }

  render(){
    return (
      <form onSubmit={this.onFormSubmit} className='input-group'>
        <input
          placeholder="Get a five-day forecast in your favourite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type='submit' className='btn btn-secondary'>Submit</button>
        </span>
      </form>
    )
  }
}

// in forms, a "controlled field" is set by the state but not the input
