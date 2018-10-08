'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

var _terraAppDelegate = require('terra-app-delegate');

var _terraAppDelegate2 = _interopRequireDefault(_terraAppDelegate);

var _RoutingStackDelegate = require('./RoutingStackDelegate');

var _RoutingStackDelegate2 = _interopRequireDefault(_RoutingStackDelegate);

var _configurationPropTypes = require('./configurationPropTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  /**
   * The AppDelegate instance that will be provided to the components rendered by the RoutingStack.
   */
  app: _terraAppDelegate2.default.propType,
  /**
   * The routing configuration from which Routes will be generated.
   */
  routes: _configurationPropTypes.processedRoutesPropType,
  /**
   * Flag to enable navigation within the RoutingStack. If true, functions will be exposed to the Routes that
   * will allow for traversal up to parent paths.
   */
  navEnabled: _propTypes2.default.bool,
  /**
   * The current react-router location. Provided by the `withRouter()` HOC.
   */
  location: _propTypes2.default.object,
  /**
   * The current react-router history. Provided by the `withRouter()` HOC.
   */
  history: _propTypes2.default.object,
  /**
   * Any additional Routes that will be inserted after the configuration-generated Routes. Generally used
   * to insert custom Redirects or fallback Routes.
   */
  children: _propTypes2.default.node,
  /**
   * Any additional props that should be propagated to the generated Route components.
   */
  ancestorProps: _propTypes2.default.object
};

var RoutingStack = function (_React$Component) {
  _inherits(RoutingStack, _React$Component);

  function RoutingStack(props) {
    _classCallCheck(this, RoutingStack);

    var _this = _possibleConstructorReturn(this, (RoutingStack.__proto__ || Object.getPrototypeOf(RoutingStack)).call(this, props));

    _this.updateStackLocation = _this.updateStackLocation.bind(_this);
    _this.createRoutes = _this.createRoutes.bind(_this);

    _this.state = {
      stackLocation: undefined
    };
    return _this;
  }

  _createClass(RoutingStack, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      this.setState({
        // The stackLocation must be reset upon rerendering to be in sync with any navigation that may have occurred.
        stackLocation: undefined
      });
    }
  }, {
    key: 'updateStackLocation',
    value: function updateStackLocation(path) {
      this.setState({
        stackLocation: { pathname: path }
      });
    }
  }, {
    key: 'createRoutes',
    value: function createRoutes(routes) {
      var _this2 = this;

      var _props = this.props,
          navEnabled = _props.navEnabled,
          app = _props.app,
          location = _props.location,
          history = _props.history,
          ancestorProps = _props.ancestorProps;
      var stackLocation = this.state.stackLocation;


      if (!routes || !routes.length) {
        return undefined;
      }

      return routes.map(function (routeData) {
        var delegateData = {
          location: stackLocation || location
        };

        delegateData.show = function (_ref) {
          var path = _ref.path;

          if ((0, _reactRouterDom.matchPath)(location.pathname, { path: path })) {
            _this2.updateStackLocation(path);
          } else {
            history.push(path);
          }
        };

        if (routeData.parentPaths && routeData.parentPaths.length) {
          delegateData.parentPaths = routeData.parentPaths.reduce(function (matchingPaths, path) {
            var match = (0, _reactRouterDom.matchPath)(location.pathname, { path: path });
            if (match) {
              matchingPaths.push(match.url);
            }

            return matchingPaths;
          }, []);

          if (navEnabled && delegateData.parentPaths.length) {
            delegateData.showParent = function () {
              _this2.updateStackLocation(delegateData.parentPaths[delegateData.parentPaths.length - 1]);
            };

            if (delegateData.parentPaths.length > 1) {
              delegateData.showRoot = function () {
                _this2.updateStackLocation(delegateData.parentPaths[0]);
              };
            }
          }
        }

        var ComponentClass = routeData.componentClass;

        return _react2.default.createElement(_reactRouterDom.Route, {
          path: routeData.path,
          key: routeData.path,
          render: function render() {
            return _react2.default.createElement(_reactRouterDom.Route, {
              location: _this2.props.location,
              render: function render() {
                return _react2.default.createElement(ComponentClass, _extends({}, ancestorProps, routeData.componentProps, {
                  routingStackDelegate: _RoutingStackDelegate2.default.create(delegateData),
                  app: app
                }));
              }
            });
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          routes = _props2.routes,
          location = _props2.location,
          children = _props2.children;


      return _react2.default.createElement(
        _reactRouterDom.Switch,
        { location: this.state.stackLocation || location },
        this.createRoutes(routes),
        children
      );
    }
  }]);

  return RoutingStack;
}(_react2.default.Component);

RoutingStack.propTypes = propTypes;

exports.default = (0, _reactRouterDom.withRouter)(RoutingStack);