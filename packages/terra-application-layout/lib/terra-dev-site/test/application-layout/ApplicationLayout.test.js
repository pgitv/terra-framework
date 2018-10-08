'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

var _reactIntl = require('react-intl');

var _terraImage = require('terra-image');

var _terraImage2 = _interopRequireDefault(_terraImage);

var _terraAvatar = require('terra-avatar');

var _terraAvatar2 = _interopRequireDefault(_terraAvatar);

var _terraContentContainer = require('terra-content-container');

var _terraContentContainer2 = _interopRequireDefault(_terraContentContainer);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _ApplicationLayout = require('../../../ApplicationLayout');

var _ApplicationLayout2 = _interopRequireDefault(_ApplicationLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */


var PageContent = function PageContent(_ref) {
  var contentName = _ref.contentName;
  return _react2.default.createElement(
    'div',
    null,
    'Page Content:',
    ' ',
    contentName
  );
};
PageContent.propTypes = {
  contentName: _propTypes2.default.string
};

var TestExtensions = function TestExtensions() {
  return _react2.default.createElement(_terraButton2.default, { text: 'Extensions' });
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
    },
    '/page_2': {
      path: '/page_2',
      component: {
        default: {
          componentClass: PageContent,
          props: {
            contentName: 'Page 2'
          }
        }
      }
    },
    '/page_3': {
      path: '/page_3',
      component: {
        default: {
          componentClass: PageContent,
          props: {
            contentName: 'Page 3'
          }
        }
      }
    },
    '/page_4': {
      path: '/page_4',
      component: {
        default: {
          componentClass: PageContent,
          props: {
            contentName: 'Page 4'
          }
        }
      }
    },
    '/page_5': {
      path: '/page_5',
      component: {
        default: {
          componentClass: PageContent,
          props: {
            contentName: 'Page 5'
          }
        }
      }
    },
    '/page_6': {
      path: '/page_6',
      component: {
        default: {
          componentClass: PageContent,
          props: {
            contentName: 'Page 6'
          }
        }
      }
    },
    '/page_7': {
      path: '/page_7',
      component: {
        default: {
          componentClass: PageContent,
          props: {
            contentName: 'Page 7'
          }
        }
      }
    }
  }
};

/**
 * The navigationItems will be used to present the ApplicationLayout's navigation controls. The paths provided here must be present in
 * the routingConfig. If no navigation controls are desired, these items can be omitted.
 *
 * With standard rendering, the items will be presented as tabs within the ApplicationLayout's header.
 * With compact rendering, the items will be presented within the layout's menu region within a ApplicationLayout-managed menu.
 */
var navigationItems = [{
  path: '/page_1',
  text: 'Page 1'
}, {
  path: '/page_2',
  text: 'Page 2'
}, {
  path: '/page_3',
  text: 'Page 3'
}, {
  path: '/page_4',
  text: 'Page 4'
}, {
  path: '/page_5',
  text: 'Page 5'
}, {
  path: '/page_6',
  text: 'Page 6'
}, {
  path: '/page_7',
  text: 'Page 7'
}];

/**
 * The indexPath will be given to the NavigationLayout to set up the appropriate redirects. If users attempt to navigate to a path unsupported
 * by the routingConfig, they will be redirected to this route. This path should therefore be present in the routingConfig.
 */
var indexPath = '/page_1';

var userAvatar = _react2.default.createElement(_terraAvatar2.default, {
  variant: 'user',
  alt: 'User, Test',
  ariaLabel: 'User, Test',
  key: 'user_avatar'
});

var userData = {
  name: 'User, Test',
  detail: 'User Detail',
  photo: userAvatar
};

/**
 * The data provided for nameConfig will be visible in the ApplicationLayout's header, as well
 * as in any menus at the tiny and small breakpoints.
 */
var nameConfig = Object.freeze({
  title: 'Test Application',
  accessory: _react2.default.createElement(_terraImage2.default, { variant: 'rounded', src: 'https://github.com/cerner/terra-core/raw/master/terra.png', height: '26px', width: '26px' })
});

var ApplicationLayoutTest = function (_React$Component) {
  _inherits(ApplicationLayoutTest, _React$Component);

  function ApplicationLayoutTest(props) {
    _classCallCheck(this, ApplicationLayoutTest);

    var _this = _possibleConstructorReturn(this, (ApplicationLayoutTest.__proto__ || Object.getPrototypeOf(ApplicationLayoutTest)).call(this, props));

    _this.state = {
      checkboxItemEnabled: false
    };
    return _this;
  }

  _createClass(ApplicationLayoutTest, [{
    key: 'render',
    value: function render() {
      var intl = this.props.intl;
      var checkboxItemEnabled = this.state.checkboxItemEnabled;


      var customUtilityItems = [{
        key: 'additional-1',
        title: 'Drill-in Item',
        childKeys: ['additional-sub-1', 'additional-sub-2'],
        parentKey: _ApplicationLayout.Utils.utilityHelpers.defaultKeys.MENU
      }, {
        key: 'additional-sub-1',
        title: 'Additional Item 1 - Sub 1',
        parentKey: 'additional-1'
      }, {
        key: 'additional-sub-2',
        title: 'Additional Item 1 - Sub 2',
        parentKey: 'additional-1'
      }, {
        key: 'checkbox-item',
        title: 'Custom Checkbox Item',
        isSelectable: true,
        isSelected: checkboxItemEnabled,
        parentKey: _ApplicationLayout.Utils.utilityHelpers.defaultKeys.MENU
      }, {
        key: 'additional-3',
        contentLocation: _ApplicationLayout.Utils.utilityHelpers.locations.FOOTER,
        title: 'Custom Footer',
        parentKey: _ApplicationLayout.Utils.utilityHelpers.defaultKeys.MENU
      }];

      /**
       * The data provided for utilityConfig will be visible in the ApplicationLayout's header in the
       * standard rendering mode and within the menus in the compact rendering mode.
       *
       * The ApplicationLayout's Utils export provides a helper function named getDefaultUtilityConfig that will
       * generate the configuration for the standard set of utility options. If the standard configuration is not
       * desirable, an entirely custom configuration can be used instead.
       */
      var utilityConfig = Object.freeze({
        title: 'Test, User',
        accessory: userAvatar,
        menuItems: _ApplicationLayout.Utils.utilityHelpers.getDefaultUtilityItems(intl, userData, customUtilityItems),
        initialSelectedKey: _ApplicationLayout.Utils.utilityHelpers.defaultKeys.MENU,
        onChange: function onChange() {}
      });

      return _react2.default.createElement(
        _terraContentContainer2.default,
        {
          fill: true,
          id: 'application-layout-test'
        },
        _react2.default.createElement(_ApplicationLayout2.default, {
          nameConfig: nameConfig,
          utilityConfig: utilityConfig,
          routingConfig: routingConfig,
          navigationItems: navigationItems,
          extensions: _react2.default.createElement(TestExtensions, null),
          indexPath: indexPath
        })
      );
    }
  }]);

  return ApplicationLayoutTest;
}(_react2.default.Component);

ApplicationLayoutTest.propTypes = {
  intl: _reactIntl.intlShape
};

var WrappedApplication = (0, _reactRouterDom.withRouter)((0, _reactIntl.injectIntl)(ApplicationLayoutTest));

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