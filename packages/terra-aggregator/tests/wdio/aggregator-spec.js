const formFactor = browser.options.formFactor;
const viewports = formFactor ? Terra.viewports(formFactor) : Terra.viewports('large');

viewports.forEach((viewport) => {
  describe('Aggregator', () => {
    before(() => !formFactor ? browser.setViewportSize(viewport) : null);

    describe('Standalone', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-aggregator/aggregator/aggregator-standalone');

        browser.click('#test-aggregator #section1');
        browser.click('#test-aggregator #section2');
        browser.click('#test-aggregator #section3');
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible();
    });

    describe('With Disclosure - Open', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-aggregator/aggregator/aggregator-with-disclosure');

        browser.click('#test-aggregator #section1');
      });

      Terra.should.matchScreenshot({ selector: '#test-aggregator' });
      Terra.should.beAccessible();
    });

    describe('With Disclosure - Close from focus release', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-aggregator/aggregator/aggregator-with-disclosure');

        browser.click('#test-aggregator #section1');

        browser.waitForVisible('[class*="slide-group"] .close-disclosure', 500);

        browser.click('#test-aggregator #section1');
      });

      Terra.should.matchScreenshot({ selector: '#test-aggregator' });
      Terra.should.beAccessible();
    });

    if (viewport.name != 'tiny' || viewport.name != 'small')
    describe('With Disclosure - Close from explicit close', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-aggregator/aggregator/aggregator-with-disclosure');

        browser.click('#test-aggregator #section1');

        browser.waitForVisible('[class*="slide-group"] .close-disclosure', 500);

        browser.click('[class*="slide-group"] .close-disclosure');
      });

      Terra.should.matchScreenshot({ selector: '#test-aggregator' });
      Terra.should.beAccessible();
    });
  });
});
