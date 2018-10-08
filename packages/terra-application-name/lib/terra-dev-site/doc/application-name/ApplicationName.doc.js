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

var _ApplicationHeaderName = require('!raw-loader!../../../../src/ApplicationHeaderName.jsx');

var _ApplicationHeaderName2 = _interopRequireDefault(_ApplicationHeaderName);

var _ApplicationHeaderNameStandard = require('!raw-loader!../../../../src/terra-dev-site/doc/example/ApplicationHeaderNameStandard.jsx');

var _ApplicationHeaderNameStandard2 = _interopRequireDefault(_ApplicationHeaderNameStandard);

var _ApplicationMenuNameStandard = require('!raw-loader!../../../../src/terra-dev-site/doc/example/ApplicationMenuNameStandard.jsx');

var _ApplicationMenuNameStandard2 = _interopRequireDefault(_ApplicationMenuNameStandard);

var _ApplicationHeaderNameStandard3 = require('../example/ApplicationHeaderNameStandard');

var _ApplicationHeaderNameStandard4 = _interopRequireDefault(_ApplicationHeaderNameStandard3);

var _ApplicationMenuNameStandard3 = require('../example/ApplicationMenuNameStandard');

var _ApplicationMenuNameStandard4 = _interopRequireDefault(_ApplicationMenuNameStandard3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enabled import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-framework/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Application Header Name',
      example: _react2.default.createElement(_ApplicationHeaderNameStandard4.default, null),
      source: _ApplicationHeaderNameStandard2.default
    }, {
      title: 'Application Menu Name',
      example: _react2.default.createElement(_ApplicationMenuNameStandard4.default, null),
      source: _ApplicationMenuNameStandard2.default
    }],
    propsTables: [{
      componentSrc: _ApplicationHeaderName2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;