'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _ContentComponent = require('terra-disclosure-manager/lib/terra-dev-site/doc/example/ContentComponent');

var _ContentComponent2 = _interopRequireDefault(_ContentComponent);

var _ModalManager = require('terra-modal-manager/lib/ModalManager');

var _ModalManager2 = _interopRequireDefault(_ModalManager);

var _exampleStyles = require('terra-modal-manager/lib/terra-dev-site/doc/example/example-styles.scss');

var _exampleStyles2 = _interopRequireDefault(_exampleStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
var cx = _bind2.default.bind(_exampleStyles2.default);

var ModalManagerExample = function ModalManagerExample() {
  return _react2.default.createElement(
    'div',
    { className: cx('example-wrapper') },
    _react2.default.createElement(
      _ModalManager2.default,
      null,
      _react2.default.createElement(_ContentComponent2.default, { disclosureType: 'modal' })
    )
  );
};

exports.default = ModalManagerExample;