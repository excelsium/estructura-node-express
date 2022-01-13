'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes');

const app = express();

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rutas bases
apiRoutes(app);

module.exports = app;