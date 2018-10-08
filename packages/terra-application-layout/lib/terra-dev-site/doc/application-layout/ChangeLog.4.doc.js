'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraDocTemplate = require('terra-doc-template');

var _terraDocTemplate2 = _interopRequireDefault(_terraDocTemplate);

var _CHANGELOG = require('../../../../CHANGELOG.md');

var _CHANGELOG2 = _interopRequireDefault(_CHANGELOG);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: 'terra-application-layout',
    srcPath: 'https://github.com/cerner/terra-framework/tree/master/packages/terra-application-layout',
    readme: _CHANGELOG2.default
  });
};

exports.default = DocPage;