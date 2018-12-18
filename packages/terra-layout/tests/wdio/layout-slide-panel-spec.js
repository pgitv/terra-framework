/* globals $ */
describe('Toggle the slide panel and hidden styles', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/terra-layout/layout/layout-slide-panel-example');
    browser.waitForExist('[class*=_panel_][aria-hidden="true"]');
  });

  Terra.should.matchScreenshot({ selector: '[id=site]' });
});

describe('Toggle the slide panel click', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/terra-layout/layout/layout-slide-panel-example');
    browser.click('[id=test-toggle-1]');
    browser.waitForExist('[class*=_panel_][aria-hidden="false"]');
  });

  Terra.should.matchScreenshot({ selector: '[id=site]' });
});

describe('Toggle the slide panel double click', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/terra-layout/layout/layout-slide-panel-example');
    const toggleBtn1 = $('[id=test-toggle-1]');
    browser.click('[id=test-toggle-1]');
    browser.waitForExist('[class*=_panel_][aria-hidden="false"]');
    browser.pause(150);
    const toggleBtn2 = $('[id=test-toggle-2]');
    expect(toggleBtn2.hasFocus()).to.be.equal(true);
    browser.click('[id=test-toggle-2]');
    browser.waitForExist('[class*=_panel_][aria-hidden="true"]');
    expect(toggleBtn1.hasFocus()).to.be.equal(true);
  });

  Terra.should.matchScreenshot({ selector: '[id=site]' });
});
