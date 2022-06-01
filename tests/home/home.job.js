const { test } = require('@playwright/test');
//const Util = require('../../lib/util.js');
const EC = require('eight-colors');

//POM Page Object Model
const HomePage = require('./home-page.js');

test.beforeAll(({ browserName }, TestInfo) => {
    console.log(EC.magenta('Before home tests:'), browserName);
    global.config = TestInfo.project.use.config;
});

test.afterAll(() => {
    console.log(EC.magenta('After home tests'));
});

//let pageCurrent;

test('test home page', async ({ page, context }) => {
    const homePage = new HomePage(page, context, global.config);
    await homePage.init();
    await homePage.goto();
    await homePage.checkClientScript();
    await homePage.checkName();
});
