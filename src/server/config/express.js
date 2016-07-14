'use strict';

const path = require('path');
const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');
const config = require('../config');

module.exports = function (app) {
  app.use(compression());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(methodOverride());
  app.use(morgan('dev'));

  if (app.get('env') === 'development') {
    app.use(express.static(path.join(config.srcPath, 'client')));
    app.set('appPath', path.join(config.srcPath, 'client'));
  }

  if (app.get('env') === 'test') {
    app.use(express.static(path.join(config.serverPath, 'public')));
    app.set('appPath', path.join(config.serverPath, 'public'));
  }

  if (app.get('env') === 'production') {
    app.use(express.static(path.join(config.serverPath, 'public')));
    app.set('appPath', path.join(config.serverPath, 'public'));
  }
};
