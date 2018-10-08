'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  onClick: _propTypes2.default.func,
  size: _propTypes2.default.shape({
    height: _propTypes2.default.string,
    width: _propTypes2.default.string
  })
};

var TestPopupContent = function TestPopupContent(_ref) {
  var onClick = _ref.onClick,
      size = _ref.size;
  return _react2.default.createElement(
    'div',
    { style: { height: size.height, width: size.width, backgroundColor: 'red' } },
    _react2.default.createElement(
      'button',
      { type: 'button', id: 'resize-content', onClick: onClick },
      'Resize'
    )
  );
};

TestPopupContent.propTypes = propTypes;

exports.default = TestPopupContent;