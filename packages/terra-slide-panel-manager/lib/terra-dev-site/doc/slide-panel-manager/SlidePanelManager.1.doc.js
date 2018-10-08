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

var _SlidePanelManager = require('!raw-loader!../../../../src/SlidePanelManager.jsx');

var _SlidePanelManager2 = _interopRequireDefault(_SlidePanelManager);

var _SlidePanelManagerExample = require('../example/SlidePanelManagerExample');

var _SlidePanelManagerExample2 = _interopRequireDefault(_SlidePanelManagerExample);

var _SlidePanelManagerExample3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/SlidePanelManagerExample.jsx');

var _SlidePanelManagerExample4 = _interopRequireDefault(_SlidePanelManagerExample3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Examples
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-framework/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Overlay Example',
      example: _react2.default.createElement(_SlidePanelManagerExample2.default, { behavior: 'overlay' }),
      source: _SlidePanelManagerExample4.default
    }, {
      title: 'Squish Example',
      example: _react2.default.createElement(_SlidePanelManagerExample2.default, { behavior: 'squish' }),
      source: _SlidePanelManagerExample4.default
    }],
    propsTables: [{
      componentSrc: _SlidePanelManager2.default,
      source: _SlidePanelManagerExample4.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;