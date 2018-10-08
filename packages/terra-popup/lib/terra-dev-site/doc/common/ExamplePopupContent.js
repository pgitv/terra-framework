'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SingleSelectList = require('terra-list/lib/SingleSelectList');

var _SingleSelectList2 = _interopRequireDefault(_SingleSelectList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  onChange: _propTypes2.default.func
};

var ExamplePopupContent = function ExamplePopupContent(_ref) {
  var onChange = _ref.onChange;
  return _react2.default.createElement(
    _SingleSelectList2.default,
    { isDivided: true, onChange: onChange },
    _react2.default.createElement(_SingleSelectList2.default.Item, { content: _react2.default.createElement(
        'p',
        { style: { padding: '0 5px' } },
        'Example Value 1'
      ), key: '120' }),
    _react2.default.createElement(_SingleSelectList2.default.Item, { content: _react2.default.createElement(
        'p',
        { style: { padding: '0 5px' } },
        'Example Value 2'
      ), key: '121' }),
    _react2.default.createElement(_SingleSelectList2.default.Item, { content: _react2.default.createElement(
        'p',
        { style: { padding: '0 5px' } },
        'Example Value 3'
      ), key: '122' }),
    _react2.default.createElement(_SingleSelectList2.default.Item, { content: _react2.default.createElement(
        'p',
        { style: { padding: '0 5px' } },
        'Example Value 4'
      ), key: '123' }),
    _react2.default.createElement(_SingleSelectList2.default.Item, { content: _react2.default.createElement(
        'p',
        { style: { padding: '0 5px' } },
        'Example Value 5'
      ), key: '124' }),
    _react2.default.createElement(_SingleSelectList2.default.Item, { content: _react2.default.createElement(
        'p',
        { style: { padding: '0 5px' } },
        'Example Value 6'
      ), key: '125' }),
    _react2.default.createElement(_SingleSelectList2.default.Item, { content: _react2.default.createElement(
        'p',
        { style: { padding: '0 5px' } },
        'Example Value 7'
      ), key: '126' }),
    _react2.default.createElement(_SingleSelectList2.default.Item, { content: _react2.default.createElement(
        'p',
        { style: { padding: '0 5px' } },
        'Example Value 8'
      ), key: '127' }),
    _react2.default.createElement(_SingleSelectList2.default.Item, { content: _react2.default.createElement(
        'p',
        { style: { padding: '0 5px' } },
        'Example Value 9'
      ), key: '128' }),
    _react2.default.createElement(_SingleSelectList2.default.Item, { content: _react2.default.createElement(
        'p',
        { style: { padding: '0 5px' } },
        'Example Value 10'
      ), key: '129' }),
    _react2.default.createElement(_SingleSelectList2.default.Item, { content: _react2.default.createElement(
        'p',
        { style: { padding: '0 5px' } },
        'Example Value 11'
      ), key: '130' }),
    _react2.default.createElement(_SingleSelectList2.default.Item, { content: _react2.default.createElement(
        'p',
        { style: { padding: '0 5px' } },
        'Example Value 12'
      ), key: '131' })
  );
};

ExamplePopupContent.propTypes = propTypes;

exports.default = ExamplePopupContent;