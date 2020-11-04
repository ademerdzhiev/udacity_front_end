import {api_key} from './open_weather_map_api.js';

let d = new Date();
let month = d.getMonth() +1;
let newDate = d.getDate() +'.'+ month +'.'+ d.getFullYear();
let baseURLWorld = 'https:/api.openweathermap.org/data/2.5/weather?q=';
let baseURLUSA = 'https:/api.openweathermap.org/data/2.5/weather?zip=';

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e) {
  const apiKey = api_key;
  try {
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    const location = city + "," + country;
    console.log(location);
    if (location != ',') {
      getForecast(baseURLWorld, location, apiKey).then(function(data) {
        postData('/addForecast', {location: data.name + ', ' + data.sys.country,
         date: newDate,
         temp: data.main.temp});
        updateUI();
      });
    }
  } catch(error) {console.log(error)}

  try {
    const zip = document.getElementById('zip-usa').value;
    const location = zip;
    console.log(location);
    getForecast(baseURLUSA, location, apiKey).then(function(data) {
      postData('/addForecast', {location: data.name + ', ' + data.sys.country,
       date: newDate,
       temp: data.main.temp});
      updateUI();
    });
  } catch(error) {console.log(error)}
}

const getForecast = async (baseURL, location, apiKey) => {

  const response = await fetch(baseURL+location+'&units=metric'+apiKey);
  console.log(response);
  try {
    const data = await response.json();
    console.log(data);
    return data;
  } catch(error) {
    console.log('error', error);
  }
}

const postData = async ( url = '', data = {}) => {
      // console.log(data);
      const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });

      try {
        const newData = await response.json();
               return newData
      }catch(error) {
      console.log("error", error);
      // appropriately handle the error
      }
  }

const updateUI = async () => {
  const request = await fetch('/all');
  try {
    const allData = await request.json();
    document.getElementById('location').innerHTML = 'City: ' + allData[allData.length -1].location;
    document.getElementById('date').innerHTML = 'Date: ' + allData[allData.length -1].date;
    document.getElementById('temp').innerHTML = 'Temperature: ' + allData[allData.length -1].temp + ' C';
  } catch(error) {
    console.log(error)
  }
}
