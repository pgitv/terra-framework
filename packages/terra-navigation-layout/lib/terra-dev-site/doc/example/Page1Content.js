'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inlineButtonStyle = {
  display: 'inline', marginLeft: '5px', height: '25px', border: '1px dashed lightgrey'
};

var Page1Content = function Page1Content(_ref) {
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
          position: 'absolute', top: '50%', left: '50%', color: 'grey', transform: 'translate3d(-50%, -50%, 0)'
        }
      },
      _react2.default.createElement(
        'h2',
        { style: { margin: '0' } },
        'Page 1 Content'
      ),
      layoutConfig.toggleMenu && _react2.default.createElement(
        'button',
        {
          type: 'button',
          style: inlineButtonStyle,
          onClick: layoutConfig.toggleMenu
        },
        'Toggle Menu'
      ),
      _react2.default.createElement(_reactRouterDom.Route, {
        path: '/page1/item1',
        render: function render() {
          return _react2.default.createElement(
            'h2',
            null,
            'Item 1'
          );
        }
      }),
      _react2.default.createElement(_reactRouterDom.Route, {
        path: '/page1/item2',
        render: function render() {
          return _react2.default.createElement(
            'h2',
            null,
            'Item 2'
          );
        }
      })
    )
  );
};

Page1Content.propTypes = {
  layoutConfig: _propTypes2.default.shape({
    toggleMenu: _propTypes2.default.func
  })
};

exports.default = Page1Content;