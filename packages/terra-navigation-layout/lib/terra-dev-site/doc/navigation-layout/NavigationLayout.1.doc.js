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

var _NavigationLayout = require('!raw-loader!../../../../src/NavigationLayout.jsx');

var _NavigationLayout2 = _interopRequireDefault(_NavigationLayout);

var _NavigationLayoutStandard = require('../example/NavigationLayoutStandard');

var _NavigationLayoutStandard2 = _interopRequireDefault(_NavigationLayoutStandard);

var _NavigationLayoutStandard3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/NavigationLayoutStandard.jsx');

var _NavigationLayoutStandard4 = _interopRequireDefault(_NavigationLayoutStandard3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enabled import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-framework/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Example Navigation Layout',
      example: _react2.default.createElement(_NavigationLayoutStandard2.default, null),
      source: _NavigationLayoutStandard4.default
    }],
    propsTables: [{
      componentSrc: _NavigationLayout2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;