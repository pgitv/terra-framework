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

var _terraContentContainer = require('terra-content-container');

var _terraContentContainer2 = _interopRequireDefault(_terraContentContainer);

var _lodash = require('lodash.debounce');

var _lodash2 = _interopRequireDefault(_lodash);

var _LayoutSlidePanel = require('./_LayoutSlidePanel');

var _LayoutSlidePanel2 = _interopRequireDefault(_LayoutSlidePanel);

var _LayoutUtils = require('./LayoutUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  /**
   * Element to be placed within the header section of the layout.
   */
  header: _propTypes2.default.element,
  /**
   * Element to be placed within the menu section of the layout. If not set, Layout-provided menu controls will be hidden.
   */
  menu: _propTypes2.default.element,
  /**
   * String used to decorate menu hover control.
   */
  menuText: _propTypes2.default.string,
  /**
   * Element to be placed within the main content section of the layout.
   */
  children: _propTypes2.default.element
};

var Layout = function (_React$Component) {
  _inherits(Layout, _React$Component);

  _createClass(Layout, null, [{
    key: 'stateForProps',
    value: function stateForProps(props, currentState) {
      var isToggleMenu = currentState.size === 'tiny' || currentState.size === 'small';
      var isFixedMenu = !isToggleMenu;

      var menuIsPresent = !!props.menu;

      return _extends({}, currentState || {}, {
        isFixedMenu: isFixedMenu,
        isToggleMenu: isToggleMenu,
        menuIsPresent: menuIsPresent,
        menuIsOpen: menuIsPresent && (currentState.menuIsOpen || isFixedMenu),
        menuIsPinned: menuIsPresent && currentState.menuIsPinned
      });
    }
  }]);

  function Layout(props) {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, props));

    _this.toggleMenu = _this.toggleMenu.bind(_this);
    _this.togglePin = _this.togglePin.bind(_this);
    _this.updateSize = (0, _lodash2.default)(_this.updateSize.bind(_this), 100);
    _this.renderHeader = _this.renderHeader.bind(_this);
    _this.renderMenu = _this.renderMenu.bind(_this);
    _this.renderContent = _this.renderContent.bind(_this);

    _this.state = Layout.stateForProps(props, {
      size: (0, _LayoutUtils.getBreakpointSize)()
    });
    return _this;
  }

  _createClass(Layout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this.updateSize);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState(function (prevState) {
        return Layout.stateForProps(nextProps, prevState);
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateSize);
    }
  }, {
    key: 'updateSize',
    value: function updateSize() {
      var newSize = (0, _LayoutUtils.getBreakpointSize)();

      if (this.state.size !== newSize) {
        this.setState(Layout.stateForProps(this.props, {
          size: newSize
        }));
      }
    }
  }, {
    key: 'toggleMenu',
    value: function toggleMenu() {
      var _this2 = this;

      return new Promise(function (resolve) {
        _this2.setState(function (prevState) {
          return {
            menuIsOpen: !prevState.menuIsOpen
          };
        }, resolve);
      });
    }
  }, {
    key: 'togglePin',
    value: function togglePin() {
      var _this3 = this;

      return new Promise(function (resolve) {
        _this3.setState(function (prevState) {
          return {
            menuIsPinned: !prevState.menuIsPinned
          };
        }, resolve);
      });
    }
  }, {
    key: 'renderHeader',
    value: function renderHeader() {
      var header = this.props.header;
      var _state = this.state,
          size = _state.size,
          menuIsOpen = _state.menuIsOpen,
          isToggleMenu = _state.isToggleMenu,
          menuIsPresent = _state.menuIsPresent;


      if (!header) {
        return null;
      }

      var shouldAllowMenuToggle = isToggleMenu && menuIsPresent;

      return _react2.default.cloneElement(header, {
        layoutConfig: {
          size: size,
          toggleMenu: shouldAllowMenuToggle ? this.toggleMenu : undefined,
          menuIsOpen: menuIsOpen
        }
      });
    }
  }, {
    key: 'renderMenu',
    value: function renderMenu() {
      var menu = this.props.menu;
      var _state2 = this.state,
          size = _state2.size,
          menuIsOpen = _state2.menuIsOpen,
          menuIsPinned = _state2.menuIsPinned,
          isToggleMenu = _state2.isToggleMenu,
          menuIsPresent = _state2.menuIsPresent;

      var shouldAllowMenuToggle = isToggleMenu && menuIsPresent;

      if (!menuIsPresent) {
        return null;
      }

      return _react2.default.cloneElement(menu, {
        layoutConfig: {
          size: size,
          toggleMenu: shouldAllowMenuToggle ? this.toggleMenu : undefined,
          menuIsOpen: menuIsOpen,
          menuIsPinned: menuIsPinned
        }
      });
    }
  }, {
    key: 'renderContent',
    value: function renderContent() {
      var children = this.props.children;
      var _state3 = this.state,
          size = _state3.size,
          menuIsOpen = _state3.menuIsOpen,
          isToggleMenu = _state3.isToggleMenu,
          menuIsPresent = _state3.menuIsPresent;

      var shouldAllowMenuToggle = isToggleMenu && menuIsPresent;

      return _react2.default.createElement(
        _terraContentContainer2.default,
        {
          fill: true,
          header: isToggleMenu && this.renderHeader(),
          style: { outline: 'none' }
        },
        children ? _react2.default.cloneElement(children, {
          layoutConfig: {
            size: size,
            toggleMenu: shouldAllowMenuToggle ? this.toggleMenu : undefined,
            menuIsOpen: menuIsOpen
          }
        }) : null
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var menuText = this.props.menuText;
      var _state4 = this.state,
          menuIsOpen = _state4.menuIsOpen,
          menuIsPinned = _state4.menuIsPinned,
          size = _state4.size,
          isFixedMenu = _state4.isFixedMenu,
          isToggleMenu = _state4.isToggleMenu;


      return _react2.default.createElement(
        _terraContentContainer2.default,
        _extends({
          fill: true,
          header: !isToggleMenu && this.renderHeader()
        }, (0, _LayoutUtils.getCustomProps)(this.props, propTypes)),
        _react2.default.createElement(
          _LayoutSlidePanel2.default,
          {
            panelContent: this.renderMenu(),
            panelBehavior: menuIsPinned || isFixedMenu ? 'squish' : 'overlay',
            size: size,
            onToggle: this.toggleMenu,
            toggleText: menuText,
            isOpen: menuIsOpen,
            isAnimated: true
          },
          this.renderContent()
        )
      );
    }
  }]);

  return Layout;
}(_react2.default.Component);

Layout.propTypes = propTypes;

exports.default = Layout;