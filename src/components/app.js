import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import Todo from './todo.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Todo />
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
