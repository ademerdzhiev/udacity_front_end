import {api_key} from './open_weather_map_api.js';

let d = new Date();
let month = d.getMonth() +1;
let newDate = d.getDate() +'.'+ month +'.'+ d.getFullYear();
let baseURLWorld = 'https:/api.openweathermap.org/data/2.5/weather?q=';
let baseURLUSA = 'https:/api.openweathermap.org/data/2.5/weather?zip=';
const entryHistory = document.querySelector('#entry-history');

//adding click listener to the button
document.getElementById('generate').addEventListener('click', performAction);

//function to be executed uppon clicking the button
function performAction(e) {
  const apiKey = api_key; //getting the enclosed in separate file api

  //trying to fetch data from the input fields
  try {
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    const zip = document.getElementById('zip').value;
    const content = document.getElementById('feelings').value;

    //logic wether to use the zip-code field or the city/town and country fields
    if (city != '' && country != '') {
      const location = city + "," + country;

      getForecast(baseURLWorld, location, apiKey).then(function(data) {
        postData('/addForecast', {location: data.name +
          ', ' +
          data.sys.country,
         date: newDate,
         temp: data.main.temp,
         content: content});
        updateUI();
      });
    } else if (zip != '') {
        const location = zip;
        getForecast(baseURLUSA, location, apiKey).then(function(data) {
          postData('/addForecast', {location: data.name +
            ', ' +
            data.sys.country,
           date: newDate,
           temp: data.main.temp,
          content: content});
          updateUI();
        });
    }

  } catch(error) {console.log(error)}
} //closing bracket of the performAction function

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

// async function for the user interface update
const updateUI = async () => {
  const request = await fetch('/all');
  try {
    const data = await request.json();
    document.getElementById('location').innerHTML = 'City: ' + data.location;
    document.getElementById('date').innerHTML = 'Date: ' + data.date;
    document.getElementById('temp').innerHTML = 'Temperature: ' + data.temp + ' C';
    document.getElementById('content').innerHTML = 'Content: ' + data.content;


    //Dynamic creation of div elements holding the entry history and updating
    // on the page
    const elementP = document.createDocumentFragment();

    let divLocation = document.createElement('div');
    let divDate = document.createElement('div');
    let divTemperature = document.createElement('div');
    let divContent = document.createElement('div');

    divLocation.innerHTML = 'City: ' + data.location;
    divDate.innerHTML = 'Date: ' + data.date;
    divTemperature.innerHTML = 'Temperature: ' + data.temp + ' C';
    divContent.innerHTML = 'Content: ' + data.content;

    elementP.appendChild(divLocation);
    elementP.appendChild(divDate);
    elementP.appendChild(divTemperature);
    elementP.appendChild(divContent);
    entryHistory.appendChild(elementP);

    //setting the input feilds to empty values
    document.getElementById('city').value = '';
    document.getElementById('country').value = '';
    document.getElementById('zip').value = '';
    document.getElementById('feelings').value = '';


  } catch(error) {
    console.log(error)
  }
}
