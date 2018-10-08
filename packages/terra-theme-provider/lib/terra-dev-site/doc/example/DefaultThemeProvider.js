'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ThemeProvider = require('terra-theme-provider/lib/ThemeProvider');

var _ThemeProvider2 = _interopRequireDefault(_ThemeProvider);

var _MockThemeComponent = require('terra-theme-provider/lib/terra-dev-site/doc/example/MockThemeComponent');

var _MockThemeComponent2 = _interopRequireDefault(_MockThemeComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */


/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

var DefaultThemeProvider = function (_React$Component) {
  _inherits(DefaultThemeProvider, _React$Component);

  function DefaultThemeProvider(props) {
    _classCallCheck(this, DefaultThemeProvider);

    var _this = _possibleConstructorReturn(this, (DefaultThemeProvider.__proto__ || Object.getPrototypeOf(DefaultThemeProvider)).call(this, props));

    _this.state = {
      theme: ''
    };
    _this.handleThemeChange = _this.handleThemeChange.bind(_this);
    return _this;
  }

  _createClass(DefaultThemeProvider, [{
    key: 'handleThemeChange',
    value: function handleThemeChange(e) {
      this.setState({ theme: e.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      var themeSwitcher = void 0;

      function supportsCSSVars() {
        return window.CSS && window.CSS.supports && window.CSS.supports('(--fake-var: 0)');
      }

      if (supportsCSSVars()) {
        themeSwitcher = _react2.default.createElement(
          'div',
          { style: { marginBottom: '1rem' } },
          _react2.default.createElement(
            'label',
            { htmlFor: 'theme' },
            ' Theme: '
          ),
          _react2.default.createElement(
            'select',
            { value: this.state.theme, onChange: this.handleThemeChange },
            _react2.default.createElement(
              'option',
              { value: '' },
              'Default'
            ),
            _react2.default.createElement(
              'option',
              { value: _ThemeProvider2.default.Opts.Themes.MOCK },
              'Mock Theme'
            )
          )
        );
      } else {
        themeSwitcher = _react2.default.createElement('div', null);
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          themeSwitcher
        ),
        _react2.default.createElement(
          _ThemeProvider2.default,
          { themeName: this.state.theme },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              _MockThemeComponent2.default,
              null,
              'Themable component'
            )
          )
        )
      );
    }
  }]);

  return DefaultThemeProvider;
}(_react2.default.Component);

exports.default = DefaultThemeProvider;