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

var _Aggregator = require('!raw-loader!../../../../src/Aggregator.jsx');

var _Aggregator2 = _interopRequireDefault(_Aggregator);

var _StandaloneAggregatorExample = require('../example/StandaloneAggregatorExample');

var _StandaloneAggregatorExample2 = _interopRequireDefault(_StandaloneAggregatorExample);

var _StandaloneAggregatorExample3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/StandaloneAggregatorExample.jsx');

var _StandaloneAggregatorExample4 = _interopRequireDefault(_StandaloneAggregatorExample3);

var _CustomRenderAggregatorExample = require('../example/CustomRenderAggregatorExample');

var _CustomRenderAggregatorExample2 = _interopRequireDefault(_CustomRenderAggregatorExample);

var _CustomRenderAggregatorExample3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/CustomRenderAggregatorExample.jsx');

var _CustomRenderAggregatorExample4 = _interopRequireDefault(_CustomRenderAggregatorExample3);

var _AggregatorInModalExample = require('../example/AggregatorInModalExample');

var _AggregatorInModalExample2 = _interopRequireDefault(_AggregatorInModalExample);

var _AggregatorInModalExample3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/AggregatorInModalExample.jsx');

var _AggregatorInModalExample4 = _interopRequireDefault(_AggregatorInModalExample3);

var _CombinedDisclosureExample = require('../example/CombinedDisclosureExample');

var _CombinedDisclosureExample2 = _interopRequireDefault(_CombinedDisclosureExample);

var _CombinedDisclosureExample3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/CombinedDisclosureExample.jsx');

var _CombinedDisclosureExample4 = _interopRequireDefault(_CombinedDisclosureExample3);

var _DisclosureBypassExample = require('../example/DisclosureBypassExample');

var _DisclosureBypassExample2 = _interopRequireDefault(_DisclosureBypassExample);

var _DisclosureBypassExample3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/DisclosureBypassExample.jsx');

var _DisclosureBypassExample4 = _interopRequireDefault(_DisclosureBypassExample3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enabled import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-framework/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Standalone Aggregator',
      example: _react2.default.createElement(_StandaloneAggregatorExample2.default, null),
      source: _StandaloneAggregatorExample4.default
    }, {
      title: 'Custom Render Aggregator',
      example: _react2.default.createElement(_CustomRenderAggregatorExample2.default, null),
      source: _CustomRenderAggregatorExample4.default
    }, {
      title: 'Combined Discloure Aggregator',
      example: _react2.default.createElement(_CombinedDisclosureExample2.default, null),
      source: _CombinedDisclosureExample4.default
    }, {
      title: 'Disclosure Bypass Aggregator',
      description: 'In this example, the Aggregator items are provided with the ModalManager disclosure function directly. Calling that function does not require Aggregator focus and will bypass the Aggregator entirely. This can be useful for simple Modal workflows that should not impact Aggregator state.',
      example: _react2.default.createElement(_DisclosureBypassExample2.default, null),
      source: _DisclosureBypassExample4.default
    }, {
      title: 'Aggregator In Modal',
      example: _react2.default.createElement(_AggregatorInModalExample2.default, null),
      source: _AggregatorInModalExample4.default
    }],
    propsTables: [{
      componentSrc: _Aggregator2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;