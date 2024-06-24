const express = require('express');
const path = require('path');
const app = express();

const dashboardRouter = require('./src/routes/dashboard');
const cameraRouter = require('./src/routes/camera');
const resetRouter = require('./src/routes/reset-keypad');

app.use(express.static(path.join(__dirname, '/views')));

app.use('/', dashboardRouter);
app.use('/', cameraRouter);
app.use('/', resetRouter);

module.exports = app;