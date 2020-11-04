projectData = {};

const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

app.use(express.static('website'));

const port = 8000;

const server = app.listen(port, listening);

function listening() {
  console.log(`running on localhost: ${port}`);
}

const dataForecast = [];

app.get('/all', getData);

function getData(request, response) {
  response.send(dataForecast);
};


app.post('/addForecast', addForecast);

function addForecast(request, response) {

  dataForecast.push(request.body);
  response.send(dataForecast);
  console.log(dataForecast);
}
