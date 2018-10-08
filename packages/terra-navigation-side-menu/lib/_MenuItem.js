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

var _terraList = require('terra-list');

var _terraList2 = _interopRequireDefault(_terraList);

var _IconChevronRight = require('terra-icon/lib/icon/IconChevronRight');

var _IconChevronRight2 = _interopRequireDefault(_IconChevronRight);

var _MenuItemModule = require('./MenuItem.module.scss');

var _MenuItemModule2 = _interopRequireDefault(_MenuItemModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_MenuItemModule2.default);

var KEYCODES = {
  ENTER: 13,
  SPACE: 32,
  TAB: 9
};

var propTypes = {
  /**
   * Whether or not the menu item should display a disclosure idicator.
   * */
  hasChevron: _propTypes2.default.bool,
  /**
   * Whether or not the menu item is selection.
   * */
  isSelected: _propTypes2.default.bool,
  /**
   * Callback function triggered when key is pressed.
   */
  onKeyDown: _propTypes2.default.func,
  /**
   * Callback function triggered when key is released.
   */
  onKeyUp: _propTypes2.default.func,
  /**
   * Text display for the menu item.
   * */
  text: _propTypes2.default.string
};

var MenuItem = function (_React$Component) {
  _inherits(MenuItem, _React$Component);

  function MenuItem(props) {
    _classCallCheck(this, MenuItem);

    var _this = _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call(this, props));

    _this.state = { active: false, focused: false };
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.handleKeyUp = _this.handleKeyUp.bind(_this);
    _this.handleOnBlur = _this.handleOnBlur.bind(_this);
    return _this;
  }

  _createClass(MenuItem, [{
    key: 'handleOnBlur',
    value: function handleOnBlur() {
      this.setState({ focused: false });
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(event) {
      // Add active state to FF browsers
      if (event.nativeEvent.keyCode === KEYCODES.SPACE) {
        this.setState({ active: true });
      }

      // Add focus styles for keyboard navigation
      if (event.nativeEvent.keyCode === KEYCODES.SPACE || event.nativeEvent.keyCode === KEYCODES.ENTER) {
        this.setState({ focused: true });
      }

      if (this.props.onKeyDown) {
        this.props.onKeyDown(event);
      }
    }
  }, {
    key: 'handleKeyUp',
    value: function handleKeyUp(event) {
      // Remove active state from FF broswers
      if (event.nativeEvent.keyCode === KEYCODES.SPACE) {
        this.setState({ active: false });
      }

      // Apply focus styles for keyboard navigation
      if (event.nativeEvent.keyCode === KEYCODES.TAB) {
        this.setState({ focused: true });
      }

      if (this.props.onKeyUp) {
        this.props.onKeyUp(event);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          hasChevron = _props.hasChevron,
          isSelected = _props.isSelected,
          text = _props.text,
          customProps = _objectWithoutProperties(_props, ['hasChevron', 'isSelected', 'text']);

      var itemClassNames = cx(['menu-item', { 'is-selected': isSelected }, { 'is-active': this.state.active }, { 'is-focused': this.state.focused }, customProps.className]);

      return _react2.default.createElement(_terraList2.default.Item, {
        className: cx('list-item'),
        content:
        /* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/no-noninteractive-tabindex */
        _react2.default.createElement(
          'div',
          _extends({}, customProps, {
            tabIndex: '0',
            className: itemClassNames,
            onKeyDown: this.handleKeyDown,
            onKeyUp: this.handleKeyUp,
            onBlur: this.handleOnBlur
          }),
          _react2.default.createElement(
            'div',
            { className: cx('title') },
            text
          ),
          hasChevron && _react2.default.createElement(
            'span',
            { className: cx('chevron') },
            _react2.default.createElement(_IconChevronRight2.default, null)
          )
        )
        /* eslint-enable jsx-ally/no-static-element-interactions */

      });
    }
  }]);

  return MenuItem;
}(_react2.default.Component);

MenuItem.propTypes = propTypes;

exports.default = MenuItem;