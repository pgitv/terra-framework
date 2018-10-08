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

var _Hookshot = require('!raw-loader!../../../../src/Hookshot');

var _Hookshot2 = _interopRequireDefault(_Hookshot);

var _HookshotContent = require('!raw-loader!../../../../src/HookshotContent');

var _HookshotContent2 = _interopRequireDefault(_HookshotContent);

var _HookshotExample = require('!raw-loader!../../../../src/terra-dev-site/doc/example/HookshotExample.jsx');

var _HookshotExample2 = _interopRequireDefault(_HookshotExample);

var _BoundedHookshotExample = require('!raw-loader!../../../../src/terra-dev-site/doc/example/BoundedHookshotExample.jsx');

var _BoundedHookshotExample2 = _interopRequireDefault(_BoundedHookshotExample);

var _CoordsHookshotExample = require('!raw-loader!../../../../src/terra-dev-site/doc/example/CoordsHookshotExample.jsx');

var _CoordsHookshotExample2 = _interopRequireDefault(_CoordsHookshotExample);

var _HookshotExample3 = require('../example/HookshotExample');

var _HookshotExample4 = _interopRequireDefault(_HookshotExample3);

var _BoundedHookshotExample3 = require('../example/BoundedHookshotExample');

var _BoundedHookshotExample4 = _interopRequireDefault(_BoundedHookshotExample3);

var _CoordsHookshotExample3 = require('../example/CoordsHookshotExample');

var _CoordsHookshotExample4 = _interopRequireDefault(_CoordsHookshotExample3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-framework/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Window Bound Hookshot',
      example: _react2.default.createElement(_HookshotExample4.default, null),
      source: _HookshotExample2.default
    }, {
      title: 'Container Bound Hookshot',
      example: _react2.default.createElement(_BoundedHookshotExample4.default, null),
      source: _BoundedHookshotExample2.default
    }, {
      title: 'Coordinate Targeted Hookshot',
      example: _react2.default.createElement(_CoordsHookshotExample4.default, null),
      source: _CoordsHookshotExample2.default
    }],
    propsTables: [{
      componentName: 'Hookshot',
      componentSrc: _Hookshot2.default
    }, {
      componentName: 'Hookshot Content',
      componentSrc: _HookshotContent2.default
    }]
  });
};

// Example Files
exports.default = DocPage;