'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ApplicationHeaderLayout = require('../../../ApplicationHeaderLayout');

var _ApplicationHeaderLayout2 = _interopRequireDefault(_ApplicationHeaderLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ApplicationHeaderDefault = function ApplicationHeaderDefault() {
  return _react2.default.createElement(_ApplicationHeaderLayout2.default, {
    id: 'test-header',
    extensions: _react2.default.createElement(
      'div',
      { id: 'test-extensions' },
      'Extensions\xA0'
    ),
    navigation: _react2.default.createElement(
      'div',
      { style: { width: '100%', textAlign: 'center' }, id: 'test-navigation' },
      'Navigation\xA0'
    ),
    logo: _react2.default.createElement(
      'div',
      { id: 'test-logo' },
      'Logo\xA0'
    ),
    toggle: _react2.default.createElement(
      'div',
      { id: 'test-toggle' },
      'Toggle\xA0'
    ),
    utilities: _react2.default.createElement(
      'div',
      { id: 'test-utilities' },
      'Utilities\xA0'
    )
  });
};

exports.default = ApplicationHeaderDefault;