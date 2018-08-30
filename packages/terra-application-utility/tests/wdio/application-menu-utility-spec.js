const formFactor = browser.options.formFactor;
const viewports = formFactor ? Terra.viewports(formFactor) : Terra.viewports('tiny', 'medium');

viewports.forEach((viewport) => {
  describe('ApplicationMenuUtility', () => {
    before(() => !formFactor ? browser.setViewportSize(viewport) : null);

    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-utility/application-utility/default-application-menu-utility');
      browser.waitForVisible('#default');
    });

    describe('Displays a default application menu utility', () => {
      Terra.should.matchScreenshot({ selector: '#default' });
      Terra.should.beAccessible({ context: '#default' });
      Terra.should.themeEachCustomProperty('#default', {
        '--terra-application-menu-utility-background-color': 'blue',
        '--terra-application-menu-utility-border-bottom-width': '6px',
        '--terra-application-menu-utility-border-left-width': '6px',
        '--terra-application-menu-utility-border-radius': '6px',
        '--terra-application-menu-utility-border-right-width': '6px',
        '--terra-application-menu-utility-border-top': '6px solid blue',
        '--terra-application-menu-utility-color': 'purple',
        '--terra-application-menu-utility-padding-left': '20px',
        '--terra-application-menu-utility-padding-right': '20px',
        '--terra-application-menu-utility-icon-min-width': '15px',
        '--terra-application-menu-utility-accessory-height': '2rem',
        '--terra-application-menu-utility-accessory-margin-right': '20px',
        '--terra-application-menu-utility-accessory-width': '2rem',
        '--terra-application-menu-utility-title-font-size': '2rem',
        '--terra-application-menu-utility-title-font-weight': 'bold',
        '--terra-application-menu-utility-title-margin-right': '20px',
      });
    });

    describe('Hover-application menu utility', () => {
      beforeEach(() => { browser.moveToObject('#default'); });
      Terra.should.matchScreenshot({ selector: '#default' });
      Terra.should.beAccessible({ context: '#default' });
      Terra.should.themeEachCustomProperty('#default', {
        '--terra-application-menu-utility-hover-background-color': 'blue',
      });
    });

    describe('Focus-application menu utility', () => {
      beforeEach(() => { browser.keys('Tab'); });
      Terra.should.matchScreenshot({ selector: '#default' });
      Terra.should.beAccessible({ context: '#default' });
      Terra.should.themeEachCustomProperty('#default', {
        '--terra-application-menu-utility-focus-box-shadow': '0 0 4px 4px rgba(80, 80, 233, 0.5), 0 0 6px 7px rgba(80, 80, 233, 0.35)',
      });
    });
  });
});
