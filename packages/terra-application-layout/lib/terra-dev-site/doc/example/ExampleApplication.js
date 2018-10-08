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

var _ApplicationLayout = require('terra-application-layout/lib/ApplicationLayout');

var _ApplicationLayout2 = _interopRequireDefault(_ApplicationLayout);

var _ApplicationContent = require('terra-application-layout/lib/terra-dev-site/doc/common/ApplicationContent');

var _ApplicationContent2 = _interopRequireDefault(_ApplicationContent);

var _ApplicationMenu = require('terra-application-layout/lib/terra-dev-site/doc/common/ApplicationMenu');

var _ApplicationMenu2 = _interopRequireDefault(_ApplicationMenu);

var _UtilityOption = require('terra-application-layout/lib/terra-dev-site/doc/common/UtilityOption');

var _UtilityOption2 = _interopRequireDefault(_UtilityOption);

var _ApplicationExtensions = require('terra-application-layout/lib/terra-dev-site/doc/common/ApplicationExtensions');

var _ApplicationExtensions2 = _interopRequireDefault(_ApplicationExtensions);

var _henry = require('terra-application-layout/lib/terra-dev-site/doc/common/henry.jpg');

var _henry2 = _interopRequireDefault(_henry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */


/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

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
          componentClass: _ApplicationMenu2.default,
          props: {
            baseUrl: '/page_1',
            menuName: 'Page 1 Menu',
            includeNestedMenu: true
          }
        }
      }
    },
    '/page_1/nested': {
      path: '/page_1/nested',
      component: {
        default: {
          componentClass: _ApplicationMenu2.default,
          props: {
            baseUrl: '/page_1/nested',
            menuName: 'Nested Menu'
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
          componentClass: _ApplicationContent2.default,
          props: {
            basePath: '/page_1',
            contentName: 'Page 1'
          }
        }
      }
    },
    '/page_2': {
      path: '/page_2',
      component: {
        default: {
          componentClass: _ApplicationContent2.default,
          props: {
            basePath: '/page_2',
            contentName: 'Page 2',
            noMenu: true
          }
        }
      }
    },
    '/page_3': {
      path: '/page_3',
      component: {
        default: {
          componentClass: _ApplicationContent2.default,
          props: {
            basePath: '/page_3',
            contentName: 'Page 3',
            showDummyContent: true
          }
        }
      }
    },
    '/page_4': {
      path: '/page_4',
      component: {
        default: {
          componentClass: _ApplicationContent2.default,
          props: {
            basePath: '/page_4',
            contentName: 'Page 4',
            showDummyContent: true
          }
        }
      }
    },
    '/page_5': {
      path: '/page_5',
      component: {
        default: {
          componentClass: _ApplicationContent2.default,
          props: {
            basePath: '/page_5',
            contentName: 'Page 5',
            showDummyContent: true
          }
        }
      }
    },
    '/page_6': {
      path: '/page_6',
      component: {
        default: {
          componentClass: _ApplicationContent2.default,
          props: {
            basePath: '/page_6',
            contentName: 'Page 6',
            showDummyContent: true
          }
        }
      }
    },
    '/page_7': {
      path: '/page_7',
      component: {
        default: {
          componentClass: _ApplicationContent2.default,
          props: {
            basePath: '/page_7',
            contentName: 'Page 7',
            showDummyContent: true
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

/**
 * Any component type can be used for the userData photo; however, the Avatar is an appropriate choice.
 */
var userAvatar = _react2.default.createElement(_terraAvatar2.default, {
  image: _henry2.default,
  variant: 'user',
  alt: 'Swanson, Henry',
  ariaLabel: 'Swanson, Henry',
  key: 'user_avatar'
});

/**
 * The userData information will be used to construct the User Information utility menu item that is created by
 * the default utility configuration generated by `getDefaultUtilityItems`.
 */
var userData = {
  name: 'Swanson, Henry',
  detail: 'Henry Swanson\'s my name, and excitement\'s my game.',
  photo: userAvatar
};

/**
 * The data provided for nameConfig will be visible in the ApplicationLayout's header, as well
 * as in any menus at the tiny and small breakpoints.
 */
var nameConfig = Object.freeze({
  title: 'Example Application',
  accessory: _react2.default.createElement(_terraImage2.default, { variant: 'rounded', src: 'https://github.com/cerner/terra-core/raw/master/terra.png', height: '26px', width: '26px' })
});

var ExampleApplication = function (_React$Component) {
  _inherits(ExampleApplication, _React$Component);

  function ExampleApplication(props) {
    _classCallCheck(this, ExampleApplication);

    var _this = _possibleConstructorReturn(this, (ExampleApplication.__proto__ || Object.getPrototypeOf(ExampleApplication)).call(this, props));

    _this.state = {
      checkboxItemEnabled: false
    };
    return _this;
  }

  _createClass(ExampleApplication, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          intl = _props.intl,
          location = _props.location;
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
        title: 'Swanson, Henry',
        accessory: userAvatar,
        menuItems: _ApplicationLayout.Utils.utilityHelpers.getDefaultUtilityItems(intl, userData, customUtilityItems),
        initialSelectedKey: _ApplicationLayout.Utils.utilityHelpers.defaultKeys.MENU,
        onChange: function onChange(event, itemData, disclose) {
          /**
           * This function will be called when items are selected within the utility menu.
           * The disclose parameter is provided for convenience, but any presentation method
           * could be used to handle that menu content selection.
           */

          /**
           * For the checkbox item, we maintain its selection state locally and show no disclosure.
           */
          if (itemData.key === 'checkbox-item') {
            _this2.setState({
              checkboxItemEnabled: !checkboxItemEnabled
            });
            return;
          }

          /**
           * For everything else, we can present a custom modal component for that content.
           */
          disclose({
            preferredType: 'modal',
            size: 'small',
            content: {
              key: itemData.key,
              component: _react2.default.createElement(_UtilityOption2.default, { name: itemData.key })
            }
          });
        }
      });

      return _react2.default.createElement(
        _terraContentContainer2.default,
        {
          fill: true,
          header: _react2.default.createElement(
            'h3',
            null,
            'Router Location: ' + location.pathname
          )
        },
        _react2.default.createElement(_ApplicationLayout2.default, {
          nameConfig: nameConfig,
          utilityConfig: utilityConfig,
          routingConfig: routingConfig,
          navigationItems: navigationItems,
          extensions: _react2.default.createElement(_ApplicationExtensions2.default, null),
          indexPath: indexPath
        })
      );
    }
  }]);

  return ExampleApplication;
}(_react2.default.Component);

ExampleApplication.propTypes = {
  intl: _reactIntl.intlShape,
  location: _propTypes2.default.shape({
    pathname: _propTypes2.default.string
  })
};

var WrappedApplication = (0, _reactRouterDom.withRouter)((0, _reactIntl.injectIntl)(ExampleApplication));

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