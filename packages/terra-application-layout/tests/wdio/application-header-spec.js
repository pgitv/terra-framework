const selector = '#test-header';
const formFactor = browser.options.formFactor;
const viewports = formFactor ? Terra.viewports(formFactor) : Terra.viewports('small', 'large');

viewports.forEach((viewport) => {
  describe('ApplicationHeader', () => {
    before(() => !formFactor ? browser.setViewportSize(viewport) : null);

    describe('Displays a default application header', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout-header');
        browser.waitForVisible(selector);
      });

      Terra.should.matchScreenshot('#test-header', { selector });
      Terra.should.beAccessible({ context: selector });
      Terra.should.themeEachCustomProperty('#test-header', {
        '--terra-application-header-background-color': 'red',
        '--terra-application-header-border': '3px dotted purple',
        '--terra-application-header-height': '5rem',
      });
    });

    describe('Displays an application header toggle standard', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout-header-small');
        browser.waitForVisible(selector);
      });

      Terra.should.matchScreenshot('#test-header', { selector });
      Terra.should.themeEachCustomProperty('#test-header', {
        '--terra-application-header-toggle-icon-height': '2rem',
        '--terra-application-header-toggle-icon-width': '2rem',
        '--terra-application-header-toggle-color': '#green',
        '--terra-application-header-toggle-background-color': 'orange',
        '--terra-application-header-toggle-width': '2rem',
        '--terra-application-header-toggle-border-right': '5px dotted yellow',
        '--terra-application-header-toggle-box-shadow': 'inset -2rem 0 0 0 green',
      });
    });

    describe('Displays an application header toggle with hover styling', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout-header-small');
        browser.waitForVisible(selector);
        browser.moveToObject('[data-application-header-toggle]');
      });

      Terra.should.matchScreenshot('#test-header', { selector });
      Terra.should.themeEachCustomProperty('#test-header', {
        '--terra-application-header-toggle-hover-background-color': 'aqua',
      });
    });

    if (viewport.name == 'small') {
      describe('Displays an application header utilities', () => {
        before(() => {
          browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout-header');
          browser.waitForVisible(selector);
          browser.click('[data-application-header-utility]');
        });

        Terra.should.matchScreenshot({ selector: '#site' });
      });
    }
  });
});
