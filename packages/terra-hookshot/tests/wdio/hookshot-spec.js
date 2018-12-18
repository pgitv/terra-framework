/* global after */

describe('Hookshot', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Displays default hookshot', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/default-hookshot');
      browser.click('[id=hookshot-standard-button]');
      browser.waitForVisible('[id=testDefaultContent]');
    });

    Terra.should.matchScreenshot({ selector: '[id=default-bounds]' });
  });

  // none position behavior
  describe('Displays in primary position when there is enough room with no attachment behavior', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-attachment-behavior-none');
      browser.click('[id=position-primary]');
      browser.click('[id=trigger-attachment-behavior-none]');
      browser.waitForVisible('[id=attachment-behavior-none-content]');
    });

    Terra.should.matchScreenshot({ selector: '[id=attachment-behavior-none-bounds]' });
  });

  describe('Displays in primary position when there is not enough room in primary position with no attachment behavior', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-attachment-behavior-none');
      browser.click('[id=position-offset]');
      browser.click('[id=trigger-attachment-behavior-none]');
      browser.waitForVisible('[id=attachment-behavior-none-content]');
    });

    Terra.should.matchScreenshot({ selector: '[id=attachment-behavior-none-bounds]' });
  });

  // push position behavior
  describe('Displays with position pushed when there is not enough room in primary position with no attachment behavior', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-attachment-behavior-push');
      browser.click('[id=position-pushed]');
      browser.click('[id=trigger-attachment-behavior-push]');
      browser.waitForVisible('[id=attachment-behavior-push-content]');
    });

    Terra.should.matchScreenshot({ selector: '[id=attachment-behavior-push-bounds]' });
  });

  // flip position behavior
  describe('Displays in primary position when there is enough room with flip attachment behavior', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-attachment-behavior-flip');
      browser.click('[id=position-primary]');
      browser.click('[id=trigger-attachment-behavior-flip]');
      browser.waitForVisible('[id=attachment-behavior-flip-content]');
    });

    Terra.should.matchScreenshot({ selector: '[id=attachment-behavior-flip-bounds]' });
  });

  describe('Displays with position flipped when there is not enough room in primary position with flip attachment behavior', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-attachment-behavior-flip');
      browser.click('[id=position-flipped]');
      browser.click('[id=trigger-attachment-behavior-flip]');
      browser.waitForVisible('[id=attachment-behavior-flip-content]');
    });

    Terra.should.matchScreenshot({ selector: '[id=attachment-behavior-flip-bounds]' });
  });

  describe('Displays with position pushed when there is not enough room in primary or flipped position with flip attachment behavior', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-attachment-behavior-flip');
      browser.click('[id=position-flipped]');
      browser.click('[id=trigger-attachment-behavior-flip]');
      browser.waitForVisible('[id=attachment-behavior-flip-content]');
    });

    Terra.should.matchScreenshot({ selector: '[id=attachment-behavior-flip-bounds]' });
  });

  // auto position behavior
  describe('Displays in primary position when there is enough room with auto attachment behavior', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-attachment-behavior-auto');
      browser.click('[id=position-primary]');
      browser.click('[id=trigger-attachment-behavior-auto]');
      browser.waitForVisible('[id=attachment-behavior-auto-content]');
    });

    Terra.should.matchScreenshot({ selector: '[id=attachment-behavior-auto-bounds]' });
  });

  describe('Displays with position flipped when there is not enough room in primary position with auto attachment behavior', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-attachment-behavior-auto');
      browser.click('[id=position-flipped]');
      browser.click('[id=trigger-attachment-behavior-auto]');
      browser.waitForVisible('[id=attachment-behavior-auto-content]');
    });

    Terra.should.matchScreenshot({ selector: '[id=attachment-behavior-auto-bounds]' });
  });

  describe('Displays with position rotated 90 degrees when there is not enough room in primary or flipped positions with auto attachment behavior', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-attachment-behavior-auto');
      browser.click('[id=position-90-deg]');
      browser.click('[id=trigger-attachment-behavior-auto]');
      browser.waitForVisible('[id=attachment-behavior-auto-content]');
    });

    Terra.should.matchScreenshot({ selector: '[id=attachment-behavior-auto-bounds]' });
  });

  describe('Displays with position rotated -90 degrees when there is not enough room in primary, flipped, or 90 degree positions with auto attachment behavior', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-attachment-behavior-auto');
      browser.click('[id=position-neg-90-deg]');
      browser.click('[id=trigger-attachment-behavior-auto]');
      browser.waitForVisible('[id=attachment-behavior-auto-content]');
    });

    Terra.should.matchScreenshot({ selector: '[id=attachment-behavior-auto-bounds]' });
  });

  describe('Displays with position pushed when there is not enough room in primary, flipped, 90 degree, or -90 degree positions with auto attachment', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-attachment-behavior-auto');
      browser.click('[id=position-pushed]');
      browser.click('[id=trigger-attachment-behavior-auto]');
      browser.waitForVisible('[id=attachment-behavior-auto-content]');
    });

    Terra.should.matchScreenshot({ selector: '[id=attachment-behavior-auto-bounds]' });
  });

  // attachmentMargin: validate number set adjusts positioning by so much.
  describe('Displays with given margin between the attachment points', () => {
    before(() => browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-attachment-margin'));

    it('Top Start Content Attachment', () => {
      browser.click('[id=attach-TS]');
      browser.waitForVisible('[id=attachment-margin-content]');
    });
    Terra.should.matchScreenshot('Top Start', { selector: '[id=attachment-margin-bounds]' });

    it('Top Center Content Attachment', () => {
      browser.click('[id=attach-TC]');
      browser.waitForVisible('[id=attachment-margin-content]');
    });
    Terra.should.matchScreenshot('Top Center', { selector: '[id=attachment-margin-bounds]' });

    it('Top End Content Attachment', () => {
      browser.click('[id=attach-TE]');
      browser.waitForVisible('[id=attachment-margin-content]');
    });
    Terra.should.matchScreenshot('Top End', { selector: '[id=attachment-margin-bounds]' });

    it('Middle Start Content Attachment', () => {
      browser.click('[id=attach-MS]');
      browser.waitForVisible('[id=attachment-margin-content]');
    });
    Terra.should.matchScreenshot('Middle Start', { selector: '[id=attachment-margin-bounds]' });

    it('Middle Center Content Attachment', () => {
      browser.click('[id=attach-MC]');
      browser.waitForVisible('[id=attachment-margin-content]');
    });
    Terra.should.matchScreenshot('Middle Center', { selector: '[id=attachment-margin-bounds]' });

    it('Middle End Content Attachment', () => {
      browser.click('[id=attach-ME]');
      browser.waitForVisible('[id=attachment-margin-content]');
    });
    Terra.should.matchScreenshot('Middle End', { selector: '[id=attachment-margin-bounds]' });

    it('Bottom Start Content Attachment', () => {
      browser.click('[id=attach-BS]');
      browser.waitForVisible('[id=attachment-margin-content]');
    });
    Terra.should.matchScreenshot('Bottom Start', { selector: '[id=attachment-margin-bounds]' });

    it('Bottom Center Content Attachment', () => {
      browser.click('[id=attach-BC]');
      browser.waitForVisible('[id=attachment-margin-content]');
    });
    Terra.should.matchScreenshot('Bottom Center', { selector: '[id=attachment-margin-bounds]' });

    it('Bottom End Content Attachment', () => {
      browser.click('[id=attach-BE]');
      browser.waitForVisible('[id=attachment-margin-content]');
    });
    Terra.should.matchScreenshot('Bottom End', { selector: '[id=attachment-margin-bounds]' });
  });


  // boundingRef: test - top bottom start end bounding container adjustments.
  describe('Displays content pushed by bounding container', () => {
    before(() => browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-bounding-container'));

    it('Push Left', () => {
      browser.click('[id=push-left]');
      browser.click('[id=trigger-bounding-container]');
      browser.waitForVisible('[id=bounding-container-content]');
    });
    Terra.should.matchScreenshot('Push Left', { selector: '[id=bounding-container-bounds]' });

    it('Push Right', () => {
      browser.click('[id=push-right]');
      browser.click('[id=trigger-bounding-container]');
      browser.waitForVisible('[id=bounding-container-content]');
    });
    Terra.should.matchScreenshot('Push Right', { selector: '[id=bounding-container-bounds]' });

    it('Push Down', () => {
      browser.click('[id=push-down]');
      browser.click('[id=trigger-bounding-container]');
      browser.waitForVisible('[id=bounding-container-content]');
    });
    Terra.should.matchScreenshot('Push Down', { selector: '[id=bounding-container-bounds]' });

    it('Push Up', () => {
      browser.click('[id=push-up]');
      browser.click('[id=trigger-bounding-container]');
      browser.waitForVisible('[id=bounding-container-content]');
    });
    Terra.should.matchScreenshot('Push Up', { selector: '[id=bounding-container-bounds]' });
  });

  // Verify Content Offset Positioning
  describe('Display the content offset correctly for dir=ltr', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-content-offset');
      browser.waitForVisible('[id=ContentOffset-content]');
    });

    Terra.should.matchScreenshot({ selector: '[id=ContentOffset-bounds]' });
  });

  describe('Displays the content offset correctly for dir=rtl', () => {
    before(() => {
      browser.setViewportSize(Terra.viewports('medium')[0]);
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-content-offset');
      browser.click('[id=rtl-ContentOffset]');
    });
    beforeEach(() => {
      browser.click('[id=trigger-ContentOffset]');
      browser.pause(50);
      browser.waitForVisible('[id=ContentOffset-content]');
    });
    after(() => {
      browser.click('[id=ltr-ContentOffset]');
    });

    Terra.should.matchScreenshot({ selector: '[id=ContentOffset-bounds]' });
  });

  // Verify Target Offset Positioning
  describe('Display the target offset correctly for dir=ltr', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-target-offset');
      browser.waitForVisible('[id=TargetOffset-content]');
    });

    Terra.should.matchScreenshot({ selector: '[id=TargetOffset-bounds]' });
  });

  describe('Displays the target offset correctly for dir=rtl', () => {
    before(() => {
      browser.setViewportSize(Terra.viewports('medium')[0]);
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-target-offset');
      browser.click('[id=rtl-TargetOffset]');
    });
    beforeEach(() => {
      browser.click('[id=trigger-TargetOffset]');
      browser.pause(50);
      browser.waitForVisible('[id=TargetOffset-content]');
    });
    after(() => {
      browser.click('[id=ltr-TargetOffset]');
    });

    Terra.should.matchScreenshot({ selector: '[id=TargetOffset-bounds]' });
  });

  // Verify Enabled Behaviors
  describe('Content displays when isEnabled={true} vs isEnabled={false} ', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-enabled-behaviors');
      browser.waitForVisible('[id=Enabled-bounds]');
      browser.waitForVisible('[id=NotEnabled-bounds]');
    });

    Terra.should.matchScreenshot({ selector: '[id=EnabledBehaviors-bounds]' });
  });


  // Verify Close Behaviors - ALL
  describe('Closes the hookshot content on ESC when all close behavior is present', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-close-behaviors');
      browser.click('[id=trigger-AllBehavior]');
      browser.waitForVisible('[id=AllBehavior-content]');
      browser.keys('ESCAPE');
    });

    Terra.should.matchScreenshot({ selector: '[id=AllBehavior-bounds]' });
  });

  describe('Closes the hookshot content on outside click when all close behavior is present', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-close-behaviors');
      browser.click('[id=trigger-AllBehavior]');
      browser.waitForVisible('[id=AllBehavior-content]');
      browser
        .moveToObject('[id=root]', 10, 10)
        .leftClick();
    });

    Terra.should.matchScreenshot({ selector: '[id=AllBehavior-bounds]' });
  });

  describe('Closes the hookshot content on resize when all close behavior is present', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-close-behaviors');
      browser.click('[id=trigger-AllBehavior]');
      browser.waitForVisible('[id=AllBehavior-content]');
      browser.setViewportSize(Terra.viewports('small')[0]);
      browser.pause(100);
    });

    Terra.should.matchScreenshot({ selector: '[id=AllBehavior-bounds]' });
  });

  // Verify Close Behaviors - ESCAPE
  describe('Closes the hookshot content on ESC when closeOnEsc', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-close-behaviors');
      browser.click('[id=trigger-EscBehavior]');
      browser.waitForVisible('[id=EscBehavior-content]');
      browser.keys('ESCAPE');
    });

    Terra.should.matchScreenshot({ selector: '[id=EscBehavior-bounds]' });
  });

  // Verify Close Behaviors - CLICK
  describe('Closes the hookshot content on outside click when closeOnOutsideClick', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-close-behaviors');
      browser.click('[id=trigger-OutsideClickBehavior]');
      browser.waitForVisible('[id=OutsideClickBehavior-content]');
      browser
        .moveToObject('[id=root]', 10, 10)
        .leftClick();
    });

    Terra.should.matchScreenshot({ selector: '[id=OutsideClickBehavior-bounds]' });
  });

  // Verify Close Behaviors - CLICK on SVG
  describe('Closes the hookshot content on outside click on SVG when closeOnOutsideClick', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-close-behaviors');
      browser.click('[id=trigger-OutsideClickBehaviorWithSvgs');
      browser.waitForVisible('[id=OutsideClickBehaviorWithSvgs-content]');
      browser
        .moveToObject('[id=svg1]', 10, 10)
        .leftClick();
    });

    Terra.should.matchScreenshot({ selector: '[id=OutsideClickBehaviorWithSvgs-bounds]' });
  });

  // Verify Close Behaviors - RESIZE
  describe('Closes the hookshot content on resize', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-close-behaviors');
      browser.click('[id=trigger-ResizeBehavior]');
      browser.waitForVisible('[id=ResizeBehavior-content]');
      browser.setViewportSize(Terra.viewports('small')[0]);
      browser.click('[id=scroll-bounds]');
      browser.pause(100);
    });

    Terra.should.matchScreenshot({ selector: '[id=ResizeBehavior-bounds]' });
  });

  // Verify Close Behaviors - NONE
  describe('Closes the hookshot content on ESC when no close behavior is present', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-close-behaviors');
      browser.click('[id=trigger-NoCloseBehavior]');
      browser.waitForVisible('[id=NoCloseBehavior-content]');
      browser.click('[id=scroll-bounds]');
      browser.keys('ESCAPE');
    });

    Terra.should.matchScreenshot({ selector: '[id=NoCloseBehavior-bounds]' });
  });

  describe('Closes the hookshot content on outside click when no close behavior is present', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-close-behaviors');
      browser.click('[id=trigger-NoCloseBehavior]');
      browser.waitForVisible('[id=NoCloseBehavior-content]');
      browser.click('[id=scroll-bounds]');
      browser
        .moveToObject('[id=root]', 10, 10)
        .leftClick();
    });

    Terra.should.matchScreenshot({ selector: '[id=NoCloseBehavior-bounds]' });
  });

  describe('Closes the hookshot content on resize when no close behavior is present', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-close-behaviors');
      browser.click('[id=trigger-NoCloseBehavior]');
      browser.waitForVisible('[id=NoCloseBehavior-content]');
      browser.click('[id=scroll-bounds]');
      browser.setViewportSize(Terra.viewports('small')[0]);
      browser.pause(100);
    });

    Terra.should.matchScreenshot({ selector: '[id=NoCloseBehavior-bounds]' });
  });

  describe('Displays hookshot positioned by target coordinates', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-coordinates');
      browser.click('[id=coords-button]');
      browser.waitForVisible('[id=test-coords-content]');
    });

    Terra.should.matchScreenshot({ selector: '[id=coords-test]' });
  });
});
