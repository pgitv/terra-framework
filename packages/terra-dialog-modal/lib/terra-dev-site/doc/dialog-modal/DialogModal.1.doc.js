'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraDocTemplate = require('terra-doc-template');

var _terraDocTemplate2 = _interopRequireDefault(_terraDocTemplate);

var _README = require('../../../../docs/README.md');

var _README2 = _interopRequireDefault(_README);

var _package = require('../../../../package.json');

var _DialogModal = require('!raw-loader!../../../../src/DialogModal');

var _DialogModal2 = _interopRequireDefault(_DialogModal);

var _DefaultDialogModal = require('../example/DefaultDialogModal');

var _DefaultDialogModal2 = _interopRequireDefault(_DefaultDialogModal);

var _DefaultDialogModal3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultDialogModal.jsx');

var _DefaultDialogModal4 = _interopRequireDefault(_DefaultDialogModal3);

var _DialogModalWithLongText = require('../example/DialogModalWithLongText');

var _DialogModalWithLongText2 = _interopRequireDefault(_DialogModalWithLongText);

var _DialogModalWithLongText3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/DialogModalWithLongText.jsx');

var _DialogModalWithLongText4 = _interopRequireDefault(_DialogModalWithLongText3);

var _DialogModalOnModalManager = require('../example/DialogModalOnModalManager');

var _DialogModalOnModalManager2 = _interopRequireDefault(_DialogModalOnModalManager);

var _DialogModalOnModalManager3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/DialogModalOnModalManager.jsx');

var _DialogModalOnModalManager4 = _interopRequireDefault(_DialogModalOnModalManager3);

var _DialogModalWithCustomHeaderAndCustomFooter = require('../example/DialogModalWithCustomHeaderAndCustomFooter');

var _DialogModalWithCustomHeaderAndCustomFooter2 = _interopRequireDefault(_DialogModalWithCustomHeaderAndCustomFooter);

var _DialogModalWithCustomHeaderAndCustomFooter3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/DialogModalWithCustomHeaderAndCustomFooter.jsx');

var _DialogModalWithCustomHeaderAndCustomFooter4 = _interopRequireDefault(_DialogModalWithCustomHeaderAndCustomFooter3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enabled import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DialogModalExamples = function DialogModalExamples() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-framework/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Default Dialog Modal',
      example: _react2.default.createElement(_DefaultDialogModal2.default, null),
      source: _DefaultDialogModal4.default
    }, {
      title: 'Dialog Modal With Long Text',
      example: _react2.default.createElement(_DialogModalWithLongText2.default, null),
      source: _DialogModalWithLongText4.default
    }, {
      title: 'Dialog Modal On Modal Manager',
      example: _react2.default.createElement(_DialogModalOnModalManager2.default, null),
      source: _DialogModalOnModalManager4.default
    }, {
      title: 'Dialog Modal With Custom Header and Custom Footer',
      example: _react2.default.createElement(_DialogModalWithCustomHeaderAndCustomFooter2.default, null),
      source: _DialogModalWithCustomHeaderAndCustomFooter4.default
    }],
    propsTables: [{
      componentName: 'Dialog Modal',
      componentSrc: _DialogModal2.default
    }]
  });
};

// Component Source
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
exports.default = DialogModalExamples;