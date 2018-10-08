'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraAppDelegate = require('terra-app-delegate');

var _terraAppDelegate2 = _interopRequireDefault(_terraAppDelegate);

var _terraContentContainer = require('terra-content-container');

var _terraContentContainer2 = _interopRequireDefault(_terraContentContainer);

var _terraActionHeader = require('terra-action-header');

var _terraActionHeader2 = _interopRequireDefault(_terraActionHeader);

var _AggregatorContainer = require('./AggregatorContainer');

var _AggregatorContainer2 = _interopRequireDefault(_AggregatorContainer);

var _AggregatorItem = require('./AggregatorItem');

var _AggregatorItem2 = _interopRequireDefault(_AggregatorItem);

var _SimpleAggregatorItem = require('./SimpleAggregatorItem');

var _SimpleAggregatorItem2 = _interopRequireDefault(_SimpleAggregatorItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var ModalAggregator = function ModalAggregator(_ref) {
  var app = _ref.app;
  return _react2.default.createElement(
    _terraContentContainer2.default,
    {
      fill: true,
      header: _react2.default.createElement(_terraActionHeader2.default, { onClose: app.closeDisclosure, onBack: app.goBack })
    },
    _react2.default.createElement(_AggregatorContainer2.default, {
      app: app,
      items: items
    })
  );
};

ModalAggregator.propTypes = {
  app: _terraAppDelegate2.default.propType
};

exports.default = ModalAggregator;