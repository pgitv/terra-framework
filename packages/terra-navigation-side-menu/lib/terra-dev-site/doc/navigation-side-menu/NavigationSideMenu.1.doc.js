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

var _NavigationSideMenu = require('!raw-loader!../../../../src/NavigationSideMenu.jsx');

var _NavigationSideMenu2 = _interopRequireDefault(_NavigationSideMenu);

var _NavigationSideMenuExample = require('../example/NavigationSideMenuExample');

var _NavigationSideMenuExample2 = _interopRequireDefault(_NavigationSideMenuExample);

var _NavigationSideMenuExample3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/NavigationSideMenuExample.jsx');

var _NavigationSideMenuExample4 = _interopRequireDefault(_NavigationSideMenuExample3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enabled import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Examples
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-framework/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Navigation Side Menu Example',
      example: _react2.default.createElement(_NavigationSideMenuExample2.default, null),
      source: _NavigationSideMenuExample4.default
    }],
    propsTables: [{
      componentSrc: _NavigationSideMenu2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;