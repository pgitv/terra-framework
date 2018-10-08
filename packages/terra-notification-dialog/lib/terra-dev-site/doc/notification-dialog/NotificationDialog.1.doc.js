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

var _NotificationDialog = require('!raw-loader!../../../../src/NotificationDialog');

var _NotificationDialog2 = _interopRequireDefault(_NotificationDialog);

var _CompleteNotificationDialog = require('../example/CompleteNotificationDialog');

var _CompleteNotificationDialog2 = _interopRequireDefault(_CompleteNotificationDialog);

var _CompleteNotificationDialog3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/CompleteNotificationDialog.jsx');

var _CompleteNotificationDialog4 = _interopRequireDefault(_CompleteNotificationDialog3);

var _CompleteNotificationDialogWithLongMessage = require('../example/CompleteNotificationDialogWithLongMessage');

var _CompleteNotificationDialogWithLongMessage2 = _interopRequireDefault(_CompleteNotificationDialogWithLongMessage);

var _CompleteNotificationDialogWithLongMessage3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/CompleteNotificationDialogWithLongMessage.jsx');

var _CompleteNotificationDialogWithLongMessage4 = _interopRequireDefault(_CompleteNotificationDialogWithLongMessage3);

var _NoVariantNotificationDialog = require('../example/NoVariantNotificationDialog');

var _NoVariantNotificationDialog2 = _interopRequireDefault(_NoVariantNotificationDialog);

var _NoVariantNotificationDialog3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/NoVariantNotificationDialog.jsx');

var _NoVariantNotificationDialog4 = _interopRequireDefault(_NoVariantNotificationDialog3);

var _NotificationDialogWithLongText = require('../example/NotificationDialogWithLongText');

var _NotificationDialogWithLongText2 = _interopRequireDefault(_NotificationDialogWithLongText);

var _NotificationDialogWithLongText3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/NotificationDialogWithLongText.jsx');

var _NotificationDialogWithLongText4 = _interopRequireDefault(_NotificationDialogWithLongText3);

var _NotificationDialogOnModalManager = require('../example/NotificationDialogOnModalManager');

var _NotificationDialogOnModalManager2 = _interopRequireDefault(_NotificationDialogOnModalManager);

var _NotificationDialogOnModalManager3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/NotificationDialogOnModalManager.jsx');

var _NotificationDialogOnModalManager4 = _interopRequireDefault(_NotificationDialogOnModalManager3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enabled import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-framework/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Complete Notification Dialog',
      example: _react2.default.createElement(_CompleteNotificationDialog2.default, null),
      source: _CompleteNotificationDialog4.default
    }, {
      title: 'Complete Notification Dialog With Long Message',
      example: _react2.default.createElement(_CompleteNotificationDialogWithLongMessage2.default, null),
      source: _CompleteNotificationDialogWithLongMessage4.default
    }, {
      title: 'No Variant Notification Dialog',
      example: _react2.default.createElement(_NoVariantNotificationDialog2.default, null),
      source: _NoVariantNotificationDialog4.default
    }, {
      title: 'Notification Dialog With Long Text',
      example: _react2.default.createElement(_NotificationDialogWithLongText2.default, null),
      source: _NotificationDialogWithLongText4.default
    }, {
      title: 'Notification Dialog On Modal Manager',
      example: _react2.default.createElement(_NotificationDialogOnModalManager2.default, null),
      source: _NotificationDialogOnModalManager4.default
    }],
    propsTables: [{
      componentName: 'Notification Dialog',
      componentSrc: _NotificationDialog2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
exports.default = DocPage;