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

var _reactIntl = require('react-intl');

var _terraAppDelegate = require('terra-app-delegate');

var _terraAppDelegate2 = _interopRequireDefault(_terraAppDelegate);

var _terraApplicationHeaderLayout = require('terra-application-header-layout');

var _terraApplicationHeaderLayout2 = _interopRequireDefault(_terraApplicationHeaderLayout);

var _terraApplicationUtility = require('terra-application-utility');

var _terraApplicationName = require('terra-application-name');

var _terraApplicationLinks = require('terra-application-links');

var _IconMenu = require('terra-icon/lib/icon/IconMenu');

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _terraPopup = require('terra-popup');

var _terraPopup2 = _interopRequireDefault(_terraPopup);

var _configurationPropTypes = require('terra-navigation-layout/lib/configurationPropTypes');

require('terra-base/lib/baseStyles');

var _propTypes3 = require('../utils/propTypes');

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _helpers = require('../utils/helpers');

var _helpers2 = _interopRequireDefault(_helpers);

var _ApplicationHeaderModule = require('./ApplicationHeader.module.scss');

var _ApplicationHeaderModule2 = _interopRequireDefault(_ApplicationHeaderModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_ApplicationHeaderModule2.default);

var propTypes = {
  /**
   * The AppDelegate instance that will be propagated to the components presented within the NavigationLayout.
   */
  app: _terraAppDelegate2.default.propType,
  /**
   * Navigation tab alignment. Navigational links that will generate list items that will update the path.
   * These paths are matched with react-router for selection.
   */
  applicationLinks: _terraApplicationLinks.ApplicationLinksPropType,
  /**
   * The element to be placed within the fit start area for extensions within the layout.
   */
  extensions: _propTypes2.default.element,
  /**
   * The Object of layout-related APIs provided to the components of the Layout.
   */
  layoutConfig: _propTypes4.default.layoutConfigPropType,
  /**
   * The set of routes currently identified by the NavigationLayout. This prop is provided by the NavigationLayout.
   */
  navigationLayoutRoutes: _propTypes2.default.arrayOf(_configurationPropTypes.processedRoutesPropType),
  /**
   * The window size currently identified by the NavigationLayout. This prop is provided by the NavigationLayout.
   */
  navigationLayoutSize: _propTypes2.default.string,
  /**
   * Configuration values for the ApplicationName component.
   */
  nameConfig: _propTypes4.default.nameConfigPropType,
  /**
   * Configuration to be provided to the ApplicationUtility component.
   */
  utilityConfig: _propTypes4.default.utilityConfigPropType,
  /**
   * Internationalization object with translation APIs. Provided by `injectIntl`.
   */
  intl: _reactIntl.intlShape
};

var defaultProps = {
  applicationLinks: {}
};

