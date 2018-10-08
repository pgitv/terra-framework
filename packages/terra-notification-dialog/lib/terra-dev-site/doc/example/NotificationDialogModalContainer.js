'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _terraAppDelegate = require('terra-app-delegate');

var _terraAppDelegate2 = _interopRequireDefault(_terraAppDelegate);

var _NotificationDialogWithFocus = require('./NotificationDialogWithFocus');

var _NotificationDialogWithFocus2 = _interopRequireDefault(_NotificationDialogWithFocus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotificationDialogModalContainer = function (_React$Component) {
  _inherits(NotificationDialogModalContainer, _React$Component);

  function NotificationDialogModalContainer(props) {
    _classCallCheck(this, NotificationDialogModalContainer);

    var _this = _possibleConstructorReturn(this, (NotificationDialogModalContainer.__proto__ || Object.getPrototypeOf(NotificationDialogModalContainer)).call(this, props));

    _this.disclose = _this.disclose.bind(_this);
    return _this;
  }

  _createClass(NotificationDialogModalContainer, [{
    key: 'disclose',
    value: function disclose() {
      this.props.app.disclose({
        preferredType: 'modal',
        content: {
          key: 'DemoContainer',
          component: _react2.default.createElement(_NotificationDialogWithFocus2.default, null)
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      /* eslint-disable no-unused-vars */
      var app = this.props.app;
      /* eslint-enable no-unused-vars */

      return _react2.default.createElement(_terraButton2.default, { text: 'Disclose', onClick: this.disclose });
    }
  }]);

  return NotificationDialogModalContainer;
}(_react2.default.Component);

NotificationDialogModalContainer.propTypes = {
  app: _terraAppDelegate2.default.propType
};

exports.default = NotificationDialogModalContainer;