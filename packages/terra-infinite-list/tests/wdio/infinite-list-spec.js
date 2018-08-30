const formFactor = browser.options.formFactor;
const viewports = formFactor ? Terra.viewports(formFactor) : Terra.viewports('small');

viewports.forEach((viewport) => {
  describe('InfiniteList', () => {
    before(() => !formFactor ? browser.setViewportSize(viewport) : null);

    describe('Displays an infinite list with loading indicator', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-infinite-list/infinite-list/infinite-list-loading');
        browser.waitForVisible('#test-infinite-list');
      });

      Terra.should.matchScreenshot({ selector: '#test-infinite-list' });
    });

    describe('Displays an infinite list with updating indicator', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-infinite-list/infinite-list/infinite-list-updating');
        browser.waitForVisible('#test-infinite-list');
      });

      Terra.should.matchScreenshot({ selector: '#test-infinite-list' });
    });

    describe('Displays an infinite list with selection', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-infinite-list/infinite-list/infinite-list-selection');
        browser.waitForVisible('#test-infinite-list');
      });

      Terra.should.matchScreenshot({ selector: '#test-infinite-list' });
    });

    describe('Displays an infinite list with virtual dom from top', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-infinite-list/infinite-list/infinite-list-virtual');
        browser.waitForVisible('#test-infinite-list');
        browser.pause(150);
      });

      Terra.should.matchScreenshot({ selector: '#test-infinite-list' });
    });

    describe('Displays an infinite list with virtual dom from bottom', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-infinite-list/infinite-list/infinite-list-virtual');
        browser.waitForVisible('#test-infinite-list [data-infinite-list-index="0"]');
        browser.pause(150);
        browser.click('#test-click');
        browser.waitForVisible('#test-infinite-list [data-infinite-list-index="15"]');
        browser.pause(50);
      });

      Terra.should.matchScreenshot({ selector: '#test-infinite-list' });
    });

    describe('Displays an infinite list same count and different content', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-infinite-list/infinite-list/infinite-list-same-count');
        browser.waitForVisible('#test-infinite-list');
        browser.pause(150);
      });
      Terra.should.matchScreenshot('before-update', { selector: '#test-infinite-list' });
      it('update the child items', () => {
        browser.click('#test-click');
        browser.pause(50);
      });
      Terra.should.matchScreenshot('after-update', { selector: '#test-infinite-list' });
    });
  });
});
