'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ThemeProvider = require('../../../ThemeProvider');

var _ThemeProvider2 = _interopRequireDefault(_ThemeProvider);

var _MockThemeComponent = require('../common/MockThemeComponent');

var _MockThemeComponent2 = _interopRequireDefault(_MockThemeComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DefaultThemeProvider = function DefaultThemeProvider() {
  return _react2.default.createElement(
    _ThemeProvider2.default,
    { id: 'themeProvider', themeName: 'cerner-mock-theme', isGlobalTheme: true },
    _react2.default.createElement(
      _MockThemeComponent2.default,
      { id: 'themedComponent' },
      'Theme Provider Test'
    )
  );
};

exports.default = DefaultThemeProvider;