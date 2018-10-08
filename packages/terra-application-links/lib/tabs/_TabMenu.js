'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _terraPopup = require('terra-popup');

var _terraPopup2 = _interopRequireDefault(_terraPopup);

var _reactRouterDom = require('react-router-dom');

var _TabMenuList = require('./_TabMenuList');

var _TabMenuList2 = _interopRequireDefault(_TabMenuList);

var _TabMenuDisplay = require('./_TabMenuDisplay');

var _TabMenuDisplay2 = _interopRequireDefault(_TabMenuDisplay);

var _TabUtils = require('./_TabUtils');

var _TabUtils2 = _interopRequireDefault(_TabUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  /**
   * Child tabs to be placed in the tab menu.
   */
  children: _propTypes2.default.array,
  /**
   * Should the menu be hidden, set to true if there are no hidden items.
   */
  isHidden: _propTypes2.default.bool,
  /**
   * The location as provided by the `withRouter()` HOC.
   */
  location: _propTypes2.default.object.isRequired
};

var contextTypes = {
  /* eslint-disable consistent-return */
  intl: function intl(context) {
    if (context.intl === undefined) {
      return new Error('Please add locale prop to Base component to load translations');
    }
  }
};

var TabMenu = function (_React$Component) {
  _inherits(TabMenu, _React$Component);

  function TabMenu(props, context) {
    _classCallCheck(this, TabMenu);

    var _this = _possibleConstructorReturn(this, (TabMenu.__proto__ || Object.getPrototypeOf(TabMenu)).call(this, props, context));

    _this.handleOnRequestClose = _this.handleOnRequestClose.bind(_this);
    _this.handleOnClick = _this.handleOnClick.bind(_this);
    _this.handleOnKeyDown = _this.handleOnKeyDown.bind(_this);
    _this.getTargetRef = _this.getTargetRef.bind(_this);
    _this.setTargetRef = _this.setTargetRef.bind(_this);
    _this.state = {
      isOpen: false
    };
    _this.shouldResetFocus = false;
    return _this;
  }

  _createClass(TabMenu, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (this.props.location !== newProps.location) {
        this.setState({ isOpen: false });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.shouldResetFocus && this.targetRef) {
        this.targetRef.focus();
        this.shouldResetFocus = this.targetRef !== document.activeElement;
      }
    }
  }, {
    key: 'getTargetRef',
    value: function getTargetRef() {
      return this.targetRef;
    }
  }, {
    key: 'setTargetRef',
    value: function setTargetRef(node) {
      this.targetRef = node;
    }
  }, {
    key: 'handleOnRequestClose',
    value: function handleOnRequestClose() {
      if (this.state.isOpen) {
        this.shouldResetFocus = true;
        this.setState({ isOpen: false });
      }
    }
  }, {
    key: 'handleOnClick',
    value: function handleOnClick() {
      if (!this.state.isOpen) {
        this.setState({ isOpen: true });
      }
    }
  }, {
    key: 'handleOnKeyDown',
    value: function handleOnKeyDown(event) {
      if ((event.nativeEvent.keyCode === _TabUtils2.default.KEYCODES.ENTER || event.nativeEvent.keyCode === _TabUtils2.default.KEYCODES.SPACE) && !this.state.isOpen) {
        this.setState({ isOpen: true });
      }
    }
  }, {
    key: 'createHiddenTabs',
    value: function createHiddenTabs() {
      var _this2 = this;

      return _react2.default.createElement(
        _TabMenuList2.default,
        null,
        _react2.default.Children.map(this.props.children, function (child) {
          return _react2.default.cloneElement(child, { onTabClick: _this2.handleOnRequestClose });
        })
      );
    }
  }, {
    key: 'createDisplay',
    value: function createDisplay(popup) {
      var intl = this.context.intl;

      var text = intl.formatMessage({ id: 'Terra.application.tabs.more' });
      var isSelected = false;

      var childArray = this.props.children;
      var count = childArray.length;
      for (var i = 0; i < count; i += 1) {
        var child = childArray[i];
        if ((0, _reactRouterDom.matchPath)(this.props.location.pathname, { path: child.props.path })) {
          // eslint-disable-next-line prefer-destructuring
          text = child.props.text;
          isSelected = true;
          break;
        }
      }

      return _react2.default.createElement(_TabMenuDisplay2.default, {
        onClick: this.handleOnClick,
        onKeyDown: this.handleOnKeyDown,
        popup: popup,
        refCallback: this.setTargetRef,
        isHidden: this.props.isHidden,
        text: text,
        isSelected: isSelected,
        key: 'application-tab-more',
        'data-application-tabs-more': true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var popup = void 0;
      if (this.state.isOpen) {
        popup = _react2.default.createElement(
          _terraPopup2.default,
          {
            contentHeight: 'auto',
            contentWidth: '240',
            onRequestClose: this.handleOnRequestClose,
            targetRef: this.getTargetRef,
            isOpen: this.state.isOpen,
            isArrowDisplayed: true
          },
          this.createHiddenTabs()
        );
      }

      return this.createDisplay(popup);
    }
  }]);

  return TabMenu;
}(_react2.default.Component);

TabMenu.contextTypes = contextTypes;
TabMenu.propTypes = propTypes;

exports.default = TabMenu;