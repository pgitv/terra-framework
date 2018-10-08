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

var PopupNoHeader = function (_React$Component) {
  _inherits(PopupNoHeader, _React$Component);

  function PopupNoHeader(props) {
    _classCallCheck(this, PopupNoHeader);

    var _this = _possibleConstructorReturn(this, (PopupNoHeader.__proto__ || Object.getPrototypeOf(PopupNoHeader)).call(this, props));

    _this.handleButtonClick = _this.handleButtonClick.bind(_this);
    _this.handleRequestClose = _this.handleRequestClose.bind(_this);
    _this.handleOnChange = _this.handleOnChange.bind(_this);
    _this.setParentNode = _this.setParentNode.bind(_this);
    _this.getParentNode = _this.getParentNode.bind(_this);
    _this.state = { open: false };
    return _this;
  }

  _createClass(PopupNoHeader, [{
    key: 'setParentNode',
    value: function setParentNode(node) {
      this.parentNode = node;
    }
  }, {
    key: 'getParentNode',
    value: function getParentNode() {
      return this.parentNode;
    }
  }, {
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
        {
          style: {
            height: '200px', width: '200px', background: 'aliceblue', overflow: 'hidden'
          },
          ref: this.setParentNode
        },
        _react2.default.createElement(
          _Popup2.default,
          {
            boundingRef: this.getParentNode,
            contentHeight: '240',
            contentWidth: '320',
            isHeaderDisabled: true,
            isOpen: this.state.open,
            onRequestClose: this.handleRequestClose,
            targetRef: function targetRef() {
              return document.getElementById('popup-no-header');
            }
          },
          _react2.default.createElement(_ExamplePopupContent2.default, { onChange: this.handleOnChange })
        ),
        _react2.default.createElement(_terraButton2.default, { id: 'popup-no-header', text: 'No Header Popup', onClick: this.handleButtonClick })
      );
    }
  }]);

  return PopupNoHeader;
}(_react2.default.Component);

exports.default = PopupNoHeader;