const express = require('express');
const app = express();

// make request to api
// app.get('https://www.ncdc.noaa.gov/cdo-web/api/v2/datasets', (req,res) => {
//   res.json('req.body');
// })

// you will receive the data
// you will serve the data to the webpage




app.get('/', (req, res) => {
  res.json('Hello');
});


app.listen(9000);