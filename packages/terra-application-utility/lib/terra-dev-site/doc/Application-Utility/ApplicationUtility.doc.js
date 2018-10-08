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

var _ApplicationHeaderUtility = require('!raw-loader!../../../../src/ApplicationHeaderUtility.jsx');

var _ApplicationHeaderUtility2 = _interopRequireDefault(_ApplicationHeaderUtility);

var _ApplicationHeaderUtilityExample = require('../example/ApplicationHeaderUtilityExample');

var _ApplicationHeaderUtilityExample2 = _interopRequireDefault(_ApplicationHeaderUtilityExample);

var _ApplicationMenuUtilityExample = require('../example/ApplicationMenuUtilityExample');

var _ApplicationMenuUtilityExample2 = _interopRequireDefault(_ApplicationMenuUtilityExample);

var _MenuUtilityMenuExample = require('../example/MenuUtilityMenuExample');

var _MenuUtilityMenuExample2 = _interopRequireDefault(_MenuUtilityMenuExample);

var _ApplicationHeaderUtilityExample3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/ApplicationHeaderUtilityExample.jsx');

var _ApplicationHeaderUtilityExample4 = _interopRequireDefault(_ApplicationHeaderUtilityExample3);

var _MenuUtilityMenuExample3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/MenuUtilityMenuExample.jsx');

var _MenuUtilityMenuExample4 = _interopRequireDefault(_MenuUtilityMenuExample3);

var _ApplicationMenuUtilityExample3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/ApplicationMenuUtilityExample.jsx');

var _ApplicationMenuUtilityExample4 = _interopRequireDefault(_ApplicationMenuUtilityExample3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enabled import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example File
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-framework/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Header: Utility',
      example: _react2.default.createElement(_ApplicationHeaderUtilityExample2.default, null),
      source: _ApplicationHeaderUtilityExample4.default
    }, {
      title: 'Menu: Utility',
      example: _react2.default.createElement(_ApplicationMenuUtilityExample2.default, null),
      source: _ApplicationMenuUtilityExample4.default
    }, {
      title: 'Utility Menu',
      example: _react2.default.createElement(_MenuUtilityMenuExample2.default, null),
      source: _MenuUtilityMenuExample4.default
    }],
    propsTables: [{
      componentSrc: _ApplicationHeaderUtility2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;