'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Hookshot = require('../../../Hookshot');

var _Hookshot2 = _interopRequireDefault(_Hookshot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HookshotContent = function HookshotContent(props) {
  return _react2.default.createElement(
    _Hookshot2.default.Content,
    props,
    _react2.default.createElement(
      'div',
      { style: { backgroundColor: 'powderblue', height: '36px', width: '200px' } },
      'Hookshot'
    )
  );
};

exports.default = HookshotContent;