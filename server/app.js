
const express = require('express');
const app = express();

const encoderRoutes = require('./api/routes/encoder');

app.use('/encode', encoderRoutes)

module.exports = app;
