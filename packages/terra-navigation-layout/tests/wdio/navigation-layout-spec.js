const selector = '#test-root';
const formFactor = browser.options.formFactor;
const viewports = formFactor ? Terra.viewports(formFactor) : Terra.viewports('tiny', 'small', 'medium', 'large', 'huge');

viewports.forEach((viewport) => {
  describe('Navigation Layout', () => {
    before(() => !formFactor ? browser.setViewportSize(viewport) : null);

    describe('Displays a basic NavigationLayout', () => {
      before(() => browser.url('/#/raw/tests/terra-navigation-layout/navigation-layout/navigation-layout-basic'));

      Terra.should.matchScreenshot({ selector });
    });

    describe('Displays a complex NavigationLayout - page 1', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-navigation-layout/navigation-layout/navigation-layout-complex');
        browser.click('#test-root .page-1-link');
      });

      Terra.should.matchScreenshot({ selector });
    });

    describe('Displays a complex NavigationLayout - page 2', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-navigation-layout/navigation-layout/navigation-layout-complex');
        browser.click('#test-root .page-2-link');
      });

      Terra.should.matchScreenshot({ selector });
    });

    describe('Displays a complex NavigationLayout - page 3', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-navigation-layout/navigation-layout/navigation-layout-complex');
        browser.click('#test-root .page-3-link');
      });

      Terra.should.matchScreenshot({ selector });
    });
  });
});
