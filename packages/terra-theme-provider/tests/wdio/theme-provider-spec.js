const selector = '#root';
const formFactor = browser.options.formFactor;
const viewports = formFactor ? Terra.viewports(formFactor) : Terra.viewports('tiny', 'medium');

viewports.forEach((viewport) => {
  describe('Theme Provider', () => {
    before(() => !formFactor ? browser.setViewportSize(viewport) : null);

    describe('Displays a default theme-provider', () => {
      before(() => browser.url('/#/raw/tests/terra-theme-provider/theme-provider/default-theme-provider'));

      Terra.should.matchScreenshot({ selector });
    });

    describe('Displays a globally themed component', () => {
      before(() => browser.url('#/raw/tests/terra-theme-provider/theme-provider/global-theme-provider'));

      Terra.should.matchScreenshot({ selector });
    });

    describe('Displays an updated themed component', () => {
      before(() => browser.url('/#/raw/tests/terra-theme-provider/theme-provider/switch-themes'));

      Terra.should.matchScreenshot({ selector });
    });

    describe('Displays an updated themed component - After Click', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-theme-provider/theme-provider/switch-themes');
        browser.selectByAttribute('#theme', 'value', 'cerner-mock-theme');
      });

      Terra.should.matchScreenshot({ selector });
    });

    describe('Displays an updated globally themed component', () => {
      before(() => browser.url('/#/raw/tests/terra-theme-provider/theme-provider/global-switch-themes'));

      Terra.should.matchScreenshot({ selector });
    });

    describe('Displays an updated globally themed component -  After Click', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-theme-provider/theme-provider/global-switch-themes');
        browser.selectByAttribute('#theme', 'value', 'cerner-mock-theme');
      });

      Terra.should.matchScreenshot({ selector });
    });

    describe('Displays a themed provider without a themeName provided', () => {
      before(() => browser.url('/#/raw/tests/terra-theme-provider/theme-provider/theme-provider-no-theme'));

      Terra.should.matchScreenshot({ selector });
    });
  });
});
