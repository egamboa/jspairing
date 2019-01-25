'use strict';

const Q = require('q');

const plansController = require('../../../app/controllers/v1/plans');

describe('V1 Plans Controller', function () {
  describe('.index', function () {
    let repository, controller, req, res;

    beforeEach(function () {
      req = { query: {} };
      res = { json: function () {} };
      repository = { find: function () { return Q.Promise(function (res) { res(); }); } };
    });

    describe('success', function () {
      it('should render the plans results', function (done) {
        const plans = [ {
          id: 12345,
          name: 'Legal Plan Sample 1',
          price: '8.85'
        } ];
  
        req.query = {
          region: 'OK',
        };
  
        repository.find = function () {
          return Q.Promise(function (res) {
            res(plans);
          });
        };
  
        spyOn(repository, 'find').and.callThrough();
  
        controller = plansController(repository);
        res.json = function (data) {
          expect(data).toEqual(plans);
          expect(repository.find).toHaveBeenCalledWith({
            region: 'OK'
          });
  
          done();
        };
  
        controller.index(req, res, function (err) {});
      });
    });

    describe('failure', function () {
      it('returns the error from the repository', function (done) {
        repository = {
          find: function () {
            return Q.Promise(function (res, rej) {
              rej(new Error('oh no.'));
            });
          }
        };
        controller = plansController(repository);
        controller.index(req, res, function (err) {
          expect(err).toBeDefined();
          expect(err.message).toBe('oh no.');
          done();
        });
      });
    });
  });
});