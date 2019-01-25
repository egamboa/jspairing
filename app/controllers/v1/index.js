'use strict';

const plansRepository = require('../../repositories').plans;
module.exports.plans = require('./plans')(plansRepository);