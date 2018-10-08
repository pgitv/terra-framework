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

require('terra-base/lib/baseStyles');

var _IconChevronDown = require('terra-icon/lib/icon/IconChevronDown');

var _IconChevronDown2 = _interopRequireDefault(_IconChevronDown);

var _IconChevronRight = require('terra-icon/lib/icon/IconChevronRight');

var _IconChevronRight2 = _interopRequireDefault(_IconChevronRight);

var _UtilityMenu = require('./_UtilityMenu');

var _UtilityMenu2 = _interopRequireDefault(_UtilityMenu);

var _Utils = require('../Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var _UtilityButtonModule = require('./_UtilityButton.module.scss');

var _UtilityButtonModule2 = _interopRequireDefault(_UtilityButtonModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_UtilityButtonModule2.default);

var propTypes = {
  /**
   * The array containing the menu items to be rendered within the menu.
   */
  menuItems: _propTypes2.default.arrayOf(_Utils2.default.itemShape).isRequired,
  /**
   * The function to trigger when a menu item is selected.
   * Returns (event, { key: String, metaData: Object})
   */
  onChange: _propTypes2.default.func.isRequired,
  /**
   * The function that discloses the menu.
   */
  onDisclose: _propTypes2.default.func.isRequired,
  /**
   * The intl object to be injected for translations. Provided by the injectIntl function.
   */
  intl: _reactIntl.intlShape.isRequired,
  /**
   * The key of the top level menu page.
   */
  initialSelectedKey: _propTypes2.default.string.isRequired,
  /**
   * The text associated with utilities.
   */
  title: _propTypes2.default.string,
  /**
   * The image associated with utilities.
   */
  accessory: _propTypes2.default.element,
  /**
   * Sets the Utility variant.
   */
  variant: _propTypes2.default.oneOf([_Utils2.default.VARIANTS.HEADER, _Utils2.default.VARIANTS.MENU]).isRequired
};

var defaultProps = {
  title: ''
};

var ApplicationHeaderUtility = function (_React$Component) {
  _inherits(ApplicationHeaderUtility, _React$Component);

  function ApplicationHeaderUtility(props) {
    _classCallCheck(this, ApplicationHeaderUtility);

    var _this = _possibleConstructorReturn(this, (ApplicationHeaderUtility.__proto__ || Object.getPrototypeOf(ApplicationHeaderUtility)).call(this, props));

    _this.handleOnClick = _this.handleOnClick.bind(_this);
    _this.createContent = _this.createContent.bind(_this);
    return _this;
  }

  _createClass(ApplicationHeaderUtility, [{
    key: 'handleOnClick',
    value: function handleOnClick(event) {
      if (this.props.onDisclose) {
        var content = this.createContent();
        this.props.onDisclose(content);
      }
      if (this.onClick) {
        this.onClick(event);
      }
    }
  }, {
    key: 'createContent',
    value: function createContent() {
      return _react2.default.createElement(_UtilityMenu2.default, {
        initialSelectedKey: this.props.initialSelectedKey,
        menuItems: this.props.menuItems,
        onChange: this.props.onChange,
        variant: this.props.variant
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          menuItems = _props.menuItems,
          onChange = _props.onChange,
          onDisclose = _props.onDisclose,
          initialSelectedKey = _props.initialSelectedKey,
          intl = _props.intl,
          title = _props.title,
          accessory = _props.accessory,
          variant = _props.variant,
          customProps = _objectWithoutProperties(_props, ['menuItems', 'onChange', 'onDisclose', 'initialSelectedKey', 'intl', 'title', 'accessory', 'variant']);

      this.onClick = customProps.onClick;
      delete customProps.onClick;

      var utilityClassNames = cx([{ 'header-utility-button': variant === _Utils2.default.VARIANTS.HEADER }, { 'menu-utility-button': variant === _Utils2.default.VARIANTS.MENU }, customProps.className]);
      var iconClassNames = cx('icon');

      var cloneAccessory = null;
      if (accessory) {
        cloneAccessory = _react2.default.cloneElement(accessory, { className: cx('accessory') });
      }

      var cloneTitle = null;
      if (title) {
        cloneTitle = _react2.default.createElement(
          'span',
          { className: cx('title') },
          title
        );
      }

      var contentContainer = _react2.default.createElement(
        'span',
        { className: cx('content-container') },
        cloneAccessory,
        cloneTitle
      );

      var buttonText = intl.formatMessage({ id: 'Terra.application.utility.button' });
      return _react2.default.createElement(
        'button',
        _extends({
          type: 'button'
        }, customProps, {
          className: utilityClassNames,
          onClick: function onClick(event) {
            _this2.handleOnClick(event);
          },
          'aria-label': buttonText
        }),
        variant === _Utils2.default.VARIANTS.MENU ? contentContainer : [cloneAccessory, cloneTitle],
        variant === _Utils2.default.VARIANTS.MENU ? _react2.default.createElement(_IconChevronRight2.default, { className: iconClassNames }) : _react2.default.createElement(_IconChevronDown2.default, { className: iconClassNames })
      );
    }
  }]);

  return ApplicationHeaderUtility;
}(_react2.default.Component);

ApplicationHeaderUtility.propTypes = propTypes;
ApplicationHeaderUtility.defaultProps = defaultProps;

exports.default = (0, _reactIntl.injectIntl)(ApplicationHeaderUtility);