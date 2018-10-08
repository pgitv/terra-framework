'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraDocTemplate = require('terra-doc-template');

var _terraDocTemplate2 = _interopRequireDefault(_terraDocTemplate);

var _package = require('../../../../package.json');

var _README = require('../../../../docs/README.md');

var _README2 = _interopRequireDefault(_README);

var _ThemeProvider = require('!raw-loader!../../../../src/ThemeProvider');

var _ThemeProvider2 = _interopRequireDefault(_ThemeProvider);

var _DefaultThemeProvider = require('../example/DefaultThemeProvider');

var _DefaultThemeProvider2 = _interopRequireDefault(_DefaultThemeProvider);

var _DefaultThemeProvider3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultThemeProvider.jsx');

var _DefaultThemeProvider4 = _interopRequireDefault(_DefaultThemeProvider3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-framework/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Example Theme Provider',
      example: _react2.default.createElement(_DefaultThemeProvider2.default, null),
      source: _DefaultThemeProvider4.default
    }],
    propsTables: [{
      componentSrc: _ThemeProvider2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;