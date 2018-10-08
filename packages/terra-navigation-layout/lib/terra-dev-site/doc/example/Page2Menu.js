'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

var _RoutingStackDelegate = require('../../../RoutingStackDelegate');

var _RoutingStackDelegate2 = _interopRequireDefault(_RoutingStackDelegate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inlineButtonStyle = {
  display: 'inline', marginLeft: '5px', height: '25px', border: '1px dashed lightgrey'
};

var Page2Menu = function Page2Menu(_ref) {
  var layoutConfig = _ref.layoutConfig,
      routingStackDelegate = _ref.routingStackDelegate;
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
      routingStackDelegate && routingStackDelegate.showParent && _react2.default.createElement(
        'button',
        {
          type: 'button',
          style: inlineButtonStyle,
          onClick: routingStackDelegate.showParent
        },
        'Go Back'
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
      layoutConfig.togglePin && !layoutConfig.menuIsPinned && _react2.default.createElement(
        'button',
        {
          type: 'button',
          style: inlineButtonStyle,
          onClick: layoutConfig.togglePin
        },
        'Pin'
      ),
      layoutConfig.togglePin && layoutConfig.menuIsPinned && _react2.default.createElement(
        'button',
        {
          type: 'button',
          style: inlineButtonStyle,
          onClick: layoutConfig.togglePin
        },
        'Unpin'
      ),
      _react2.default.createElement(
        'h2',
        { style: { margin: '0' } },
        'Page 2 Menu'
      )
    )
  );
};

Page2Menu.propTypes = {
  layoutConfig: _propTypes2.default.shape({
    toggleMenu: _propTypes2.default.func,
    togglePin: _propTypes2.default.func,
    menuIsPinned: _propTypes2.default.bool
  }),
  routingStackDelegate: _RoutingStackDelegate2.default.propType
};

exports.default = (0, _reactRouterDom.withRouter)(Page2Menu);