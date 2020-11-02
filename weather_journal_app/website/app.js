let baseURL = 'https:/api.openweathermap.org/data/2.5/weather?q=';

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e) {
  const location = 'Sofia,bg';
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
