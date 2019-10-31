const express = require('express');
const path = require('path');
// const logger = require('./logger');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'dist')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
  var list = ["item1", "item2", "item3"];
  res.json(list);
  // eslint-disable-next-line no-console
  console.log('Sent list of items');
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/../../dist/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

// eslint-disable-next-line no-console
console.log('App is listening on port ' + port);
