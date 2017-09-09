import axios from 'axios';

const API_KEY = '95c9beb2c1f348463ee41a88940825eb'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  // https://github.com/mzabriskie/axios -> alternative to jquery AJAX methods

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
