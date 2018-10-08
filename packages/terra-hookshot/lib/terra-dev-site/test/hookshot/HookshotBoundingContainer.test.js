'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HookshotTestTemplate = require('../common/HookshotTestTemplate');

var _HookshotTestTemplate2 = _interopRequireDefault(_HookshotTestTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HookshotBoundingContainer = function (_React$Component) {
  _inherits(HookshotBoundingContainer, _React$Component);

  function HookshotBoundingContainer(props) {
    _classCallCheck(this, HookshotBoundingContainer);

    var _this = _possibleConstructorReturn(this, (HookshotBoundingContainer.__proto__ || Object.getPrototypeOf(HookshotBoundingContainer)).call(this, props));

    _this.handlePositionClick = _this.handlePositionClick.bind(_this);
    _this.state = { position: 'up' };
    return _this;
  }

  _createClass(HookshotBoundingContainer, [{
    key: 'handlePositionClick',
    value: function handlePositionClick(event) {
      this.setState({ position: event.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      var buttonMarginLeft = void 0;
      var buttonMarginRight = void 0;
      var buttonMarginTop = void 0;
      var targetAttachment = void 0;
      var contentAttachment = void 0;

      if (this.state.position === 'up') {
        buttonMarginTop = '100px';
      } else if (this.state.position === 'down') {
        buttonMarginTop = '20px';
      } else if (this.state.position === 'left') {
        buttonMarginLeft = '300px';
        buttonMarginRight = '140px';
        targetAttachment = 'middle end';
        contentAttachment = 'middle start';
      } else if (this.state.position === 'right') {
        buttonMarginLeft = '50px';
      }
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_HookshotTestTemplate2.default, {
          isOpen: false,
          buttonMarginTop: buttonMarginTop,
          buttonMarginLeft: buttonMarginLeft,
          buttonMarginRight: buttonMarginRight,
          targetAttachment: targetAttachment,
          contentAttachment: contentAttachment,
          id: 'bounding-container'
        }),
        _react2.default.createElement(
          'p',
          null,
          ' Position should be pushed by bounding container '
        ),
        _react2.default.createElement(
          'p',
          null,
          ' Choose position behavior '
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', id: 'push-up', value: 'up', onClick: this.handlePositionClick },
          'Pushed Up'
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', id: 'push-down', value: 'down', onClick: this.handlePositionClick },
          'Pushed Down'
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', id: 'push-left', value: 'left', onClick: this.handlePositionClick },
          'Pushed Left'
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', id: 'push-right', value: 'right', onClick: this.handlePositionClick },
          'Pushed Right'
        )
      );
    }
  }]);

  return HookshotBoundingContainer;
}(_react2.default.Component);

exports.default = HookshotBoundingContainer;