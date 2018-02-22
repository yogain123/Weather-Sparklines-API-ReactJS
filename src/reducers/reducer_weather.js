import {FETCH_WEATHER} from '../actions/index.js';
export default function(state=[],action){
  //console.log("Action Received "+JSON.stringify(action));
  switch(action.type){
    case FETCH_WEATHER:
        return state.concat([action.payload.data]);
  }
  return state;
}
