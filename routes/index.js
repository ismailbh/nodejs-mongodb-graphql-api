var express = require('express');
var app = express();

/* GET graphql page. */
// app.use('/graphql', require('../graphql'));
app.use('/', require('../api/home'));

module.exports = app;
