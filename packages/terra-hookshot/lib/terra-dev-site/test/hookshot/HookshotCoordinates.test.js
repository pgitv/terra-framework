'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Hookshot = require('../../../Hookshot');

var _Hookshot2 = _interopRequireDefault(_Hookshot);

var _HookshotContentTestTemplate = require('../common/HookshotContentTestTemplate');

var _HookshotContentTestTemplate2 = _interopRequireDefault(_HookshotContentTestTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HookshotTemplate = function (_React$Component) {
  _inherits(HookshotTemplate, _React$Component);

  function HookshotTemplate(props) {
    _classCallCheck(this, HookshotTemplate);

    var _this = _possibleConstructorReturn(this, (HookshotTemplate.__proto__ || Object.getPrototypeOf(HookshotTemplate)).call(this, props));

    _this.triggerHookshot = _this.triggerHookshot.bind(_this);
    _this.handleRequestClose = _this.handleRequestClose.bind(_this);
    _this.state = { open: false };
    return _this;
  }

  _createClass(HookshotTemplate, [{
    key: 'triggerHookshot',
    value: function triggerHookshot() {
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
        { id: 'coords-test', style: { border: '1px dashed grey', height: '300px', width: '300px' } },
        _react2.default.createElement(
          _Hookshot2.default,
          {
            contentAttachment: { vertical: 'top', horizontal: 'start' },
            targetCoordinates: { x: 50, y: 132 },
            isEnabled: true,
            isOpen: this.state.open
          },
          _react2.default.createElement(_HookshotContentTestTemplate2.default, {
            id: 'test-coords-content',
            onEsc: this.handleRequestClose,
            onOutsideClick: this.handleRequestClose
          })
        ),
        _react2.default.createElement(
          'button',
          {
            type: 'button',
            id: 'coords-button',
            onClick: this.triggerHookshot
          },
          'Trigger Hookshot'
        )
      );
    }
  }]);

  return HookshotTemplate;
}(_react2.default.Component);

exports.default = HookshotTemplate;