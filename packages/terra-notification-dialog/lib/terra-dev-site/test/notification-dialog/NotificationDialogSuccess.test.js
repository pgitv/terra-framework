'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NotificationDialogVariant = require('./NotificationDialogVariant.test');

var _NotificationDialogVariant2 = _interopRequireDefault(_NotificationDialogVariant);

var _NotificationDialog = require('../../../NotificationDialog');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotificationDialogSuccess = function NotificationDialogSuccess() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_NotificationDialogVariant2.default, { variant: _NotificationDialog.NotificationDialogVariants.SUCCESS })
  );
};

exports.default = NotificationDialogSuccess;