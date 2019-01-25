'use strict';

const CONFIG = require('./');

const Q = require('q');

const { SpecReporter } = require('jasmine-spec-reporter');

const CHROME_OPTIONS = process.env.HEADLESS ? {
    args: [
      '--disable-blink-features=BlockCredentialedSubresources',
      '--headless',
      '--no-sandbox',
      '--disable-gpu'
    ]
  } : {
    args: [
      '--disable-blink-features=BlockCredentialedSubresources'
    ]
  };

  exports.config = {
    allScriptsTimeout: 30000,
    specs: ['e2e/**/*.js'],
    capabilities: {
      'browserName': 'chrome',
      'chromeOptions': CHROME_OPTIONS
    },
    directConnect: true,
    baseUrl: CONFIG.app.domain,
    framework: 'jasmine',
    jasmineNodeOpts: {
      showColors: true,
      defaultTimeoutInterval: 30000
    },
    onPrepare() {
      jasmine.getEnv().addReporter(new SpecReporter({
        spec: {
          displayStacktrace: true
        }
      }));
      browser.waitForAngularEnabled(false);
  
      return Q.Promise(function (res) {
        require('../app')().once('listening', res);
      });
    }
  };