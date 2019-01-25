'use strict';

module.exports = function(plansRepository) {
  let self = { };

  self.index = function(req, res, next) {
    plansRepository.find(req.query).then(function(plans) {
      res.json(plans);
    }).catch(next);
  };

  return self;
};
