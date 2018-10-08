'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactPortal = require('react-portal');

var _HookshotContent = require('./HookshotContent');

var _HookshotContent2 = _interopRequireDefault(_HookshotContent);

var _HookshotUtils = require('./_HookshotUtils');

var _HookshotUtils2 = _interopRequireDefault(_HookshotUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VERTICAL_ATTACHMENTS = ['top', 'middle', 'bottom'];

var HORIZONTAL_ATTACHMENTS = ['start', 'center', 'end'];

var ATTACHMENT_BEHAVIORS = ['auto', 'flip', 'push', 'none'];

var propTypes = {
  /**
   * How the content should be positioned when the primary attachment is not available.
   * Valid values:
   *  'auto': returns 180 degrees, returns rotate 90 degree, returns rotate -90 degrees, returns primary attachment
   *  'flip': returns 180 degrees, returns primary attachment
   *  'push': pushes content to remain within the bounding rect, returns primary attachment
   *  'none': returns primary attachment
   */
  attachmentBehavior: _propTypes2.default.oneOf(ATTACHMENT_BEHAVIORS),
  /**
   * Value in px of the margin to place between the target and the content.
   */
  attachmentMargin: _propTypes2.default.number,
  /**
   * Reference to the bounding container. Defaults to window unless attachment behavior is set to none.
   */
  boundingRef: _propTypes2.default.func,
  /**
   * The HookshotContent to be attached.
   */
  children: _propTypes2.default.element.isRequired,
  /**
   * Object containing the vertical and horizontal attachment values for the content.
   * Valid values: { horizontal: ['start', 'center', 'end'], vertical: ['top', 'middle', 'bottom'] }.
   */
  contentAttachment: _propTypes2.default.shape({
    horizontal: _propTypes2.default.oneOf(HORIZONTAL_ATTACHMENTS),
    vertical: _propTypes2.default.oneOf(VERTICAL_ATTACHMENTS)
  }).isRequired,
  /**
   * Object containing the vertical and horizontal offset values in px for the content.
   */
  contentOffset: _propTypes2.default.shape({
    horizontal: _propTypes2.default.number,
    vertical: _propTypes2.default.number
  }),
  /**
   * Determines whether the content should be actively positioned via hookshot.
   */
  isEnabled: _propTypes2.default.bool,
  /**
   * Should the content be presented.
   */
  isOpen: _propTypes2.default.bool,
  /**
   * Callback function when the content has been positioned.
   */
  onPosition: _propTypes2.default.func,
  /**
   * Client coordinates to serve as the anchor point for the hookshot'd content.
   */
  targetCoordinates: _propTypes2.default.shape({
    x: _propTypes2.default.number.isRequired,
    y: _propTypes2.default.number.isRequired
  }),
  /**
   * Element to serve as the anchor point for the hookshot'd content. (If targetCoordinates are provided, this is ignored.)
   */
  targetRef: _propTypes2.default.func,
  /**
   * Object containing the vertical and horizontal attachment values for the target.
   * Valid values: { horizontal: ['start', 'center', 'end'], vertical: ['top', 'middle', 'bottom'] }.
   * If targetCoordinates are provided { horizontal: 'center', vertical: 'middle' } will be applied.
   */
  targetAttachment: _propTypes2.default.shape({
    horizontal: _propTypes2.default.oneOf(HORIZONTAL_ATTACHMENTS),
    vertical: _propTypes2.default.oneOf(VERTICAL_ATTACHMENTS)
  }),
  /**
   * Object containing the vertical and horizontal offset values in px for the target.
   */
  targetOffset: _propTypes2.default.shape({
    horizontal: _propTypes2.default.number,
    vertical: _propTypes2.default.number
  })
};

var defaultProps = {
  attachmentMargin: 0,
  attachmentBehavior: 'auto',
  contentOffset: { horizontal: 0, vertical: 0 },
  isEnabled: false,
  isOpen: false,
  targetOffset: { horizontal: 0, vertical: 0 }
};

var Hookshot = function (_React$Component) {
  _inherits(Hookshot, _React$Component);

  function Hookshot(props) {
    _classCallCheck(this, Hookshot);

    var _this = _possibleConstructorReturn(this, (Hookshot.__proto__ || Object.getPrototypeOf(Hookshot)).call(this, props));

    _this.setContentNode = _this.setContentNode.bind(_this);
    _this.getNodeRects = _this.getNodeRects.bind(_this);
    _this.update = _this.update.bind(_this);
    _this.tick = _this.tick.bind(_this);
    _this.getBoundingRef = _this.getBoundingRef.bind(_this);
    _this.getTargetRef = _this.getTargetRef.bind(_this);
    _this.getValidBoundingRect = _this.getValidBoundingRect.bind(_this);
    _this.getValidTargetRect = _this.getValidTargetRect.bind(_this);
    _this.state = { isEnabled: props.isEnabled && props.isOpen };
    _this.listenersAdded = false;
    _this.lastCall = null;
    _this.lastDuration = null;
    _this.pendingTimeout = null;
    return _this;
  }

  _createClass(Hookshot, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.state.isEnabled) {
        if (!this.listenersAdded) {
          this.enableListeners();
        }
        this.update();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this.setState({ isEnabled: newProps.isEnabled && newProps.isOpen });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.state.isEnabled) {
        if (!this.listenersAdded) {
          this.enableListeners();
        }
        this.update();
      } else {
        this.disableListeners();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.disableListeners();
    }
  }, {
    key: 'setContentNode',
    value: function setContentNode(node) {
      this.contentNode = node;
    }
  }, {
    key: 'getBoundingRef',
    value: function getBoundingRef() {
      return this.props.boundingRef ? this.props.boundingRef() : undefined;
    }
  }, {
    key: 'getTargetRef',
    value: function getTargetRef() {
      return this.props.targetRef ? this.props.targetRef() : undefined;
    }
  }, {
    key: 'getValidBoundingRect',
    value: function getValidBoundingRect() {
      if (this.props.attachmentBehavior === 'none') {
        return undefined;
      }
      return _HookshotUtils2.default.getBoundingRect(this.getBoundingRef() || 'window');
    }
  }, {
    key: 'getValidTargetRect',
    value: function getValidTargetRect() {
      if (this.props.targetCoordinates) {
        return _HookshotUtils2.default.getRectFromCoords(this.props.targetCoordinates);
      }
      return _HookshotUtils2.default.getBounds(this.getTargetRef());
    }
  }, {
    key: 'getNodeRects',
    value: function getNodeRects(resetContentCache) {
      return {
        contentRect: resetContentCache ? _HookshotUtils2.default.getBounds(this.contentNode) : this.cachedRects.contentRect,
        targetRect: this.getValidTargetRect(),
        boundingRect: this.getValidBoundingRect()
      };
    }
  }, {
    key: 'tick',
    value: function tick(event) {
      if (this.lastDuration && this.lastDuration > 16) {
        // Throttle to 60fps, in order to handle safari and mobile performance
        this.lastDuration = Math.min(this.lastDuration - 16, 100);

        // Just in case this is the last event, remember to position just once more
        this.pendingTimeout = setTimeout(this.tick, 100);
        return;
      }

      if (this.lastCall && performance.now() - this.lastCall < 10) {
        // Some browsers call events a little too frequently, refuse to run more than is reasonable
        return;
      }

      if (this.pendingTimeout != null) {
        clearTimeout(this.pendingTimeout);
        this.pendingTimeout = null;
      }

      this.lastCall = performance.now();
      this.update(event);
      this.lastDuration = performance.now() - this.lastCall;
    }
  }, {
    key: 'enableListeners',
    value: function enableListeners() {
      var _this2 = this;

      var childElement = this.getTargetRef() || this.getBoundingRef();
      if (!childElement) {
        return;
      }

      ['resize', 'scroll', 'touchmove'].forEach(function (event) {
        return window.addEventListener(event, _this2.tick);
      });

      this.parentListeners = [];
      var scrollParents = _HookshotUtils2.default.getScrollParents(childElement);
      scrollParents.forEach(function (parent) {
        if (parent !== childElement.ownerDocument) {
          parent.addEventListener('scroll', _this2.tick);
          _this2.parentListeners.push(parent);
        }
      });
      this.listenersAdded = true;
    }
  }, {
    key: 'disableListeners',
    value: function disableListeners() {
      var _this3 = this;

      ['resize', 'scroll', 'touchmove'].forEach(function (event) {
        return window.removeEventListener(event, _this3.tick);
      });

      if (this.parentListeners) {
        this.parentListeners.forEach(function (parent) {
          parent.removeEventListener('scroll', _this3.tick);
        });
        this.parentListeners = null;
      }
      this.listenersAdded = false;
    }
  }, {
    key: 'position',
    value: function position(event, resetContentCache) {
      this.cachedRects = this.getNodeRects(resetContentCache);
      this.content.rect = this.cachedRects.contentRect;
      this.target.rect = this.cachedRects.targetRect;

      var result = _HookshotUtils2.default.positionStyleFromBounds(this.cachedRects.boundingRect, this.content, this.target, this.props.attachmentMargin, this.props.attachmentBehavior);

      var styleUpdated = false;
      if (this.contentNode.style.position !== result.style.position) {
        this.contentNode.style.position = result.style.position;
        styleUpdated = true;
      }
      var newTransform = 'translate3d(' + result.style.left + ', ' + result.style.top + ', 0px)';
      if (this.contentNode.style.transform !== newTransform) {
        this.contentNode.style.transform = newTransform;
        styleUpdated = true;
      }
      if (this.contentNode.style.opacity !== '1') {
        this.contentNode.style.opacity = '1';
        styleUpdated = true;
      }
      if (styleUpdated) {
        this.cachedRects.contentRect = _HookshotUtils2.default.getBounds(this.contentNode);
        result.positions.content.rect = this.cachedRects.contentRect;
      }

      if (this.props.onPosition) {
        this.props.onPosition(event, result.positions);
      }
    }
  }, {
    key: 'update',
    value: function update(event) {
      if (!this.getTargetRef() && !this.props.targetCoordinates || !this.contentNode) {
        return;
      }
      this.updateHookshot(event);
    }
  }, {
    key: 'updateHookshot',
    value: function updateHookshot(event) {
      var resetCache = !event || event.type !== 'scroll' && event.type !== 'touchmove';
      this.position(event, resetCache);
    }
  }, {
    key: 'cloneContent',
    value: function cloneContent(content) {
      return _react2.default.cloneElement(content, { refCallback: this.wrappedRefCallback(content) });
    }
  }, {
    key: 'wrappedRefCallback',
    value: function wrappedRefCallback(content) {
      var _this4 = this;

      var initialRefCallback = content.props.refCallback;

      return function (node) {
        _this4.setContentNode(node);

        if (initialRefCallback) {
          initialRefCallback(node);
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      /* eslint-disable no-unused-vars */
      var _props = this.props,
          attachmentBehavior = _props.attachmentBehavior,
          attachmentMargin = _props.attachmentMargin,
          boundingRef = _props.boundingRef,
          children = _props.children,
          contentAttachment = _props.contentAttachment,
          contentOffset = _props.contentOffset,
          isEnabled = _props.isEnabled,
          isOpen = _props.isOpen,
          targetCoordinates = _props.targetCoordinates,
          targetRef = _props.targetRef,
          targetAttachment = _props.targetAttachment,
          targetOffset = _props.targetOffset,
          onPosition = _props.onPosition;
      /* eslint-enable no-unused-vars */

      if (!isOpen) {
        return null;
      }

      var isRTL = document.getElementsByTagName('html')[0].getAttribute('dir') === 'rtl';
      this.content = {
        offset: _HookshotUtils2.default.getDirectionalOffset(contentOffset, isRTL),
        attachment: _HookshotUtils2.default.getDirectionalAttachment(contentAttachment, isRTL)
      };
      this.target = {
        offset: _HookshotUtils2.default.getDirectionalOffset(targetOffset, isRTL)
      };

      if (targetCoordinates) {
        this.target.attachment = _HookshotUtils2.default.coordinateAttachment;
      } else if (targetAttachment) {
        this.target.attachment = _HookshotUtils2.default.getDirectionalAttachment(targetAttachment, isRTL);
      } else {
        this.target.attachment = _HookshotUtils2.default.mirrorAttachment(this.content.attachment);
      }

      return _react2.default.createElement(
        _reactPortal.Portal,
        { isOpened: isOpen },
        this.cloneContent(children)
      );
    }
  }]);

  return Hookshot;
}(_react2.default.Component);

Hookshot.propTypes = propTypes;
Hookshot.defaultProps = defaultProps;
Hookshot.horizontalAttachments = HORIZONTAL_ATTACHMENTS;
Hookshot.verticalAttachments = VERTICAL_ATTACHMENTS;
Hookshot.attachmentBehaviors = ATTACHMENT_BEHAVIORS;
Hookshot.Utils = _HookshotUtils2.default;
Hookshot.Content = _HookshotContent2.default;

exports.default = Hookshot;