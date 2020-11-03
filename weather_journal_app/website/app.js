import {api_key} from './open_weather_map_api.js';

let baseURL = 'https:/api.openweathermap.org/data/2.5/weather?q=';


document.getElementById('generate').addEventListener('click', performAction);

function performAction(e) {
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;
  const location = city + "," + country;
  console.log(location);
  const apiKey = api_key;
  getForecast(baseURL, location, apiKey);
}

const getForecast = async (baseURL, location, apiKey) => {

  const response = await fetch(baseURL+location+apiKey);

  try {
    const data = await response.json();
    console.log(data);
    return data;
  } catch(error) {
    console.log('error', error);
  }
}
