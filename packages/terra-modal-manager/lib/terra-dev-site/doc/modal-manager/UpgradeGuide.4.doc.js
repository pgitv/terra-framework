'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraDocTemplate = require('terra-doc-template');

var _terraDocTemplate2 = _interopRequireDefault(_terraDocTemplate);

var _package = require('../../../../package.json');

var _UPGRADEGUIDE = require('../../../../docs/UPGRADEGUIDE.md');

var _UPGRADEGUIDE2 = _interopRequireDefault(_UPGRADEGUIDE);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions */
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    srcPath: 'https://github.com/cerner/terra-framework/tree/master/packages/' + _package.name,
    readme: _UPGRADEGUIDE2.default
  });
};

exports.default = DocPage;