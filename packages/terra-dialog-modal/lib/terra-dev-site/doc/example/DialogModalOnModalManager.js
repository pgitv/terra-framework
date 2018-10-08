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

var _DialogModalContainer = require('./DialogModalContainer');

var _DialogModalContainer2 = _interopRequireDefault(_DialogModalContainer);

var _exampleStyles = require('./example-styles.scss');

var _exampleStyles2 = _interopRequireDefault(_exampleStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_exampleStyles2.default);

var DialogModalOnModalManager = function DialogModalOnModalManager() {
  return _react2.default.createElement(
    'div',
    { className: cx('example-wrapper') },
    _react2.default.createElement(
      _terraModalManager2.default,
      null,
      _react2.default.createElement(
        'h4',
        null,
        ' Dialog Modal on Modal Manager'
      ),
      _react2.default.createElement(
        'p',
        null,
        ' Dialog Modal has z-index of 8001 which is higher than that of modal manager. Click the button to trigger Dialog Modal '
      ),
      _react2.default.createElement(_DialogModalContainer2.default, null)
    )
  );
};

exports.default = DialogModalOnModalManager;