const formFactor = browser.options.formFactor;
const viewports = formFactor ? Terra.viewports(formFactor) : Terra.viewports('tiny', 'medium');

viewports.forEach((viewport) => {
  describe('ApplicationMenuName', () => {
    before(() => !formFactor ? browser.setViewportSize(viewport) : null);

    describe('Displays a default application menu name', () => {
      beforeEach(() => browser.url('/#/raw/tests/terra-application-name/application-name/application-menu-name-default'));

      Terra.should.matchScreenshot({ selector: '#default' });
      Terra.should.beAccessible({ context: '#default' });
      Terra.should.themeEachCustomProperty('#default', {
        '--terra-application-menu-name-align-items': 'left',
        '--terra-application-menu-name-color': '#800080',
        '--terra-application-menu-name-flex': '1 1 auto',
        '--terra-application-menu-name-accessory-padding-left': '1rem',
        '--terra-application-menu-name-title-font-weight': 'bold',
        '--terra-application-menu-name-title-padding-left': '1rem',
        '--terra-application-menu-name-title-padding-right': '3rem',
      });
    });

    describe('Displays a truncated application menu name', () => {
      beforeEach(() => browser.url('/#/raw/tests/terra-application-name/application-name/application-menu-name-truncated'));

      Terra.should.beAccessible({ context: '#truncated' });
      Terra.should.matchScreenshot({ selector: '#truncated' });
    });
  });
});
