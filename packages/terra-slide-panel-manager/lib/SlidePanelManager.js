'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.disclosureType = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _disclosureSizeToPane;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _terraAppDelegate = require('terra-app-delegate');

var _terraAppDelegate2 = _interopRequireDefault(_terraAppDelegate);

var _terraDisclosureManager = require('terra-disclosure-manager');

var _terraDisclosureManager2 = _interopRequireDefault(_terraDisclosureManager);

var _terraSlideGroup = require('terra-slide-group');

var _terraSlideGroup2 = _interopRequireDefault(_terraSlideGroup);

var _terraSlidePanel = require('terra-slide-panel');

var _terraSlidePanel2 = _interopRequireDefault(_terraSlidePanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var disclosureType = 'panel';
exports.disclosureType = disclosureType;


var propTypes = {
  /**
   * An AppDelegate instance that will be used in fallback scenarios by the SlidePanelManager. If not provided, the SlidePanelManager
   * will handle any and all disclosure requests it receives.
   */
  app: _terraAppDelegate2.default.propType,
  /**
   * The components to display in the body of the SlidePanel. These components will be provided with an AppDelegate prop (as `app`) that
   * will allow them to disclose content.
   */
  children: _propTypes2.default.node,
  /**
   * The desired panel behavior. Either 'squish' or 'overlay'.
   */
  panelBehavior: _propTypes2.default.oneOf(['overlay', 'squish'])
};

var defaultProps = {
  panelBehavior: 'overlay'
};

/**
 * The SlidePanel component does not support the full range of DisclosureManager sizes in its API. The potential sizes are mapped to the
 * SlidePanel's supported sizes.
 */
var disclosureSizeToPanelSize = (_disclosureSizeToPane = {}, _defineProperty(_disclosureSizeToPane, _terraDisclosureManager.availableDisclosureSizes.TINY, 'small'), _defineProperty(_disclosureSizeToPane, _terraDisclosureManager.availableDisclosureSizes.SMALL, 'small'), _defineProperty(_disclosureSizeToPane, _terraDisclosureManager.availableDisclosureSizes.MEDIUM, 'large'), _defineProperty(_disclosureSizeToPane, _terraDisclosureManager.availableDisclosureSizes.LARGE, 'large'), _defineProperty(_disclosureSizeToPane, _terraDisclosureManager.availableDisclosureSizes.HUGE, 'large'), _disclosureSizeToPane);

var disclosureDimensionsToPanelSize = function disclosureDimensionsToPanelSize(dimensions) {
  if (dimensions.width > 480 || dimensions.height > 600) {
    return 'large';
  }
  return 'small';
};

var SlidePanelManager = function (_React$Component) {
  _inherits(SlidePanelManager, _React$Component);

  function SlidePanelManager(props) {
    _classCallCheck(this, SlidePanelManager);

    var _this = _possibleConstructorReturn(this, (SlidePanelManager.__proto__ || Object.getPrototypeOf(SlidePanelManager)).call(this, props));

    _this.renderSlidePanel = _this.renderSlidePanel.bind(_this);
    return _this;
  }

  _createClass(SlidePanelManager, [{
    key: 'renderSlidePanel',
    value: function renderSlidePanel(manager) {
      var _props = this.props,
          app = _props.app,
          children = _props.children,
          panelBehavior = _props.panelBehavior,
          customProps = _objectWithoutProperties(_props, ['app', 'children', 'panelBehavior']);

      var isFullscreen = void 0;
      if (manager.disclosure.size === _terraDisclosureManager.availableDisclosureSizes.FULLSCREEN || manager.disclosure.isMaximized) {
        isFullscreen = true;
      }

      var panelSize = void 0;
      if (manager.disclosure.dimensions) {
        panelSize = disclosureDimensionsToPanelSize(manager.disclosure.dimensions);
      } else {
        panelSize = disclosureSizeToPanelSize[manager.disclosure.size];
      }

      return _react2.default.createElement(_terraSlidePanel2.default, _extends({}, customProps, {
        fill: true,
        panelBehavior: panelBehavior,
        isFullscreen: isFullscreen,
        panelSize: panelSize,
        isOpen: manager.disclosure.isOpen,
        panelContent: _react2.default.createElement(_terraSlideGroup2.default, { items: manager.disclosure.components, isAnimated: true }),
        mainContent: manager.children.components
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          app = _props2.app,
          children = _props2.children;


      return _react2.default.createElement(
        _terraDisclosureManager2.default,
        {
          app: app,
          supportedDisclosureTypes: [disclosureType],
          render: this.renderSlidePanel
        },
        children
      );
    }
  }]);

  return SlidePanelManager;
}(_react2.default.Component);

SlidePanelManager.propTypes = propTypes;
SlidePanelManager.defaultProps = defaultProps;

exports.default = SlidePanelManager;