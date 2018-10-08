'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraModalManager = require('terra-modal-manager');

var _terraModalManager2 = _interopRequireDefault(_terraModalManager);

var _terraSlidePanelManager = require('terra-slide-panel-manager');

var _terraSlidePanelManager2 = _interopRequireDefault(_terraSlidePanelManager);

var _AggregatorContainer = require('terra-aggregator/lib/terra-dev-site/doc/common/AggregatorContainer');

var _AggregatorContainer2 = _interopRequireDefault(_AggregatorContainer);

var _AggregatorItem = require('terra-aggregator/lib/terra-dev-site/doc/common/AggregatorItem');

var _AggregatorItem2 = _interopRequireDefault(_AggregatorItem);

var _SimpleAggregatorItem = require('terra-aggregator/lib/terra-dev-site/doc/common/SimpleAggregatorItem');

var _SimpleAggregatorItem2 = _interopRequireDefault(_SimpleAggregatorItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-unresolved, import/extensions */

var items = Object.freeze([{
  key: 'SECTION_0',
  component: _react2.default.createElement(_AggregatorItem2.default, { name: 'Slide Panel Section', disclosureType: 'panel' })
}, {
  key: 'SECTION_1',
  component: _react2.default.createElement(_AggregatorItem2.default, { name: 'Modal Section', disclosureType: 'modal' })
}, {
  key: 'SECTION_2',
  component: _react2.default.createElement(_SimpleAggregatorItem2.default, { name: 'No Disclosure Section' })
}]);

/* eslint-disable import/no-unresolved, import/extensions */


var CombinedDisclosureExample = function CombinedDisclosureExample() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _terraModalManager2.default,
      null,
      _react2.default.createElement(
        _terraSlidePanelManager2.default,
        null,
        _react2.default.createElement(_AggregatorContainer2.default, {
          items: items
        })
      )
    )
  );
};

exports.default = CombinedDisclosureExample;