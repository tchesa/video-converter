
const express = require('express');
const app = express();
const morgan = require('morgan');

const encoderRoutes = require('./api/routes/encoder');

app.use(morgan('dev'));
app.use('/encode', encoderRoutes);

module.exports = app;
