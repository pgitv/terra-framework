'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _ApplicationHeader = require('../../../header/_ApplicationHeader');

var _ApplicationHeader2 = _interopRequireDefault(_ApplicationHeader);

var _ExtensionsExample = require('../common/ExtensionsExample');

var _ExtensionsExample2 = _interopRequireDefault(_ExtensionsExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/no-extraneous-dependencies */
var ApplicationLayoutHeaderSmall = function ApplicationLayoutHeaderSmall() {
  return _react2.default.createElement(
    _reactRouterDom.MemoryRouter,
    null,
    _react2.default.createElement(_ApplicationHeader2.default, {
      id: 'test-header',
      layoutConfig: { size: 'small', toggleMenu: function toggleMenu() {} },
      nameConfig: { title: 'app-test-title' },
      utilityConfig: {
        title: 'test-util-title',
        initialSelectedKey: 'test-menu',
        onChange: function onChange() {},
        menuItems: [{
          key: 'test-menu',
          contentLocation: 'body',
          title: 'test-menu-title'
        }]
      },
      extensions: _react2.default.createElement(_ExtensionsExample2.default, { layoutConfig: { size: 'large' } }),
      applicationLinks: [{
        id: '123',
        path: '/something1',
        text: 'item 1'
      }, {
        id: '234',
        path: '/something2',
        text: 'item 2'
      }, {
        id: '345',
        path: '/something3',
        text: 'item 3'
      }]
    })
  );
};

exports.default = ApplicationLayoutHeaderSmall;