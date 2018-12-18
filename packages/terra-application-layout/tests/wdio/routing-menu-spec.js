const viewports = Terra.viewports('small');

describe('RoutingMenu', () => {
  describe('Displays a default routing menu', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/routing-menu');
      browser.waitForVisible('[id=routing-menu-test]');
    });

    Terra.should.matchScreenshot({ selector: '[id=routing-menu-test]', viewports });
    Terra.should.beAccessible({ viewports, context: '[id=routing-menu-test]' });
  });

  describe('Displays a routing menu without header', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/routing-menu-no-header');
      browser.waitForVisible('[id=routing-menu-test]');
    });

    Terra.should.matchScreenshot({ selector: '[id=routing-menu-test]', viewports });
    Terra.should.beAccessible({ viewports, context: '[id=routing-menu-test]' });
  });

  describe('Navigates away from the site', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/routing-menu-external');
      browser.waitForVisible('[id=routing-menu-test]');
      browser.click('[data-menu-item="Item 3"]');
      browser.pause(100);
    });

    Terra.should.matchScreenshot({ selector: 'body', viewports });
    Terra.should.beAccessible({ viewports, context: '[id=routing-menu-test]' });
  });
});
