const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');  
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

const dashboardRouteer = require('./src/routes/dashboard');
const cameraRouteer = require('./src/routes/camera');
const keypadRouteer = require('./src/routes/reset-keypad');

app.use('/', dashboardRouteer);
app.use('/', cameraRouteer);
app.use('/', keypadRouteer); 

module.exports = app;