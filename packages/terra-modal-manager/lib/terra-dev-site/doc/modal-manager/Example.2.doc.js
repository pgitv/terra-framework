'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraDocTemplate = require('terra-doc-template');

var _terraDocTemplate2 = _interopRequireDefault(_terraDocTemplate);

var _package = require('../../../../package.json');

var _ModalManagerExample = require('../example/ModalManagerExample');

var _ModalManagerExample2 = _interopRequireDefault(_ModalManagerExample);

var _ModalManagerExample3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/ModalManagerExample');

var _ModalManagerExample4 = _interopRequireDefault(_ModalManagerExample3);

var _example = require('../../../../docs/example.md');

var _example2 = _interopRequireDefault(_example);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-duplicates, import/no-unresolved */
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _example2.default,
    srcPath: 'https://github.com/cerner/terra-framework/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Header - Wireframe',
      example: _react2.default.createElement(_ModalManagerExample2.default, null),
      source: _ModalManagerExample4.default
    }]
  });
};

exports.default = DocPage;