const viewports = Terra.viewports('small', 'large');

describe('ApplicationMenu', () => {
  describe('Displays a default application menu', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout-menu');
      browser.waitForVisible('[id=test-menu]');
    });

    Terra.should.matchScreenshot('#test-menu', { selector: '[id=test-menu]', viewports });
    Terra.should.beAccessible({ viewports, context: '[id=test-menu]' });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-application-menu-background-color': 'pink',
        '--terra-application-menu-header-background-color': 'blue',
      },
    });
  });

  describe('Displays an application menu utilities', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout-menu');
      browser.waitForVisible('[id=test-menu]');
      browser.click('[data-application-menu-utility]');
    });

    Terra.should.matchScreenshot({ viewports });
  });
});
