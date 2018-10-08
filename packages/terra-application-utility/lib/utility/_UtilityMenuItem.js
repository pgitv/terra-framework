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

var _terraArrange = require('terra-arrange');

var _terraArrange2 = _interopRequireDefault(_terraArrange);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _IconCheckmark = require('terra-icon/lib/icon/IconCheckmark');

var _IconCheckmark2 = _interopRequireDefault(_IconCheckmark);

var _IconChevronRight = require('terra-icon/lib/icon/IconChevronRight');

var _IconChevronRight2 = _interopRequireDefault(_IconChevronRight);

var _Utils = require('../Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var _UtilityMenuItemModule = require('./_UtilityMenuItem.module.scss');

var _UtilityMenuItemModule2 = _interopRequireDefault(_UtilityMenuItemModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_UtilityMenuItemModule2.default);

var propTypes = {
  /**
   * The unique key associated with this menu item.
   */
  itemKey: _propTypes2.default.string.isRequired,
  /**
   * The text to be displayed next to the menu item.
   */
  title: _propTypes2.default.string,
  /**
   * The component associated with this menu item.
   */
  content: _propTypes2.default.element,
  /**
   * The location of this menu item.
   */
  contentLocation: _propTypes2.default.oneOf([_Utils2.default.LOCATIONS.BODY, _Utils2.default.LOCATIONS.FOOTER]),
  /**
   * Whether this item should be inset to the left. Based on if any other item has isSelected set to true.
   */
  leftInset: _propTypes2.default.bool,
  /**
   * Indicates if the item has focus. This is used internally to control focus and does not set initial focus.
   */
  isActive: _propTypes2.default.bool,
  /**
   * Whether this item is selected.
   */
  isSelected: _propTypes2.default.bool,
  /**
   * Whether this item can be toggled.
   */
  isSelectable: _propTypes2.default.bool,
  /**
   * Whether or not the menu item should display a disclosure indicator.
   */
  hasChevron: _propTypes2.default.bool,
  /**
   * Function to trigger when a key is pressed.
   */
  onKeyDown: _propTypes2.default.func,
  /**
   * Function to trigger when this item is selected.
   */
  onChange: _propTypes2.default.func.isRequired,
  /**
   * Whether this item should be inset to the right. Based on if any other item has a chevron.
   */
  rightInset: _propTypes2.default.bool,
  /**
   * Sets the Utility variant.
   */
  variant: _propTypes2.default.oneOf([_Utils2.default.VARIANTS.HEADER, _Utils2.default.VARIANTS.MENU]).isRequired
};

var defaultProps = {
  title: ''
};

var UtilityMenuItem = function (_React$Component) {
  _inherits(UtilityMenuItem, _React$Component);

  function UtilityMenuItem(props) {
    _classCallCheck(this, UtilityMenuItem);

    var _this = _possibleConstructorReturn(this, (UtilityMenuItem.__proto__ || Object.getPrototypeOf(UtilityMenuItem)).call(this, props));

    _this.wrapOnKeyDown = _this.wrapOnKeyDown.bind(_this);
    _this.handleSelection = _this.handleSelection.bind(_this);
    _this.setItemNode = _this.setItemNode.bind(_this);
    return _this;
  }

  _createClass(UtilityMenuItem, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.isActive && this.itemNode) {
        this.itemNode.focus();
      }
    }
  }, {
    key: 'setItemNode',
    value: function setItemNode(node) {
      if (node) {
        this.itemNode = node;
      }
    }
  }, {
    key: 'wrapOnKeyDown',
    value: function wrapOnKeyDown(key, onKeyDown) {
      var _this2 = this;

      return function (event) {
        if (event.nativeEvent.keyCode === _Utils2.default.KEY_CODES.ENTER || event.nativeEvent.keyCode === _Utils2.default.KEY_CODES.SPACE || event.nativeEvent.keyCode === _Utils2.default.KEY_CODES.RIGHT_ARROW) {
          _this2.handleSelection(event, key);
        }
        if (onKeyDown) {
          onKeyDown(event);
        }
      };
    }
  }, {
    key: 'handleSelection',
    value: function handleSelection(event, key) {
      event.preventDefault();
      this.props.onChange(event, key);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          itemKey = _props.itemKey,
          title = _props.title,
          content = _props.content,
          contentLocation = _props.contentLocation,
          isActive = _props.isActive,
          isSelected = _props.isSelected,
          isSelectable = _props.isSelectable,
          hasChevron = _props.hasChevron,
          leftInset = _props.leftInset,
          onChange = _props.onChange,
          onKeyDown = _props.onKeyDown,
          rightInset = _props.rightInset,
          variant = _props.variant,
          customProps = _objectWithoutProperties(_props, ['itemKey', 'title', 'content', 'contentLocation', 'isActive', 'isSelected', 'isSelectable', 'hasChevron', 'leftInset', 'onChange', 'onKeyDown', 'rightInset', 'variant']);

      var bodyItemClassNames = cx([{ 'header-utility-body-item': variant === _Utils2.default.VARIANTS.HEADER }, { 'menu-utility-body-item': variant === _Utils2.default.VARIANTS.MENU }]);

      var footerItemClassNames = cx([{ 'header-utility-footer-item': variant === _Utils2.default.VARIANTS.HEADER }, { 'menu-utility-footer-item': variant === _Utils2.default.VARIANTS.MENU }]);

      var checkmarkClassNames = cx(['checkmark', { selected: isSelected }]);

      var chevronClassNames = cx(['chevron', { 'has-chevron': hasChevron }]);

      var arrangeClassNames = cx([{ 'default-left-inset': !leftInset }, { 'default-right-inset': !rightInset }]);

      /* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/no-noninteractive-element-to-interactive-role */
      var renderBodyItem = function renderBodyItem(fill, wrapOnKeyDown, handleSelection) {
        return _react2.default.createElement(
          'li',
          _extends({}, customProps, {
            tabIndex: '0',
            key: itemKey,
            onClick: function onClick(event) {
              return handleSelection(event, itemKey);
            },
            onKeyDown: wrapOnKeyDown(itemKey, onKeyDown),
            role: 'button',
            className: bodyItemClassNames,
            'aria-label': title,
            ref: _this3.setItemNode
          }),
          _react2.default.createElement(_terraArrange2.default, {
            fitStart: leftInset ? _react2.default.createElement(_IconCheckmark2.default, { className: checkmarkClassNames }) : null,
            fill: fill,
            fillAttributes: { className: cx('menu-item-fill') },
            fitEnd: rightInset ? _react2.default.createElement(_IconChevronRight2.default, { className: chevronClassNames }) : null,
            align: 'center',
            className: arrangeClassNames
          })
        );
      };
      /* eslint-enable jsx-a11y/no-static-element-interactions */

      var renderFooterButton = function renderFooterButton(wrapOnKeyDown, handleSelection) {
        return _react2.default.createElement(_terraButton2.default, _extends({}, customProps, {
          onClick: function onClick(event) {
            return handleSelection(event, itemKey);
          },
          onKeyDown: wrapOnKeyDown(itemKey, onKeyDown),
          variant: _terraButton2.default.Opts.Variants.NEUTRAL,
          className: footerItemClassNames,
          text: title
        }));
      };

      // Footer items are always buttons. Body items are list items.
      // If content exists and is a body item, render content. Else, render the title text.
      var item = null;
      var wrapOnKeyDown = this.wrapOnKeyDown,
          handleSelection = this.handleSelection;

      if (contentLocation === _Utils2.default.LOCATIONS.FOOTER) {
        item = renderFooterButton(wrapOnKeyDown, handleSelection);
      } else if (content) {
        item = renderBodyItem(content, wrapOnKeyDown, handleSelection);
      } else {
        item = renderBodyItem(_react2.default.createElement(
          'div',
          null,
          title
        ), wrapOnKeyDown, handleSelection);
      }
      return item;
    }
  }]);

  return UtilityMenuItem;
}(_react2.default.Component);

UtilityMenuItem.propTypes = propTypes;
UtilityMenuItem.defaultProps = defaultProps;

exports.default = UtilityMenuItem;