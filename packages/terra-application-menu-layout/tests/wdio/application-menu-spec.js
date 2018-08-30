const formFactor = browser.options.formFactor;
const viewports = formFactor ? Terra.viewports(formFactor) : Terra.viewports('tiny', 'medium');

viewports.forEach((viewport) => {
  describe('Application Menu', () => {
    before(() => !formFactor ? browser.setViewportSize(viewport) : null);

    describe('Displays a default application menu', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-application-menu-layout/application-menu-layout/application-menu-default');
        browser.waitForVisible('#test-menu');
      });

      Terra.should.matchScreenshot({ selector: '#test-menu' });
      Terra.should.beAccessible({ context: '#test-menu' });
    });
  });
});
