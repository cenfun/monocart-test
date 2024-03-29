const { test, expect } = require('@playwright/test');
const Util = require('../../lib/util.js');
const EC = require('eight-colors');

let config;
// single page for all tests
let page;

test.beforeAll(async ({ browserName, browser }, TestInfo) => {
    console.log(EC.magenta('Before app tests:'), browserName);
    config = TestInfo.config.metadata;
    page = await browser.newPage();
    await page.context().addInitScript({
        path: config.clientPath
    });
});

test.afterAll(async () => {
    await page.close();
    console.log(EC.magenta('After app tests'));
});

test('open a page from config url', async () => {
    const url = config.url;
    console.log(`goto: ${url}`);
    await page.goto(url);
    await Util.delay(1000);

    const $dom = await page.$('.author');
    expect($dom).toBeTruthy();

    const text = await $dom.textContent();
    expect(text.trim()).toBe('cenfun');
});


test('before describe', () => {

    // test() can only be called in a test file
    // no test in test
    // test('inside', () => {
    // });

});


test('@flaky case', ({ browserName }, testInfo) => {

    expect(testInfo.retry).toBe(1);

});

test.describe('two tests', () => {
    test('one', async () => {
        // ...
    });

    test.describe('two tests', () => {
        test('one', async () => {
            // ...
        });

        test('@failed case', () => {

            console.log('stdout: failed case log', config);

            console.error('stderr: failed case error');

            expect('passed').toBe('failed');
        });

        test('fail - not yet ready', () => {
            test.fail();
            console.log('failed');
        });

        test('fixme - not yet ready', () => {
            test.fixme();
            console.log('fixme');
        });

        test('two', async () => {
            // ...
        });
    });

    test('@skipped test', () => {
        test.skip();
        console.log('skipped');
    });

    test.skip('@skipped case', () => {
        expect('skipped').toBe('skipped');
    });

    test('two', async () => {
        // ...
    });
});

test.describe('two tests1', () => {
    test('one', async () => {
        // ...
    });

    test('timeout case', async () => {
        test.setTimeout(3000);
        await Util.delay(10 * 1000);
    });

    test('two', async () => {
        // ...
    });
});


test('after describe', () => {

});
