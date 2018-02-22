import hii from 'axios';
const API_KEY = "fcf15b3cd07a008361aceb1be5831a30";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city){
  console.log(city);
  const url = `${ROOT_URL}&q=${city},us`;
  const request = hii.get(url);

  console.log("request: "+request);

  return {
    type : FETCH_WEATHER,
    payload : request
  };
};

export function callAppState(){
  console.log("inside callAppState");
    return {
      type:"AppState",
      payload:{name:"yoyogendrayoyo"}
  };
};
