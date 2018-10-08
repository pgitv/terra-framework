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

var _terraOverlay = require('terra-overlay');

var _terraOverlay2 = _interopRequireDefault(_terraOverlay);

var _OverlayContainer = require('terra-overlay/lib/OverlayContainer');

var _OverlayContainer2 = _interopRequireDefault(_OverlayContainer);

require('terra-base/lib/baseStyles');

var _LayoutSlidePanelModule = require('./LayoutSlidePanel.module.scss');

var _LayoutSlidePanelModule2 = _interopRequireDefault(_LayoutSlidePanelModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_LayoutSlidePanelModule2.default);

var propTypes = {
  /**
   * Enables animations for panel state transitions.
   */
  isAnimated: _propTypes2.default.bool,
  /**
   * Enables panel visibility.
   */
  isOpen: _propTypes2.default.bool,
  /**
   * Enables toggling for the panel.
   */
  isToggleEnabled: _propTypes2.default.bool,
  /**
   * The element to display in the main content area.
   */
  children: _propTypes2.default.element,
  /**
   * The style of panel presentation. One of `overlay`, `squish`.
   */
  panelBehavior: _propTypes2.default.oneOf(['overlay', 'squish']),
  /**
   * The component to display in the panel content area.
   */
  panelContent: _propTypes2.default.node,
  /**
   * Current breakpoint size.
   */
  size: _propTypes2.default.string.isRequired,
  /**
   * The function called when panel state changes are desired.
   */
  onToggle: _propTypes2.default.func,
  /**
   * String to display on menu hover target.
   */
  toggleText: _propTypes2.default.string
};

var defaultProps = {
  isAnimated: false,
  isOpen: false,
  isToggleEnabled: false,
  panelBehavior: 'overlay'
};

var LayoutSlidePanel = function (_React$Component) {
  _inherits(LayoutSlidePanel, _React$Component);

  function LayoutSlidePanel(props) {
    _classCallCheck(this, LayoutSlidePanel);

    var _this = _possibleConstructorReturn(this, (LayoutSlidePanel.__proto__ || Object.getPrototypeOf(LayoutSlidePanel)).call(this, props));

    _this.setPanelNode = _this.setPanelNode.bind(_this);
    _this.handleTransitionEnd = _this.handleTransitionEnd.bind(_this);
    _this.preparePanelForTransition = _this.preparePanelForTransition.bind(_this);

    _this.isHidden = !props.isOpen;
    return _this;
  }

  _createClass(LayoutSlidePanel, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.panelNode) {
        this.panelNode.addEventListener('transitionend', this.handleTransitionEnd);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.lastIsOpen = this.props.isOpen;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.panelNode) {
        this.panelNode.removeEventListener('transitionend', this.handleTransitionEnd);
      }
    }
  }, {
    key: 'setPanelNode',
    value: function setPanelNode(node) {
      this.panelNode = node;
    }
  }, {
    key: 'handleTransitionEnd',
    value: function handleTransitionEnd() {
      if (!this.props.isOpen && this.panelNode) {
        this.panelNode.setAttribute('aria-hidden', 'true');
        this.isHidden = true;
      }
    }
  }, {
    key: 'preparePanelForTransition',
    value: function preparePanelForTransition() {
      // React 16.3 will be deprecating componentWillRecieveProps and componentWillUpdate, and removed in 17, so code execution prior to render becomes difficult.
      // As a result of this change, we are executing the code in the render block.
      if (this.props.isOpen && !this.lastIsOpen && this.panelNode) {
        // If the panel is opening remove the hidden attribute so the animation performs correctly.
        this.panelNode.setAttribute('aria-hidden', 'false');
        this.isHidden = false;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          isAnimated = _props.isAnimated,
          isOpen = _props.isOpen,
          isToggleEnabled = _props.isToggleEnabled,
          children = _props.children,
          panelBehavior = _props.panelBehavior,
          panelContent = _props.panelContent,
          size = _props.size,
          onToggle = _props.onToggle,
          toggleText = _props.toggleText,
          customProps = _objectWithoutProperties(_props, ['isAnimated', 'isOpen', 'isToggleEnabled', 'children', 'panelBehavior', 'panelContent', 'size', 'onToggle', 'toggleText']);

      this.preparePanelForTransition();

      var isTiny = size === 'tiny';
      var isSmall = size === 'small';
      var compactSize = isTiny || isSmall;
      var isOverlay = compactSize ? true : panelBehavior === 'overlay';
      var isOverlayOpen = isOpen && isOverlay;
      var overlayBackground = compactSize ? 'dark' : 'clear';

      var slidePanelClassNames = cx(['layout-slide-panel', { 'is-open': isOpen }, { 'is-overlay': isOverlay }, { 'is-squish': !isOverlay }, customProps.className]);

      var panelClasses = cx(['panel', { 'is-tiny': isTiny }, { 'is-small': isSmall }, { 'is-animated': isAnimated && isOverlay && !!panelContent }]);

      return _react2.default.createElement(
        'div',
        _extends({}, customProps, {
          className: slidePanelClassNames
        }),
        _react2.default.createElement(
          'div',
          { className: panelClasses, 'aria-hidden': this.isHidden ? 'true' : 'false', ref: this.setPanelNode },
          panelContent
        ),
        _react2.default.createElement(
          _OverlayContainer2.default,
          { className: cx('content') },
          _react2.default.createElement(_terraOverlay2.default, { isRelativeToContainer: true, onRequestClose: onToggle, isOpen: isOverlayOpen, backgroundStyle: overlayBackground }),
          _react2.default.createElement(
            'main',
            { className: cx('main-container') },
            children
          )
        )
      );
    }
  }]);

  return LayoutSlidePanel;
}(_react2.default.Component);

LayoutSlidePanel.propTypes = propTypes;
LayoutSlidePanel.defaultProps = defaultProps;

exports.default = LayoutSlidePanel;