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

var _InfiniteList = require('!raw-loader!../../../../src/InfiniteList.jsx');

var _InfiniteList2 = _interopRequireDefault(_InfiniteList);

var _InfiniteListExample = require('!raw-loader!../../../../src/terra-dev-site/doc/example/InfiniteListExample.jsx');

var _InfiniteListExample2 = _interopRequireDefault(_InfiniteListExample);

var _InfiniteListExample3 = require('../example/InfiniteListExample');

var _InfiniteListExample4 = _interopRequireDefault(_InfiniteListExample3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enabled import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-framework/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Example Infinite List',
      example: _react2.default.createElement(_InfiniteListExample4.default, null),
      source: _InfiniteListExample2.default
    }],
    propsTables: [{
      componentSrc: _InfiniteList2.default
    }]
  });
};

// Example Files


/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;