'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../../../Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _TestHeader = require('../common/TestHeader');

var _TestHeader2 = _interopRequireDefault(_TestHeader);

var _TestMenu = require('../common/TestMenu');

var _TestMenu2 = _interopRequireDefault(_TestMenu);

var _TestContent = require('../common/TestContent');

var _TestContent2 = _interopRequireDefault(_TestContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LayoutDefault = function LayoutDefault() {
  return _react2.default.createElement(
    _Layout2.default,
    {
      style: { height: '768px' },
      key: 'layout-default',
      header: _react2.default.createElement(_TestHeader2.default, null),
      menu: _react2.default.createElement(_TestMenu2.default, null),
      menuText: 'Menu Text',
      id: 'test-root'
    },
    _react2.default.createElement(_TestContent2.default, null)
  );
};

exports.default = LayoutDefault;