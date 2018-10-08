'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _RoutingStackDelegate = require('terra-navigation-layout/lib/RoutingStackDelegate');

var _RoutingStackDelegate2 = _interopRequireDefault(_RoutingStackDelegate);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _terraContentContainer = require('terra-content-container');

var _terraContentContainer2 = _interopRequireDefault(_terraContentContainer);

var _RoutingMenu = require('../../../menu/RoutingMenu');

var _RoutingMenu2 = _interopRequireDefault(_RoutingMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ApplicationMenu = function (_React$Component) {
  _inherits(ApplicationMenu, _React$Component);

  function ApplicationMenu(props) {
    _classCallCheck(this, ApplicationMenu);

    var _this = _possibleConstructorReturn(this, (ApplicationMenu.__proto__ || Object.getPrototypeOf(ApplicationMenu)).call(this, props));

    var items = [];

    if (props.includeNestedMenu) {
      items.push({
        text: 'Nested Menu',
        path: props.baseUrl + '/nested',
        hasSubMenu: true
      });
    }

    for (var i = 0; i < 20; i += 1) {
      items.push({
        text: 'Item ' + i,
        path: props.baseUrl + '/item_' + i
      });
    }

    var menuItems = items.map(function (item) {
      return {
        key: item.path,
        text: item.text,
        path: item.path,
        hasSubMenu: item.hasSubMenu
      };
    });

    _this.state = {
      menuItems: menuItems
    };
    return _this;
  }

  _createClass(ApplicationMenu, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          menuName = _props.menuName,
          layoutConfig = _props.layoutConfig,
          routingStackDelegate = _props.routingStackDelegate;
      var menuItems = this.state.menuItems;


      return _react2.default.createElement(
        _terraContentContainer2.default,
        {
          footer: _react2.default.createElement(
            'div',
            { style: { padding: '10px', borderTop: '1px solid lightgrey' } },
            _react2.default.createElement(_terraButton2.default, {
              text: 'Custom Event 1',
              isBlock: true,
              onClick: function onClick() {
                var evt = document.createEvent('CustomEvent');
                evt.initCustomEvent('applicationMenu.itemSelected', false, false, 'Custom Event 1');
                document.dispatchEvent(evt);

                if (layoutConfig && layoutConfig.toggleMenu) {
                  layoutConfig.toggleMenu();
                }
              },
              style: { marginBottom: '5px' }
            }),
            _react2.default.createElement(_terraButton2.default, {
              text: 'Custom Event 2',
              isBlock: true,
              onClick: function onClick() {
                var evt = document.createEvent('CustomEvent');
                evt.initCustomEvent('applicationMenu.itemSelected', false, false, 'Custom Event 2');
                document.dispatchEvent(evt);

                if (layoutConfig && layoutConfig.toggleMenu) {
                  layoutConfig.toggleMenu();
                }
              }
            })
          ),
          fill: true
        },
        _react2.default.createElement(_RoutingMenu2.default, {
          title: menuName,
          menuItems: menuItems,
          routingStackDelegate: routingStackDelegate,
          layoutConfig: layoutConfig
        })
      );
    }
  }]);

  return ApplicationMenu;
}(_react2.default.Component);

ApplicationMenu.propTypes = {
  layoutConfig: _propTypes2.default.shape({
    toggleMenu: _propTypes2.default.func,
    togglePin: _propTypes2.default.func,
    menuIsPinned: _propTypes2.default.bool
  }),
  routingStackDelegate: _RoutingStackDelegate2.default.propType,
  includeNestedMenu: _propTypes2.default.bool,
  menuName: _propTypes2.default.string,
  baseUrl: _propTypes2.default.string
};

exports.default = ApplicationMenu;