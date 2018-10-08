'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _ApplicationLayout = require('../../../ApplicationLayout');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppRouter = function AppRouter() {
  return _react2.default.createElement(
    'div',
    { style: { height: '100%' }, id: 'routing-menu-test' },
    _react2.default.createElement(
      _reactRouterDom.MemoryRouter,
      null,
      _react2.default.createElement(_ApplicationLayout.RoutingMenu, {
        title: 'Test Routing Menu',
        menuItems: [{
          text: 'Item 1',
          path: '/item_1',
          hasSubMenu: true
        }, {
          text: 'Item 2',
          path: '/item_2',
          hasSubMenu: true
        }, {
          text: 'Item 3',
          path: '/item_3',
          hasSubMenu: false
        }],
        layoutConfig: {},
        routingStackDelegate: {
          showParent: function showParent() {}
        }
      })
    )
  );
}; /* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */
exports.default = AppRouter;