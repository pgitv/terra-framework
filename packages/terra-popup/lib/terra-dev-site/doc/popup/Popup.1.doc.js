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

var _Popup = require('!raw-loader!../../../../src/Popup.jsx');

var _Popup2 = _interopRequireDefault(_Popup);

var _PopupStandard = require('../example/PopupStandard');

var _PopupStandard2 = _interopRequireDefault(_PopupStandard);

var _PopupStandard3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/PopupStandard.jsx');

var _PopupStandard4 = _interopRequireDefault(_PopupStandard3);

var _PopupBounded = require('../example/PopupBounded');

var _PopupBounded2 = _interopRequireDefault(_PopupBounded);

var _PopupBounded3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/PopupBounded.jsx');

var _PopupBounded4 = _interopRequireDefault(_PopupBounded3);

var _PopupNoHeader = require('../example/PopupNoHeader');

var _PopupNoHeader2 = _interopRequireDefault(_PopupNoHeader);

var _PopupNoHeader3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/PopupNoHeader.jsx');

var _PopupNoHeader4 = _interopRequireDefault(_PopupNoHeader3);

var _PopupWithArrow = require('../example/PopupWithArrow');

var _PopupWithArrow2 = _interopRequireDefault(_PopupWithArrow);

var _PopupWithArrow3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/PopupWithArrow.jsx');

var _PopupWithArrow4 = _interopRequireDefault(_PopupWithArrow3);

var _PopupClassName = require('../example/PopupClassName');

var _PopupClassName2 = _interopRequireDefault(_PopupClassName);

var _PopupClassName3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/PopupClassName.jsx');

var _PopupClassName4 = _interopRequireDefault(_PopupClassName3);

var _PopupDimensions = require('../example/PopupDimensions');

var _PopupDimensions2 = _interopRequireDefault(_PopupDimensions);

var _PopupDimensions3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/PopupDimensions.jsx');

var _PopupDimensions4 = _interopRequireDefault(_PopupDimensions3);

var _PopupInsideModal = require('../example/PopupInsideModal');

var _PopupInsideModal2 = _interopRequireDefault(_PopupInsideModal);

var _PopupInsideModal3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/PopupInsideModal.jsx');

var _PopupInsideModal4 = _interopRequireDefault(_PopupInsideModal3);

var _PopupAttachmentBehavior = require('../example/PopupAttachmentBehavior');

var _PopupAttachmentBehavior2 = _interopRequireDefault(_PopupAttachmentBehavior);

var _PopupAttachmentBehavior3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/PopupAttachmentBehavior.jsx');

var _PopupAttachmentBehavior4 = _interopRequireDefault(_PopupAttachmentBehavior3);

var _PopupAttachments = require('../example/PopupAttachments');

var _PopupAttachments2 = _interopRequireDefault(_PopupAttachments);

var _PopupAttachments3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/PopupAttachments.jsx');

var _PopupAttachments4 = _interopRequireDefault(_PopupAttachments3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enabled import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-framework/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Popup Default Props',
      example: _react2.default.createElement(_PopupStandard2.default, null),
      source: _PopupStandard4.default
    }, {
      title: 'Popup Display With Arrow',
      example: _react2.default.createElement(_PopupWithArrow2.default, null),
      source: _PopupWithArrow4.default
    }, {
      title: 'Popup Attachment Behavior',
      example: _react2.default.createElement(_PopupAttachmentBehavior2.default, null),
      source: _PopupAttachmentBehavior4.default
    }, {
      title: 'Popup Attachments',
      example: _react2.default.createElement(_PopupAttachments2.default, null),
      source: _PopupAttachments4.default
    }, {
      title: 'Popup Size Variants',
      example: _react2.default.createElement(_PopupDimensions2.default, null),
      source: _PopupDimensions4.default
    }, {
      title: 'Popup Bounded',
      example: _react2.default.createElement(_PopupBounded2.default, null),
      source: _PopupBounded4.default
    }, {
      title: 'Popup Bounded With No Header',
      example: _react2.default.createElement(_PopupNoHeader2.default, null),
      source: _PopupNoHeader4.default
    }, {
      title: 'Popup Adding Class',
      example: _react2.default.createElement(_PopupClassName2.default, null),
      source: _PopupClassName4.default
    }, {
      title: 'Popup Inside Modal',
      example: _react2.default.createElement(_PopupInsideModal2.default, null),
      source: _PopupInsideModal4.default
    }],
    propsTables: [{
      componentSrc: _Popup2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;