'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HookshotTestTemplate = require('../common/HookshotTestTemplate');

var _HookshotTestTemplate2 = _interopRequireDefault(_HookshotTestTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContentOffset = function ContentOffset() {
  return _react2.default.createElement(_HookshotTestTemplate2.default, {
    id: 'ContentOffset',
    contentAttachment: 'bottom end',
    targetAttachment: 'top start',
    targetOffset: { vertical: 20, horizontal: -10 },
    isOpen: true
  });
};

var HookshotExample = function HookshotExample() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(ContentOffset, null),
    _react2.default.createElement(
      'p',
      null,
      'Content Offset Applied. (Offset value is "top-offset left-offset")'
    ),
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        null,
        'Content Attachement: top end'
      ),
      _react2.default.createElement(
        'li',
        null,
        'Target Attachement: bottom start'
      ),
      _react2.default.createElement(
        'li',
        null,
        'Content Offset : 20px -10px'
      )
    ),
    _react2.default.createElement(
      'button',
      { type: 'button', id: 'ltr-ContentOffset', onClick: function onClick() {
          document.getElementsByTagName('html')[0].dir = 'ltr';
        } },
      'LTR'
    ),
    _react2.default.createElement(
      'button',
      { type: 'button', id: 'rtl-ContentOffset', onClick: function onClick() {
          document.getElementsByTagName('html')[0].dir = 'rtl';
        } },
      'RTL'
    )
  );
};

exports.default = HookshotExample;