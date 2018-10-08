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

var _ApplicationMenuLayout = require('!raw-loader!../../../../src/ApplicationMenuLayout.jsx');

var _ApplicationMenuLayout2 = _interopRequireDefault(_ApplicationMenuLayout);

var _MenuWireframe = require('../example/MenuWireframe');

var _MenuWireframe2 = _interopRequireDefault(_MenuWireframe);

var _MenuWireframe3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/MenuWireframe.jsx');

var _MenuWireframe4 = _interopRequireDefault(_MenuWireframe3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enabled import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example File
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-framework/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Menu - Wireframe',
      example: _react2.default.createElement(_MenuWireframe2.default, null),
      source: _MenuWireframe4.default
    }],
    propsTables: [{
      componentSrc: _ApplicationMenuLayout2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;