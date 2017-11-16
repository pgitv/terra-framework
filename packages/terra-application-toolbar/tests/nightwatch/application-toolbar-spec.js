/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const { resizeTo } = require('terra-toolkit/lib/nightwatch/responsive-helpers');

module.exports = resizeTo(['large'], {
  'Displays a default application toolbar': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/application-toolbar/default`);

    browser.expect.element('#test-toolbar #test-logo').to.be.present;
    browser.expect.element('#test-toolbar #test-content').to.be.present;
    browser.expect.element('#test-toolbar #test-utility').to.be.present;
  },
});
