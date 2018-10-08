'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Popup = require('../../../Popup');

var _Popup2 = _interopRequireDefault(_Popup);

var _TestPopupContent = require('../common/TestPopupContent');

var _TestPopupContent2 = _interopRequireDefault(_TestPopupContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PopupExample = function (_React$Component) {
  _inherits(PopupExample, _React$Component);

  function PopupExample(props) {
    _classCallCheck(this, PopupExample);

    var _this = _possibleConstructorReturn(this, (PopupExample.__proto__ || Object.getPrototypeOf(PopupExample)).call(this, props));

    _this.handleButtonClick = _this.handleButtonClick.bind(_this);
    _this.handleRequestClose = _this.handleRequestClose.bind(_this);
    _this.setButtonNode = _this.setButtonNode.bind(_this);
    _this.getButtonNode = _this.getButtonNode.bind(_this);
    _this.state = { open: true, size: { height: '40px', width: '100px' } };
    return _this;
  }

  _createClass(PopupExample, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.forceUpdate();
    }
  }, {
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
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { id: 'test-popup-area', style: { height: '300px', width: '500px', background: 'aliceblue' } },
        _react2.default.createElement(
          _Popup2.default,
          {
            classNameArrow: 'test-arrow',
            classNameContent: 'test-content',
            contentHeight: 'auto',
            contentWidth: 'auto',
            isArrowDisplayed: true,
            isOpen: this.state.open,
            targetRef: this.getButtonNode,
            onRequestClose: this.handleRequestClose
          },
          _react2.default.createElement(_TestPopupContent2.default, { size: this.state.size, onClick: function onClick() {
              return _this2.setState({ size: { height: '80px', width: '200px' } });
            } })
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', style: { position: 'absolute', left: '200px' }, id: 'default-button', onClick: this.handleButtonClick, ref: this.setButtonNode },
          'Default Popup'
        )
      );
    }
  }]);

  return PopupExample;
}(_react2.default.Component);

exports.default = PopupExample;