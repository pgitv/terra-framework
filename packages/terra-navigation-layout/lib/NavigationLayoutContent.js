'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _terraAppDelegate = require('terra-app-delegate');

var _terraAppDelegate2 = _interopRequireDefault(_terraAppDelegate);

var _RoutingStack = require('./RoutingStack');

var _RoutingStack2 = _interopRequireDefault(_RoutingStack);

var _configurationPropTypes = require('./configurationPropTypes');

var _NavigationLayoutContentModule = require('./NavigationLayoutContent.module.scss');

var _NavigationLayoutContentModule2 = _interopRequireDefault(_NavigationLayoutContentModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cx = _bind2.default.bind(_NavigationLayoutContentModule2.default);

var propTypes = {
  /**
   * The AppDelegate instance that will be propagated to the RoutingStack and its contents.
   */
  app: _terraAppDelegate2.default.propType,
  /**
   * The routing configuration from which Routes will be generated.
   */
  navigationLayoutRoutes: _configurationPropTypes.processedRoutesPropType,
  /**
   * The String path to redirect to should the routes specified by the routeConfig all fail to match.
   */
  redirectPath: _propTypes2.default.string,
  /**
   * Flag to enable navigation within the RoutingStack.
   */
  stackNavigationIsEnabled: _propTypes2.default.bool
};

var NavigationLayoutContent = function NavigationLayoutContent(_ref) {
  var app = _ref.app,
      navigationLayoutRoutes = _ref.navigationLayoutRoutes,
      redirectPath = _ref.redirectPath,
      stackNavigationIsEnabled = _ref.stackNavigationIsEnabled,
      customProps = _objectWithoutProperties(_ref, ['app', 'navigationLayoutRoutes', 'redirectPath', 'stackNavigationIsEnabled']);

  return _react2.default.createElement(
    'div',
    { className: cx('content') },
    _react2.default.createElement(
      _RoutingStack2.default,
      {
        navEnabled: stackNavigationIsEnabled,
        app: app,
        routes: navigationLayoutRoutes,
        ancestorProps: customProps
      },
      redirectPath && _react2.default.createElement(_reactRouterDom.Redirect, { to: redirectPath })
    )
  );
};

NavigationLayoutContent.propTypes = propTypes;

exports.default = NavigationLayoutContent;