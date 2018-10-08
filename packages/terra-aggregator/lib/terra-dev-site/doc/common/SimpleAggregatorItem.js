'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _terraContentContainer = require('terra-content-container');

var _terraContentContainer2 = _interopRequireDefault(_terraContentContainer);

var _terraSectionHeader = require('terra-section-header');

var _terraSectionHeader2 = _interopRequireDefault(_terraSectionHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  aggregatorDelegate: _propTypes2.default.object,
  name: _propTypes2.default.string
};

var SimpleAggregatorItem = function SimpleAggregatorItem(_ref) {
  var name = _ref.name,
      aggregatorDelegate = _ref.aggregatorDelegate,
      customProps = _objectWithoutProperties(_ref, ['name', 'aggregatorDelegate']);

  return _react2.default.createElement(
    _terraContentContainer2.default,
    _extends({}, customProps, {
      header: _react2.default.createElement(_terraSectionHeader2.default, {
        title: name
      })
    }),
    aggregatorDelegate.hasFocus ? _react2.default.createElement(
      'button',
      {
        type: 'button',
        onClick: function onClick() {
          aggregatorDelegate.releaseFocus();
        }
      },
      'Release Focus'
    ) : _react2.default.createElement(
      'button',
      {
        type: 'button',
        onClick: function onClick() {
          aggregatorDelegate.requestFocus();
        }
      },
      'Get Focus'
    ),
    aggregatorDelegate.hasFocus ? _react2.default.createElement(
      'h4',
      null,
      'Section has focus!'
    ) : null
  );
};

SimpleAggregatorItem.propTypes = propTypes;

exports.default = SimpleAggregatorItem;