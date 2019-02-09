const puppeteer = require('puppeteer');
const { expect } = require('chai');
const pick = require('lodash/pick');

const globalVariables = pick(global, ['browser', 'expect']);

// puppeteer options
const opts = {
  headless: true,
  slowMo: 100,
  timeout: 20000
};

// expose variables
before(async () => {
  global.expect = expect;
  global.browser = await puppeteer.launch(opts);
});

// close browser and reset global variables
after(() => {
  browser.close();

  global.browser = globalVariables.browser;
  global.expect = globalVariables.expect;
});
