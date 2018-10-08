'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraModalManager = require('terra-modal-manager');

var _terraModalManager2 = _interopRequireDefault(_terraModalManager);

var _PopupModalContainer = require('../common/PopupModalContainer');

var _PopupModalContainer2 = _interopRequireDefault(_PopupModalContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalManagerDemo = function ModalManagerDemo() {
  return _react2.default.createElement(
    _terraModalManager2.default,
    null,
    _react2.default.createElement(_PopupModalContainer2.default, null)
  );
};

exports.default = ModalManagerDemo;