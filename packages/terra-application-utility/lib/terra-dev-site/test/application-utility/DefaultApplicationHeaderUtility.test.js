'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraImage = require('terra-image');

var _terraImage2 = _interopRequireDefault(_terraImage);

var _MockConfig = require('../../doc/common/MockConfig');

var _MockConfig2 = _interopRequireDefault(_MockConfig);

var _FallbackAvatar = require('../../doc/common/FallbackAvatar.svg');

var _FallbackAvatar2 = _interopRequireDefault(_FallbackAvatar);

var _ApplicationUtility = require('../../../ApplicationUtility');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DefaultApplicationHeaderUtility = function (_React$Component) {
  _inherits(DefaultApplicationHeaderUtility, _React$Component);

  function DefaultApplicationHeaderUtility(props) {
    _classCallCheck(this, DefaultApplicationHeaderUtility);

    var _this = _possibleConstructorReturn(this, (DefaultApplicationHeaderUtility.__proto__ || Object.getPrototypeOf(DefaultApplicationHeaderUtility)).call(this, props));

    _this.onDiscloseUtility = _this.onDiscloseUtility.bind(_this);
    _this.state = {
      utilityComponent: false
    };
    return _this;
  }

  _createClass(DefaultApplicationHeaderUtility, [{
    key: 'onDiscloseUtility',
    value: function onDiscloseUtility(utility) {
      if (utility) {
        this.setState(function (prevState) {
          return { utilityComponent: !prevState.utilityComponent };
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var accessory = _react2.default.createElement(_terraImage2.default, { src: _FallbackAvatar2.default });
      var title = 'User Name';

      return _react2.default.createElement(
        'div',
        { style: { height: '60px', position: 'relative', width: '150px' } },
        _react2.default.createElement(_ApplicationUtility.ApplicationHeaderUtility, {
          id: 'default',
          menuItems: (0, _MockConfig2.default)(accessory),
          onChange: function onChange() {},
          onDisclose: this.onDiscloseUtility,
          title: title,
          initialSelectedKey: 'menu',
          accessory: accessory,
          variant: _ApplicationUtility.UtilityUtils.VARIANTS.HEADER
        })
      );
    }
  }]);

  return DefaultApplicationHeaderUtility;
}(_react2.default.Component);

exports.default = DefaultApplicationHeaderUtility;