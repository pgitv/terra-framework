'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraAppDelegate = require('terra-app-delegate');

var _terraAppDelegate2 = _interopRequireDefault(_terraAppDelegate);

var _ModalManager = require('./ModalManager');

var _ModalManager2 = _interopRequireDefault(_ModalManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
/* eslint-disable-next-line import/no-cycle */


var withModalManager = function withModalManager(Component) {
  var ModalManagerHOC = function ModalManagerHOC(_ref) {
    var app = _ref.app,
        otherProps = _objectWithoutProperties(_ref, ['app']);

    return _react2.default.createElement(
      _ModalManager2.default,
      { app: app },
      _react2.default.createElement(Component, otherProps)
    );
  };

  ModalManagerHOC.WrappedComponent = Component;

  ModalManagerHOC.propTypes = {
    app: _terraAppDelegate2.default.propType
  };

  ModalManagerHOC.displayName = 'withModalManager(' + (Component.displayName || Component.name) + ')';

  return ModalManagerHOC;
};

exports.default = withModalManager;