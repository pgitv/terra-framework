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

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _terraAppDelegate = require('terra-app-delegate');

var _terraAppDelegate2 = _interopRequireDefault(_terraAppDelegate);

var _terraApplicationMenuLayout = require('terra-application-menu-layout');

var _terraApplicationMenuLayout2 = _interopRequireDefault(_terraApplicationMenuLayout);

var _terraApplicationName = require('terra-application-name');

var _RoutingStackDelegate = require('terra-navigation-layout/lib/RoutingStackDelegate');

var _RoutingStackDelegate2 = _interopRequireDefault(_RoutingStackDelegate);

var _terraApplicationUtility = require('terra-application-utility');

var _terraModalManager = require('terra-modal-manager');

require('terra-base/lib/baseStyles');

var _propTypes3 = require('../utils/propTypes');

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _helpers = require('../utils/helpers');

var _helpers2 = _interopRequireDefault(_helpers);

var _UtilityMenuWrapper = require('./_UtilityMenuWrapper');

var _UtilityMenuWrapper2 = _interopRequireDefault(_UtilityMenuWrapper);

var _ApplicationMenuModule = require('./ApplicationMenu.module.scss');

var _ApplicationMenuModule2 = _interopRequireDefault(_ApplicationMenuModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_ApplicationMenuModule2.default);

var propTypes = {
  /**
   * The AppDelegate instance that will be propagated to the components presented within the NavigationLayout.
   */
  app: _terraAppDelegate2.default.propType,
  /**
   * The element to be placed within the fill flex styled content area.
   * This content is intended to be the user configured content for the menu.
   */
  content: _propTypes2.default.element,
  /**
   * The element to be placed within the fit top area for extensions within the layout.
   */
  extensions: _propTypes2.default.element,
  /**
   * The Object of layout-related APIs provided to the components of the Layout.
   */
  layoutConfig: _propTypes4.default.layoutConfigPropType.isRequired,
  /**
   * Configuration values for the ApplicationName component.
   */
  nameConfig: _propTypes4.default.nameConfigPropType,
  /**
   * Delegate prop that is provided by the NavigationLayout.
   */
  routingStackDelegate: _RoutingStackDelegate2.default.propType.isRequired,
  /**
   * Configuration to be provided to the ApplicationUtility component.
   */
  utilityConfig: _propTypes4.default.utilityConfigPropType
};

var ApplicationMenu = function (_React$Component) {
  _inherits(ApplicationMenu, _React$Component);

  function ApplicationMenu(props) {
    _classCallCheck(this, ApplicationMenu);

    var _this = _possibleConstructorReturn(this, (ApplicationMenu.__proto__ || Object.getPrototypeOf(ApplicationMenu)).call(this, props));

    _this.renderHeader = _this.renderHeader.bind(_this);
    _this.renderExtensions = _this.renderExtensions.bind(_this);
    _this.renderFooter = _this.renderFooter.bind(_this);
    _this.handleUtilityDiscloseRequest = _this.handleUtilityDiscloseRequest.bind(_this);
    _this.handleUtilityOnChange = _this.handleUtilityOnChange.bind(_this);
    return _this;
  }

  _createClass(ApplicationMenu, [{
    key: 'handleUtilityDiscloseRequest',
    value: function handleUtilityDiscloseRequest(utilityMenu) {
      var _props = this.props,
          app = _props.app,
          layoutConfig = _props.layoutConfig;


      if (layoutConfig && layoutConfig.toggleMenu) {
        layoutConfig.toggleMenu();
      }

      if (app && utilityMenu) {
        app.disclose({
          preferredType: _terraModalManager.disclosureType,
          dimensions: { height: '420', width: '320' },
          content: {
            component: _react2.default.createElement(
              _UtilityMenuWrapper2.default,
              null,
              utilityMenu
            ),
            key: 'application-menu-utility-menu'
          }
        });
      }
    }
  }, {
    key: 'handleUtilityOnChange',
    value: function handleUtilityOnChange(event, itemData) {
      var _props2 = this.props,
          utilityConfig = _props2.utilityConfig,
          app = _props2.app;


      utilityConfig.onChange(event, itemData, app && app.disclose);
    }
  }, {
    key: 'renderHeader',
    value: function renderHeader(isCompact) {
      var nameConfig = this.props.nameConfig;


      if (isCompact && nameConfig && (nameConfig.accessory || nameConfig.title)) {
        return _react2.default.createElement(
          'div',
          { className: cx(['menu-header']) },
          _react2.default.createElement(_terraApplicationName.ApplicationMenuName, { accessory: nameConfig.accessory, title: nameConfig.title })
        );
      }

      return null;
    }
  }, {
    key: 'renderExtensions',
    value: function renderExtensions(isCompact) {
      var _props3 = this.props,
          app = _props3.app,
          layoutConfig = _props3.layoutConfig,
          extensions = _props3.extensions;


      if (isCompact && extensions) {
        return _react2.default.cloneElement(extensions, { app: app, layoutConfig: layoutConfig });
      }

      return null;
    }
  }, {
    key: 'renderFooter',
    value: function renderFooter(isCompact) {
      var utilityConfig = this.props.utilityConfig;


      if (isCompact && utilityConfig) {
        return _react2.default.createElement(_terraApplicationUtility.ApplicationMenuUtility, {
          onChange: this.handleUtilityOnChange,
          onDisclose: this.handleUtilityDiscloseRequest,
          title: utilityConfig.title,
          accessory: utilityConfig.accessory,
          menuItems: utilityConfig.menuItems,
          initialSelectedKey: utilityConfig.initialSelectedKey,
          'data-application-menu-utility': true
        });
      }

      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props4 = this.props,
          app = _props4.app,
          content = _props4.content,
          extensions = _props4.extensions,
          layoutConfig = _props4.layoutConfig,
          nameConfig = _props4.nameConfig,
          routingStackDelegate = _props4.routingStackDelegate,
          utilityConfig = _props4.utilityConfig,
          customProps = _objectWithoutProperties(_props4, ['app', 'content', 'extensions', 'layoutConfig', 'nameConfig', 'routingStackDelegate', 'utilityConfig']);

      var menuClassNames = cx(['application-menu', customProps.className]);

      var isCompact = _helpers2.default.isSizeCompact(layoutConfig.size);

      var clonedContent = void 0;
      if (content) {
        clonedContent = _react2.default.cloneElement(content, { app: app, layoutConfig: layoutConfig, routingStackDelegate: routingStackDelegate });
      }

      return _react2.default.createElement(
        'div',
        _extends({}, customProps, { className: menuClassNames }),
        _react2.default.createElement(_terraApplicationMenuLayout2.default, {
          header: this.renderHeader(isCompact),
          extensions: this.renderExtensions(isCompact),
          content: clonedContent,
          footer: this.renderFooter(isCompact)
        })
      );
    }
  }]);

  return ApplicationMenu;
}(_react2.default.Component);

ApplicationMenu.propTypes = propTypes;

exports.default = ApplicationMenu;