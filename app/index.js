'use strict';

const config = require('../config');

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '..', 'public')));

app.engine('pug', require('pug').__express);
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.set('view cache', false);

const controllers = require('./controllers');

app.get('/', controllers.home.show);

module.exports = function () {
  return app.listen(config.app.port, '0.0.0.0', function (err) {
      if (err) { console.log(err); }
      console.info('==> 🌎  Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', config.app.port, config.app.port);
  });
};