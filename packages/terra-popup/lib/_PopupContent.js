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

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _terraContentContainer = require('terra-content-container');

var _terraContentContainer2 = _interopRequireDefault(_terraContentContainer);

var _focusTrapReact = require('focus-trap-react');

var _focusTrapReact2 = _interopRequireDefault(_focusTrapReact);

var _terraHookshot = require('terra-hookshot');

var _terraHookshot2 = _interopRequireDefault(_terraHookshot);

var _PopupContentModule = require('./PopupContent.module.scss');

var _PopupContentModule2 = _interopRequireDefault(_PopupContentModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_PopupContentModule2.default);
/**
 * Rounded corner size to be used when calculating the arrow offset.
 */
var CORNER_SIZE = 3;

var propTypes = {
  /**
   * The children to be presented as the popup's content.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * The height value in px, to be applied to the content container.
   */
  contentHeight: _propTypes2.default.number.isRequired,
  /**
   * The width value in px, to be applied to the content container.
   */
  contentWidth: _propTypes2.default.number.isRequired,
  /**
   * The function that should be triggered when a close is indicated.
   */
  onRequestClose: _propTypes2.default.func.isRequired,
  /**
   * The function that should be triggered when a resize is indicated.
   */
  onResize: _propTypes2.default.func.isRequired,
  /**
   * The arrow to be placed within the popup frame.
   */
  arrow: _propTypes2.default.element,
  /**
   * CSS classnames that are appended to the popup content body.
   */
  classNameInner: _propTypes2.default.string,
  /**
   * The maximum height value in px, to be applied to the content container. Used with responsive behavior for actual height.
   */
  contentHeightMax: _propTypes2.default.number,
  /**
   * The maximum width value in px, to be applied to the content container. Used with responsive behavior for actual width.
   */
  contentWidthMax: _propTypes2.default.number,
  /**
   * Should the popup content have tab focus. Set this is your content doesn't contain any focusable elements.
   */
  isFocusedDisabled: _propTypes2.default.bool,
  /**
   * Should the default behavior, that inserts a header when constraints are breached, be disabled.
   */
  isHeaderDisabled: _propTypes2.default.bool,
  /**
   * Whether or not the height provided is using a predefined value.
   */
  isHeightAutomatic: _propTypes2.default.bool,
  /**
   * Whether or not the width provided is using a predefined value.
   */
  isWidthAutomatic: _propTypes2.default.bool,
  /**
   * The function that should be triggered when a content resize is indicated.
   */
  onContentResize: _propTypes2.default.func,
  /**
   * The function returning the frame html reference.
   */
  refCallback: _propTypes2.default.func,
  /**
   * A callback function to let the containing component (e.g. modal) to regain focus.
   */
  releaseFocus: _propTypes2.default.func,
  /**
   * A callback function to request focus from the containing component (e.g. modal).
   */
  requestFocus: _propTypes2.default.func
};

var defaultProps = {
  classNameInner: null,
  contentHeightMax: -1,
  contentWidthMax: -1,
  isFocusedDisabled: false,
  isHeaderDisabled: false,
  isHeightAutomatic: false,
  isWidthAutomatic: false
};

