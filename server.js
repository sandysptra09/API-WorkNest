const express = require('express');
const app = express();
const routes = require('./routes');
require('dotenv').config();

app.use(express.urlencoded({extended: true})); 
app.use(express.json());
app.use(routes);

const server = app.listen(process.env.APP_PORT, () => console.log(`API RUNNING IN PORT ${process.env.APP_PORT}`))

process.on('SIGTERM', () => {
  console.info('SIGTERM signal received.');
  console.log('Closing http server.');
  server.close(() => {
    console.log('Http server closed.');
    process.exit(0);
  });
});