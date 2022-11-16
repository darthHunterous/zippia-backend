const express = require('express');
const req = require('express/lib/request');
const app = express();
const router = express.Router();

// Routes
const index = require('./routes/index');
const longURLRoute = require('./routes/urlRoute');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', index);
app.use('/urls', longURLRoute);

module.exports = app;