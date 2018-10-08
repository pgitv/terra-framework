'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _Popup = require('terra-popup/lib/Popup');

var _Popup2 = _interopRequireDefault(_Popup);

var _ExamplePopupContent = require('terra-popup/lib/terra-dev-site/doc/common/ExamplePopupContent');

var _ExamplePopupContent2 = _interopRequireDefault(_ExamplePopupContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */


/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

var PopupAttachmentBehavior = function (_React$Component) {
  _inherits(PopupAttachmentBehavior, _React$Component);

  function PopupAttachmentBehavior(props) {
    _classCallCheck(this, PopupAttachmentBehavior);

    var _this = _possibleConstructorReturn(this, (PopupAttachmentBehavior.__proto__ || Object.getPrototypeOf(PopupAttachmentBehavior)).call(this, props));

    _this.state = { open: false, behavior: 'auto' };

    _this.openPopup = _this.openPopup.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleRequestClose = _this.handleRequestClose.bind(_this);
    return _this;
  }

  _createClass(PopupAttachmentBehavior, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({ behavior: event.target.value });
    }
  }, {
    key: 'handleRequestClose',
    value: function handleRequestClose() {
      this.setState({ open: false });
    }
  }, {
    key: 'openPopup',
    value: function openPopup() {
      this.setState({ open: true });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'label',
          { htmlFor: 'popup-behavior' },
          'Attachment Behavior'
        ),
        _react2.default.createElement(
          'select',
          { onChange: this.handleChange, value: this.state.behavior, style: { margin: '5px' } },
          _react2.default.createElement(
            'option',
            { value: 'auto' },
            'Auto'
          ),
          _react2.default.createElement(
            'option',
            { value: 'flip' },
            'Flip'
          ),
          _react2.default.createElement(
            'option',
            { value: 'push' },
            'Push'
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_terraButton2.default, { id: 'popup-behavior-target', text: 'Open Popup', onClick: this.openPopup }),
          _react2.default.createElement(
            _Popup2.default,
            {
              attachmentBehavior: this.state.behavior,
              contentAttachment: 'top center',
              isArrowDisplayed: true,
              isOpen: this.state.open,
              targetRef: function targetRef() {
                return document.getElementById('popup-behavior-target');
              },
              onRequestClose: this.handleRequestClose
            },
            _react2.default.createElement(_ExamplePopupContent2.default, { onChange: this.handleRequestClose })
          )
        )
      );
    }
  }]);

  return PopupAttachmentBehavior;
}(_react2.default.Component);

exports.default = PopupAttachmentBehavior;