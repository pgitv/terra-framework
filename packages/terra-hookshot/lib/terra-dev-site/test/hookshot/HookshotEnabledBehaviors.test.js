'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HookshotTestTemplate = require('../common/HookshotTestTemplate');

var _HookshotTestTemplate2 = _interopRequireDefault(_HookshotTestTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Enabled = function Enabled() {
  return _react2.default.createElement(_HookshotTestTemplate2.default, {
    id: 'Enabled',
    isOpen: true,
    isEnabled: true
  });
};

var NotEnabled = function NotEnabled() {
  return _react2.default.createElement(_HookshotTestTemplate2.default, {
    id: 'NotEnabled',
    isOpen: true,
    isEnabled: false
  });
};

var HookshotExample = function HookshotExample() {
  return _react2.default.createElement(
    'div',
    { id: 'EnabledBehaviors-bounds' },
    _react2.default.createElement(
      'p',
      null,
      'Content Positioning is enabled. Content is visible.'
    ),
    _react2.default.createElement(Enabled, null),
    _react2.default.createElement(
      'p',
      null,
      'Content Positioning is not enabled. Content is not visible.'
    ),
    _react2.default.createElement(NotEnabled, null)
  );
};

exports.default = HookshotExample;