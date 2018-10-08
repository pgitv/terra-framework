'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraDocTemplate = require('terra-doc-template');

var _terraDocTemplate2 = _interopRequireDefault(_terraDocTemplate);

var _reactRouterDom = require('react-router-dom');

var _package = require('../../../../package.json');

var _README = require('../../../../docs/README.md');

var _README2 = _interopRequireDefault(_README);

var _ApplicationLinkConfig = require('../common/ApplicationLinkConfig');

var _ApplicationLinkConfig2 = _interopRequireDefault(_ApplicationLinkConfig);

var _ApplicationTabs = require('!raw-loader!../../../../src/tabs/ApplicationTabs.jsx');

var _ApplicationTabs2 = _interopRequireDefault(_ApplicationTabs);

var _ApplicationTabsExample = require('!raw-loader!../../../../src/terra-dev-site/doc/example/ApplicationTabsExample.jsx');

var _ApplicationTabsExample2 = _interopRequireDefault(_ApplicationTabsExample);

var _ApplicationTabsExample3 = require('../example/ApplicationTabsExample');

var _ApplicationTabsExample4 = _interopRequireDefault(_ApplicationTabsExample3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enabled import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

var DocPage = function DocPage() {
  return _react2.default.createElement(
    _reactRouterDom.MemoryRouter,
    {
      initialEntries: _ApplicationLinkConfig2.default.map(function (link) {
        return link.path;
      }),
      initialIndex: 0
    },
    _react2.default.createElement(_terraDocTemplate2.default, {
      packageName: _package.name,
      readme: _README2.default,
      srcPath: 'https://github.com/cerner/terra-framework/tree/master/packages/' + _package.name,
      examples: [{
        title: 'Tabs Example',
        example: _react2.default.createElement(_ApplicationTabsExample4.default, null),
        source: _ApplicationTabsExample2.default
      }],
      propsTables: [{
        componentName: 'Appliation Tabs',
        componentSrc: _ApplicationTabs2.default
      }]
    })
  );
};

// Example Files


/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;