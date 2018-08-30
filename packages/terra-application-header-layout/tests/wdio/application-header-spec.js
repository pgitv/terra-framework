const formFactor = browser.options.formFactor;
const viewports = formFactor ? Terra.viewports(formFactor) : Terra.viewports('tiny', 'medium');

viewports.forEach((viewport) => {
  describe('Application Header Layout', () => {
    before(() => !formFactor ? browser.setViewportSize(viewport) : null);

    describe('Displays a default application header layout', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-application-header-layout/application-header-layout/application-header-default');
        browser.waitForVisible('#test-header');
      });

      Terra.should.matchScreenshot({ selector: '#test-header' });
      Terra.should.beAccessible({ context: '#test-header' });
    });

    describe('Displays a application header layout with themeable styles', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-application-header-layout/application-header-layout/application-header-default');
        browser.waitForVisible('#test-header');
      });

      Terra.should.matchScreenshot({ selector: '#test-header' });
      Terra.should.beAccessible({ context: '#test-header' });

      Terra.should.themeEachCustomProperty('#test-header', {
        '--terra-application-header-layout-logo-min-width': '5rem',
      });
    });
  });
});
