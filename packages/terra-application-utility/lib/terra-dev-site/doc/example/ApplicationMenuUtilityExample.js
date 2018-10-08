'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraImage = require('terra-image');

var _terraImage2 = _interopRequireDefault(_terraImage);

var _MockConfig = require('terra-application-utility/lib/terra-dev-site/doc/common/MockConfig');

var _MockConfig2 = _interopRequireDefault(_MockConfig);

var _FallbackAvatar = require('terra-application-utility/lib/terra-dev-site/doc/common/FallbackAvatar.svg');

var _FallbackAvatar2 = _interopRequireDefault(_FallbackAvatar);

var _ApplicationUtility = require('terra-application-utility/lib/ApplicationUtility');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */


/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

var ApplicationMenuUtilityExample = function (_React$Component) {
  _inherits(ApplicationMenuUtilityExample, _React$Component);

  function ApplicationMenuUtilityExample(props) {
    _classCallCheck(this, ApplicationMenuUtilityExample);

    var _this = _possibleConstructorReturn(this, (ApplicationMenuUtilityExample.__proto__ || Object.getPrototypeOf(ApplicationMenuUtilityExample)).call(this, props));

    _this.onDiscloseUtility = _this.onDiscloseUtility.bind(_this);
    _this.handleOnChange = _this.handleOnChange.bind(_this);
    _this.state = {
      discloseCount: 0,
      selectedKey: null
    };
    return _this;
  }

  _createClass(ApplicationMenuUtilityExample, [{
    key: 'onDiscloseUtility',
    value: function onDiscloseUtility() {
      this.setState(function (prevState) {
        return { discloseCount: prevState.discloseCount + 1 };
      });
    }
  }, {
    key: 'handleOnChange',
    value: function handleOnChange(event, key) {
      this.setState({ selectedKey: key });
    }
  }, {
    key: 'render',
    value: function render() {
      var accessory = _react2.default.createElement(_terraImage2.default, { src: _FallbackAvatar2.default });
      var title = 'User Name';

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { style: { height: '60px', width: '300px', paddingLeft: '4px' } },
          _react2.default.createElement(_ApplicationUtility.ApplicationMenuUtility, {
            id: 'default',
            menuItems: (0, _MockConfig2.default)(accessory),
            onChange: this.handleOnChange,
            onDisclose: this.onDiscloseUtility,
            initialSelectedKey: 'menu',
            title: title,
            accessory: accessory,
            variant: _ApplicationUtility.UtilityUtils.VARIANTS.MENU
          })
        ),
        _react2.default.createElement(
          'div',
          null,
          'Trigger event for: ' + this.state.selectedKey + '.'
        ),
        _react2.default.createElement(
          'div',
          null,
          'Disclose count: ' + this.state.discloseCount + '.'
        )
      );
    }
  }]);

  return ApplicationMenuUtilityExample;
}(_react2.default.Component);

exports.default = ApplicationMenuUtilityExample;