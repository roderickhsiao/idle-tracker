"use strict";
const puppeteer = require('puppeteer');
const { expect } = require('chai');
const pick = require('lodash/pick');
const globalVariables = pick(global, ['browser', 'expect']);
// puppeteer options
const opts = {
    headless: true,
    timeout: 20000,
    args: [
        '--no-sandbox',
        '--headless',
        '--disable-setuid-sandbox',
        '--disable-gpu',
        '--disable-dev-shm-usage',
        '--disable-software-rasterizer',
        '--single-process'
    ],
    slowMo: 100
};
before(async () => {
    global.expect = expect;
    global.browser = await puppeteer.launch(opts);
});
after(() => {
    browser.close();
    global.browser = globalVariables.browser;
    global.expect = globalVariables.expect;
});
