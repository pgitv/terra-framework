'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraDocTemplate = require('terra-doc-template');

var _terraDocTemplate2 = _interopRequireDefault(_terraDocTemplate);

var _package = require('../../../../package.json');

var _about = require('../../../../docs/about.md');

var _about2 = _interopRequireDefault(_about);

var _usage = require('../../../../docs/usage.md');

var _usage2 = _interopRequireDefault(_usage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _about2.default + '\n' + _usage2.default,
    srcPath: 'https://github.com/cerner/terra-framework/tree/master/packages/' + _package.name
  });
};

exports.default = DocPage;