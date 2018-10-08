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

var _terraActionHeader = require('terra-action-header');

var _terraActionHeader2 = _interopRequireDefault(_terraActionHeader);

var _terraContentContainer = require('terra-content-container');

var _terraContentContainer2 = _interopRequireDefault(_terraContentContainer);

var _MenuItem = require('./_MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _NavigationSideMenuModule = require('./NavigationSideMenu.module.scss');

var _NavigationSideMenuModule2 = _interopRequireDefault(_NavigationSideMenuModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_NavigationSideMenuModule2.default);

var KEYCODES = {
  ENTER: 13,
  SPACE: 32,
  TAB: 9
};

var propTypes = {
  /**
   * An array of configuration for each menu item.
   */
  menuItems: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    /**
     * Keys of menu items
     */
    childKeys: _propTypes2.default.arrayOf(_propTypes2.default.string),
    /**
     * Used to match visual style of a menuItem with children on an item without children.
     */
    hasSubMenu: _propTypes2.default.bool,
    /**
     * Whether or not the menu is the primary navigation links in small form factor.
     */
    isRootMenu: _propTypes2.default.bool,
    /**
     * ID to be applied to the menu item div.
     */
    id: _propTypes2.default.string,
    /**
     * Optional meta data to be returned along with the item key within the onChange.
     */
    metaData: _propTypes2.default.object,
    /**
     * Unique identifier that will be returned in the onChange callback when an endpoint is reached.
     */
    key: _propTypes2.default.string.isRequired,
    /**
     * Text for the menu row and header title when selected.
     */
    text: _propTypes2.default.string.isRequired
  })),
  /**
   * Callback function when a menu endpoint is reached.
   * returns (event, { selectedMenuKey: String, selectedChildKey: String, metaData: Object})
   */
  onChange: _propTypes2.default.func.isRequired,
  /**
   * Delegate prop showParent function that is provided by the terra-navigation-layout.
   */
  routingStackBack: _propTypes2.default.func,
  /**
   * Key of the currently selected child item on the selected menu page.
   * This is used when traveling back up the menu stack or when the child is an end point.
   */
  selectedChildKey: _propTypes2.default.string,
  /**
   * Key of the currently selected menu page.
   */
  selectedMenuKey: _propTypes2.default.string.isRequired
};

var defaultProps = {
  menuItems: []
};

var processMenuItems = function processMenuItems(menuItems) {
  var items = {};
  var parents = {};
  menuItems.forEach(function (item) {
    items[item.key] = {
      id: item.id,
      text: item.text,
      childKeys: item.childKeys,
      metaData: item.metaData,
      hasSubMenu: item.hasSubMenu,
      isRootMenu: item.isRootMenu
    };
    if (item.childKeys) {
      item.childKeys.forEach(function (key) {
        parents[key] = item.key;
      });
    }
  });
  return { items: items, parents: parents };
};

var NavigationSideMenu = function (_React$Component) {
  _inherits(NavigationSideMenu, _React$Component);

  function NavigationSideMenu(props) {
    _classCallCheck(this, NavigationSideMenu);

    var _this = _possibleConstructorReturn(this, (NavigationSideMenu.__proto__ || Object.getPrototypeOf(NavigationSideMenu)).call(this, props));

    _this.handleBackClick = _this.handleBackClick.bind(_this);
    _this.handleItemClick = _this.handleItemClick.bind(_this);

    var _processMenuItems = processMenuItems(props.menuItems),
        items = _processMenuItems.items,
        parents = _processMenuItems.parents;

    _this.state = { items: items, parents: parents };
    return _this;
  }

  _createClass(NavigationSideMenu, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _processMenuItems2 = processMenuItems(nextProps.menuItems),
          items = _processMenuItems2.items,
          parents = _processMenuItems2.parents;

      this.setState({ items: items, parents: parents });
    }
  }, {
    key: 'handleBackClick',
    value: function handleBackClick(event) {
      var parentKey = this.state.parents[this.props.selectedMenuKey];
      if (parentKey) {
        this.props.onChange(event, {
          selectedMenuKey: parentKey,
          selectedChildKey: this.props.selectedMenuKey,
          metaData: this.state.items[parentKey].metaData
        });
      }
    }
  }, {
    key: 'handleItemClick',
    value: function handleItemClick(event, key) {
      var selectedItem = this.state.items[key];
      if (selectedItem.childKeys && selectedItem.childKeys.length) {
        this.props.onChange(event, {
          selectedMenuKey: key,
          selectedChildKey: undefined,
          metaData: selectedItem.metaData
        });
      } else {
        this.props.onChange(event, {
          selectedMenuKey: this.props.selectedMenuKey,
          selectedChildKey: key,
          metaData: selectedItem.metaData
        });
      }
    }
  }, {
    key: 'buildListItem',
    value: function buildListItem(key) {
      var _this2 = this;

      var item = this.state.items[key];
      var onKeyDown = function onKeyDown(event) {
        if (event.nativeEvent.keyCode === KEYCODES.SPACE || event.nativeEvent.keyCode === KEYCODES.ENTER) {
          event.preventDefault();
          _this2.handleItemClick(event, key);
        }
      };

      return _react2.default.createElement(_MenuItem2.default, {
        id: item.id,
        hasChevron: item.hasSubMenu || item.childKeys && item.childKeys.length > 0,
        isSelected: key === this.props.selectedChildKey,
        text: item.text,
        key: key,
        onClick: function onClick(event) {
          _this2.handleItemClick(event, key);
        },
        onKeyDown: onKeyDown,
        'data-menu-item': item.text
      });
    }
  }, {
    key: 'buildListContent',
    value: function buildListContent(currentItem) {
      var _this3 = this;

      if (currentItem && currentItem.childKeys && currentItem.childKeys.length) {
        return _react2.default.createElement(
          _terraList2.default,
          { className: cx(['menu-list']) },
          currentItem.childKeys.map(function (key) {
            return _this3.buildListItem(key);
          })
        );
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          menuItems = _props.menuItems,
          onChange = _props.onChange,
          routingStackBack = _props.routingStackBack,
          selectedChildKey = _props.selectedChildKey,
          selectedMenuKey = _props.selectedMenuKey,
          customProps = _objectWithoutProperties(_props, ['menuItems', 'onChange', 'routingStackBack', 'selectedChildKey', 'selectedMenuKey']);

      var currentItem = this.state.items[selectedMenuKey];

      var onBack = void 0;
      var parentKey = this.state.parents[this.props.selectedMenuKey];
      if (parentKey) {
        onBack = this.handleBackClick;
      } else {
        onBack = routingStackBack;
      }

      var actionHeader = void 0;
      if (onBack || !currentItem.isRootMenu) {
        actionHeader = _react2.default.createElement(_terraActionHeader2.default, { className: cx('side-menu-action-header'), onBack: onBack, title: currentItem ? currentItem.text : null, 'data-navigation-side-menu-action-header': true });
      }

      return _react2.default.createElement(
        _terraContentContainer2.default,
        _extends({}, customProps, { header: actionHeader, fill: true }),
        this.buildListContent(currentItem)
      );
    }
  }]);

  return NavigationSideMenu;
}(_react2.default.Component);

NavigationSideMenu.propTypes = propTypes;
NavigationSideMenu.defaultProps = defaultProps;

exports.default = NavigationSideMenu;