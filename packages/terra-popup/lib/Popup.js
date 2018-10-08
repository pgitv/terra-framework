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

var _terraHookshot = require('terra-hookshot');

var _terraHookshot2 = _interopRequireDefault(_terraHookshot);

var _reactPortal = require('react-portal');

var _PopupContent = require('./_PopupContent');

var _PopupContent2 = _interopRequireDefault(_PopupContent);

var _PopupArrow = require('./_PopupArrow');

var _PopupArrow2 = _interopRequireDefault(_PopupArrow);

var _PopupOverlay = require('./_PopupOverlay');

var _PopupOverlay2 = _interopRequireDefault(_PopupOverlay);

var _PopupUtils = require('./_PopupUtils');

var _PopupUtils2 = _interopRequireDefault(_PopupUtils);

var _PopupHeights = require('./PopupHeights');

var _PopupHeights2 = _interopRequireDefault(_PopupHeights);

var _PopupWidths = require('./PopupWidths');

var _PopupWidths2 = _interopRequireDefault(_PopupWidths);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ATTACHMENT_POSITIONS = ['top left', 'top center', 'top right', 'middle left', 'middle center', 'middle right', 'bottom left', 'bottom center', 'bottom right'];

var propTypes = {
  /**
   * If the primary attachment is not available, how should the content be positioned. Options
   * include 'auto', 'flip', or 'push'.
   */
  attachmentBehavior: _propTypes2.default.oneOf(['auto', 'flip', 'push']),
  /**
   * The children to be displayed as content within the popup.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Callback function indicating a close condition was met, should be combined with isOpen for state management.
   */
  onRequestClose: _propTypes2.default.func.isRequired,
  /**
   * Target element for the popup to anchor to.
   */
  targetRef: _propTypes2.default.func.isRequired,
  /**
   * Bounding container for the popup, will use window if no value provided.
   */
  boundingRef: _propTypes2.default.func,
  /**
   * CSS classnames that are append to the arrow.
   */
  classNameArrow: _propTypes2.default.string,
  /**
   * CSS classnames that are append to the popup content inner.
   */
  classNameContent: _propTypes2.default.string,
  /**
   * CSS classnames that are append to the overlay.
   */
  classNameOverlay: _propTypes2.default.string,
  /**
   * Attachment point for the popup, this will be mirrored to the target. Options include: 'top left',
   * 'top center', 'top right', 'middle left', 'middle center', 'middle right', 'bottom left',
   * 'bottom center', or 'bottom right'.
   */
  contentAttachment: _propTypes2.default.oneOf(ATTACHMENT_POSITIONS),
  /**
   * A string representation of the height in px, limited to:
   * 40, 80, 120, 160, 240, 320, 400, 480, 560, 640, 720, 800, 880 or auto.
   */
  contentHeight: _propTypes2.default.oneOf(Object.keys(_PopupHeights2.default)),
  /**
   * A string representation of the width in px, limited to:
   * 160, 240, 320, 640, 960, 1280, 1760 or auto.
   */
  contentWidth: _propTypes2.default.oneOf(Object.keys(_PopupWidths2.default)),
  /**
   * Should an arrow be placed at the attachment point.
   */
  isArrowDisplayed: _propTypes2.default.bool,
  /**
   * Should the popup content have tab focus. Set this is your content doesn't contain any focusable elements.
   */
  isContentFocusDisabled: _propTypes2.default.bool,
  /**
   * Should the default behavior, that inserts a header when constraints are breached, be disabled.
   */
  isHeaderDisabled: _propTypes2.default.bool,
  /**
   * Should the popup be presented as open.
   */
  isOpen: _propTypes2.default.bool,
  /**
   * A callback function to let the containing component (e.g. modal) to regain focus.
   */
  releaseFocus: _propTypes2.default.func,
  /**
   * A callback function to request focus from the containing component (e.g. modal).
   */
  requestFocus: _propTypes2.default.func,
  /**
   * Attachment point for the target. Options include: 'top left', 'top center', 'top right', 'middle left', 'middle center',
   * 'middle right', 'bottom left', 'bottom center', or 'bottom right'.
   */
  targetAttachment: _propTypes2.default.oneOf(ATTACHMENT_POSITIONS)
};

var defaultProps = {
  attachmentBehavior: 'auto',
  boundingRef: null,
  classNameArrow: null,
  classNameContent: null,
  classNameOverlay: null,
  contentAttachment: 'top center',
  contentHeight: '80',
  contentWidth: '240',
  isArrowDisplayed: false,
  isContentFocusDisabled: false,
  isHeaderDisabled: false,
  isOpen: false
};

