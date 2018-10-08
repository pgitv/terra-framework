'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _terraAppDelegate = require('terra-app-delegate');

var _terraAppDelegate2 = _interopRequireDefault(_terraAppDelegate);

var _Aggregator = require('../../../Aggregator');

var _Aggregator2 = _interopRequireDefault(_Aggregator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  app: _terraAppDelegate2.default.propType,
  items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    key: _propTypes2.default.string,
    component: _propTypes2.default.element
  }))
};

var AggregatorContainer = function AggregatorContainer(_ref) {
  var app = _ref.app,
      items = _ref.items;
  return _react2.default.createElement(_Aggregator2.default, {
    disclose: app.disclose,
    items: items
  });
};

AggregatorContainer.propTypes = propTypes;

exports.default = AggregatorContainer;