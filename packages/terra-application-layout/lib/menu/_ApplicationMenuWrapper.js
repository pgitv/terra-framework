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

var _RoutingStackDelegate = require('terra-navigation-layout/lib/RoutingStackDelegate');

var _RoutingStackDelegate2 = _interopRequireDefault(_RoutingStackDelegate);

var _ApplicationMenu = require('./_ApplicationMenu');

var _ApplicationMenu2 = _interopRequireDefault(_ApplicationMenu);

var _propTypes3 = require('../utils/propTypes');

var _propTypes4 = _interopRequireDefault(_propTypes3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * The AppDelegate instance to provide to the ApplicationMenu.
   */
  app: _terraAppDelegate2.default.propType,
  /**
   * Array of navigation Objects to be rendered as tabs within the Application Header.
   */
  navigationItems: _propTypes4.default.navigationItemsPropType,
  /**
   * The Object of layout-related APIs provided to the components of the Layout. This prop is provided by the Layout.
   */
  layoutConfig: _propTypes4.default.layoutConfigPropType.isRequired,
  /**
   * The Object containing RoutingStack APIs provided to children of the RoutingStack. This prop is provided by the RoutingStack.
   */
  routingStackDelegate: _RoutingStackDelegate2.default.propType.isRequired,
  /**
   * The Object containing props from the configuration necessary for ApplicationMenu creation.
   */
  applicationMenuWrapperProps: _propTypes2.default.shape({
    /**
     * The Component class that will be rendered as content within the ApplicationMenu.
     */
    contentComponentClass: _propTypes2.default.func.isRequired,
    /**
     * The configuration for ApplicationName component.
     */
    nameConfig: _propTypes4.default.nameConfigPropType,
    /**
     * The configuration for ApplicationUtility component.
     */
    utilityConfig: _propTypes4.default.utilityConfigPropType,
    /**
     * The content to render in the menu's extensions region.
     */
    extensions: _propTypes2.default.node
  }).isRequired
};

var ApplicationMenuWrapper = function ApplicationMenuWrapper(props) {
  var app = props.app,
      layoutConfig = props.layoutConfig,
      routingStackDelegate = props.routingStackDelegate,
      applicationMenuWrapperProps = props.applicationMenuWrapperProps,
      contentProps = _objectWithoutProperties(props, ['app', 'layoutConfig', 'routingStackDelegate', 'applicationMenuWrapperProps']);

  /**
   * This Content component is the component class originally registered in the routingConfig
   * pre-wrapping. The contentProps are the props that were originally specified in the routingConfig for that component.
   */


  var Content = applicationMenuWrapperProps.contentComponentClass;

  return _react2.default.createElement(_ApplicationMenu2.default, {
    app: app,
    layoutConfig: layoutConfig,
    routingStackDelegate: routingStackDelegate,
    nameConfig: applicationMenuWrapperProps.nameConfig,
    utilityConfig: applicationMenuWrapperProps.utilityConfig,
    extensions: applicationMenuWrapperProps.extensions,
    content: _react2.default.createElement(Content, contentProps)
  });
};

ApplicationMenuWrapper.propTypes = propTypes;

exports.default = ApplicationMenuWrapper;