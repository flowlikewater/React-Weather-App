import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {

  constructor(props){
    super(props);

    this.state = {term: ''}

    // if callback onInputChange has a reference to this (this.setState), then bind
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  // all DOM event handlers come with the event object in parameter
  onInputChange(event){
    this.setState({term: event.target.value})
  }

  onFormSubmit(event){
    // tells browser not to submit the form
    event.preventDefault();
    this.props.fetchWeather(this.state.term)
    this.setState({term: ''})
  }

  render(){
    // in forms, a "controlled field" is set by the state but not the input
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

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather}, dispatch)
}

// whenever we are passing in a function which is supposed to ..
// mapDispatchToProps to container, it always goes in as the second argument
// null => i understand that containers should be maintaining some state, but this one doesnt care about state at all
export default connect(null, mapDispatchToProps)(SearchBar)
