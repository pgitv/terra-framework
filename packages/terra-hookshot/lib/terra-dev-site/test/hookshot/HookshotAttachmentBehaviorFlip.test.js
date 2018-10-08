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

var HookshotAttachmentBehaviorFlip = function (_React$Component) {
  _inherits(HookshotAttachmentBehaviorFlip, _React$Component);

  function HookshotAttachmentBehaviorFlip(props) {
    _classCallCheck(this, HookshotAttachmentBehaviorFlip);

    var _this = _possibleConstructorReturn(this, (HookshotAttachmentBehaviorFlip.__proto__ || Object.getPrototypeOf(HookshotAttachmentBehaviorFlip)).call(this, props));

    _this.handlePositionClick = _this.handlePositionClick.bind(_this);
    _this.state = { position: 'primary' };
    return _this;
  }

  _createClass(HookshotAttachmentBehaviorFlip, [{
    key: 'handlePositionClick',
    value: function handlePositionClick(event) {
      this.setState({ position: event.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      var buttonMarginLeft = void 0;
      var boundingWidth = void 0;

      if (this.state.position === 'flipped') {
        buttonMarginLeft = '50px';
      } else if (this.state.position === 'pushed') {
        buttonMarginLeft = '60px';
        boundingWidth = '220px';
      }
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_HookshotTestTemplate2.default, {
          attachmentBehavior: 'flip',
          id: 'attachment-behavior-flip',
          isOpen: false,
          buttonMarginLeft: buttonMarginLeft,
          boundingWidth: boundingWidth
        }),
        _react2.default.createElement(
          'p',
          null,
          ' Choose the positioning behavior '
        ),
        _react2.default.createElement(
          'p',
          null,
          ' Primary position is on the middle right'
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', id: 'position-primary', value: 'primary', onClick: this.handlePositionClick },
          'Primary'
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', id: 'position-flipped', value: 'flipped', onClick: this.handlePositionClick },
          'Flipped'
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', id: 'position-pushed', value: 'pushed', onClick: this.handlePositionClick },
          'Pushed by bounds'
        )
      );
    }
  }]);

  return HookshotAttachmentBehaviorFlip;
}(_react2.default.Component);

exports.default = HookshotAttachmentBehaviorFlip;