'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Hookshot = require('../../../Hookshot');

var _Hookshot2 = _interopRequireDefault(_Hookshot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HookshotStandard = function (_React$Component) {
  _inherits(HookshotStandard, _React$Component);

  function HookshotStandard(props) {
    _classCallCheck(this, HookshotStandard);

    var _this = _possibleConstructorReturn(this, (HookshotStandard.__proto__ || Object.getPrototypeOf(HookshotStandard)).call(this, props));

    _this.handleButtonClick = _this.handleButtonClick.bind(_this);
    _this.handleRequestClose = _this.handleRequestClose.bind(_this);
    _this.state = { open: false };
    return _this;
  }

  _createClass(HookshotStandard, [{
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
      var hookshotContent = _react2.default.createElement(
        _Hookshot2.default.Content,
        {
          onEsc: this.handleRequestClose,
          onOutsideClick: this.handleRequestClose,
          onResize: this.handleRequestClose,
          id: 'testDefaultContent'
        },
        _react2.default.createElement(
          'div',
          { style: { height: '40px', width: '200px' } },
          'Hookshot'
        )
      );

      return _react2.default.createElement(
        'div',
        {
          id: 'default-bounds',
          style: {
            border: '1px dashed grey', height: '145px', width: '500px', position: 'relative'
          }
        },
        _react2.default.createElement(
          _Hookshot2.default,
          {
            contentAttachment: { vertical: 'bottom', horizontal: 'center' },
            isEnabled: true,
            isOpen: this.state.open,
            targetRef: function targetRef() {
              return document.getElementById('hookshot-standard-button');
            }
          },
          hookshotContent
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', style: { position: 'absolute', left: '210px', top: '50%' }, id: 'hookshot-standard-button', onClick: this.handleButtonClick },
          'Default Hookshot'
        )
      );
    }
  }]);

  return HookshotStandard;
}(_react2.default.Component);

exports.default = HookshotStandard;