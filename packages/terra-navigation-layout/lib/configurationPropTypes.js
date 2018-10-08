'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.supportedComponentBreakpoints = exports.processedRoutesPropType = exports.componentConfigPropType = exports.routePropType = exports.routeConfigPropType = exports.navigationLayoutConfigPropType = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var supportedComponentBreakpoints = ['tiny', 'small', 'medium', 'large', 'huge'];

/**
 * PropType definition for component definitions in the NavigationLayout's configuration object.
 * It is an Object that is keyed by a String breakpoint value (or `default`) and has Object values that
 * represent Components.
 *
 * Example:
 *   {
 *     default: {
 *       componentClass: DefaultComponent,
 *       props: {
 *         prop1: 'Value',
 *         prop2: 'Other value',
 *       },
 *     },
 *     small: {
 *       componentClass: SmallComponent,
 *       // props are optional
 *     },
 *     huge: {
 *       // The same component can be rendered with different prop values at different breakpoints
 *       componentClass: DefaultComponent,
 *       props: {
 *         prop1: 'Huge Value for prop1',
 *       },
 *     },
 *   }
 */
var componentConfigPropType = _propTypes2.default.objectOf(function (propValue, key, componentName, location, propFullName) {
  var validKey = key === 'default' || supportedComponentBreakpoints.indexOf(key) >= 0;

  if (!validKey) {
    return new Error('Invalid prop \'' + propFullName + '\' supplied to \'' + componentName + '\'. Validation failed.');
  }

  var value = propValue[key];

  var validValue = true;
  if (value !== null) {
    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') {
      validValue = false;
    } else if (!value.componentClass || _typeof(value.props) !== 'object' && value.props !== null && value.props !== undefined) {
      validValue = false;
    }
  }

  if (!validValue) {
    return new Error('Invalid prop \'' + propFullName + '\' supplied to \'' + componentName + '\'. Validation failed.');
  }

  return true;
});

/**
 * PropType definition for routes definitions in the NavigationLayout's configuration object.
 * It is an Object that contains a path and a component to render for that path.
 * The path must start with a forward slash.
 *
 * Example:
 *   {
 *     path: '/a',
 *     component: {...}, // [componentConfigPropType]
 *   }
 */
var routePropType = _propTypes2.default.shape({
  path: function path(props, propName, componentName) {
    if (!/\/.*/.test(props[propName])) {
      return new Error('Invalid prop `' + propName + '` supplied to' + (' `' + componentName + '`. Validation failed. ' + propName + ' must start with a forward slash (/).'));
    }
    return true;
  },
  component: componentConfigPropType.isRequired
});

var routeConfigPropType = _propTypes2.default.objectOf(routePropType);

/**
 * PropType definition for the configuration Object used by the NavigationLayout.
 * It is an Object containing routing configurations for the header, menu, and content layout areas.
 *
 * Example:
 *   {
 *     header: {...}, [routeConfigPropType]
 *     menu: {...},    [routeConfigPropType]
 *     content: {...}, [routeConfigPropType]
 *   }
 */
var navigationLayoutConfigPropType = _propTypes2.default.shape({
  header: routeConfigPropType,
  menu: routeConfigPropType,
  content: routeConfigPropType
});

/**
 * PropType definition for the processed configuration array created by the NavigationLayout and utilized
 * by the NavigationLayoutContent and RoutingStack. It is an Array containing Objects with data neccessary for the
 * creation of routes.
 *
 * Example:
 *   [{
 *     path: '/a/b/c',
 *     componentClass: CComponentClass,
 *     componentProps: {
 *       propName: 'prop value',
 *     },
 *   }, {
 *     path: '/a/b',
 *     componentClass: BComponentClass,
 *   }, {
 *     path: '/a',
 *     componentClass: AComponentClass,
 *   }]
 */
var processedRoutesPropType = _propTypes2.default.arrayOf(_propTypes2.default.shape({
  path: _propTypes2.default.string,
  componentClass: _propTypes2.default.func,
  componentProps: _propTypes2.default.object
}));

exports.navigationLayoutConfigPropType = navigationLayoutConfigPropType;
exports.routeConfigPropType = routeConfigPropType;
exports.routePropType = routePropType;
exports.componentConfigPropType = componentConfigPropType;
exports.processedRoutesPropType = processedRoutesPropType;
exports.supportedComponentBreakpoints = supportedComponentBreakpoints;