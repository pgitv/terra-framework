'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraModalManager = require('terra-modal-manager');

var _terraModalManager2 = _interopRequireDefault(_terraModalManager);

var _reactRouterDom = require('react-router-dom');

var _ApplicationMenu = require('../../../menu/_ApplicationMenu');

var _ApplicationMenu2 = _interopRequireDefault(_ApplicationMenu);

var _ExtensionsExample = require('../common/ExtensionsExample');

var _ExtensionsExample2 = _interopRequireDefault(_ExtensionsExample);

var _ContentExample = require('../common/ContentExample');

var _ContentExample2 = _interopRequireDefault(_ContentExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/no-extraneous-dependencies */
var ApplicationLayoutMenu = function ApplicationLayoutMenu() {
  return _react2.default.createElement(
    _reactRouterDom.MemoryRouter,
    null,
    _react2.default.createElement(
      _terraModalManager2.default,
      null,
      _react2.default.createElement(_ApplicationMenu2.default, {
        id: 'test-menu',
        layoutConfig: { size: 'small' },
        nameConfig: { title: 'app-test-title' },
        routingStackDelegate: {},
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
        extensions: _react2.default.createElement(_ExtensionsExample2.default, { layoutConfig: { size: 'small' } }),
        content: _react2.default.createElement(_ContentExample2.default, null)
      })
    )
  );
};

exports.default = ApplicationLayoutMenu;