'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _terraAppDelegate = require('terra-app-delegate');

var _terraAppDelegate2 = _interopRequireDefault(_terraAppDelegate);

require('terra-base/lib/baseStyles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * The AppDelegate instance that will be propagated to the components presented within the NavigationLayout.
   */
  app: _terraAppDelegate2.default.propType,
  /**
   * The utility menu to be wrapped.
   */
  children: _propTypes2.default.node.isRequired
};

/**
 * The UtilityMenuWrapper handles the plumbing between its AppDelegate and the
 * utility menu dismissal requests.
 */
var UtilityMenuWrapper = function UtilityMenuWrapper(_ref) {
  var app = _ref.app,
      children = _ref.children,
      customProps = _objectWithoutProperties(_ref, ['app', 'children']);

  return _react2.default.cloneElement(children, _extends({}, customProps, { onRequestClose: app.dismiss, isHeightBounded: true }));
};

UtilityMenuWrapper.propTypes = propTypes;

exports.default = UtilityMenuWrapper;