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
  console.log('running on localhost: ${port}');
}

app.get('/all', sendData);

function sendData(request, response) {
  response.send(projectData);
};

app.post('/add', callBack);

function callBack(request, response) {
  response.send('POST received');
}

const data = [];

app.post('/forecast', addForecast);

function addForecast(request, response) {
  data.push(req.body);
}
