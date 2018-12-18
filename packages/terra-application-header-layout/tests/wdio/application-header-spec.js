const viewports = Terra.viewports('tiny', 'medium');

describe('Application Header Layout', () => {
  describe('Displays a default application header layout', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-header-layout/application-header-layout/application-header-default');
      browser.waitForVisible('[id=test-header]');
    });

    Terra.should.matchScreenshot({ viewports, selector: '[id=test-header]' });
    Terra.should.beAccessible({ viewports, context: '[id=test-header]' });
  });

  describe('Displays a application header layout with themeable styles', () => {
    beforeEach(() => {
      browser.setViewportSize(Terra.viewports('huge')[0]);
      browser.url('/#/raw/tests/terra-application-header-layout/application-header-layout/application-header-default');
      browser.waitForVisible('[id=test-header]');
    });

    Terra.should.themeEachCustomProperty('[id=test-header]', {
      '--terra-application-header-layout-logo-min-width': '5rem',
    });
  });

  describe('Displays the Skip to Content when focused onto', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-application-header-layout/application-header-layout/application-header-default');
      browser.waitForVisible('[id=test-header]');
      browser.keys(['Tab']);
    });

    Terra.should.matchScreenshot('Visible', { viewports, selector: '[id=test-header]' });

    it('should hide the button after a tab', () => {
      browser.keys(['Tab', 'Tab']);
    });

    Terra.should.matchScreenshot('Not Visible', { viewports, selector: '[id=test-header]' });
  });
});
