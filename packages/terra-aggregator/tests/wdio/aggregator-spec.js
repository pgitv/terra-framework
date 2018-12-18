describe('Aggregator', () => {
  before(() => browser.setViewportSize(Terra.viewports('large')[0]));

  describe('Standalone', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-aggregator/aggregator/aggregator-standalone');

      browser.click('[id=test-aggregator] [id=section1]');
      browser.click('[id=test-aggregator] [id=section2]');
      browser.click('[id=test-aggregator] [id=section3]');
    });

    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
  });

  describe('With Disclosure - Open', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-aggregator/aggregator/aggregator-with-disclosure');

      browser.click('[id=test-aggregator] [id=section1]');
    });

    Terra.should.matchScreenshot({ selector: '[id=test-aggregator]' });
    Terra.should.beAccessible();
  });

  describe('With Disclosure - Close from focus release', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-aggregator/aggregator/aggregator-with-disclosure');

      browser.click('[id=test-aggregator] [id=section1]');

      browser.waitForVisible('[class*="slide-group"] .close-disclosure', 1000);

      browser.click('[id=test-aggregator] [id=section1]');
    });

    Terra.should.matchScreenshot({ selector: '[id=test-aggregator]' });
    Terra.should.beAccessible();
  });

  describe('With Disclosure - Close from explicit close', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-aggregator/aggregator/aggregator-with-disclosure');

      browser.click('[id=test-aggregator] [id=section1]');

      browser.waitForVisible('[class*="slide-group"] .close-disclosure', 1000);

      browser.click('[class*="slide-group"] .close-disclosure');
    });

    Terra.should.matchScreenshot({ selector: '[id=test-aggregator]' });
    Terra.should.beAccessible();
  });
});
