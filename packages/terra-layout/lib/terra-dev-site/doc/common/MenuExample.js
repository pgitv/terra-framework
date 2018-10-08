'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var menu = function menu(_ref) {
  var layoutConfig = _ref.layoutConfig;
  return _react2.default.createElement(
    'div',
    { style: {
        height: 'calc(100% - 10px)', width: 'calc(100% - 10px)', border: '4px dashed lightgrey', margin: '5px', position: 'relative'
      }
    },
    _react2.default.createElement(
      'div',
      { style: {
          position: 'absolute', top: '50%', left: '50%', color: 'grey', transform: 'translateX(-50%)'
        }
      },
      _react2.default.createElement(
        'h2',
        { style: { margin: '0' } },
        'Menu'
      ),
      layoutConfig.toggleMenu && _react2.default.createElement(
        'button',
        {
          type: 'button',
          style: {
            display: 'inline', marginLeft: '5px', height: '25px', border: '1px dashed lightgrey'
          },
          onClick: layoutConfig.toggleMenu
        },
        'Toggle Menu'
      ),
      layoutConfig.togglePin && !layoutConfig.menuIsPinned && _react2.default.createElement(
        'button',
        {
          type: 'button',
          style: {
            display: 'inline', marginLeft: '5px', height: '25px', border: '1px dashed lightgrey'
          },
          onClick: layoutConfig.togglePin
        },
        'Pin'
      ),
      layoutConfig.togglePin && layoutConfig.menuIsPinned && _react2.default.createElement(
        'button',
        {
          type: 'button',
          style: {
            display: 'inline', marginLeft: '5px', height: '25px', border: '1px dashed lightgrey'
          },
          onClick: layoutConfig.togglePin
        },
        'Unpin'
      )
    )
  );
};

menu.propTypes = {
  layoutConfig: _propTypes2.default.shape({
    toggleMenu: _propTypes2.default.func,
    togglePin: _propTypes2.default.func,
    menuIsPinned: _propTypes2.default.bool
  })
};

exports.default = menu;