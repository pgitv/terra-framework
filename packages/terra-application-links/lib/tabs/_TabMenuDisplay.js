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

var _IconCaretDown = require('terra-icon/lib/icon/IconCaretDown');

var _IconCaretDown2 = _interopRequireDefault(_IconCaretDown);

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
   * Whether or not the menu display should be hidden.
   */
  isHidden: _propTypes2.default.bool,
  /**
   * Whether or not the menu display should be animated with selection.
   */
  isSelected: _propTypes2.default.bool,
  /**
   * Callback func for onKeyDown.
   */
  onKeyDown: _propTypes2.default.func,
  /**
   * The terra-popup to attach to the menu display.
   */
  popup: _propTypes2.default.node,
  /**
   * The display text for the display.
   */
  text: _propTypes2.default.string,
  /**
   * Ref callback for menu display.
   */
  refCallback: _propTypes2.default.func
};

var defaultProps = {
  isSelected: false,
  isHidden: false
};

var TabMenuDisplay = function (_React$Component) {
  _inherits(TabMenuDisplay, _React$Component);

  function TabMenuDisplay(props, context) {
    _classCallCheck(this, TabMenuDisplay);

    var _this = _possibleConstructorReturn(this, (TabMenuDisplay.__proto__ || Object.getPrototypeOf(TabMenuDisplay)).call(this, props, context));

    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.handleKeyUp = _this.handleKeyUp.bind(_this);
    _this.handleOnBlur = _this.handleOnBlur.bind(_this);

    _this.state = { focused: false };
    return _this;
  }

  _createClass(TabMenuDisplay, [{
    key: 'handleOnBlur',
    value: function handleOnBlur() {
      if (!this.props.popup) {
        this.setState({ focused: false });
      }
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
        if (this.props.onKeyDown) {
          this.props.onKeyDown(event);
        }
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
        this.setState({ focused: true });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          isHidden = _props.isHidden,
          isSelected = _props.isSelected,
          onKeyDown = _props.onKeyDown,
          popup = _props.popup,
          refCallback = _props.refCallback,
          text = _props.text,
          customProps = _objectWithoutProperties(_props, ['isHidden', 'isSelected', 'onKeyDown', 'popup', 'refCallback', 'text']);

      var displayClassNames = cx(['tab-menu-display', { 'is-hidden': isHidden }, { 'is-active': this.state.active }, { 'is-focused': this.state.focused }, customProps.className]);
      var attributes = { 'aria-current': isSelected };

      return (
        /* eslint-disable jsx-a11y/no-static-element-interactions */
        _react2.default.createElement(
          'div',
          _extends({}, customProps, attributes, {
            role: 'tab',
            tabIndex: '0',
            className: displayClassNames,
            ref: function ref(node) {
              _this2.contentNode = node;_this2.props.refCallback(node);
            },
            onKeyDown: this.handleKeyDown,
            onKeyUp: this.handleKeyUp,
            onBlur: this.handleOnBlur
          }),
          _react2.default.createElement(
            'div',
            { className: cx(['inner']) },
            _react2.default.createElement(
              'span',
              null,
              text
            ),
            _react2.default.createElement(_IconCaretDown2.default, null)
          ),
          popup
        )
        /* eslint-enable jsx-ally/no-static-element-interactions */

      );
    }
  }]);

  return TabMenuDisplay;
}(_react2.default.Component);

TabMenuDisplay.propTypes = propTypes;
TabMenuDisplay.defaultProps = defaultProps;

exports.default = TabMenuDisplay;