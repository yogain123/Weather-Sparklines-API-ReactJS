import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index.js';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state={term:"London"};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange(event){
    this.setState({term:event.target.value});
  }
  onFormSubmit(event){
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term:""});

  }


  render(){
    return(
      <form onSubmit={this.onFormSubmit} className="input-group">
          <input value={this.state.term} onChange={this.onInputChange}/>
          <span className="input-group-button">
          <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather:fetchWeather},dispatch);

}

export default connect(null,mapDispatchToProps)(SearchBar);
