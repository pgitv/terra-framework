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
  layoutConfig: _propTypes2.default.object
};

var TestHeader = function TestHeader(_ref) {
  var layoutConfig = _ref.layoutConfig;
  return _react2.default.createElement(
    'div',
    {
      id: 'test-header',
      style: {
        height: '60px', width: 'calc(100% - 10px)', border: '4px dashed lightgrey', margin: '5px', position: 'relative', display: 'flex'
      }
    },
    _react2.default.createElement(
      'div',
      { style: {
          position: 'absolute', top: '15px', left: '50%', color: 'grey', transform: 'translateX(-50%)'
        }
      },
      _react2.default.createElement(
        'h2',
        { style: { display: 'inline', margin: 0 } },
        'Header'
      ),
      layoutConfig.toggleMenu && _react2.default.createElement(
        'button',
        {
          type: 'button',
          className: 'test-header-toggle',
          style: {
            display: 'inline', marginLeft: '5px', height: '25px', border: '1px dashed lightgrey'
          },
          onClick: layoutConfig.toggleMenu
        },
        'Toggle Menu'
      )
    )
  );
};
TestHeader.propTypes = propTypes;

exports.default = TestHeader;