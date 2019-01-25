'use strict';

const Q = require('q');

const plansRepository = require('../../app/repositories/plans');

describe('plansRepository', function () {
  let promise;

  describe('.find', function () {
    describe('success', function() {
      beforeEach(function () {
        promise = plansRepository(Q).find();
      });

      it('returns a promise', function () {
        expect(promise.constructor.name).toBe('Promise');
      });
      
      it('returns plans', function(done) {
        promise.then(function(result) {
          expect(result.length).toEqual(3);
          expect(result[0].id).toEqual(12345);
          expect(result[1].id).toEqual(12346);
          expect(result[2].id).toEqual(12347);
          done();
        });
      });
    });
  });
});
