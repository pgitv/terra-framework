'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _terraModalManager = require('terra-modal-manager');

var _terraModalManager2 = _interopRequireDefault(_terraModalManager);

var _NotificationDialogModalContainer = require('./NotificationDialogModalContainer');

var _NotificationDialogModalContainer2 = _interopRequireDefault(_NotificationDialogModalContainer);

var _exampleStyles = require('./example-styles.scss');

var _exampleStyles2 = _interopRequireDefault(_exampleStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_exampleStyles2.default);

var NotificationDialogOnModalManager = function NotificationDialogOnModalManager() {
  return _react2.default.createElement(
    'div',
    { className: cx('example-wrapper') },
    _react2.default.createElement(
      _terraModalManager2.default,
      null,
      _react2.default.createElement(
        'h4',
        null,
        ' Notification Dialog on Modal Manager'
      ),
      _react2.default.createElement(
        'p',
        null,
        ' Notification Dialog has the highest z-index of 9001. Click the button to trigger Notification Dialog '
      ),
      _react2.default.createElement(_NotificationDialogModalContainer2.default, null)
    )
  );
};

exports.default = NotificationDialogOnModalManager;