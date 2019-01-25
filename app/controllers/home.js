'use strict';

module.exports = function() {
  let self = {};

  self.show = function(req, res, next) {
    res.render('home/show');
  };

  return self;
};
