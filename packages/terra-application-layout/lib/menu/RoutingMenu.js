'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

var _terraNavigationSideMenu = require('terra-navigation-side-menu');

var _terraNavigationSideMenu2 = _interopRequireDefault(_terraNavigationSideMenu);

var _RoutingStackDelegate = require('terra-navigation-layout/lib/RoutingStackDelegate');

var _RoutingStackDelegate2 = _interopRequireDefault(_RoutingStackDelegate);

var _propTypes3 = require('../utils/propTypes');

var _propTypes4 = _interopRequireDefault(_propTypes3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */


var propTypes = {
  /**
   * The title to render within the RoutingMenu's header.
   */
  title: _propTypes2.default.string,
  /**
   * The array of routing shapes to be rendered as menu items within the RoutingMenu.
   */
  menuItems: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    text: _propTypes2.default.string.isRequired,
    path: _propTypes2.default.string.isRequired,
    hasSubMenu: _propTypes2.default.bool
  })),
  /**
   * The Object of layout-related APIs provided to the components of the Layout.
   */
  layoutConfig: _propTypes4.default.layoutConfigPropType.isRequired,
  /**
   * The Object containing RoutingStack APIs provided to children of the RoutingStack. This is
   * used to render a Back button upon presence of a `showParent` implementation.
   */
  routingStackDelegate: _RoutingStackDelegate2.default.propType.isRequired,
  /**
   * The location from the router context. This prop is provided by the `withRouter` HOC-generator.
   */
  location: _propTypes2.default.shape({
    pathname: _propTypes2.default.string
  }).isRequired
};

var routingMenuRootMenuKey = 'routingMenuRootMenuKey';

var RoutingMenu = function (_React$Component) {
  _inherits(RoutingMenu, _React$Component);

  _createClass(RoutingMenu, null, [{
    key: 'buildSideMenuItems',

    /**
     * This function converts the given menuItems from the RoutingMenu API to the NavigationSideMenu API.
     * The path is used to uniquely identify the item within the NavigationSideMenu. The path and hasSubMenu
     * values are set as metaData on the item so that `handleMenuChange` will have easy access to those values.
     * @param {Array} menuItems is the Array of menuItem objects as specified by the RoutingMenu's proptype definition.
     */
    value: function buildSideMenuItems(menuItems) {
      return menuItems.map(function (item) {
        return {
          key: item.path,
          text: item.text,
          hasSubMenu: !!item.hasSubMenu,
          metaData: {
            path: item.path,
            externalLink: item.externalLink,
            hasSubMenu: !!item.hasSubMenu
          }
        };
      });
    }
  }]);

  function RoutingMenu(props) {
    _classCallCheck(this, RoutingMenu);

    var _this = _possibleConstructorReturn(this, (RoutingMenu.__proto__ || Object.getPrototypeOf(RoutingMenu)).call(this, props));

    _this.handleMenuChange = _this.handleMenuChange.bind(_this);

    /**
     * The menuItems are checked against the current location at initialization to ensure the
     * the desired selection styles are present.
     */
    _this.state = {
      selectedChildKey: RoutingMenu.getSelectedChildKey(props.location.pathname, props.menuItems)
    };
    return _this;
  }

  _createClass(RoutingMenu, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      /**
       * The selectedChildKey is re-evaluated when new props are received to keep the internal state consistent.
       */
      this.setState({
        selectedChildKey: RoutingMenu.getSelectedChildKey(nextProps.location.pathname, nextProps.menuItems)
      });
    }

    /**
     * This function compares the given path against the paths of the given menuItems. If a match
     * (partial or otherwise) is detected, that path is returned. If no match is detected, `undefined` is returned.
     * @param {String} path is the path to be matched against
     * @param {Array} menuItems is the Array of menuItem objects as specified by the RoutingMenu's proptype definition.
     */

  }, {
    key: 'handleMenuChange',
    value: function handleMenuChange(event, data) {
      var _props = this.props,
          routingStackDelegate = _props.routingStackDelegate,
          layoutConfig = _props.layoutConfig;


      var routeFunc = void 0;
      if (data.metaData.externalLink) {
        routeFunc = function routeFunc() {
          return window.open(data.metaData.externalLink.path, data.metaData.externalLink.target || '_blank');
        };
      } else {
        this.setState({
          selectedChildKey: data.selectedChildKey
        });
        routeFunc = function routeFunc() {
          return routingStackDelegate.show({ path: data.metaData.path });
        };
      }

      /**
       * If the menuItem does not indicate the presence of a subsequent menu, it is assumed that a terminal
       * menu item has been selected. If the `toggleMenu` function is defined on the layoutConfig, then it is called
       * to close the menu before navigating.
       */
      if (!data.metaData.hasSubMenu && layoutConfig.toggleMenu) {
        return layoutConfig.toggleMenu().then(function () {
          routeFunc();
        });
      }

      /**
       * Otherwise, the layout is left alone and navigation occurs immediately.
       */
      return Promise.resolve().then(function () {
        return routeFunc();
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          title = _props2.title,
          routingStackDelegate = _props2.routingStackDelegate,
          menuItems = _props2.menuItems;
      var selectedChildKey = this.state.selectedChildKey;

      /**
       * The items using the simplified RoutingMenu menuItem API must be converted into the NavigationSideMenu's API.
       */

      var processedMenuItems = RoutingMenu.buildSideMenuItems(menuItems);

      /**
       * The RoutingMenu then constructs a menuItem that will act as the main page and render the menuItems as child items.
       * If there is no title and no `showParent` implementation present, the isRootMenu flag is set on the item to hide
       * the header altogether.
       */
      processedMenuItems.push({
        key: routingMenuRootMenuKey,
        text: title || '',
        childKeys: processedMenuItems.map(function (item) {
          return item.key;
        }),
        isRootMenu: !routingStackDelegate.showParent && !title
      });

      return _react2.default.createElement(_terraNavigationSideMenu2.default, {
        menuItems: processedMenuItems,
        onChange: this.handleMenuChange,
        routingStackBack: routingStackDelegate.showParent,
        selectedMenuKey: routingMenuRootMenuKey,
        selectedChildKey: selectedChildKey,
        'data-routing-menu': true
      });
    }
  }], [{
    key: 'getSelectedChildKey',
    value: function getSelectedChildKey(path, menuItems) {
      for (var i = 0, itemCount = menuItems.length; i < itemCount; i += 1) {
        var navItem = menuItems[i];
        if (navItem.path && (0, _reactRouterDom.matchPath)(path, { path: navItem.path })) {
          return navItem.path;
        }
      }
      return undefined;
    }
  }]);

  return RoutingMenu;
}(_react2.default.Component);

RoutingMenu.propTypes = propTypes;

exports.default = (0, _reactRouterDom.withRouter)(RoutingMenu);