'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HookshotTestTemplate = require('../common/HookshotTestTemplate');

var _HookshotTestTemplate2 = _interopRequireDefault(_HookshotTestTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NoCloseBehavior = function NoCloseBehavior() {
  return _react2.default.createElement(_HookshotTestTemplate2.default, {
    id: 'NoCloseBehavior',
    hookshotContentProps: { closeOnEsc: false, closeOnOutsideClick: false, closeOnResize: false }
  });
};

var EscBehavior = function EscBehavior() {
  return _react2.default.createElement(_HookshotTestTemplate2.default, {
    id: 'EscBehavior',
    hookshotContentProps: { closeOnEsc: true, closeOnOutsideClick: false, closeOnResize: false }
  });
};

var OutsideClickBehavior = function OutsideClickBehavior() {
  return _react2.default.createElement(_HookshotTestTemplate2.default, {
    id: 'OutsideClickBehavior',
    hookshotContentProps: { closeOnEsc: false, closeOnOutsideClick: true, closeOnResize: false }
  });
};

var ResizeBehavior = function ResizeBehavior() {
  return _react2.default.createElement(_HookshotTestTemplate2.default, {
    id: 'ResizeBehavior',
    hookshotContentProps: { closeOnEsc: false, closeOnOutsideClick: false, closeOnResize: true }
  });
};

var AllBehavior = function AllBehavior() {
  return _react2.default.createElement(_HookshotTestTemplate2.default, {
    id: 'AllBehavior',
    hookshotContentProps: { closeOnEsc: true, closeOnOutsideClick: true, closeOnResize: true }
  });
};

var HookshotExample = function HookshotExample() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'p',
      null,
      'All Close Behavior'
    ),
    _react2.default.createElement(AllBehavior, null),
    _react2.default.createElement(
      'p',
      null,
      'Close on ESC Behavior'
    ),
    _react2.default.createElement(EscBehavior, null),
    _react2.default.createElement(
      'p',
      null,
      'Close on Outside Click Behavior'
    ),
    _react2.default.createElement(OutsideClickBehavior, null),
    _react2.default.createElement(
      'p',
      null,
      'Close on Resize Behavior'
    ),
    _react2.default.createElement(ResizeBehavior, null),
    _react2.default.createElement(
      'p',
      null,
      'No Close Behavior - Once opened, content stays on the screen when scrolling occurs.'
    ),
    _react2.default.createElement(NoCloseBehavior, null),
    _react2.default.createElement(
      'button',
      { type: 'button', id: 'scroll-bounds' },
      'Scroll Button'
    )
  );
};

exports.default = HookshotExample;