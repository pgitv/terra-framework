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

var _Hookshot = require('../../../Hookshot');

var _Hookshot2 = _interopRequireDefault(_Hookshot);

var _HookshotContentTestTemplate = require('./HookshotContentTestTemplate');

var _HookshotContentTestTemplate2 = _interopRequireDefault(_HookshotContentTestTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  /**
   * The hookshot contents props. Defaults to closesOnEsc=true, closeOnOutsideClick=true & closeOnResize=true.
   * onRequestClose is provided by the template.
   */
  hookshotContentProps: _propTypes2.default.any,
  id: _propTypes2.default.string,
  isOpen: _propTypes2.default.bool,
  contentAttachment: _propTypes2.default.string,
  targetAttachment: _propTypes2.default.string,
  buttonMarginLeft: _propTypes2.default.string,
  buttonMarginRight: _propTypes2.default.string,
  buttonMarginTop: _propTypes2.default.string,
  boundingWidth: _propTypes2.default.string,
  attachmentMargin: _propTypes2.default.number
};

var defaultProps = {
  hookshotContentProps: {},
  id: 'hookshot',
  isOpen: false,
  contentAttachment: 'middle end',
  targetAttachment: 'middle start',
  buttonMarginTop: '55px',
  buttonMarginLeft: '220px',
  buttonMarginRight: '220px',
  boundingWidth: '540px'
};

var attachmentValues = function attachmentValues(attachment) {
  if (attachment === 'middle start') {
    return { vertical: 'middle', horizontal: 'start' };
  }if (attachment === 'middle end') {
    return { vertical: 'middle', horizontal: 'end' };
  }if (attachment === 'middle center') {
    return { vertical: 'middle', horizontal: 'center' };
  }if (attachment === 'top start') {
    return { vertical: 'top', horizontal: 'start' };
  }if (attachment === 'top end') {
    return { vertical: 'top', horizontal: 'end' };
  }if (attachment === 'top center') {
    return { vertical: 'top', horizontal: 'center' };
  }if (attachment === 'bottom start') {
    return { vertical: 'bottom', horizontal: 'start' };
  }if (attachment === 'bottom end') {
    return { vertical: 'bottom', horizontal: 'end' };
  }
  return { vertical: 'bottom', horizontal: 'center' };
};

var HookshotTemplate = function (_React$Component) {
  _inherits(HookshotTemplate, _React$Component);

  function HookshotTemplate(props) {
    _classCallCheck(this, HookshotTemplate);

    var _this = _possibleConstructorReturn(this, (HookshotTemplate.__proto__ || Object.getPrototypeOf(HookshotTemplate)).call(this, props));

    _this.triggerHookshot = _this.triggerHookshot.bind(_this);
    _this.handleRequestClose = _this.handleRequestClose.bind(_this);
    _this.state = { open: props.isOpen };
    return _this;
  }

  _createClass(HookshotTemplate, [{
    key: 'triggerHookshot',
    value: function triggerHookshot() {
      this.setState({ open: true });
    }
  }, {
    key: 'handleRequestClose',
    value: function handleRequestClose() {
      this.setState({ open: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          hookshotContentProps = _props.hookshotContentProps,
          id = _props.id,
          isOpen = _props.isOpen,
          contentAttachment = _props.contentAttachment,
          targetAttachment = _props.targetAttachment,
          buttonMarginLeft = _props.buttonMarginLeft,
          buttonMarginRight = _props.buttonMarginRight,
          buttonMarginTop = _props.buttonMarginTop,
          boundingWidth = _props.boundingWidth,
          attachmentMargin = _props.attachmentMargin,
          hookshotProps = _objectWithoutProperties(_props, ['hookshotContentProps', 'id', 'isOpen', 'contentAttachment', 'targetAttachment', 'buttonMarginLeft', 'buttonMarginRight', 'buttonMarginTop', 'boundingWidth', 'attachmentMargin']);

      return _react2.default.createElement(
        'div',
        { id: id + '-bounds', style: { border: '1px dashed grey', height: '145px', width: boundingWidth } },
        _react2.default.createElement(
          _Hookshot2.default,
          _extends({
            id: id,
            contentAttachment: attachmentValues(contentAttachment),
            targetAttachment: attachmentValues(targetAttachment),
            attachmentMargin: attachmentMargin,
            isEnabled: true,
            isOpen: this.state.open,
            targetRef: function targetRef() {
              return document.getElementById('trigger-' + id);
            },
            boundingRef: function boundingRef() {
              return document.getElementById(id + '-bounds');
            }
          }, hookshotProps),
          _react2.default.createElement(_HookshotContentTestTemplate2.default, {
            id: id + '-content',
            onEsc: hookshotContentProps.closeOnEsc ? this.handleRequestClose : undefined,
            onOutsideClick: hookshotContentProps.closeOnOutsideClick ? this.handleRequestClose : undefined,
            onResize: hookshotContentProps.closeOnResize ? this.handleRequestClose : undefined
          })
        ),
        _react2.default.createElement(
          'button',
          {
            type: 'button',
            id: 'trigger-' + id,
            style: {
              width: '100px', height: '36px', backgroundColor: 'lightGrey', marginLeft: buttonMarginLeft, marginRight: buttonMarginRight, marginTop: buttonMarginTop
            },
            onClick: this.triggerHookshot
          },
          'Trigger Hookshot'
        )
      );
    }
  }]);

  return HookshotTemplate;
}(_react2.default.Component);

HookshotTemplate.propTypes = propTypes;
HookshotTemplate.defaultProps = defaultProps;

exports.default = HookshotTemplate;