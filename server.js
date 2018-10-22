"use strict";

const express       = require('express');
const app           = express();
const port          = process.env.PORT || 8080;
const couchModel    = require('./models/couchConnectionModel');
const couchConn     = new couchModel('localhost', '5984');

const couchAdapter  = require('./lib/couchAdapter');
const couchdb       = new couchAdapter(couchConn);
const router        = require('./routes')(couchdb);
const parser        = require('body-parser');

app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());
app.use('/', router);

app.listen(port, '0.0.0.0');
console.log('Application listening on port ' + port);
