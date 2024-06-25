const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');  
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

const dashboardRouter = require('./src/routes/dashboard');
const cameraRouter = require('./src/routes/camera');
const passwordGenerator = require('./src/routes/password-generator');

app.use('/', dashboardRouter);
app.use('/', cameraRouter);
app.use('/', passwordGenerator);

module.exports = app;