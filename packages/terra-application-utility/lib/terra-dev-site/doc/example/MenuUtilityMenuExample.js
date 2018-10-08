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

var _UtilityMenu = require('terra-application-utility/lib/utility/_UtilityMenu');

var _UtilityMenu2 = _interopRequireDefault(_UtilityMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */


/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

var MenuUtilityMenuExample = function (_React$Component) {
  _inherits(MenuUtilityMenuExample, _React$Component);

  function MenuUtilityMenuExample(props) {
    _classCallCheck(this, MenuUtilityMenuExample);

    var _this = _possibleConstructorReturn(this, (MenuUtilityMenuExample.__proto__ || Object.getPrototypeOf(MenuUtilityMenuExample)).call(this, props));

    _this.handleOnChange = _this.handleOnChange.bind(_this);
    _this.handleOnRequestClose = _this.handleOnRequestClose.bind(_this);
    _this.state = {
      selectedKey: null,
      requestCloseCount: 0
    };
    return _this;
  }

  _createClass(MenuUtilityMenuExample, [{
    key: 'handleOnChange',
    value: function handleOnChange(event, object) {
      this.setState({ selectedKey: object.key });
    }
  }, {
    key: 'handleOnRequestClose',
    value: function handleOnRequestClose() {
      this.setState(function (prevState) {
        return { requestCloseCount: prevState.requestCloseCount + 1 };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var customComponent = _react2.default.createElement(_terraImage2.default, { src: _FallbackAvatar2.default, style: { width: '1.857rem', height: '1.857rem' } });
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { style: { height: '300px', width: '300px' } },
          _react2.default.createElement(_UtilityMenu2.default, {
            id: 'default',
            initialSelectedKey: 'menu',
            isHeightBounded: true,
            menuItems: (0, _MockConfig2.default)(customComponent),
            onChange: this.handleOnChange,
            onRequestClose: this.handleOnRequestClose,
            variant: _ApplicationUtility.UtilityUtils.VARIANTS.MENU
          })
        ),
        _react2.default.createElement(
          'div',
          null,
          'Trigger event for: ' + this.state.selectedKey
        ),
        _react2.default.createElement(
          'div',
          null,
          'Request close count: ' + this.state.requestCloseCount
        )
      );
    }
  }]);

  return MenuUtilityMenuExample;
}(_react2.default.Component);

exports.default = MenuUtilityMenuExample;