var ApplicationHeader = function (_React$Component) {
  _inherits(ApplicationHeader, _React$Component);

  function ApplicationHeader(props) {
    _classCallCheck(this, ApplicationHeader);

    var _this = _possibleConstructorReturn(this, (ApplicationHeader.__proto__ || Object.getPrototypeOf(ApplicationHeader)).call(this, props));

    _this.handleUtilityDiscloseRequest = _this.handleUtilityDiscloseRequest.bind(_this);
    _this.handleUtilityPopupCloseRequest = _this.handleUtilityPopupCloseRequest.bind(_this);
    _this.handleUtilityOnChange = _this.handleUtilityOnChange.bind(_this);
    _this.getTargetRef = _this.getTargetRef.bind(_this);
    _this.setContentNode = _this.setContentNode.bind(_this);
    _this.renderToggle = _this.renderToggle.bind(_this);
    _this.renderAppName = _this.renderAppName.bind(_this);
    _this.renderExtensions = _this.renderExtensions.bind(_this);
    _this.renderNavigation = _this.renderNavigation.bind(_this);
    _this.renderUtilities = _this.renderUtilities.bind(_this);
    _this.renderUtilitiesPopup = _this.renderUtilitiesPopup.bind(_this);

    _this.state = { utilityComponent: undefined };
    return _this;
  }

  _createClass(ApplicationHeader, [{
    key: 'setContentNode',
    value: function setContentNode(node) {
      this.contentNode = node;
    }
  }, {
    key: 'getTargetRef',
    value: function getTargetRef() {
      if (this.contentNode) {
        return this.contentNode.querySelector('[data-application-header-utility]');
      }
      return undefined;
    }
  }, {
    key: 'handleUtilityDiscloseRequest',
    value: function handleUtilityDiscloseRequest(utility) {
      this.setState({
        utilityComponent: _react2.default.cloneElement(utility, { onRequestClose: this.handleUtilityPopupCloseRequest })
      });
    }
  }, {
    key: 'handleUtilityPopupCloseRequest',
    value: function handleUtilityPopupCloseRequest() {
      if (this.state.utilityComponent) {
        this.setState({ utilityComponent: undefined });
      }
    }
  }, {
    key: 'handleUtilityOnChange',
    value: function handleUtilityOnChange(event, itemData) {
      var _props = this.props,
          utilityConfig = _props.utilityConfig,
          app = _props.app;


      utilityConfig.onChange(event, itemData, app && app.disclose);
    }
  }, {
    key: 'renderToggle',
    value: function renderToggle() {
      var _props2 = this.props,
          layoutConfig = _props2.layoutConfig,
          intl = _props2.intl;


      if (layoutConfig.toggleMenu) {
        return _react2.default.createElement(
          'div',
          { className: cx('toolbar-toggle') },
          _react2.default.createElement(
            'button',
            {
              type: 'button',
              className: cx('toggle-button'),
              'aria-label': intl.formatMessage({ id: 'Terra.applicationLayout.applicationHeader.menuToggleLabel' }),
              onClick: layoutConfig.toggleMenu,
              'data-application-header-toggle': true
            },
            _react2.default.createElement(_IconMenu2.default, null)
          )
        );
      }

      return null;
    }
  }, {
    key: 'renderAppName',
    value: function renderAppName() {
      var nameConfig = this.props.nameConfig;


      if (nameConfig && (nameConfig.accessory || nameConfig.title)) {
        return _react2.default.createElement(_terraApplicationName.ApplicationHeaderName, { accessory: nameConfig.accessory, title: nameConfig.title });
      }

      return null;
    }
  }, {
    key: 'renderNavigation',
    value: function renderNavigation(isCompact) {
      var applicationLinks = this.props.applicationLinks;


      if (!isCompact) {
        if (applicationLinks.links && applicationLinks.links.length) {
          return _react2.default.createElement(_terraApplicationLinks.ApplicationTabs, applicationLinks);
        }

        return null;
      }

      /**
       * When compact, the navigation region of the header renders the application name component instead. At compact
       * sizes, the logo region within the ApplicationHeaderLayout is too small to use, so we instead render within
       * the navigation region which renders with a larger width.
       */
      return this.renderAppName();
    }
  }, {
    key: 'renderExtensions',
    value: function renderExtensions(isCompact) {
      var _props3 = this.props,
          app = _props3.app,
          layoutConfig = _props3.layoutConfig,
          extensions = _props3.extensions;


      if (!isCompact && extensions) {
        return _react2.default.cloneElement(extensions, { app: app, layoutConfig: layoutConfig });
      }

      return null;
    }
  }, {
    key: 'renderUtilities',
    value: function renderUtilities(isCompact) {
      var utilityConfig = this.props.utilityConfig;


      if (!isCompact && utilityConfig) {
        return _react2.default.createElement(_terraApplicationUtility.ApplicationHeaderUtility, {
          onChange: this.handleUtilityOnChange,
          onDisclose: this.handleUtilityDiscloseRequest,
          title: utilityConfig.title,
          accessory: utilityConfig.accessory,
          menuItems: utilityConfig.menuItems,
          initialSelectedKey: utilityConfig.initialSelectedKey,
          'data-application-header-utility': true
        });
      }

      return null;
    }
  }, {
    key: 'renderUtilitiesPopup',
    value: function renderUtilitiesPopup() {
      var utilityComponent = this.state.utilityComponent;


      if (utilityComponent) {
        return _react2.default.createElement(
          _terraPopup2.default,
          {
            attachmentBehavior: 'push',
            contentAttachment: 'top center',
            contentHeight: 'auto',
            contentWidth: '240',
            isArrowDisplayed: true,
            isHeaderDisabled: true,
            isOpen: true,
            onRequestClose: this.handleUtilityPopupCloseRequest,
            targetRef: this.getTargetRef
          },
          utilityComponent
        );
      }

      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props4 = this.props,
          app = _props4.app,
          applicationLinks = _props4.applicationLinks,
          extensions = _props4.extensions,
          layoutConfig = _props4.layoutConfig,
          nameConfig = _props4.nameConfig,
          utilityConfig = _props4.utilityConfig,
          navigationLayoutRoutes = _props4.navigationLayoutRoutes,
          navigationLayoutSize = _props4.navigationLayoutSize,
          intl = _props4.intl,
          customProps = _objectWithoutProperties(_props4, ['app', 'applicationLinks', 'extensions', 'layoutConfig', 'nameConfig', 'utilityConfig', 'navigationLayoutRoutes', 'navigationLayoutSize', 'intl']);

      var headerClassNames = cx(['application-header', customProps.className]);

      var isCompact = _helpers2.default.isSizeCompact(layoutConfig.size);

      return _react2.default.createElement(
        'div',
        _extends({}, customProps, { className: headerClassNames, ref: this.setContentNode }),
        _react2.default.createElement(_terraApplicationHeaderLayout2.default, {
          toggle: this.renderToggle(),
          logo: !isCompact ? this.renderAppName() : null,
          navigation: this.renderNavigation(isCompact),
          extensions: this.renderExtensions(isCompact),
          utilities: this.renderUtilities(isCompact)
        }),
        this.renderUtilitiesPopup()
      );
    }
  }]);

  return ApplicationHeader;
}(_react2.default.Component);

ApplicationHeader.propTypes = propTypes;
ApplicationHeader.defaultProps = defaultProps;

exports.default = (0, _reactIntl.injectIntl)(ApplicationHeader);