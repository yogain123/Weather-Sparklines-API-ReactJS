import { combineReducers } from 'redux';
import Weather from './reducer_weather.js';
import hola from './reducers-hola.js';
import appState from './reducer-callAppState.js';

const rootReducer = combineReducers({
  Weather: Weather,
  hola:hola,
  appState : appState
});

export default rootReducer;
