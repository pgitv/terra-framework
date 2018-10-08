'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Utils = exports.RoutingMenu = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _terraAppDelegate = require('terra-app-delegate');

var _terraAppDelegate2 = _interopRequireDefault(_terraAppDelegate);

var _terraNavigationLayout = require('terra-navigation-layout');

var _terraNavigationLayout2 = _interopRequireDefault(_terraNavigationLayout);

var _configurationPropTypes = require('terra-navigation-layout/lib/configurationPropTypes');

var _reactRouterDom = require('react-router-dom');

var _terraModalManager = require('terra-modal-manager');

var _RoutingMenu = require('./menu/RoutingMenu');

var _RoutingMenu2 = _interopRequireDefault(_RoutingMenu);

var _ApplicationMenuWrapper = require('./menu/_ApplicationMenuWrapper');

var _ApplicationMenuWrapper2 = _interopRequireDefault(_ApplicationMenuWrapper);

var _ApplicationHeader = require('./header/_ApplicationHeader');

var _ApplicationHeader2 = _interopRequireDefault(_ApplicationHeader);

var _propTypes3 = require('./utils/propTypes');

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _helpers = require('./utils/helpers');

var _helpers2 = _interopRequireDefault(_helpers);

var _utilityHelpers = require('./utils/utilityHelpers');

