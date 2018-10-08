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

var _SlidePanelModule = require('./SlidePanel.module.scss');

var _SlidePanelModule2 = _interopRequireDefault(_SlidePanelModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_SlidePanelModule2.default);

var propTypes = {
  /**
   * The component to display in the main content area.
   */
  mainContent: _propTypes2.default.node,

  /**
   * The component to display in the panel content area.
   */
  panelContent: _propTypes2.default.node,

  /**
   * The style of panel presentation. One of `overlay`, `squish`.
   */
  panelBehavior: _propTypes2.default.oneOf(['overlay', 'squish']),

  /**
   * The position at which the panel will be displayed. This property honors the current direction setting. One of `start`, `end`.
   */
  panelPosition: _propTypes2.default.oneOf(['start', 'end']),

  /**
   * The size at which the panel will be displayed. One of `small`, `large`.
   */
  panelSize: _propTypes2.default.oneOf(['small', 'large']),

  /**
   * Whether or not, when open, the panel should be displayed with the full width of the SlidePanel.
   */
  isFullscreen: _propTypes2.default.bool,

  /**
   * Whether or not the panel should be displayed.
   */
  isOpen: _propTypes2.default.bool,

  /**
   * Whether or not the SlidePanel should be sized relative to its parent container.
   */
  fill: _propTypes2.default.bool
};

var defaultProps = {
  panelBehavior: 'overlay',
  panelPosition: 'end',
  panelSize: 'small'
};

var SlidePanel = function (_React$Component) {
  _inherits(SlidePanel, _React$Component);

  function SlidePanel(props) {
    _classCallCheck(this, SlidePanel);

    var _this = _possibleConstructorReturn(this, (SlidePanel.__proto__ || Object.getPrototypeOf(SlidePanel)).call(this, props));

    _this.setPanelNode = _this.setPanelNode.bind(_this);
    _this.handleTransitionEnd = _this.handleTransitionEnd.bind(_this);
    _this.preparePanelForTransition = _this.preparePanelForTransition.bind(_this);

    _this.isHidden = !props.isOpen;
    return _this;
  }

  _createClass(SlidePanel, [{
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
      if (!this.props.isOpen) {
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
          mainContent = _props.mainContent,
          panelContent = _props.panelContent,
          panelBehavior = _props.panelBehavior,
          panelPosition = _props.panelPosition,
          panelSize = _props.panelSize,
          isFullscreen = _props.isFullscreen,
          isOpen = _props.isOpen,
          fill = _props.fill,
          customProps = _objectWithoutProperties(_props, ['mainContent', 'panelContent', 'panelBehavior', 'panelPosition', 'panelSize', 'isFullscreen', 'isOpen', 'fill']);

      var slidePanelClassNames = cx(['slide-panel', { 'is-open': isOpen }, { 'is-fullscreen': isFullscreen }, { fill: fill }, customProps.className]);

      this.preparePanelForTransition();

      return _react2.default.createElement(
        'div',
        _extends({}, customProps, {
          className: slidePanelClassNames,
          'data-slide-panel-panel-behavior': panelBehavior,
          'data-slide-panel-panel-position': panelPosition,
          'data-slide-panel-panel-size': panelSize
        }),
        _react2.default.createElement(
          'div',
          { className: cx(['panel']), 'aria-hidden': this.isHidden ? 'true' : 'false', ref: this.setPanelNode },
          panelContent
        ),
        _react2.default.createElement(
          'div',
          { className: cx('main') },
          mainContent
        )
      );
    }
  }]);

  return SlidePanel;
}(_react2.default.Component);

SlidePanel.propTypes = propTypes;
SlidePanel.defaultProps = defaultProps;

exports.default = SlidePanel;