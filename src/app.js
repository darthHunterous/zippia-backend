const express = require('express');
const app = express();
const router = express.Router();

// Routes
const index = require('./routes/index');
const longURLRoute = require('./routes/longURLRoute');

app.use('/', index);
app.use('/longURLs', longURLRoute);

module.exports = app;