'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _terraAppDelegate = require('terra-app-delegate');

var _terraAppDelegate2 = _interopRequireDefault(_terraAppDelegate);

var _Popup = require('../../../Popup');

var _Popup2 = _interopRequireDefault(_Popup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalContent = function (_React$Component) {
  _inherits(ModalContent, _React$Component);

  function ModalContent(props) {
    _classCallCheck(this, ModalContent);

    var _this = _possibleConstructorReturn(this, (ModalContent.__proto__ || Object.getPrototypeOf(ModalContent)).call(this, props));

    _this.handlePopupButtonClick = _this.handlePopupButtonClick.bind(_this);
    _this.handlePopupRequestClose = _this.handlePopupRequestClose.bind(_this);
    _this.handlePopupOnChange = _this.handlePopupOnChange.bind(_this);
    _this.state = { open: false };
    return _this;
  }

  _createClass(ModalContent, [{
    key: 'handlePopupButtonClick',
    value: function handlePopupButtonClick() {
      this.setState({ open: true });
    }
  }, {
    key: 'handlePopupRequestClose',
    value: function handlePopupRequestClose() {
      this.setState({ open: false });
    }
  }, {
    key: 'handlePopupOnChange',
    value: function handlePopupOnChange() {
      this.setState({ open: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var app = this.props.app;


      return _react2.default.createElement(
        'div',
        { id: 'test-popup-area', className: 'content-container', style: { height: '100%', padding: '10px' } },
        app && app.releaseFocus ? _react2.default.createElement(
          'h4',
          null,
          'Modal focus is released!'
        ) : null,
        app && app.requestFocus ? _react2.default.createElement(
          'h4',
          null,
          'Modal focus is trapped!'
        ) : null,
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          _Popup2.default,
          {
            isArrowDisplayed: true,
            classNameContent: 'test-content',
            isOpen: this.state.open,
            onRequestClose: this.handlePopupRequestClose,
            targetRef: function targetRef() {
              return document.getElementById('popup-in-modal');
            },
            releaseFocus: app.releaseFocus,
            requestFocus: app.requestFocus
          },
          _react2.default.createElement(
            'p',
            null,
            'This is popup content'
          )
        ),
        _react2.default.createElement(_terraButton2.default, { id: 'popup-in-modal', style: { position: 'absolute', left: '125px' }, text: 'Popup In Modal', onClick: this.handlePopupButtonClick }),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(_terraButton2.default, { className: 'close-disclosure', text: 'Close Disclosure', onClick: app.closeDisclosure })
      );
    }
  }]);

  return ModalContent;
}(_react2.default.Component);

ModalContent.propTypes = {
  app: _terraAppDelegate2.default.propType
};

exports.default = ModalContent;