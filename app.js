const express = require('express');

const app = express();

const bookRouter = require('./routes/bookRouter');

app.use('/daffodils',bookRouter);

module.exports = app;