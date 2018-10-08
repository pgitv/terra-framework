'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('terra-layout/lib/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _ContentExample = require('terra-layout/lib/terra-dev-site/doc/common/ContentExample');

var _ContentExample2 = _interopRequireDefault(_ContentExample);

var _MenuExample = require('terra-layout/lib/terra-dev-site/doc/common/MenuExample');

var _MenuExample2 = _interopRequireDefault(_MenuExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

var layout = function layout() {
  return _react2.default.createElement(
    _Layout2.default,
    {
      menu: _react2.default.createElement(_MenuExample2.default, null),
      menuText: 'Menu',
      style: { height: '400px', width: '100%' }
    },
    _react2.default.createElement(_ContentExample2.default, null)
  );
};

/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
exports.default = layout;