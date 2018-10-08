'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraAppDelegate = require('terra-app-delegate');

var _terraAppDelegate2 = _interopRequireDefault(_terraAppDelegate);

var _terraModalManager = require('terra-modal-manager');

var _terraModalManager2 = _interopRequireDefault(_terraModalManager);

var _ModalAggregator = require('terra-aggregator/lib/terra-dev-site/doc/common/ModalAggregator');

var _ModalAggregator2 = _interopRequireDefault(_ModalAggregator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalButton = function ModalButton(_ref) {
  var app = _ref.app;
  return _react2.default.createElement(
    'button',
    {
      type: 'button',
      onClick: function onClick() {
        app.disclose({
          preferredType: 'modal',
          size: 'large',
          content: {
            key: 'MODAL_EXAMPLE',
            component: _react2.default.createElement(_ModalAggregator2.default, { identifier: 'MODAL_EXAMPLE' })
          }
        });
      }
    },
    'Launch Modal'
  );
};

// eslint-disable-next-line import/no-unresolved, import/extensions


ModalButton.propTypes = {
  app: _terraAppDelegate2.default.propType
};

var SimpleAggregatorExample = function SimpleAggregatorExample() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _terraModalManager2.default,
      null,
      _react2.default.createElement(ModalButton, null)
    )
  );
};

exports.default = SimpleAggregatorExample;