const dotenv = require('dotenv');
dotenv.config();
console.log(`Your API key is ${process.env.API_KEY}`);

const API_KEY = process.env.API_KEY;
const port = 8081;

var path = require('path')
const fetch = require("node-fetch");


const express = require('express')
const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.text());
const cors = require('cors');
app.use(cors());
app.use(express.static("dist"));

const baseUrl = "https://api.meaningcloud.com/sentiment-2.1?key=";

// const mockAPIResponse = require('./mockAPI.js')

app.use(express.static('dist'))

console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
});


app.post("/article", async (req, res) => {
  let endpoint = `${baseUrl}${API_KEY}&lang=auto&url=${req.body}`;
  console.log(endpoint);
  console.log(JSON.stringify(req.body));
  const resp = await fetch(endpoint, {method: "POST"});

  try {
    const data = await resp.json();
    console.log(data);
    res.send(data);
  } catch (err) {
    console.log("error", err);
  }
});

// designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log(`app running on port ${port}!`)
})

// app.get('/test', function (req, res) {
//     res.send(mockAPIResponse)
// })
