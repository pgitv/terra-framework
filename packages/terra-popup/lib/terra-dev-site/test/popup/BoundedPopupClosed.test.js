'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Popup = require('../../../Popup');

var _Popup2 = _interopRequireDefault(_Popup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BoundedPopupClosed = function (_React$Component) {
  _inherits(BoundedPopupClosed, _React$Component);

  function BoundedPopupClosed(props) {
    _classCallCheck(this, BoundedPopupClosed);

    var _this = _possibleConstructorReturn(this, (BoundedPopupClosed.__proto__ || Object.getPrototypeOf(BoundedPopupClosed)).call(this, props));

    _this.handleButtonClick = _this.handleButtonClick.bind(_this);
    _this.handleRequestClose = _this.handleRequestClose.bind(_this);
    _this.setButtonNode = _this.setButtonNode.bind(_this);
    _this.getButtonNode = _this.getButtonNode.bind(_this);
    _this.setParentNode = _this.setParentNode.bind(_this);
    _this.getParentNode = _this.getParentNode.bind(_this);
    _this.state = { open: false };
    return _this;
  }

  _createClass(BoundedPopupClosed, [{
    key: 'setButtonNode',
    value: function setButtonNode(node) {
      this.buttonNode = node;
    }
  }, {
    key: 'getButtonNode',
    value: function getButtonNode() {
      return this.buttonNode;
    }
  }, {
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
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'test-popup-area', style: { height: '200px', width: '200px', background: 'aliceblue' }, ref: this.setParentNode },
        _react2.default.createElement(
          _Popup2.default,
          {
            boundingRef: this.getParentNode,
            classNameArrow: 'test-arrow',
            classNameContent: 'test-content',
            contentHeight: '240',
            contentWidth: '320',
            isOpen: this.state.open,
            onRequestClose: this.handleRequestClose,
            targetRef: this.getButtonNode
          },
          _react2.default.createElement(
            'p',
            { style: { padding: '5px' } },
            'This popup is bounded and presents a header.'
          )
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', id: 'bounded-button', onClick: this.handleButtonClick, ref: this.setButtonNode },
          'Bounded Popup'
        )
      );
    }
  }]);

  return BoundedPopupClosed;
}(_react2.default.Component);

exports.default = BoundedPopupClosed;