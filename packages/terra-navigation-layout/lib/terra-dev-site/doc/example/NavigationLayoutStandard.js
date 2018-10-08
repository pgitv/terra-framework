'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _terraMarkdown = require('terra-markdown');

var _terraMarkdown2 = _interopRequireDefault(_terraMarkdown);

var _terraToggleButton = require('terra-toggle-button');

var _terraToggleButton2 = _interopRequireDefault(_terraToggleButton);

var _NavigationLayout = require('terra-navigation-layout/lib/NavigationLayout');

var _NavigationLayout2 = _interopRequireDefault(_NavigationLayout);

var _NavigationLayoutStandardConfig = require('terra-navigation-layout/lib/terra-dev-site/doc/example/NavigationLayoutStandardConfig.md');

var _NavigationLayoutStandardConfig2 = _interopRequireDefault(_NavigationLayoutStandardConfig);

var _HeaderExample = require('terra-navigation-layout/lib/terra-dev-site/doc/example/HeaderExample');

var _HeaderExample2 = _interopRequireDefault(_HeaderExample);

var _MenuExample = require('terra-navigation-layout/lib/terra-dev-site/doc/example/MenuExample');

var _MenuExample2 = _interopRequireDefault(_MenuExample);

var _Page1Content = require('terra-navigation-layout/lib/terra-dev-site/doc/example/Page1Content');

var _Page1Content2 = _interopRequireDefault(_Page1Content);

var _Page2Content = require('terra-navigation-layout/lib/terra-dev-site/doc/example/Page2Content');

var _Page2Content2 = _interopRequireDefault(_Page2Content);

var _Page3Content = require('terra-navigation-layout/lib/terra-dev-site/doc/example/Page3Content');

var _Page3Content2 = _interopRequireDefault(_Page3Content);

var _Page1Menu = require('terra-navigation-layout/lib/terra-dev-site/doc/example/Page1Menu');

var _Page1Menu2 = _interopRequireDefault(_Page1Menu);

var _Page2Menu = require('terra-navigation-layout/lib/terra-dev-site/doc/example/Page2Menu');

var _Page2Menu2 = _interopRequireDefault(_Page2Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

// If changing config, ensure NavigationLayoutStandardConfig.md is updated to match
var config = {
  header: {
    '/': {
      path: '/',
      component: {
        default: {
          componentClass: _HeaderExample2.default
        }
      }
    }
  },
  menu: {
    '/': {
      path: '/',
      component: {
        tiny: {
          componentClass: _MenuExample2.default
        },
        small: {
          componentClass: _MenuExample2.default
        }
      }
    },
    '/page1': {
      path: '/page1',
      component: {
        default: {
          componentClass: _Page1Menu2.default
        }
      }
    },
    '/page2': {
      path: '/page2',
      component: {
        default: {
          componentClass: _Page2Menu2.default
        }
      }
    }
  },
  content: {
    '/page1': {
      path: '/page1',
      component: {
        default: {
          componentClass: _Page1Content2.default
        }
      }
    },
    '/page2': {
      path: '/page2',
      component: {
        default: {
          componentClass: _Page2Content2.default
        }
      }
    },
    '/page3': {
      path: '/page3',
      component: {
        default: {
          componentClass: _Page3Content2.default
        }
      }
    }
  }
};
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions  */


var NavigationLayoutStandard = (0, _reactRouterDom.withRouter)(function (_ref) {
  var location = _ref.location;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h3',
      null,
      'Features'
    ),
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        null,
        'Contains 3 different primary routes: /page1, /page2, and /page3'
      ),
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          '/page1 - Has content, inner routes, and an associated menu'
        ),
        _react2.default.createElement(
          'li',
          null,
          '/page2 - Has content and an associated menu'
        ),
        _react2.default.createElement(
          'li',
          null,
          '/page3 - Has only content'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        'Has a Header that is rendered for all routes (matched to `/` path)'
      ),
      _react2.default.createElement(
        'li',
        null,
        'Header provides links to other primary routes for breakpoints `medium`, `large`, and `huge`'
      ),
      _react2.default.createElement(
        'li',
        null,
        'When size is `tiny` or `small`, a new Menu is presented to expose links to primary routes (the Header hides its links at these sizes)'
      ),
      _react2.default.createElement(
        'li',
        null,
        'Page menus expose navigation to parent menus'
      ),
      _react2.default.createElement(
        'li',
        null,
        'Page content and menus expose Layout-provided functionality'
      )
    ),
    _react2.default.createElement(
      'h3',
      null,
      'Configuration'
    ),
    _react2.default.createElement(
      _terraToggleButton2.default,
      { isAnimated: true, closedButtonText: 'View' },
      _react2.default.createElement(_terraMarkdown2.default, { id: 'navigation-layout-standard-config', src: _NavigationLayoutStandardConfig2.default })
    ),
    _react2.default.createElement(
      'h3',
      null,
      'Browser Location: ' + location.pathname
    ),
    _react2.default.createElement(_NavigationLayout2.default, {
      config: config,
      menuText: 'Example Menu',
      style: { height: '400px', width: '100%' }
    })
  );
});

var NavigationLayoutRouter = function NavigationLayoutRouter() {
  return _react2.default.createElement(
    _reactRouterDom.MemoryRouter,
    {
      initialEntries: ['/page1', '/page1/item1', '/page1/item2', '/page2', 'page3'],
      initialIndex: 0
    },
    _react2.default.createElement(NavigationLayoutStandard, null)
  );
};

exports.default = NavigationLayoutRouter;