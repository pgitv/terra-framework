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

require('terra-popup/lib/terra-dev-site/doc/example/PopupClassName.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */


/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

var PopupClassName = function (_React$Component) {
  _inherits(PopupClassName, _React$Component);

  function PopupClassName(props) {
    _classCallCheck(this, PopupClassName);

    var _this = _possibleConstructorReturn(this, (PopupClassName.__proto__ || Object.getPrototypeOf(PopupClassName)).call(this, props));

    _this.handleButtonClick = _this.handleButtonClick.bind(_this);
    _this.handleRequestClose = _this.handleRequestClose.bind(_this);
    _this.handleOnChange = _this.handleOnChange.bind(_this);
    _this.state = { open: false };
    return _this;
  }

  _createClass(PopupClassName, [{
    key: 'handleButtonClick',
    value: function handleButtonClick() {
      this.setState({ open: true });
    }
  }, {
    key: 'handleRequestClose',
    value: function handleRequestClose() {
      this.setState({ open: false });
    }
  }, {
    key: 'handleOnChange',
    value: function handleOnChange() {
      this.setState({ open: false });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Popup2.default,
          {
            classNameArrow: 'terra-example-class-arrow',
            classNameContent: 'terra-example-class-content',
            classNameOverlay: 'terra-example-class-overlay',
            isArrowDisplayed: true,
            isOpen: this.state.open,
            onRequestClose: this.handleRequestClose,
            targetRef: function targetRef() {
              return document.getElementById('popup-class-name');
            }
          },
          _react2.default.createElement(_ExamplePopupContent2.default, { onChange: this.handleOnChange })
        ),
        _react2.default.createElement(_terraButton2.default, { id: 'popup-class-name', text: 'Class Name Popup', onClick: this.handleButtonClick })
      );
    }
  }]);

  return PopupClassName;
}(_react2.default.Component);

exports.default = PopupClassName;