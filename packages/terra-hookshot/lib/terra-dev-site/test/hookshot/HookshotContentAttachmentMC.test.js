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

var HookshotExample = function (_React$Component) {
  _inherits(HookshotExample, _React$Component);

  function HookshotExample(props) {
    _classCallCheck(this, HookshotExample);

    var _this = _possibleConstructorReturn(this, (HookshotExample.__proto__ || Object.getPrototypeOf(HookshotExample)).call(this, props));

    _this.handleTargetAttachment = _this.handleTargetAttachment.bind(_this);
    _this.state = { attachment: 'top start' };
    return _this;
  }

  _createClass(HookshotExample, [{
    key: 'handleTargetAttachment',
    value: function handleTargetAttachment(event) {
      this.setState({ attachment: event.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_HookshotTestTemplate2.default, {
          id: 'attachment',
          hookshotContentProps: { closeOnEsc: false, closeOnOutsideClick: false, closeOnResize: false },
          contentAttachment: 'middle center',
          targetAttachment: this.state.attachment,
          isOpen: true
        }),
        _react2.default.createElement(
          'p',
          null,
          ' Content attachement: middle center '
        ),
        _react2.default.createElement(
          'p',
          null,
          ' Choose the target attachement: '
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', id: 'attach-TS', value: 'top start', onClick: this.handleTargetAttachment },
          'TOP START'
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', id: 'attach-TC', value: 'top center', onClick: this.handleTargetAttachment },
          'TOP CENTER'
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', id: 'attach-TE', value: 'top end', onClick: this.handleTargetAttachment },
          'TOP END'
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', id: 'attach-MS', value: 'middle start', onClick: this.handleTargetAttachment },
          'MIDDLE START'
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', id: 'attach-MC', value: 'middle center', onClick: this.handleTargetAttachment },
          'MIDDLE CENTER'
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', id: 'attach-ME', value: 'middle end', onClick: this.handleTargetAttachment },
          'MIDDLE END'
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', id: 'attach-BS', value: 'bottom start', onClick: this.handleTargetAttachment },
          'BOTTOM START'
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', id: 'attach-BC', value: 'bottom center', onClick: this.handleTargetAttachment },
          'BOTTOM CENTER'
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', id: 'attach-BE', value: 'bottom end', onClick: this.handleTargetAttachment },
          'BOTTOM END'
        )
      );
    }
  }]);

  return HookshotExample;
}(_react2.default.Component);

exports.default = HookshotExample;