var PopupContent = function (_React$Component) {
  _inherits(PopupContent, _React$Component);

  _createClass(PopupContent, null, [{
    key: 'addPopupHeader',
    value: function addPopupHeader(children, onRequestClose) {
      var icon = _react2.default.createElement('span', { className: cx('close-icon') });
      var button = _react2.default.createElement(_terraButton2.default, { variant: 'utility', className: cx('close'), isIconOnly: true, icon: icon, onClick: onRequestClose });
      var header = _react2.default.createElement(
        'div',
        { className: cx('header') },
        button
      );
      return _react2.default.createElement(
        _terraContentContainer2.default,
        { header: header, fill: true },
        children
      );
    }
  }, {
    key: 'isBounded',
    value: function isBounded(value, maxValue) {
      return value > 0 && maxValue > 0 && value >= maxValue;
    }
  }, {
    key: 'cloneChildren',
    value: function cloneChildren(children, isHeightAutomatic, isWidthAutomatic, isHeightBounded, isWidthBounded, isHeaderDisabled) {
      var newProps = {};
      if (isHeightAutomatic) {
        newProps.isHeightBounded = isHeightBounded;
      }
      if (isWidthAutomatic) {
        newProps.isWidthBounded = isWidthBounded;
      }
      if (isHeightBounded && isWidthBounded && isHeaderDisabled) {
        newProps.closeButtonRequired = 'true';
      }
      return _react2.default.Children.map(children, function (child) {
        return _react2.default.cloneElement(child, newProps);
      });
    }
  }]);

  function PopupContent(props) {
    _classCallCheck(this, PopupContent);

    var _this = _possibleConstructorReturn(this, (PopupContent.__proto__ || Object.getPrototypeOf(PopupContent)).call(this, props));

    _this.handleOnResize = _this.handleOnResize.bind(_this);
    _this.handleOutsideClick = _this.handleOutsideClick.bind(_this);
    return _this;
  }

  _createClass(PopupContent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.requestFocus) {
        this.props.requestFocus();
      }
      // Value used to verify horizontal resize.
      this.windowWidth = window.innerWidth;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.releaseFocus) {
        this.props.releaseFocus();
      }
    }
  }, {
    key: 'handleOnResize',
    value: function handleOnResize(event) {
      if (this.props.onResize) {
        this.props.onResize(event, this.windowWidth);
      }
    }

    /**
     * Callback triggered when a target outside of the content is clicked.
     * @param {event} event - The click event.
     */

  }, {
    key: 'handleOutsideClick',
    value: function handleOutsideClick(event) {
      event.preventDefault();
      this.props.onRequestClose(event);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          arrow = _props.arrow,
          children = _props.children,
          classNameInner = _props.classNameInner,
          contentHeight = _props.contentHeight,
          contentHeightMax = _props.contentHeightMax,
          contentWidth = _props.contentWidth,
          contentWidthMax = _props.contentWidthMax,
          isFocusedDisabled = _props.isFocusedDisabled,
          isHeaderDisabled = _props.isHeaderDisabled,
          isHeightAutomatic = _props.isHeightAutomatic,
          isWidthAutomatic = _props.isWidthAutomatic,
          onRequestClose = _props.onRequestClose,
          onResize = _props.onResize,
          onContentResize = _props.onContentResize,
          refCallback = _props.refCallback,
          releaseFocus = _props.releaseFocus,
          requestFocus = _props.requestFocus,
          customProps = _objectWithoutProperties(_props, ['arrow', 'children', 'classNameInner', 'contentHeight', 'contentHeightMax', 'contentWidth', 'contentWidthMax', 'isFocusedDisabled', 'isHeaderDisabled', 'isHeightAutomatic', 'isWidthAutomatic', 'onRequestClose', 'onResize', 'onContentResize', 'refCallback', 'releaseFocus', 'requestFocus']);

      var contentStyle = PopupContent.getContentStyle(contentHeight, contentHeightMax, contentWidth, contentWidthMax, isHeightAutomatic, isWidthAutomatic);
      var isHeightBounded = PopupContent.isBounded(contentHeight, contentHeightMax);
      var isWidthBounded = PopupContent.isBounded(contentWidth, contentWidthMax);
      var isFullScreen = isHeightBounded && isWidthBounded;

      var content = PopupContent.cloneChildren(children, isHeightAutomatic, isWidthAutomatic, isHeightBounded, isWidthBounded, isHeaderDisabled);
      if (isFullScreen && !isHeaderDisabled) {
        content = PopupContent.addPopupHeader(content, onRequestClose);
      }

      var contentClassNames = cx(['content', customProps.className]);

      var roundedCorners = arrow && !isFullScreen;
      var arrowContent = roundedCorners ? arrow : undefined;
      var innerClassNames = cx(['inner', { 'is-full-screen': isFullScreen }, { 'rounded-corners': roundedCorners }, classNameInner]);

      var heightData = isHeightAutomatic ? { 'data-terra-popup-automatic-height': true } : {};
      var widthData = isWidthAutomatic ? { 'data-terra-popup-automatic-width': true } : {};

      return _react2.default.createElement(
        _focusTrapReact2.default,
        { focusTrapOptions: { returnFocusOnDeactivate: true } },
        _react2.default.createElement(
          _terraHookshot2.default.Content,
          _extends({}, customProps, {
            className: contentClassNames,
            tabIndex: isFocusedDisabled ? null : '0',
            'data-terra-popup-content': true,
            onContentResize: isHeightAutomatic || isWidthAutomatic ? onContentResize : undefined,
            onEsc: onRequestClose,
            onOutsideClick: this.handleOutsideClick,
            onResize: this.handleOnResize,
            refCallback: refCallback,
            role: 'dialog'
          }),
          arrowContent,
          _react2.default.createElement(
            'div',
            _extends({}, heightData, widthData, { className: innerClassNames, style: contentStyle }),
            content
          )
        )
      );
    }
  }], [{
    key: 'getContentStyle',
    value: function getContentStyle(height, maxHeight, width, maxWidth, isHeightAutomatic, isWidthAutomatic) {
      var heightStyle = PopupContent.getDimensionStyle(height, maxHeight, isHeightAutomatic);
      var widthStyle = PopupContent.getDimensionStyle(width, maxWidth, isWidthAutomatic);
      var contentStyle = {};
      if (heightStyle) {
        contentStyle.height = heightStyle;
      }
      if (widthStyle) {
        contentStyle.width = widthStyle;
      }
      return contentStyle;
    }
  }, {
    key: 'getDimensionStyle',
    value: function getDimensionStyle(value, maxValue, isAutomatic) {
      if (value > 0) {
        if (maxValue > 0 && value >= maxValue) {
          return maxValue.toString() + 'px';
        }if (!isAutomatic) {
          return value.toString() + 'px';
        }
      }
      return null;
    }
  }]);

  return PopupContent;
}(_react2.default.Component);

PopupContent.propTypes = propTypes;
PopupContent.defaultProps = defaultProps;
PopupContent.Opts = {
  cornerSize: CORNER_SIZE
};

exports.default = PopupContent;