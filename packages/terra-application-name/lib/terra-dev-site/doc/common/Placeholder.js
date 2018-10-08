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
  borderColor: _propTypes2.default.string,
  height: _propTypes2.default.string,
  text: _propTypes2.default.string,
  textColor: _propTypes2.default.string,
  width: _propTypes2.default.string
};

var defaultProps = {
  borderColor: 'lightgrey',
  height: '100%',
  text: 'PlaceHolder',
  textColor: 'grey',
  width: '100%'
};

var Placeholder = function Placeholder(_ref) {
  var borderColor = _ref.borderColor,
      height = _ref.height,
      text = _ref.text,
      textColor = _ref.textColor,
      width = _ref.width;
  return _react2.default.createElement(
    'div',
    { style: {
        height: height, width: width, position: 'relative', padding: '5px'
      }
    },
    _react2.default.createElement(
      'div',
      { style: {
          height: '100%', width: '100%', position: 'relative', border: '3px dashed ' + borderColor
        }
      },
      _react2.default.createElement(
        'div',
        { style: {
            position: 'absolute', top: '50%', left: '50%', color: textColor, transform: 'translate3d(-50%, -50%, 0)'
          }
        },
        _react2.default.createElement(
          'h3',
          null,
          text
        )
      )
    )
  );
};

Placeholder.propTypes = propTypes;
Placeholder.defaultProps = defaultProps;

exports.default = Placeholder;