var _utilityHelpers2 = _interopRequireDefault(_utilityHelpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var navigationLayoutSizes = ['default', 'tiny', 'small', 'medium', 'large', 'huge'];

var propTypes = {
  /**
   * The AppDelegate instance provided by `withModalManager`. If an AppDelegate instance is
   * explicitly provided to the ApplicationLayout, the ModalManager will wrap it and
   * fall back to its defined APIs as needed.
   */
  app: _terraAppDelegate2.default.propType,
  /**
   * The content to be rendered in the ApplicationLayout's extensions region. This component will be provided an AppDelegate (as `app`) and
   * a `layoutConfig` as props to facilitate communication with the ApplicationLayout.
   */
  extensions: _propTypes2.default.element,
  /**
   * The index, or default, path of the routing configuration. The ApplicationLayout will redirect to this path
   * when the router reaches an unknown location.
   */
  indexPath: _propTypes2.default.string.isRequired,
  /**
   * The configuration values for the ApplicationName component.
   */
  nameConfig: _propTypes4.default.nameConfigPropType,
  /**
   * Alignment of the header's navigation primary tabs. ( e.g start, center, end )
   */
  navigationAlignment: _propTypes4.default.navigationAlignmentPropType,
  /**
   * An array of Objects describing the ApplicationLayout's primary navigation items.
   */
  navigationItems: _propTypes4.default.navigationItemsPropType,
  /**
   * The routing configuration Object. This is very similar to the routingConfig supported by the NavigationLayout; however,
   * the ApplicationLayout only supports configuration for the `menu` and `content` regions of the layout. The '/' path is also blacklisted
   * within this configuration object, as the ApplicationLayout uses it for navigation purposes. Any configuration provided for the '/' path
   * will be disregarded.
   */
  routingConfig: _propTypes2.default.shape({
    menu: _configurationPropTypes.routeConfigPropType,
    content: _configurationPropTypes.routeConfigPropType
  }).isRequired,
  /**
   * The configuration values for the ApplicationUtility component.
   */
  utilityConfig: _propTypes4.default.utilityConfigPropType
};

var defaultProps = {
  navigationItems: []
};

var ApplicationLayout = function (_React$Component) {
  _inherits(ApplicationLayout, _React$Component);

  _createClass(ApplicationLayout, null, [{
    key: 'buildMenuNavigationItems',

    /**
     * Builds and returns the menu items for the PrimaryNavigationSideMenu from the navigationItems.
     */
    value: function buildMenuNavigationItems(props) {
      var navigationItems = props.navigationItems,
          routingConfig = props.routingConfig;


      if (!routingConfig.menu) {
        return navigationItems;
      }

      var menuPaths = Object.keys(routingConfig.menu).map(function (key) {
        return routingConfig.menu[key].path;
      });
      return navigationItems.map(function (navigationItem) {
        return {
          externalLink: navigationItem.externalLink,
          path: navigationItem.path,
          text: navigationItem.text,
          hasSubMenu: menuPaths.filter(function (menuPath) {
            return (0, _reactRouterDom.matchPath)(navigationItem.path, { path: menuPath });
          }).length > 0
        };
      });
    }

    /**
     * Builds and returns the routing configuration object for the RoutingMenu that renders the top navigation items at
     * compact breakpoints.
     */

  }, {
    key: 'buildNavigationMenuConfig',
    value: function buildNavigationMenuConfig(props) {
      var menuNavigationItems = ApplicationLayout.buildMenuNavigationItems(props);

      var componentConfig = {
        componentClass: _RoutingMenu2.default,
        props: {
          menuItems: menuNavigationItems
        },
        refuseRoutingStackNavigation: menuNavigationItems.length === 0
      };

      /**
       * The configuration for the primary navigation menu is specified for the
       * tiny and small breakpoints only. The menu will only be visible when the ApplicationLayout
       * is compact.
       */
      return {
        '/': {
          path: '/',
          component: {
            tiny: componentConfig,
            small: componentConfig
          }
        }
      };
    }

    /**
     * Builds and returns the routing configuration object for all menus with ApplicationMenuWrappers
     * wrapped around each component entry.
     */

  }, {
    key: 'buildApplicationMenus',
    value: function buildApplicationMenus(props, originalMenuConfig) {
      var nameConfig = props.nameConfig,
          utilityConfig = props.utilityConfig,
          extensions = props.extensions;


      if (!originalMenuConfig) {
        return undefined;
      }

      var config = {};
      Object.keys(originalMenuConfig).forEach(function (menuKey) {
        var menuConfig = _extends({}, originalMenuConfig[menuKey]);

        var menuComponentConfig = _extends({}, menuConfig.component);

        /**
         * Every supplied menu component is wrapped with an ApplicationMenuWrapper.
         */
        navigationLayoutSizes.forEach(function (size) {
          if (!menuComponentConfig[size]) {
            return;
          }

          var componentConfig = _extends({}, menuComponentConfig[size]);
          var componentProps = _extends({}, componentConfig.props);

          /**
           * ApplicationMenuWrapper-specific props are injected into the props object with a prop
           * called `applicationMenuWrapperProps`.
           */
          componentProps.applicationMenuWrapperProps = {
            contentComponentClass: componentConfig.componentClass,
            nameConfig: nameConfig,
            utilityConfig: utilityConfig,
            extensions: extensions
          };
          componentConfig.props = componentProps;
          componentConfig.componentClass = _ApplicationMenuWrapper2.default;

          menuComponentConfig[size] = componentConfig;
        });

        menuConfig.component = menuComponentConfig;
        config[menuKey] = menuConfig;
      });

      return config;
    }

    /**
     * Builds and returns the routing configuration object for the ApplicationLayout by injecting the RoutingMenu for top navigation
     * and ApplicationMenuWrapper's as necessary.
     */

  }, {
    key: 'buildRoutingConfig',
    value: function buildRoutingConfig(props) {
      var routingConfig = props.routingConfig;


      var updatedConfig = _extends({}, routingConfig, {
        menu: ApplicationLayout.buildApplicationMenus(props, _extends({}, routingConfig.menu, ApplicationLayout.buildNavigationMenuConfig(props)))
      });

      return updatedConfig;
    }
  }]);

  function ApplicationLayout(props) {
    _classCallCheck(this, ApplicationLayout);

    var _this = _possibleConstructorReturn(this, (ApplicationLayout.__proto__ || Object.getPrototypeOf(ApplicationLayout)).call(this, props));

    _this.state = {
      applicationLayoutRoutingConfig: ApplicationLayout.buildRoutingConfig(_this.props)
    };
    return _this;
  }

  _createClass(ApplicationLayout, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.nameConfig !== nextProps.nameConfig || this.props.utilityConfig !== nextProps.utilityConfig || this.props.routingConfig !== nextProps.routingConfig || this.props.navigationItems !== nextProps.navigationItems || this.props.indexPath !== nextProps.indexPath) {
        this.setState({
          applicationLayoutRoutingConfig: ApplicationLayout.buildRoutingConfig(nextProps)
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          app = _props.app,
          nameConfig = _props.nameConfig,
          utilityConfig = _props.utilityConfig,
          navigationAlignment = _props.navigationAlignment,
          navigationItems = _props.navigationItems,
          indexPath = _props.indexPath,
          extensions = _props.extensions;
      var applicationLayoutRoutingConfig = this.state.applicationLayoutRoutingConfig;


      return _react2.default.createElement(_terraNavigationLayout2.default, {
        app: app,
        config: applicationLayoutRoutingConfig,
        header: _react2.default.createElement(_ApplicationHeader2.default, {
          nameConfig: nameConfig,
          utilityConfig: utilityConfig,
          extensions: extensions,
          applicationLinks: {
            alignment: navigationAlignment,
            links: navigationItems ? navigationItems.map(function (route, index) {
              return {
                id: 'application-layout-tab-' + index,
                path: route.path,
                text: route.text,
                externalLink: route.externalLink
              };
            }) : undefined
          }
        }),
        indexPath: indexPath
      });
    }
  }]);

  return ApplicationLayout;
}(_react2.default.Component);

ApplicationLayout.propTypes = propTypes;
ApplicationLayout.defaultProps = defaultProps;

/**
 * The ApplicationLayout is wrapped with a ModalManager on export to provide modal functionality
 * for utility presentation and content convenience.
 */
exports.default = (0, _terraModalManager.withModalManager)(ApplicationLayout);


var Utils = {
  helpers: _helpers2.default,
  utilityHelpers: _utilityHelpers2.default,
  propTypes: _propTypes4.default
};

exports.RoutingMenu = _RoutingMenu2.default;
exports.Utils = Utils;