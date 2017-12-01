/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const { resizeTo } = require('terra-toolkit/lib/nightwatch/responsive-helpers');

module.exports = resizeTo(['large'], {
  'Displays a default application menu': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/application-menu/default`);

    browser.expect.element('#test-menu').to.be.present;
  },
});
