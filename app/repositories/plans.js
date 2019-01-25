'use strict';

const plansMock = require('./plansMock');

module.exports = function(Q) {
  let self = {};

  self.find = function() {
    return Q.promise(function(resolve) {
      resolve(plansMock);
    });
  };

  return self;
};