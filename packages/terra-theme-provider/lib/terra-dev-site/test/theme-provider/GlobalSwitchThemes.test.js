'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ThemeProvider = require('../../../ThemeProvider');

var _ThemeProvider2 = _interopRequireDefault(_ThemeProvider);

var _MockThemeComponent = require('../common/MockThemeComponent');

var _MockThemeComponent2 = _interopRequireDefault(_MockThemeComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SwitchThemes = function (_React$Component) {
  _inherits(SwitchThemes, _React$Component);

  function SwitchThemes(props) {
    _classCallCheck(this, SwitchThemes);

    var _this = _possibleConstructorReturn(this, (SwitchThemes.__proto__ || Object.getPrototypeOf(SwitchThemes)).call(this, props));

    _this.state = {
      themeName: ''
    };
    _this.handleSelectChange = _this.handleSelectChange.bind(_this);
    return _this;
  }

  _createClass(SwitchThemes, [{
    key: 'handleSelectChange',
    value: function handleSelectChange(event) {
      this.setState(_defineProperty({}, event.target.name, event.target.value));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'form',
          null,
          _react2.default.createElement(
            'label',
            { htmlFor: 'themeName' },
            'Theme Switcher'
          ),
          _react2.default.createElement(
            'select',
            { id: 'theme', name: 'themeName', value: this.state.themeName, onChange: this.handleSelectChange },
            _react2.default.createElement(
              'option',
              { value: '' },
              'Default Theme'
            ),
            _react2.default.createElement(
              'option',
              { value: _ThemeProvider2.default.Opts.Themes.MOCK },
              'Mock Theme'
            )
          )
        ),
        _react2.default.createElement(
          _ThemeProvider2.default,
          { id: 'themeProvider', themeName: this.state.themeName, isGlobalTheme: true },
          _react2.default.createElement(
            _MockThemeComponent2.default,
            { id: 'themedComponent' },
            'Theme Provider Test'
          )
        )
      );
    }
  }]);

  return SwitchThemes;
}(_react2.default.Component);

exports.default = SwitchThemes;