'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

var _terraContentContainer = require('terra-content-container');

var _terraContentContainer2 = _interopRequireDefault(_terraContentContainer);

var _ApplicationLayout = require('../../../ApplicationLayout');

var _ApplicationLayout2 = _interopRequireDefault(_ApplicationLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageContent = function PageContent(_ref) {
  var contentName = _ref.contentName;
  return _react2.default.createElement(
    'div',
    null,
    'Page Content:',
    ' ',
    contentName
  );
}; /* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */

PageContent.propTypes = {
  contentName: _propTypes2.default.string
};

/**
 * The routingConfig API matches that of the NavigationLayout. Routing specifications for the
 * menu and content regions are supported; the header region is not configurable.
 */
var routingConfig = {
  menu: {
    '/page_1': {
      path: '/page_1',
      component: {
        default: {
          componentClass: _ApplicationLayout.RoutingMenu,
          props: {
            title: 'Page 1 Menu',
            menuItems: [{
              text: 'Item 1',
              path: '/page_1/item_1',
              hasSubMenu: true
            }, {
              text: 'Item 2',
              path: '/page_1/item_2'
            }]
          }
        }
      }
    },
    '/page_1/item_1': {
      path: '/page_1/item_1',
      component: {
        default: {
          componentClass: _ApplicationLayout.RoutingMenu,
          props: {
            title: 'Page 1 Item 1 Menu',
            menuItems: [{
              text: 'Thing 1',
              path: '/page_1/item_1/thing_1'
            }, {
              text: 'Thing 2',
              path: '/page_1/item_1/thing_2'
            }]
          }
        }
      }
    }
  },
  content: {
    '/page_1': {
      path: '/page_1',
      component: {
        default: {
          componentClass: PageContent,
          props: {
            contentName: 'Page 1'
          }
        }
      }
    }
  }
};

var indexPath = '/page_1';

var EmptyApplicationLayoutTest = function EmptyApplicationLayoutTest() {
  return _react2.default.createElement(
    _terraContentContainer2.default,
    {
      fill: true,
      id: 'application-layout-test'
    },
    _react2.default.createElement(_ApplicationLayout2.default, {
      routingConfig: routingConfig,
      indexPath: indexPath
    })
  );
};

var WrappedApplication = (0, _reactRouterDom.withRouter)(EmptyApplicationLayoutTest);

var AppRouter = function AppRouter() {
  return _react2.default.createElement(
    'div',
    { style: { height: '100%' } },
    _react2.default.createElement(
      _reactRouterDom.MemoryRouter,
      null,
      _react2.default.createElement(WrappedApplication, null)
    )
  );
};

exports.default = AppRouter;