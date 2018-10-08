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

var _BrandFooter = require('!raw-loader!../../../../src/BrandFooter');

var _BrandFooter2 = _interopRequireDefault(_BrandFooter);

var _DefaultBrandFooter = require('../example/DefaultBrandFooter');

var _DefaultBrandFooter2 = _interopRequireDefault(_DefaultBrandFooter);

var _DefaultBrandFooter3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultBrandFooter.jsx');

var _DefaultBrandFooter4 = _interopRequireDefault(_DefaultBrandFooter3);

var _VerticalBrandFooter = require('../example/VerticalBrandFooter');

var _VerticalBrandFooter2 = _interopRequireDefault(_VerticalBrandFooter);

var _VerticalBrandFooter3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/VerticalBrandFooter.jsx');

var _VerticalBrandFooter4 = _interopRequireDefault(_VerticalBrandFooter3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enabled import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-framework/tree/master/packages/' + _package.name,
    examples: [{
      title: 'BrandFooter - Default',
      example: _react2.default.createElement(_DefaultBrandFooter2.default, null),
      source: _DefaultBrandFooter4.default
    }, {
      title: 'BrandFooter - Vertical Navigation Bar',
      example: _react2.default.createElement(_VerticalBrandFooter2.default, null),
      source: _VerticalBrandFooter4.default
    }],
    propsTables: [{
      componentSrc: _BrandFooter2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;