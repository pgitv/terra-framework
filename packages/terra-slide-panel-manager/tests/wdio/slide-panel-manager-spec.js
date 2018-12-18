const viewports = Terra.viewports('tiny', 'large');

viewports.forEach((viewport) => {
  describe('SlidePanelManager- Sizes', () => {
    before(() => {
      browser.setViewportSize(viewport);
    });

    describe('Disclose Default', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-slide-panel-manager/slide-panel-manager/slide-panel-manager-default');
        browser.click('[id=root-component] .disclose');
      });

      Terra.should.matchScreenshot({ selector: '[id=site]' });
      Terra.should.beAccessible();
    });

    describe('Disclose Tiny', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-slide-panel-manager/slide-panel-manager/slide-panel-manager-default');
        browser.click('[id=root-component] .disclose-tiny');
      });

      Terra.should.matchScreenshot({ selector: '[id=site]' });
    });

    describe('Disclose Small', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-slide-panel-manager/slide-panel-manager/slide-panel-manager-default');
        browser.click('[id=root-component] .disclose-small');
      });

      Terra.should.matchScreenshot({ selector: '[id=site]' });
    });

    describe('Disclose Medium', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-slide-panel-manager/slide-panel-manager/slide-panel-manager-default');
        browser.click('[id=root-component] .disclose-medium');
      });

      Terra.should.matchScreenshot({ selector: '[id=site]' });
    });

    describe('Disclose Large', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-slide-panel-manager/slide-panel-manager/slide-panel-manager-default');
        browser.click('[id=root-component] .disclose-large');
      });

      Terra.should.matchScreenshot({ selector: '[id=site]' });
    });

    describe('Disclose Huge', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-slide-panel-manager/slide-panel-manager/slide-panel-manager-default');
        browser.click('[id=root-component] .disclose-huge');
      });

      Terra.should.matchScreenshot({ selector: '[id=site]' });
    });

    describe('Disclose Fullscreen', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-slide-panel-manager/slide-panel-manager/slide-panel-manager-default');
        browser.click('[id=root-component] .disclose-fullscreen');
      });

      Terra.should.matchScreenshot({ selector: '[id=site]' });
    });
  });
});

viewports.forEach((viewport) => {
  describe('SlidePanelManager- Dimensions', () => {
    before(() => {
      browser.setViewportSize(viewport);
    });

    describe('Disclose Width-320', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-slide-panel-manager/slide-panel-manager/slide-panel-manager-default');
        browser.click('[id=disclosureDimensions-width-0]');
        browser.click('[id=width-320-0]');
        browser.click('[id=root-component] [id=disclose-dimension-0]');
        browser.pause(300);
        browser.moveToObject('[id=DemoContainer-1] .disclose');
      });

      Terra.should.matchScreenshot({ selector: '[id=site]' });
    });

    describe('Disclose Width-480', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-slide-panel-manager/slide-panel-manager/slide-panel-manager-default');
        browser.click('[id=disclosureDimensions-width-0]');
        browser.click('[id=width-480-0]');
        browser.click('[id=root-component] [id=disclose-dimension-0]');
        browser.pause(300);
        browser.moveToObject('[id=DemoContainer-1] .disclose');
      });

      Terra.should.matchScreenshot({ selector: '[id=site]' });
    });

    describe('Disclose Width-640', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-slide-panel-manager/slide-panel-manager/slide-panel-manager-default');
        browser.click('[id=disclosureDimensions-width-0]');
        browser.click('[id=width-640-0]');
        browser.click('[id=root-component] [id=disclose-dimension-0]');
        browser.pause(300);
        browser.moveToObject('[id=DemoContainer-1] .disclose');
      });

      Terra.should.matchScreenshot({ selector: '[id=site]' });
    });

    describe('Disclose Height-240', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-slide-panel-manager/slide-panel-manager/slide-panel-manager-default');
        browser.click('[id=disclosureDimensions-height-0]');
        browser.click('[id=height-240-0]');
        browser.click('[id=root-component] [id=disclose-dimension-0]');
        browser.pause(300);
        browser.moveToObject('[id=DemoContainer-1] .disclose');
      });

      Terra.should.matchScreenshot({ selector: '[id=site]' });
    });

    describe('Disclose Height-420', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-slide-panel-manager/slide-panel-manager/slide-panel-manager-default');
        browser.click('[id=disclosureDimensions-height-0]');
        browser.click('[id=height-420-0]');
        browser.click('[id=root-component] [id=disclose-dimension-0]');
        browser.pause(300);
        browser.moveToObject('[id=DemoContainer-1] .disclose');
      });

      Terra.should.matchScreenshot({ selector: '[id=site]' });
    });

    describe('Disclose Height-600', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-slide-panel-manager/slide-panel-manager/slide-panel-manager-default');
        browser.click('[id=disclosureDimensions-height-0]');
        browser.click('[id=height-600-0]');
        browser.click('[id=root-component] [id=disclose-dimension-0]');
        browser.pause(300);
        browser.moveToObject('[id=DemoContainer-1] .disclose');
      });

      Terra.should.matchScreenshot({ selector: '[id=site]' });
    });

    describe('Disclose Height-690', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-slide-panel-manager/slide-panel-manager/slide-panel-manager-default');
        browser.click('[id=disclosureDimensions-height-0]');
        browser.click('[id=height-690-0]');
        browser.click('[id=root-component] [id=disclose-dimension-0]');
        browser.pause(300);
        browser.moveToObject('[id=DemoContainer-1] .disclose');
      });

      Terra.should.matchScreenshot({ selector: '[id=site]' });
    });
  });
});

