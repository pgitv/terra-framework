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

var _Layout = require('!raw-loader!../../../../src/Layout.jsx');

var _Layout2 = _interopRequireDefault(_Layout);

var _LayoutStandard = require('../example/LayoutStandard');

var _LayoutStandard2 = _interopRequireDefault(_LayoutStandard);

var _LayoutStandard3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/LayoutStandard.jsx');

var _LayoutStandard4 = _interopRequireDefault(_LayoutStandard3);

var _LayoutMenuDisabled = require('../example/LayoutMenuDisabled');

var _LayoutMenuDisabled2 = _interopRequireDefault(_LayoutMenuDisabled);

var _LayoutMenuDisabled3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/LayoutMenuDisabled.jsx');

var _LayoutMenuDisabled4 = _interopRequireDefault(_LayoutMenuDisabled3);

var _LayoutNoHeader = require('../example/LayoutNoHeader');

var _LayoutNoHeader2 = _interopRequireDefault(_LayoutNoHeader);

var _LayoutNoHeader3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/LayoutNoHeader.jsx');

var _LayoutNoHeader4 = _interopRequireDefault(_LayoutNoHeader3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enabled import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-framework/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Layout - Standard',
      example: _react2.default.createElement(_LayoutStandard2.default, null),
      source: _LayoutStandard4.default
    }, {
      title: 'Layout - No Menu',
      example: _react2.default.createElement(_LayoutMenuDisabled2.default, null),
      source: _LayoutMenuDisabled4.default
    }, {
      title: 'Layout - No Header',
      example: _react2.default.createElement(_LayoutNoHeader2.default, null),
      source: _LayoutNoHeader4.default
    }],
    propsTables: [{
      componentSrc: _Layout2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;