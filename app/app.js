import express from 'express';
import './config/config.js';
import './db/db';
import './models/testing';

const port = process.env.PORT;

const app = express();



app.listen(port, () => {
  console.log('app running at http://localhost:' + port);
});