describe('SlidePanelManager- Behaviors', () => {
  before(() => {
    browser.setViewportSize(Terra.viewports('large')[0]);
  });

  describe('Nested Disclose', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-slide-panel-manager/slide-panel-manager/slide-panel-manager-default');

      browser.click('[id=root-component] .disclose-large');

      browser.waitForVisible('[class*="slide-group"] [id=DemoContainer-1] .disclose-tiny', 1000);
      browser.click('[class*="slide-group"] [id=DemoContainer-1] .disclose-tiny');
    });

    Terra.should.matchScreenshot({ selector: '[id=site]' });
  });

  describe('Disclosure - Dismiss', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-slide-panel-manager/slide-panel-manager/slide-panel-manager-default');

      browser.click('[id=root-component] .disclose-large');

      browser.waitForVisible('[class*="slide-group"] [id=DemoContainer-1] .dismiss', 1000);
      browser.click('[class*="slide-group"] [id=DemoContainer-1] .dismiss');
    });

    Terra.should.matchScreenshot({ selector: '[id=site]' });
  });

  describe('Disclosure - Close Disclosure', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-slide-panel-manager/slide-panel-manager/slide-panel-manager-default');

      browser.click('[id=root-component] .disclose-large');

      browser.waitForVisible('[class*="slide-group"] [id=DemoContainer-1] .close-disclosure', 1000);
      browser.click('[class*="slide-group"] [id=DemoContainer-1] .close-disclosure');
    });

    Terra.should.matchScreenshot({ selector: '[id=site]' });
  });

  describe('Disclosure - Maximize', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-slide-panel-manager/slide-panel-manager/slide-panel-manager-default');

      browser.click('[id=root-component] .disclose-large');

      browser.waitForVisible('[class*="slide-group"] [id=DemoContainer-1] .maximize', 1000);
      browser.click('[class*="slide-group"] [id=DemoContainer-1] .maximize');
    });

    Terra.should.matchScreenshot({ selector: '[id=site]' });
  });

  describe('Disclosure - Minimize', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-slide-panel-manager/slide-panel-manager/slide-panel-manager-default');

      browser.click('[id=root-component] .disclose-large');

      browser.pause(500);
      browser.waitForVisible('[class*="slide-group"] [id=DemoContainer-1] .maximize', 1000);
      browser.click('[class*="slide-group"] [id=DemoContainer-1] .maximize');

      browser.waitForVisible('[class*="slide-group"] [id=DemoContainer-1] .minimize', 1000);
      browser.click('[class*="slide-group"] [id=DemoContainer-1] .minimize');

      browser.waitForVisible('[class*="slide-group"] [id=DemoContainer-1] .maximize', 1000);
    });

    Terra.should.matchScreenshot({ selector: '[id=site]' });
  });

  describe('Disclosure - RequestFocus', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-slide-panel-manager/slide-panel-manager/slide-panel-manager-default');

      browser.click('[id=root-component] .disclose-large');

      browser.waitForVisible('[class*="slide-group"] [id=DemoContainer-1] .requestFocus', 1000);
      browser.click('[class*="slide-group"] [id=DemoContainer-1] .requestFocus');
    });

    Terra.should.matchScreenshot({ selector: '[id=site]' });
  });

  describe('Disclosure - ReleaseFocus', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-slide-panel-manager/slide-panel-manager/slide-panel-manager-default');

      browser.click('[id=root-component] .disclose-large');

      browser.waitForVisible('[class*="slide-group"] [id=DemoContainer-1] .requestFocus', 1000);
      browser.click('[class*="slide-group"] [id=DemoContainer-1] .requestFocus');

      browser.waitForVisible('[class*="slide-group"] [id=DemoContainer-1] .releaseFocus', 1000);
      browser.click('[class*="slide-group"] [id=DemoContainer-1] .releaseFocus');

      browser.waitForVisible('[class*="slide-group"] [id=DemoContainer-1] .requestFocus', 1000);
    });

    Terra.should.matchScreenshot({ selector: '[id=site]' });
  });
});
