'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ApplicationMenuLayout = require('terra-application-menu-layout/lib/ApplicationMenuLayout');

var _ApplicationMenuLayout2 = _interopRequireDefault(_ApplicationMenuLayout);

var _Placeholder = require('terra-application-menu-layout/lib/terra-dev-site/doc/common/Placeholder');

var _Placeholder2 = _interopRequireDefault(_Placeholder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
var Menu = function Menu() {
  return _react2.default.createElement(
    'div',
    { style: { height: '450px', width: '300px' } },
    _react2.default.createElement(_ApplicationMenuLayout2.default, {
      header: _react2.default.createElement(_Placeholder2.default, { text: 'Header', height: '50px' }),
      footer: _react2.default.createElement(_Placeholder2.default, { text: 'Footer', height: '50px' }),
      extensions: _react2.default.createElement(_Placeholder2.default, { text: 'Extensions', height: '50px' }),
      content: _react2.default.createElement(_Placeholder2.default, { text: 'Content' })
    })
  );
};

exports.default = Menu;