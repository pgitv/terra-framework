const formFactor = browser.options.formFactor;
const viewports = formFactor ? Terra.viewports(formFactor) : Terra.viewports('medium');

viewports.forEach((viewport) => {
  describe('Layout-Slide Panel', () => {
    before(() => !formFactor ? browser.setViewportSize(viewport) : null);

    describe('Toggle the slide panel and hidden styles', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-layout/layout/layout-slide-panel-example');
        browser.waitForExist('[class*=_panel_][aria-hidden="true"]');
      });

      Terra.should.matchScreenshot({ selector: '#site' });
    });

    describe('Toggle the slide panel click', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-layout/layout/layout-slide-panel-example');
        browser.click('#test-toggle-1');
        browser.waitForExist('[class*=_panel_][aria-hidden="false"]');
      });

      Terra.should.matchScreenshot({ selector: '#site' });
    });

    describe('Toggle the slide panel double click', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-layout/layout/layout-slide-panel-example');
        browser.click('#test-toggle-1');
        browser.waitForExist('[class*=_panel_][aria-hidden="false"]');
        browser.pause(150);
        browser.click('#test-toggle-2');
        browser.waitForExist('[class*=_panel_][aria-hidden="true"]');
      });

      Terra.should.matchScreenshot({ selector: '#site' });
    });
  });
});
