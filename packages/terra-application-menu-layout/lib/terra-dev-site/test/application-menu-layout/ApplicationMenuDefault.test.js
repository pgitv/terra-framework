'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ApplicationMenuLayout = require('../../../ApplicationMenuLayout');

var _ApplicationMenuLayout2 = _interopRequireDefault(_ApplicationMenuLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ApplicationMenuDefault = function ApplicationMenuDefault() {
  return _react2.default.createElement(_ApplicationMenuLayout2.default, {
    id: 'test-menu',
    extensions: _react2.default.createElement(
      'div',
      { id: 'test-extensions' },
      'Extensions'
    ),
    content: _react2.default.createElement(
      'div',
      { style: { position: 'absolute', top: '50%', transform: 'translate3d(0, -50%, 0)' }, id: 'test-content' },
      'Content'
    ),
    header: _react2.default.createElement(
      'div',
      { id: 'test-header' },
      'Header'
    ),
    footer: _react2.default.createElement(
      'div',
      { id: 'test-footer' },
      'Footer'
    )
  });
};

exports.default = ApplicationMenuDefault;