'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraAbstractModal = require('terra-abstract-modal');

var _terraAbstractModal2 = _interopRequireDefault(_terraAbstractModal);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

require('terra-base/lib/baseStyles');

var _DialogModalModule = require('./DialogModal.module.scss');

var _DialogModalModule2 = _interopRequireDefault(_DialogModalModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_DialogModalModule2.default);

var widthFromSize = {
  320: 320,
  640: 640,
  960: 960,
  1120: 1120,
  1280: 1280,
  1600: 1600
};

var propTypes = {
  /**
  * Aria Label of the dialog modal.
  */
  ariaLabel: _propTypes2.default.string.isRequired,
  /**
  * Header of the dialog modal.
  */
  header: _propTypes2.default.element.isRequired,
  /**
  * Footer of the dialog modal.
  */
  footer: _propTypes2.default.element.isRequired,
  /**
  * Contents of the dialog modal.
  */
  children: _propTypes2.default.node,
  /*
   * Callback function indicating a close condition was met.
   */
  onRequestClose: _propTypes2.default.func.isRequired,
  /*
   * Toggle to show dialog modal or not.
   */
  isOpen: _propTypes2.default.bool,
  /*
   * Toggle to focus on dialog modal or not.
   */
  isFocused: _propTypes2.default.bool,
  /**
   * A callback function to let the containing component (e.g. modal) to regain focus.
   */
  releaseFocus: _propTypes2.default.func,
  /**
   * A callback function to request focus from the containing component (e.g. modal).
   */
  requestFocus: _propTypes2.default.func,
  /**
   * Width of the dialog modal. Allows one of `320`, `640`, `960`, `1120`, `1280`, or `1600`.
   *
   * _(Uses same sizes as terra-modal-manager: tiny:320, small:640, medium:960, default:1120, large:1280, huge:1600)_
   */
  width: _propTypes2.default.oneOf(Object.keys(widthFromSize))
};

var defaultProps = {
  children: null,
  isOpen: false,
  isFocused: false,
  releaseFocus: null,
  requestFocus: null,
  width: '1120'
};

var DialogModal = function (_React$Component) {
  _inherits(DialogModal, _React$Component);

  function DialogModal() {
    _classCallCheck(this, DialogModal);

    return _possibleConstructorReturn(this, (DialogModal.__proto__ || Object.getPrototypeOf(DialogModal)).apply(this, arguments));
  }

  _createClass(DialogModal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.isFocused && this.props.isOpen && this.props.requestFocus) {
        this.props.requestFocus();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.isOpen) {
        if (this.props.requestFocus) {
          this.props.requestFocus();
        }
      } else if (this.props.releaseFocus) {
        this.props.releaseFocus();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.releaseFocus) {
        this.props.releaseFocus();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          header = _props.header,
          footer = _props.footer,
          children = _props.children,
          onRequestClose = _props.onRequestClose,
          isOpen = _props.isOpen,
          releaseFocus = _props.releaseFocus,
          requestFocus = _props.requestFocus,
          ariaLabel = _props.ariaLabel,
          isFocused = _props.isFocused,
          width = _props.width,
          customProps = _objectWithoutProperties(_props, ['header', 'footer', 'children', 'onRequestClose', 'isOpen', 'releaseFocus', 'requestFocus', 'ariaLabel', 'isFocused', 'width']);

      if (!this.props.isOpen) {
        return null;
      }

      var classArray = ['dialog-modal-wrapper'];
      if (width in widthFromSize) {
        classArray.push('width-' + widthFromSize[width]);
      } else {
        classArray.push('width-1120');
      }

      return _react2.default.createElement(
        _terraAbstractModal2.default,
        {
          ariaLabel: this.props.ariaLabel,
          role: 'dialog',
          classNameModal: cx(classArray),
          isOpen: this.props.isOpen,
          onRequestClose: this.props.onRequestClose,
          zIndex: '8000'
        },
        _react2.default.createElement(
          'div',
          _extends({}, customProps, { className: cx('dialog-modal-inner-wrapper', customProps.className) }),
          _react2.default.createElement(
            'div',
            { className: cx('dialog-modal-container') },
            _react2.default.createElement(
              'div',
              null,
              header
            ),
            _react2.default.createElement(
              'div',
              { className: cx('dialog-modal-body') },
              children
            ),
            _react2.default.createElement(
              'div',
              null,
              footer
            )
          )
        )
      );
    }
  }]);

  return DialogModal;
}(_react2.default.Component);

DialogModal.propTypes = propTypes;
DialogModal.defaultProps = defaultProps;

exports.default = DialogModal;