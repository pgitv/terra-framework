/* global browser, Terra */

const viewports = Terra.viewports('small');

describe('InfiniteList', () => {
  describe('Displays an infinite list with loading indicator', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/infinite-list/infinite-list-loading');
      browser.waitForVisible('#test-infinite-list');
    });

    Terra.should.matchScreenshot({ selector: '#test-infinite-list', viewports });
  });

  describe('Displays an infinite list with updating indicator', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/infinite-list/infinite-list-updating');
      browser.waitForVisible('#test-infinite-list');
    });

    Terra.should.matchScreenshot({ selector: '#test-infinite-list', viewports });
  });

  describe('Displays an infinite list with selection', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/infinite-list/infinite-list-selection');
      browser.waitForVisible('#test-infinite-list');
    });

    Terra.should.matchScreenshot({ selector: '#test-infinite-list', viewports });
  });

  describe('Displays an infinite list with virtual dom from top', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/infinite-list/infinite-list-virtual');
      browser.waitForVisible('#test-infinite-list');
      browser.pause(150);
    });

    Terra.should.matchScreenshot({ selector: '#test-infinite-list', viewports });
  });

  describe('Displays an infinite list with virtual dom from bottom', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/infinite-list/infinite-list-virtual');
      browser.waitForVisible('#test-infinite-list [data-infinite-list-index="0"]');
      browser.pause(150);
      browser.click('#test-click');
      browser.waitForVisible('#test-infinite-list [data-infinite-list-index="15"]');
    });

    Terra.should.matchScreenshot('#test-infinite-list', { selector: '#test-infinite-list', viewports });
  });
});