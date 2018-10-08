'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Aggregator = require('../../../Aggregator');

var _Aggregator2 = _interopRequireDefault(_Aggregator);

var _AggregatorItem = require('../common/AggregatorItem');

var _AggregatorItem2 = _interopRequireDefault(_AggregatorItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = Object.freeze([{
  key: 'SECTION_0',
  component: _react2.default.createElement(_AggregatorItem2.default, { name: 'Section 0', targetId: 'section0' })
}, {
  key: 'SECTION_1',
  component: _react2.default.createElement(_AggregatorItem2.default, { name: 'Section 1', targetId: 'section1' })
}, {
  key: 'SECTION_2',
  component: _react2.default.createElement(_AggregatorItem2.default, { name: 'Section 2', targetId: 'section2' })
}, {
  key: 'SECTION_3',
  component: _react2.default.createElement(_AggregatorItem2.default, { name: 'Section 3', targetId: 'section3' })
}]);

var AggregatorStandalone = function AggregatorStandalone() {
  return _react2.default.createElement(
    'div',
    { id: 'test-aggregator', role: 'main' },
    _react2.default.createElement(_Aggregator2.default, {
      items: items
    })
  );
};

exports.default = AggregatorStandalone;