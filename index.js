const express = require('express');
const bodyParser = require('body-parser');

const app = express();
require('dotenv').config();

app.use(bodyParser.json());

app.all('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

app.use('/api/v1/', require('./routes'));

app.use((err, req, res, next) => {
  res.status(422).json({
    error: err.message
  });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Now Listening on ${PORT}`);
  
});