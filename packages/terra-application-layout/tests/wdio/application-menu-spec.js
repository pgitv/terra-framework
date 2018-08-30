const formFactor = browser.options.formFactor;
const viewports = formFactor ? Terra.viewports(formFactor) : Terra.viewports('small', 'large');

viewports.forEach((viewport) => {
  describe('ApplicationMenu', () => {
    before(() => !formFactor ? browser.setViewportSize(viewport) : null);

    describe('Displays a default application menu', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout-menu');
        browser.waitForVisible('#test-menu');
      });

      Terra.should.matchScreenshot('#test-menu', { selector: '#test-menu' });
      Terra.should.beAccessible({ context: '#test-menu' });
      Terra.should.themeEachCustomProperty('#test-menu', {
        '--terra-application-menu-background-color': 'pink',
        '--terra-application-menu-header-background-color': 'blue',
      });

      describe('Displays an application menu utilities', () => {
        beforeEach(() => {
          browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout-menu');
          browser.waitForVisible('#test-menu');
          browser.click('[data-application-menu-utility]');
        });

        Terra.should.matchScreenshot();
      });
    });
  });
});
