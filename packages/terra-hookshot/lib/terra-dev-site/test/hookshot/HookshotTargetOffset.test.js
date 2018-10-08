'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HookshotTestTemplate = require('../common/HookshotTestTemplate');

var _HookshotTestTemplate2 = _interopRequireDefault(_HookshotTestTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TargetOffset = function TargetOffset() {
  return _react2.default.createElement(_HookshotTestTemplate2.default, {
    id: 'TargetOffset',
    contentAttachment: 'bottom start',
    targetAttachment: 'top start',
    targetOffset: { vertical: -10, horizontal: -20 },
    isOpen: true
  });
};

var HookshotExample = function HookshotExample() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(TargetOffset, null),
    _react2.default.createElement(
      'p',
      null,
      'Target Offset Applied. (Offset value is "top-offset left-offset")'
    ),
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        null,
        'Content Attachement: bottom start'
      ),
      _react2.default.createElement(
        'li',
        null,
        'Target Attachement: top start'
      ),
      _react2.default.createElement(
        'li',
        null,
        'Target Offset: -10px -20px'
      )
    ),
    _react2.default.createElement(
      'button',
      { type: 'button', id: 'ltr-TargetOffset', onClick: function onClick() {
          document.getElementsByTagName('html')[0].dir = 'ltr';
        } },
      'LTR'
    ),
    _react2.default.createElement(
      'button',
      { type: 'button', id: 'rtl-TargetOffset', onClick: function onClick() {
          document.getElementsByTagName('html')[0].dir = 'rtl';
        } },
      'RTL'
    )
  );
};

exports.default = HookshotExample;