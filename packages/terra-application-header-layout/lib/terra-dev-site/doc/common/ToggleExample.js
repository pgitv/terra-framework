'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Placeholder = require('./Placeholder');

var _Placeholder2 = _interopRequireDefault(_Placeholder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  size: _propTypes2.default.string
};

var ExtensionsExample = function ExtensionsExample(_ref) {
  var size = _ref.size;

  var text = 'Toggle';
  var width = '150px';
  if (size === 'tiny') {
    text = 'T';
    width = '50px';
  } else if (size === 'small') {
    text = 'Tog';
    width = '100px';
  }
  return _react2.default.createElement(_Placeholder2.default, { text: text, width: width });
};

ExtensionsExample.propTypes = propTypes;

exports.default = ExtensionsExample;