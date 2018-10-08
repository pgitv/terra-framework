'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _terraAppDelegate = require('terra-app-delegate');

var _terraAppDelegate2 = _interopRequireDefault(_terraAppDelegate);

var _terraContentContainer = require('terra-content-container');

var _terraContentContainer2 = _interopRequireDefault(_terraContentContainer);

var _terraActionHeader = require('terra-action-header');

var _terraActionHeader2 = _interopRequireDefault(_terraActionHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  name: _propTypes2.default.string,
  app: _terraAppDelegate2.default.propType
};

var ExtensionsDisclosure = function ExtensionsDisclosure(_ref) {
  var name = _ref.name,
      app = _ref.app;
  return _react2.default.createElement(
    _terraContentContainer2.default,
    {
      fill: true,
      header: _react2.default.createElement(_terraActionHeader2.default, {
        title: name.charAt(0).toUpperCase() + name.slice(1),
        onClose: app.closeDisclosure,
        onBack: app.goBack,
        onMaximize: app.maximize,
        onMinimize: app.minimize
      })
    },
    _react2.default.createElement(
      'div',
      { style: { padding: '10px' } },
      'Content for extension:',
      name
    )
  );
};

ExtensionsDisclosure.propTypes = propTypes;

exports.default = ExtensionsDisclosure;