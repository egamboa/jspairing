'use strict';

describe('As a visitor I should see the Home page', function() {
    beforeAll(function() {
      browser.get('/');
    });

    describe('#MainTitle', function() {
        it('should show the Exercise Main Title', function() {
            expect(element(by.css('#main-title')).getText()).toMatch('JS PAIRING');
        });
      });
});