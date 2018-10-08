'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraDocTemplate = require('terra-doc-template');

var _terraDocTemplate2 = _interopRequireDefault(_terraDocTemplate);

var _package = require('../../../../package.json');

var _example = require('../../../../docs/example.md');

var _example2 = _interopRequireDefault(_example);

var _ExampleApplication = require('../example/ExampleApplication');

var _ExampleApplication2 = _interopRequireDefault(_ExampleApplication);

var _ExampleApplication3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/ExampleApplication');

var _ExampleApplication4 = _interopRequireDefault(_ExampleApplication3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

/* eslint-disable import/no-webpack-loader-syntax, import/first,  import/no-unresolved, import/extensions, , import/no-duplicates */
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _example2.default,
    srcPath: 'https://github.com/cerner/terra-framework/tree/master/packages/' + _package.name,
    examples: [{
      example: _react2.default.createElement(
        'div',
        { style: { height: '500px' } },
        _react2.default.createElement(_ExampleApplication2.default, null)
      ),
      source: _ExampleApplication4.default
    }]
  });
};

exports.default = DocPage;