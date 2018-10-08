'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraGrid = require('terra-grid');

var _terraGrid2 = _interopRequireDefault(_terraGrid);

var _Aggregator = require('terra-aggregator/lib/Aggregator');

var _Aggregator2 = _interopRequireDefault(_Aggregator);

var _AggregatorItem = require('terra-aggregator/lib/terra-dev-site/doc/common/AggregatorItem');

var _AggregatorItem2 = _interopRequireDefault(_AggregatorItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-unresolved, import/extensions */

/* eslint-disable import/no-unresolved, import/extensions */
var items = Object.freeze([{
  key: 'SECTION_0',
  component: _react2.default.createElement(_AggregatorItem2.default, { name: 'Section 0' })
}, {
  key: 'SECTION_1',
  component: _react2.default.createElement(_AggregatorItem2.default, { name: 'Section 1' })
}, {
  key: 'SECTION_2',
  component: _react2.default.createElement(_AggregatorItem2.default, { name: 'Section 2' })
}, {
  key: 'SECTION_3',
  component: _react2.default.createElement(_AggregatorItem2.default, { name: 'Section 3' })
}]);

var CustomRenderAggregatorExample = function CustomRenderAggregatorExample() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Aggregator2.default, {
      items: items,
      render: function render(renderData) {
        return _react2.default.createElement(
          _terraGrid2.default,
          null,
          _react2.default.createElement(
            _terraGrid2.default.Row,
            null,
            _react2.default.createElement(
              _terraGrid2.default.Column,
              { col: 6 },
              renderData.items[0]
            ),
            _react2.default.createElement(
              _terraGrid2.default.Column,
              { col: 6 },
              renderData.items[1]
            )
          ),
          _react2.default.createElement(
            _terraGrid2.default.Row,
            null,
            _react2.default.createElement(
              _terraGrid2.default.Column,
              { col: 6 },
              renderData.items[2]
            ),
            _react2.default.createElement(
              _terraGrid2.default.Column,
              { col: 6 },
              renderData.items[3]
            )
          )
        );
      }
    })
  );
};

exports.default = CustomRenderAggregatorExample;