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

require('terra-base/lib/baseStyles');

var _reactRouterDom = require('react-router-dom');

var _TabUtils = require('./_TabUtils');

var _TabUtils2 = _interopRequireDefault(_TabUtils);

var _ApplicationTabsModule = require('./ApplicationTabs.module.scss');

var _ApplicationTabsModule2 = _interopRequireDefault(_ApplicationTabsModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_ApplicationTabsModule2.default);

var propTypes = {
  /**
   * The optional external link. Executes on window.open();
   */
  externalLink: _propTypes2.default.shape({
    path: _propTypes2.default.string.isRequired,
    target: _propTypes2.default.string
  }),
  /**
   * The history as provided by the `withRouter()` HOC.
   */
  history: _propTypes2.default.object.isRequired,
  /**
   * Whether or not the tab is collapsed styled and present in the menu.
   */
  isCollapsed: _propTypes2.default.bool,
  /**
   * The location as provided by the `withRouter()` HOC.
   */
  location: _propTypes2.default.object.isRequired,
  /**
   * The path to push to the route.
   */
  path: _propTypes2.default.string.isRequired,
  /**
   * The display text for the tab.
   */
  text: _propTypes2.default.string.isRequired,
  /**
   * The click callback of the tab.
   */
  onTabClick: _propTypes2.default.func
};

var ApplicationTab = function (_React$Component) {
  _inherits(ApplicationTab, _React$Component);

  function ApplicationTab(props) {
    _classCallCheck(this, ApplicationTab);

    var _this = _possibleConstructorReturn(this, (ApplicationTab.__proto__ || Object.getPrototypeOf(ApplicationTab)).call(this, props));

    _this.state = { active: false, focused: false };
    _this.handleOnClick = _this.handleOnClick.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.handleKeyUp = _this.handleKeyUp.bind(_this);
    _this.handleOnBlur = _this.handleOnBlur.bind(_this);
    _this.isCurrentPath = _this.isCurrentPath.bind(_this);
    return _this;
  }

  _createClass(ApplicationTab, [{
    key: 'handleOnBlur',
    value: function handleOnBlur() {
      this.setState({ focused: false });
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(event) {
      // Add active state to FF browsers
      if (event.nativeEvent.keyCode === _TabUtils2.default.KEYCODES.SPACE) {
        this.setState({ active: true });
      }

      // Add focus styles for keyboard navigation
      if (event.nativeEvent.keyCode === _TabUtils2.default.KEYCODES.SPACE || event.nativeEvent.keyCode === _TabUtils2.default.KEYCODES.ENTER) {
        this.setState({ focused: true });

        event.preventDefault();
        this.handleOnClick(event);
      }
    }
  }, {
    key: 'handleKeyUp',
    value: function handleKeyUp(event) {
      // Remove active state from FF broswers
      if (event.nativeEvent.keyCode === _TabUtils2.default.KEYCODES.SPACE) {
        this.setState({ active: false });
      }

      // Apply focus styles for keyboard navigation
      if (event.nativeEvent.keyCode === _TabUtils2.default.KEYCODES.TAB) {
        event.preventDefault();
        event.stopPropagation();
        this.setState({ focused: true });
      }
    }
  }, {
    key: 'isCurrentPath',
    value: function isCurrentPath() {
      return !!(0, _reactRouterDom.matchPath)(this.props.location.pathname, { path: this.props.path });
    }
  }, {
    key: 'handleOnClick',
    value: function handleOnClick(event) {
      if (this.props.externalLink) {
        window.open(this.props.externalLink.path, this.props.externalLink.target || '_blank');
        if (this.props.onTabClick) {
          this.props.onTabClick(event);
        }
        return;
      }

      if (!this.isCurrentPath()) {
        this.props.history.push(this.props.path);
      } else if (this.props.onTabClick) {
        this.props.onTabClick(event);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          externalLink = _props.externalLink,
          history = _props.history,
          isCollapsed = _props.isCollapsed,
          location = _props.location,
          onTabClick = _props.onTabClick,
          path = _props.path,
          text = _props.text,
          customProps = _objectWithoutProperties(_props, ['externalLink', 'history', 'isCollapsed', 'location', 'onTabClick', 'path', 'text']);

      var isCurrent = this.isCurrentPath();
      var tabClassNames = cx([{ tab: !isCollapsed }, { 'collapsed-tab': isCollapsed }, { 'is-disabled': isCurrent && !isCollapsed }, { 'is-active': this.state.active }, { 'is-focused': this.state.focused }, customProps.className]);
      var tabAttr = { 'aria-current': isCurrent };

      var ComponentClass = 'div';
      if (!isCollapsed) {
        tabAttr.role = 'tab';
        ComponentClass = 'button';
      }

      return _react2.default.createElement(
        ComponentClass,
        _extends({}, customProps, tabAttr, {
          tabIndex: '0',
          className: tabClassNames,
          onClick: this.handleOnClick,
          onKeyDown: this.handleKeyDown,
          onKeyUp: this.handleKeyUp,
          onBlur: this.handleOnBlur
        }),
        _react2.default.createElement(
          'span',
          { className: cx(['tab-inner']) },
          text
        )
      );
    }
  }]);

  return ApplicationTab;
}(_react2.default.Component);

ApplicationTab.propTypes = propTypes;

exports.default = ApplicationTab;