'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _NotificationDialog = require('../../../NotificationDialog');

var _NotificationDialog2 = _interopRequireDefault(_NotificationDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var clickOK = function clickOK() {
  alert('You clicked OK'); // eslint-disable-line no-alert
};

var NoVariantNotificationDialog = function (_React$Component) {
  _inherits(NoVariantNotificationDialog, _React$Component);

  function NoVariantNotificationDialog() {
    _classCallCheck(this, NoVariantNotificationDialog);

    var _this = _possibleConstructorReturn(this, (NoVariantNotificationDialog.__proto__ || Object.getPrototypeOf(NoVariantNotificationDialog)).call(this));

    _this.state = {
      isOpen: false
    };

    _this.handleOpenModal = _this.handleOpenModal.bind(_this);
    _this.handleCloseModal = _this.handleCloseModal.bind(_this);
    return _this;
  }

  _createClass(NoVariantNotificationDialog, [{
    key: 'handleOpenModal',
    value: function handleOpenModal() {
      this.setState({ isOpen: true });
    }
  }, {
    key: 'handleCloseModal',
    value: function handleCloseModal() {
      this.setState({ isOpen: false });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_NotificationDialog2.default, {
          header: 'No Variant for this dialog',
          isOpen: this.state.isOpen,
          onRequestClose: this.handleCloseModal,
          title: 'Make sure that the title relates directly to the choices.',
          message: 'The Main Instruction is text used to provide more detail or define terminology. Don\u2019t repeat the title verbatim.',
          primaryAction: {
            text: 'OK',
            onClick: clickOK
          },
          secondaryAction: {
            text: 'Close',
            onClick: this.handleCloseModal
          }
        }),
        _react2.default.createElement(_terraButton2.default, { id: 'trigger-notification-dialog', text: 'Trigger Notification Dialog', onClick: this.handleOpenModal })
      );
    }
  }]);

  return NoVariantNotificationDialog;
}(_react2.default.Component);

exports.default = NoVariantNotificationDialog;