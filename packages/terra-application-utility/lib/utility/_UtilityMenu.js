'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _reactIntl = require('react-intl');

require('terra-base/lib/baseStyles');

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _terraContentContainer = require('terra-content-container');

var _terraContentContainer2 = _interopRequireDefault(_terraContentContainer);

var _IconClose = require('terra-icon/lib/icon/IconClose');

var _IconClose2 = _interopRequireDefault(_IconClose);

var _IconLeft = require('terra-icon/lib/icon/IconLeft');

var _IconLeft2 = _interopRequireDefault(_IconLeft);

var _UtilityMenuDivider = require('./_UtilityMenuDivider');

var _UtilityMenuDivider2 = _interopRequireDefault(_UtilityMenuDivider);

var _Utils = require('../Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var _UtilityMenuItem = require('./_UtilityMenuItem');

var _UtilityMenuItem2 = _interopRequireDefault(_UtilityMenuItem);

var _UtilityMenuModule = require('./_UtilityMenu.module.scss');

var _UtilityMenuModule2 = _interopRequireDefault(_UtilityMenuModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_UtilityMenuModule2.default);

var propTypes = {
  /**
   * The initial selected key. Used as the top level menu page.
   */
  initialSelectedKey: _propTypes2.default.string.isRequired,
  /**
   * The intl object to be injected for translations. Provided by the injectIntl function.
   */
  intl: _reactIntl.intlShape.isRequired,
  /**
   * Indicates if the height is bound to it's parent container.
   */
  isHeightBounded: _propTypes2.default.bool,
  /**
   * The array of the menu items configs to be rendered.
   */
  menuItems: _propTypes2.default.arrayOf(_Utils2.default.itemShape).isRequired,
  /**
   * The function to trigger when a menu item is selected.
   * Returns (event, { key: String, metaData: Object})
   */
  onChange: _propTypes2.default.func.isRequired,
  /**
   * The function that closes the menu.
   * This will be provided by the terra-application-header or terra-application-menu.
   */
  onRequestClose: _propTypes2.default.func,
  /**
   * Sets the Utility variant. One of Utils.VARIANTS.HEADER, Utils.VARIANTS.MENU.
   */
  variant: _propTypes2.default.oneOf([_Utils2.default.VARIANTS.HEADER, _Utils2.default.VARIANTS.MENU])
};

var processMenuItems = function processMenuItems(items) {
  var map = new Map();
  items.forEach(function (item) {
    map.set(item.key, _extends({ itemKey: item.key }, item));
  });
  return map;
};

var hasChevron = function hasChevron(item) {
  return item.childKeys && item.childKeys.length > 0;
};

var UtilityMenu = function (_React$Component) {
  _inherits(UtilityMenu, _React$Component);

  function UtilityMenu(props) {
    _classCallCheck(this, UtilityMenu);

    var _this = _possibleConstructorReturn(this, (UtilityMenu.__proto__ || Object.getPrototypeOf(UtilityMenu)).call(this, props));

    _this.getItem = _this.getItem.bind(_this);
    _this.buildItem = _this.buildItem.bind(_this);
    _this.buildListContent = _this.buildListContent.bind(_this);
    _this.buildFooterContent = _this.buildFooterContent.bind(_this);
    _this.childrenHasCheckmark = _this.childrenHasCheckmark.bind(_this);
    _this.childrenHasChevron = _this.childrenHasChevron.bind(_this);
    _this.setMenuNode = _this.setMenuNode.bind(_this);
    _this.handleOnChange = _this.handleOnChange.bind(_this);
    _this.handleOnKeyDown = _this.handleOnKeyDown.bind(_this);
    _this.pop = _this.pop.bind(_this);
    _this.push = _this.push.bind(_this);
    _this.state = {
      map: processMenuItems(props.menuItems),
      currentKey: props.initialSelectedKey,
      focusIndex: -1,
      previousKeyStack: []
    };
    return _this;
  }

  _createClass(UtilityMenu, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.initialSelectedKey !== this.props.initialSelectedKey) {
        this.setState({
          currentKey: nextProps.initialSelectedKey
        });
      }

      if (nextProps.menuItems !== this.props.menuItems) {
        this.setState({
          map: processMenuItems(nextProps.menuItems)
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.menuNode && this.state.focusIndex === -1) {
        this.menuNode.focus();
      }
    }
  }, {
    key: 'getItem',
    value: function getItem(key) {
      return this.state.map.get(key);
    }
  }, {
    key: 'setMenuNode',
    value: function setMenuNode(node) {
      if (node) {
        this.menuNode = node;
      }
    }
  }, {
    key: 'buildItem',
    value: function buildItem(key, leftInset, rightInset, isActive, handleOnKeyDown) {
      var item = this.getItem(key);
      var chevron = hasChevron(item);
      return _react2.default.createElement(_UtilityMenuItem2.default, {
        key: key,
        itemKey: key,
        id: item.id,
        title: item.title,
        content: item.content,
        contentLocation: item.contentLocation,
        isActive: isActive,
        isSelected: item.isSelected,
        isSelectable: item.isSelectable,
        hasChevron: chevron,
        leftInset: leftInset,
        rightInset: rightInset,
        onChange: this.handleOnChange,
        onKeyDown: handleOnKeyDown,
        variant: this.props.variant
      });
    }
  }, {
    key: 'buildListContent',
    value: function buildListContent(currentItem) {
      var _this2 = this;

      if (currentItem && currentItem.childKeys && currentItem.childKeys.length) {
        var leftInset = this.childrenHasCheckmark(currentItem);
        var rightInset = this.childrenHasChevron(currentItem);
        var index = -1;
        return _react2.default.createElement(
          'ul',
          { className: cx('utility-menu-body') },
          currentItem.childKeys.map(function (key) {
            if (_this2.getItem(key).contentLocation !== _Utils2.default.LOCATIONS.FOOTER) {
              index += 1;
              var onKeyDown = _this2.handleOnKeyDown(index);
              var isActive = index === _this2.state.focusIndex;
              return _this2.buildItem(key, leftInset, rightInset, isActive, onKeyDown);
            }
            return null;
          })
        );
      }
      return null;
    }
  }, {
    key: 'buildFooterContent',
    value: function buildFooterContent(currentItem) {
      var _this3 = this;

      if (currentItem && currentItem.childKeys && currentItem.childKeys.length) {
        return currentItem.childKeys.map(function (key) {
          if (_this3.getItem(key).contentLocation === _Utils2.default.LOCATIONS.FOOTER) {
            return _this3.buildItem(key);
          }
          return null;
        });
      }
      return null;
    }
  }, {
    key: 'childrenHasCheckmark',
    value: function childrenHasCheckmark(item) {
      var _this4 = this;

      var childrenHasCheckmark = item.childKeys.some(function (key) {
        var currentItem = _this4.getItem(key);
        return currentItem.isSelectable === true && currentItem.contentLocation !== _Utils2.default.LOCATIONS.FOOTER;
      });
      return childrenHasCheckmark;
    }
  }, {
    key: 'childrenHasChevron',
    value: function childrenHasChevron(item) {
      var _this5 = this;

      var childrenHasChevron = item.childKeys.some(function (key) {
        var _getItem = _this5.getItem(key),
            childKeys = _getItem.childKeys;

        return childKeys && childKeys.length > 0 && _this5.getItem(key).contentLocation !== _Utils2.default.LOCATIONS.FOOTER;
      });
      return childrenHasChevron;
    }

    /**
     * Function to trigger when an item is selected.
     * 1. Has children: navigate to the next page
     * 2. Toggles: trigger onChange without closing the menu.
     * 3. Endpoint: close menu and trigger onChange.
     * @param {*} event
     * @param {*} key
     */

  }, {
    key: 'handleOnChange',
    value: function handleOnChange(event, key) {
      var _this6 = this;

      var _getItem2 = this.getItem(key),
          childKeys = _getItem2.childKeys;

      var item = this.getItem(key);
      if (childKeys && childKeys.length > 0) {
        this.setState(function (prevState) {
          return { previousKey: _this6.push(prevState.currentKey), currentKey: key };
        });
      } else {
        this.props.onRequestClose();
        this.props.onChange(event, { key: key, metaData: item.metaData });
      }

      if (this.state.focusIndex !== -1) {
        this.setState({ focusIndex: -1 });
      }
    }
  }, {
    key: 'handleOnKeyDown',
    value: function handleOnKeyDown(index) {
      var _this7 = this;

      return function (event) {
        if (event.nativeEvent.keyCode === _Utils2.default.KEY_CODES.LEFT_ARROW && _this7.state.currentKey !== _this7.props.initialSelectedKey) {
          _this7.pop();
        } else if (event.nativeEvent.keyCode === _Utils2.default.KEY_CODES.UP_ARROW) {
          _this7.setState({ focusIndex: index - 1 });
        } else if (event.nativeEvent.keyCode === _Utils2.default.KEY_CODES.DOWN_ARROW) {
          _this7.setState({ focusIndex: index + 1 });
        }
      };
    }
  }, {
    key: 'pop',
    value: function pop() {
      this.setState(function (prevState) {
        var newStack = prevState.previousKeyStack.slice();
        return { previousKeyStack: newStack, currentKey: newStack.pop() };
      });
    }
  }, {
    key: 'push',
    value: function push(key) {
      this.setState(function (prevState) {
        var newStack = prevState.previousKeyStack.slice();
        newStack.push(key);
        return { previousKeyStack: newStack };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          menuItems = _props.menuItems,
          initialSelectedKey = _props.initialSelectedKey,
          intl = _props.intl,
          isHeightBounded = _props.isHeightBounded,
          onChange = _props.onChange,
          onRequestClose = _props.onRequestClose,
          variant = _props.variant,
          customProps = _objectWithoutProperties(_props, ['menuItems', 'initialSelectedKey', 'intl', 'isHeightBounded', 'onChange', 'onRequestClose', 'variant']);

      var currentKey = this.state.currentKey;

      var currentItem = this.getItem(currentKey);
      var firstPage = currentKey === initialSelectedKey;

      var menuClassNames = cx(['utility-menu', { 'header-utility-menu': variant === _Utils2.default.VARIANTS.HEADER }, { 'menu-utility-menu': variant === _Utils2.default.VARIANTS.MENU }, customProps.className]);

      var headerClassNames = cx(['utility-menu-header', { 'header-utility-menu-header': variant === _Utils2.default.VARIANTS.HEADER }, { 'menu-utility-menu-header': variant === _Utils2.default.VARIANTS.MENU }]);

      var contentContainerClassNames = cx(['utility-menu-content-container', { 'header-utility-menu-content-container': variant === _Utils2.default.VARIANTS.HEADER }, { 'menu-utility-menu-content-container': variant === _Utils2.default.VARIANTS.MENU }]);

      var leftContentContainer = cx(['utility-menu-left-content-container', { 'header-utility-menu-left-content-container': variant === _Utils2.default.VARIANTS.HEADER }, { 'menu-utility-menu-left-content-container': variant === _Utils2.default.VARIANTS.MENU }]);

      var headerTextClassName = cx([{ 'header-utility-menu-initial-page-header-text': firstPage && variant === _Utils2.default.VARIANTS.HEADER }, { 'menu-utility-menu-initial-page-header-text': firstPage && variant === _Utils2.default.VARIANTS.MENU }, { 'header-utility-menu-noninitial-page-header-text': !firstPage && variant === _Utils2.default.VARIANTS.HEADER }, { 'menu-utility-menu-noninitial-page-header-text': !firstPage && variant === _Utils2.default.VARIANTS.MENU }]);

      var iconLeftClassNames = cx(['utility-menu-icon-left', { 'header-utility-menu-icon-left': variant === _Utils2.default.VARIANTS.HEADER }, { 'menu-utility-menu-icon-left': variant === _Utils2.default.VARIANTS.MENU }]);

      var iconCloseClassNames = cx(['utility-menu-icon-close', { 'header-utility-menu-icon-close': variant === _Utils2.default.VARIANTS.HEADER }, { 'menu-utility-menu-icon-close': variant === _Utils2.default.VARIANTS.MENU }]);

      var backText = intl.formatMessage({ id: 'Terra.application.utility.back' });
      var backButton = _react2.default.createElement(_terraButton2.default, {
        onClick: this.pop,
        icon: _react2.default.createElement(_IconLeft2.default, { className: iconLeftClassNames }),
        isCompact: true,
        isIconOnly: true,
        text: backText,
        variant: _terraButton2.default.Opts.Variants.UTILITY
      });

      var closeText = intl.formatMessage({ id: 'Terra.application.utility.close' });
      var closeButton = _react2.default.createElement(_terraButton2.default, {
        onClick: this.props.onRequestClose,
        icon: _react2.default.createElement(_IconClose2.default, { className: iconCloseClassNames }),
        isCompact: true,
        isIconOnly: true,
        text: closeText,
        variant: _terraButton2.default.Opts.Variants.UTILITY
      });

      var headerText = void 0;
      if (currentItem !== undefined) {
        headerText = currentItem.title;
      }
      var header = _react2.default.createElement(
        'div',
        { className: headerClassNames },
        _react2.default.createElement(
          'span',
          { className: contentContainerClassNames },
          _react2.default.createElement(
            'span',
            { className: leftContentContainer },
            !firstPage && backButton,
            _react2.default.createElement(
              'span',
              { className: headerTextClassName },
              headerText
            )
          ),
          _react2.default.createElement(
            'span',
            { className: cx('utility-menu-right-content-container') },
            closeButton
          )
        ),
        _react2.default.createElement(_UtilityMenuDivider2.default, { isTop: true })
      );

      var footer = void 0;
      var footerItems = this.buildFooterContent(currentItem);
      var hasFooterItems = footerItems ? footerItems.some(function (item) {
        return item !== null;
      }) : null;
      if (hasFooterItems) {
        footer = _react2.default.createElement(
          'div',
          { className: cx('utility-menu-footer') },
          _react2.default.createElement(_UtilityMenuDivider2.default, { className: cx('footer-divider') }),
          footerItems
        );
      }

      var menuText = intl.formatMessage({ id: 'Terra.application.utility.menu' });
      /* eslint-disable jsx-a11y/no-noninteractive-tabindex */
      return _react2.default.createElement(
        'div',
        { ref: this.setMenuNode, style: { height: isHeightBounded ? '100%' : 'auto', outline: 'none' }, tabIndex: '0' },
        _react2.default.createElement(
          _terraContentContainer2.default,
          _extends({}, customProps, {
            header: header,
            footer: footer,
            fill: isHeightBounded,
            className: menuClassNames,
            role: 'navigation',
            'aria-label': menuText
          }),
          this.buildListContent(currentItem)
        )
      );
      /* eslint-enable jsx-a11y/no-noninteractive-tabindex */
    }
  }]);

  return UtilityMenu;
}(_react2.default.Component);

UtilityMenu.propTypes = propTypes;
UtilityMenu.processMenuItems = processMenuItems;
UtilityMenu.hasChevron = hasChevron;
exports.default = (0, _reactIntl.injectIntl)(UtilityMenu);