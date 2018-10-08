'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _NavigationLayout = require('../../../NavigationLayout');

var _NavigationLayout2 = _interopRequireDefault(_NavigationLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
  header: {
    '/': {
      path: '/',
      component: {
        default: {
          componentClass: function componentClass() {
            return _react2.default.createElement(
              'div',
              { className: 'test-header' },
              'Header'
            );
          }
        }
      }
    }
  },
  menu: {
    '/': {
      path: '/',
      component: {
        default: {
          componentClass: function componentClass() {
            return _react2.default.createElement(
              'div',
              { className: 'test-menu' },
              'Menu'
            );
          }
        }
      }
    }
  },
  content: {
    '/': {
      path: '/',
      component: {
        default: {
          componentClass: function componentClass() {
            return _react2.default.createElement(
              'div',
              { className: 'test-content' },
              'Content'
            );
          }
        }
      }
    }
  }
};

var NavigationLayoutBasic = function NavigationLayoutBasic() {
  return _react2.default.createElement(
    _reactRouterDom.MemoryRouter,
    {
      initialEntries: ['/'],
      initialIndex: 0
    },
    _react2.default.createElement(_NavigationLayout2.default, {
      config: config,
      menuText: 'Menu',
      id: 'test-root'
    })
  );
};

exports.default = NavigationLayoutBasic;