'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var testLinkConfig = [{ path: '/test1', text: 'test 1' }, {
  id: 'test-button',
  path: '/test2',
  text: 'test 2',
  externalLink: {
    path: 'http://test.brokenurl.terra-framework.com',
    target: '_self'
  }
}];

exports.default = testLinkConfig;