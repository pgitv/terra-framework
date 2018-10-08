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

var propTypes = {
  layoutConfig: _propTypes2.default.shape({})
};

var inlineButtonStyle = {
  display: 'inline', marginLeft: '5px', height: '25px', border: '1px dashed lightgrey'
};

var HeaderExample = function HeaderExample(_ref) {
  var layoutConfig = _ref.layoutConfig;
  return _react2.default.createElement(
    'div',
    { style: {
        height: '60px', width: 'calc(100% - 10px)', border: '4px dashed lightgrey', margin: '5px', position: 'relative', display: 'flex'
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
        { style: { display: 'inline', margin: 0 } },
        'Header'
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
      layoutConfig.size !== 'small' && layoutConfig.size !== 'tiny' && _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/page1', style: { paddingLeft: '5px' } },
        'Page 1'
      ),
      layoutConfig.size !== 'small' && layoutConfig.size !== 'tiny' && _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/page2', style: { paddingLeft: '5px' } },
        'Page 2'
      ),
      layoutConfig.size !== 'small' && layoutConfig.size !== 'tiny' && _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/page3', style: { paddingLeft: '5px' } },
        'Page 3'
      )
    )
  );
};
HeaderExample.propTypes = propTypes;

exports.default = (0, _reactRouterDom.withRouter)(HeaderExample);