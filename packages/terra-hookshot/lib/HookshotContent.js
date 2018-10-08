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

var _reactOnclickoutside = require('react-onclickoutside');

var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);

var _resizeObserverPolyfill = require('resize-observer-polyfill');

var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);

var _HookshotContentModule = require('./HookshotContent.module.scss');

var _HookshotContentModule2 = _interopRequireDefault(_HookshotContentModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_HookshotContentModule2.default);
/**
 * Key code value for the escape key.
 */
var KEYCODES = {
  ESCAPE: 27
};

var propTypes = {
  /**
   * The children to be displayed as content within the content.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * The function callback when a child content resize event occurs.
   */
  onContentResize: _propTypes2.default.func,
  /**
   * The function callback when am escape keydown event occurs.
   */
  onEsc: _propTypes2.default.func,
  /**
   * The function callback when a click outside event occurs.
   */
  onOutsideClick: _propTypes2.default.func,
  /**
   * The function callback when a resize event occurs.
   */
  onResize: _propTypes2.default.func,
  /**
   * The function returning the frame html reference.
   */
  refCallback: _propTypes2.default.func
};

var HookshotContent = function (_React$Component) {
  _inherits(HookshotContent, _React$Component);

  function HookshotContent(props) {
    _classCallCheck(this, HookshotContent);

    var _this = _possibleConstructorReturn(this, (HookshotContent.__proto__ || Object.getPrototypeOf(HookshotContent)).call(this, props));

    _this.handleClickOutside = _this.handleClickOutside.bind(_this);
    _this.handleKeydown = _this.handleKeydown.bind(_this);
    _this.handleResize = _this.debounce(_this.handleResize.bind(_this), 100);
    _this.enableEscListener = _this.enableEscListener.bind(_this);
    _this.disableEscListener = _this.disableEscListener.bind(_this);
    _this.enableResizeListener = _this.enableResizeListener.bind(_this);
    _this.disableResizeListener = _this.disableResizeListener.bind(_this);
    _this.enableContentResizeListener = _this.enableContentResizeListener.bind(_this);
    _this.disableContentResizeListener = _this.disableContentResizeListener.bind(_this);
    _this.updateListeners = _this.updateListeners.bind(_this);
    _this.animationFrameID = null;
    return _this;
  }

  _createClass(HookshotContent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateListeners();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.updateListeners();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.disableEscListener();
      this.disableResizeListener();
      this.disableContentResizeListener();
    }
  }, {
    key: 'handleResize',
    value: function handleResize(event) {
      if (this.props.onResize) {
        this.props.onResize(event);
      }
    }
  }, {
    key: 'handleClickOutside',
    value: function handleClickOutside(event) {
      if (this.props.onOutsideClick) {
        this.props.onOutsideClick(event);
      }
    }
  }, {
    key: 'handleKeydown',
    value: function handleKeydown(event) {
      if (event.keyCode === KEYCODES.ESCAPE) {
        event.preventDefault();
        this.props.onEsc(event);
      }
    }
  }, {
    key: 'updateListeners',
    value: function updateListeners() {
      if (this.props.onEsc) {
        this.enableEscListener();
      } else {
        this.disableEscListener();
      }

      if (this.props.onResize) {
        this.enableResizeListener();
      } else {
        this.disableResizeListener();
      }

      if (this.props.onContentResize) {
        this.enableContentResizeListener();
      } else {
        this.disableContentResizeListener();
      }
    }
  }, {
    key: 'enableEscListener',
    value: function enableEscListener() {
      if (!this.escListenerAdded) {
        document.addEventListener('keydown', this.handleKeydown);
        this.escListenerAdded = true;
      }
    }
  }, {
    key: 'disableEscListener',
    value: function disableEscListener() {
      if (this.escListenerAdded) {
        document.removeEventListener('keydown', this.handleKeydown);
        this.escListenerAdded = false;
      }
    }
  }, {
    key: 'enableResizeListener',
    value: function enableResizeListener() {
      if (!this.resizeListenerAdded) {
        window.addEventListener('resize', this.handleResize);
        this.resizeListenerAdded = true;
      }
    }
  }, {
    key: 'disableResizeListener',
    value: function disableResizeListener() {
      if (this.resizeListenerAdded) {
        window.removeEventListener('resize', this.handleResize);
        this.resizeListenerAdded = false;
      }
    }
  }, {
    key: 'enableContentResizeListener',
    value: function enableContentResizeListener() {
      var _this2 = this;

      if (!this.contentResizeListenerAdded) {
        this.resizeObserver = new _resizeObserverPolyfill2.default(function (entries) {
          _this2.animationFrameID = window.requestAnimationFrame(function () {
            _this2.props.onContentResize(entries[0].contentRect);
          });
        });
        this.resizeObserver.observe(this.contentNode);
        this.contentResizeListenerAdded = true;
      }
    }
  }, {
    key: 'disableContentResizeListener',
    value: function disableContentResizeListener() {
      if (this.contentResizeListenerAdded) {
        window.cancelAnimationFrame(this.animationFrameID);
        this.resizeObserver.disconnect(this.contentNode);
        this.contentNode = null;
        this.contentResizeListenerAdded = false;
      }
    }
  }, {
    key: 'debounce',
    value: function debounce(fn, delay) {
      var _this3 = this;

      var timer = null;
      return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var context = _this3;
        clearTimeout(timer);
        timer = setTimeout(function () {
          fn.apply(context, args);
        }, delay);
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          children = _props.children,
          onContentResize = _props.onContentResize,
          onEsc = _props.onEsc,
          onOutsideClick = _props.onOutsideClick,
          onResize = _props.onResize,
          refCallback = _props.refCallback,
          customProps = _objectWithoutProperties(_props, ['children', 'onContentResize', 'onEsc', 'onOutsideClick', 'onResize', 'refCallback']);

      // Delete the disableOnClickOutside and enableOnClickOutside prop that comes from react-onclickoutside.


      delete customProps.disableOnClickOutside;
      delete customProps.enableOnClickOutside;
      // Delete the closePortal prop that comes from react-portal.
      delete customProps.closePortal;

      return _react2.default.createElement(
        'div',
        _extends({}, customProps, { className: cx(['content', customProps.className]), ref: function ref(element) {
            _this4.contentNode = element;refCallback(element);
          } }),
        children
      );
    }
  }]);

  return HookshotContent;
}(_react2.default.Component);

HookshotContent.propTypes = propTypes;
var onClickOutsideContent = (0, _reactOnclickoutside2.default)(HookshotContent);

exports.default = onClickOutsideContent;