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

var _terraLayout = require('terra-layout');

var _terraLayout2 = _interopRequireDefault(_terraLayout);

var _breakpointsModule = require('terra-responsive-element/lib/breakpoints.module.scss');

var _breakpointsModule2 = _interopRequireDefault(_breakpointsModule);

var _NavigationLayoutContent = require('./NavigationLayoutContent');

var _NavigationLayoutContent2 = _interopRequireDefault(_NavigationLayoutContent);

var _configurationPropTypes = require('./configurationPropTypes');

var _routingUtils = require('./routingUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getBreakpointSize = function getBreakpointSize(queryWidth) {
  var width = queryWidth || window.innerWidth;
  var small = _breakpointsModule2.default.small,
      medium = _breakpointsModule2.default.medium,
      large = _breakpointsModule2.default.large,
      huge = _breakpointsModule2.default.huge;


  if (width >= huge) {
    return 'huge';
  }if (width >= large) {
    return 'large';
  }if (width >= medium) {
    return 'medium';
  }if (width >= small) {
    return 'small';
  }
  return 'tiny';
};

var propTypes = {
  /**
   * The component to render within the NavigationLayout's `header` region. If provided, this component
   * must appropriately handle the NavigationLayout-supplied props: `app`, `routeConfig`, and `navigationLayoutSize`.
   */
  header: _propTypes2.default.element,
  /**
   * The component to render within the NavigationLayout's `menu` region. If provided, this component
   * must appropriately handle the NavigationLayout-supplied props: `app`, `routeConfig`, and `navigationLayoutSize`.
   */
  menu: _propTypes2.default.element,
  /**
   * The component to render within the NavigationLayout's `content` region. If provided, this component
   * must appropriately handle the NavigationLayout-supplied props: `app`, `routeConfig`, and `navigationLayoutSize`.
   */
  children: _propTypes2.default.element,
  /**
   * The String to display in the NavigationLayout's hover-target menu disclosure.
   */
  menuText: _propTypes2.default.string,
  /**
   * The AppDelegate instance that will be propagated to the components presented within the NavigationLayout.
   */
  app: _terraAppDelegate2.default.propType,
  /**
   * The configuration Object that will be used to generate the specified regions of the NavigationLayout.
   * Note: The config prop is treated as an immutable object to prevent unnecessary processing and improve performance.
   * If the configuration is changed after the first render, a new configuration object instance must be provided.
   */
  config: _configurationPropTypes.navigationLayoutConfigPropType.isRequired,
  /**
   * The index path of the consuming application's routing structure. If provided, the NavigationLayout will
   * ensure Redirects are present where necessary.
   */
  indexPath: _propTypes2.default.string,
  /**
   * The location as provided by the `withRouter()` HOC.
   */
  location: _propTypes2.default.object.isRequired,
  /**
   * The match as provided by the `withRouter()` HOC.
   */
  match: _propTypes2.default.object.isRequired,
  /**
   * The history as provided by the `withRouter()` HOC.
   */
  history: _propTypes2.default.object.isRequired,
  /**
   * The staticContext as provided by the `withRouter()` HOC. This will only be provided when
   * within a StaticRouter.
   */
  staticContext: _propTypes2.default.object
};

/**
 * The NavigationLayout utilizes the Terra Layout and a configuration object to generate a routing-based application layout.
 */

var NavigationLayout = function (_React$Component) {
  _inherits(NavigationLayout, _React$Component);

  _createClass(NavigationLayout, null, [{
    key: 'processRouteConfig',
    value: function processRouteConfig(config) {
      var processedRoutes = {};

      _configurationPropTypes.supportedComponentBreakpoints.forEach(function (size) {
        var processedRoutesForSize = {};
        processedRoutesForSize.header = (0, _routingUtils.reduceRouteConfig)(config.header, size);
        processedRoutesForSize.menu = (0, _routingUtils.reduceRouteConfig)(config.menu, size);
        processedRoutesForSize.content = (0, _routingUtils.reduceRouteConfig)(config.content, size);

        processedRoutes[size] = processedRoutesForSize;
      });

      return processedRoutes;
    }
  }]);

  function NavigationLayout(props) {
    _classCallCheck(this, NavigationLayout);

    var _this = _possibleConstructorReturn(this, (NavigationLayout.__proto__ || Object.getPrototypeOf(NavigationLayout)).call(this, props));

    _this.updateSize = _this.updateSize.bind(_this);

    _this.state = {
      size: getBreakpointSize(),
      processedRoutes: NavigationLayout.processRouteConfig(props.config)
    };
    return _this;
  }

  _createClass(NavigationLayout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this.updateSize);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.config !== this.props.config) {
        this.setState({
          processedRoutes: NavigationLayout.processRouteConfig(nextProps.config)
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateSize);
    }
  }, {
    key: 'updateSize',
    value: function updateSize() {
      var newSize = getBreakpointSize();

      if (this.state.size !== newSize) {
        this.setState({
          size: newSize
        });
      }
    }
  }, {
    key: 'decorateElement',
    value: function decorateElement(element, routes) {
      if (!element) {
        return null;
      }

      var app = this.props.app;
      var size = this.state.size;


      return _react2.default.cloneElement(element, {
        app: app,
        navigationLayoutRoutes: routes,
        navigationLayoutSize: size
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          header = _props.header,
          children = _props.children,
          menu = _props.menu,
          app = _props.app,
          menuText = _props.menuText,
          config = _props.config,
          indexPath = _props.indexPath,
          location = _props.location,
          match = _props.match,
          history = _props.history,
          staticContext = _props.staticContext,
          customProps = _objectWithoutProperties(_props, ['header', 'children', 'menu', 'app', 'menuText', 'config', 'indexPath', 'location', 'match', 'history', 'staticContext']); // eslint-disable-line no-unused-vars

      var _state = this.state,
          size = _state.size,
          processedRoutes = _state.processedRoutes;


      var headerComponent = header || _react2.default.createElement(_NavigationLayoutContent2.default, null);

      var contentComponent = children || _react2.default.createElement(_NavigationLayoutContent2.default, { redirectPath: indexPath });

      var menuComponent = menu;
      // The routes for the menu are examined for evidence of a valid component for the current location.
      // If one is not found, we do not provide one to the Layout to ensure that the Layout renders appropriately (without a menu present).
      if (!menuComponent && (0, _routingUtils.validateMatchExists)(location.pathname, processedRoutes[size].menu)) {
        menuComponent = _react2.default.createElement(_NavigationLayoutContent2.default, { stackNavigationIsEnabled: true });
      }

      return _react2.default.createElement(
        _terraLayout2.default,
        _extends({}, customProps, {
          header: this.decorateElement(headerComponent, processedRoutes[size].header),
          menu: this.decorateElement(menuComponent, processedRoutes[size].menu),
          menuText: menuText
        }),
        this.decorateElement(contentComponent, processedRoutes[size].content)
      );
    }
  }]);

  return NavigationLayout;
}(_react2.default.Component);

NavigationLayout.propTypes = propTypes;

exports.default = (0, _reactRouterDom.withRouter)(NavigationLayout);