var Popup = function (_React$Component) {
  _inherits(Popup, _React$Component);

  function Popup(props) {
    _classCallCheck(this, Popup);

    var _this = _possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).call(this, props));

    _this.handleOnPosition = _this.handleOnPosition.bind(_this);
    _this.setArrowNode = _this.setArrowNode.bind(_this);
    _this.validateContentNode = _this.validateContentNode.bind(_this);
    _this.handleOnResize = _this.handleOnResize.bind(_this);
    _this.handleOnContentResize = _this.handleOnContentResize.bind(_this);
    _this.isContentSized = props.contentHeight !== 'auto' && props.contentWidth !== 'auto';
    _this.contentHeight = _PopupHeights2.default[props.contentHeight];
    _this.contentWidth = _PopupWidths2.default[props.contentWidth];
    return _this;
  }

  _createClass(Popup, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this.isContentSized = newProps.contentHeight !== 'auto' && newProps.contentWidth !== 'auto';
      this.contentHeight = _PopupHeights2.default[newProps.contentHeight];
      this.contentWidth = _PopupWidths2.default[newProps.contentWidth];
    }
  }, {
    key: 'setArrowPosition',
    value: function setArrowPosition(contentPosition, targetPosition) {
      var arrowPosition = _PopupUtils2.default.getArrowPosition(contentPosition, targetPosition, _PopupArrow2.default.Opts.arrowSize, _PopupContent2.default.Opts.cornerSize);
      if (!arrowPosition) {
        this.arrowNode.removeAttribute(_PopupArrow2.default.Opts.positionAttr);
        return;
      }
      this.arrowNode.setAttribute(_PopupArrow2.default.Opts.positionAttr, arrowPosition);

      if (arrowPosition === 'top' || arrowPosition === 'bottom') {
        this.arrowNode.style.left = _PopupUtils2.default.leftOffset(contentPosition, targetPosition, _PopupArrow2.default.Opts.arrowSize, _PopupContent2.default.Opts.cornerSize);
        this.arrowNode.style.top = '';
      } else {
        this.arrowNode.style.left = '';
        this.arrowNode.style.top = _PopupUtils2.default.topOffset(contentPosition, targetPosition, _PopupArrow2.default.Opts.arrowSize, _PopupContent2.default.Opts.cornerSize);
      }
    }
  }, {
    key: 'setArrowNode',
    value: function setArrowNode(node) {
      this.arrowNode = node;
    }
  }, {
    key: 'handleOnPosition',
    value: function handleOnPosition(event, positions) {
      if (this.arrowNode) {
        this.setArrowPosition(positions.content, positions.target);
      }
    }
  }, {
    key: 'handleOnContentResize',
    value: function handleOnContentResize() {
      this.isContentSized = this.props.contentHeight !== 'auto' && this.props.contentWidth !== 'auto';
      this.contentHeight = _PopupHeights2.default[this.props.contentHeight];
      this.contentWidth = _PopupWidths2.default[this.props.contentWidth];
      this.forceUpdate();
    }
  }, {
    key: 'handleOnResize',
    value: function handleOnResize(event, width) {
      // Close the popup if the window width is resized.
      if (window.innerWidth !== width) {
        this.windowWidth = window.innerWidth;
        this.props.onRequestClose();
      } else {
        this.isContentSized = this.props.contentHeight !== 'auto' && this.props.contentWidth !== 'auto';
        this.contentHeight = _PopupHeights2.default[this.props.contentHeight];
        this.contentWidth = _PopupWidths2.default[this.props.contentWidth];
        this.forceUpdate();
      }
    }
  }, {
    key: 'validateContentNode',
    value: function validateContentNode(node) {
      if (node) {
        var contentRect = _terraHookshot2.default.Utils.getBounds(node);
        if (this.contentHeight !== contentRect.height || this.contentWidth !== contentRect.width) {
          this.contentHeight = contentRect.height;
          this.contentWidth = contentRect.width;
          this.forceUpdate();
        }
        this.isContentSized = true;
      }
    }
  }, {
    key: 'createPopupContent',
    value: function createPopupContent(boundingFrame, showArrow) {
      var boundsProps = {
        contentHeight: _PopupHeights2.default[this.props.contentHeight] || _PopupHeights2.default['80'],
        contentWidth: _PopupWidths2.default[this.props.contentWidth] || _PopupWidths2.default['240']
      };
      if (boundsProps.contentHeight <= 0 && this.contentHeight) {
        boundsProps.contentHeight = this.contentHeight;
      }
      if (boundsProps.contentWidth <= 0 && this.contentWidth) {
        boundsProps.contentWidth = this.contentWidth;
      }

      if (boundingFrame) {
        boundsProps.contentHeightMax = boundingFrame.clientHeight;
        boundsProps.contentWidthMax = boundingFrame.clientWidth;
      } else {
        boundsProps.contentHeightMax = window.innerHeight;
        boundsProps.contentWidthMax = window.innerWidth;
      }

      var arrow = void 0;
      if (showArrow) {
        arrow = _react2.default.createElement(_PopupArrow2.default, { className: this.props.classNameArrow, refCallback: this.setArrowNode });
      }

      return _react2.default.createElement(
        _PopupContent2.default,
        _extends({}, boundsProps, {
          arrow: arrow,
          classNameInner: this.props.classNameContent,
          isHeaderDisabled: this.props.isHeaderDisabled,
          onRequestClose: this.props.onRequestClose,
          onContentResize: this.handleOnContentResize,
          onResize: this.handleOnResize,
          refCallback: this.validateContentNode,
          releaseFocus: this.props.releaseFocus,
          requestFocus: this.props.requestFocus,
          isHeightAutomatic: this.props.contentHeight === 'auto',
          isWidthAutomatic: this.props.contentWidth === 'auto',
          isFocusedDisabled: this.props.isContentFocusDisabled
        }),
        this.props.children
      );
    }
  }, {
    key: 'render',
    value: function render() {
      /* eslint-disable no-unused-vars */
      var _props = this.props,
          attachmentBehavior = _props.attachmentBehavior,
          boundingRef = _props.boundingRef,
          children = _props.children,
          classNameArrow = _props.classNameArrow,
          classNameContent = _props.classNameContent,
          classNameOverlay = _props.classNameOverlay,
          contentAttachment = _props.contentAttachment,
          contentHeight = _props.contentHeight,
          contentWidth = _props.contentWidth,
          isArrowDisplayed = _props.isArrowDisplayed,
          isContentFocusDisabled = _props.isContentFocusDisabled,
          isHeaderDisabled = _props.isHeaderDisabled,
          isOpen = _props.isOpen,
          onRequestClose = _props.onRequestClose,
          releaseFocus = _props.releaseFocus,
          requestFocus = _props.requestFocus,
          targetRef = _props.targetRef,
          targetAttachment = _props.targetAttachment;
      /* eslint-enable no-unused-vars */

      if (!isOpen) {
        return null;
      }

      var tAttachment = void 0;
      var cAttachment = _PopupUtils2.default.parseAttachment(contentAttachment);
      if (targetAttachment) {
        tAttachment = _PopupUtils2.default.parseAttachment(targetAttachment);
      } else {
        tAttachment = _PopupUtils2.default.mirrorAttachment(cAttachment);
      }

      var cOffset = void 0;
      var showArrow = isArrowDisplayed && contentAttachment !== 'middle center';
      if (showArrow) {
        cOffset = _PopupUtils2.default.getContentOffset(cAttachment, tAttachment, this.props.targetRef(), _PopupArrow2.default.Opts.arrowSize, _PopupContent2.default.Opts.cornerSize);
      }
      var hookshotContent = this.createPopupContent(boundingRef ? boundingRef() : undefined, showArrow);

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactPortal.Portal,
          { isOpened: isOpen },
          _react2.default.createElement(_PopupOverlay2.default, { className: this.props.classNameOverlay })
        ),
        _react2.default.createElement(
          _terraHookshot2.default,
          {
            attachmentBehavior: attachmentBehavior,
            attachmentMargin: showArrow ? _PopupArrow2.default.Opts.arrowSize : 0,
            boundingRef: boundingRef,
            contentAttachment: cAttachment,
            contentOffset: cOffset,
            isEnabled: this.isContentSized,
            isOpen: isOpen,
            onPosition: this.handleOnPosition,
            targetRef: targetRef,
            targetAttachment: tAttachment
          },
          hookshotContent
        )
      );
    }
  }]);

  return Popup;
}(_react2.default.Component);

Popup.propTypes = propTypes;
Popup.defaultProps = defaultProps;
Popup.Opts = {
  attachmentPositions: ATTACHMENT_POSITIONS,
  heights: _PopupHeights2.default,
  widths: _PopupWidths2.default
};

exports.default = Popup;