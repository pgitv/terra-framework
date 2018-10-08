'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraBase = require('terra-base');

var _terraBase2 = _interopRequireDefault(_terraBase);

var _NavigationSideMenu = require('terra-navigation-side-menu/lib/NavigationSideMenu');

var _NavigationSideMenu2 = _interopRequireDefault(_NavigationSideMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions */


var NavigationSideMenuDefault = function (_React$Component) {
  _inherits(NavigationSideMenuDefault, _React$Component);

  function NavigationSideMenuDefault(props) {
    _classCallCheck(this, NavigationSideMenuDefault);

    var _this = _possibleConstructorReturn(this, (NavigationSideMenuDefault.__proto__ || Object.getPrototypeOf(NavigationSideMenuDefault)).call(this, props));

    _this.handleOnChange = _this.handleOnChange.bind(_this);
    _this.resetMenuState = _this.resetMenuState.bind(_this);
    _this.fakeRoutingBack = _this.fakeRoutingBack.bind(_this);

    _this.state = { selectedMenuKey: 'menu', selectedChildKey: undefined };
    return _this;
  }

  _createClass(NavigationSideMenuDefault, [{
    key: 'handleOnChange',
    value: function handleOnChange(event, changeData) {
      this.setState({ selectedMenuKey: changeData.selectedMenuKey, selectedChildKey: changeData.selectedChildKey });
    }
  }, {
    key: 'resetMenuState',
    value: function resetMenuState() {
      this.setState({ selectedMenuKey: 'menu', selectedChildKey: undefined });
    }
  }, {
    key: 'fakeRoutingBack',
    value: function fakeRoutingBack() {
      this.setState({ selectedMenuKey: 'fake-parent', selectedChildKey: undefined });
    }
  }, {
    key: 'render',
    value: function render() {
      var content = void 0;
      if (this.state.selectedMenuKey === 'fake-parent') {
        content = _react2.default.createElement(
          'div',
          { style: {
              height: '100%', width: '100%', position: 'relative', backgroundColor: 'pink'
            }
          },
          _react2.default.createElement(
            'button',
            { type: 'button', onClick: this.resetMenuState },
            'Child Route'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Parent Route'
          )
        );
      } else {
        content = _react2.default.createElement(_NavigationSideMenu2.default, {
          id: 'test-menu',
          menuItems: [{ key: 'menu', text: 'Menu', childKeys: ['submenu1', 'submenu2', 'submenu3', 'submenu4'] }, {
            key: 'submenu1', text: 'Sub Menu 1', childKeys: ['subsubmenu1', 'subsubmenu2', 'subsubmenu3'], id: 'test-item-1'
          }, { key: 'submenu2', text: 'Sub Menu 2' }, { key: 'submenu3', text: 'Sub Menu 3' }, { key: 'submenu4', text: 'Sub Menu 4' }, { key: 'subsubmenu1', text: 'Sub-Sub Menu 1', id: 'test-item-2' }, { key: 'subsubmenu2', text: 'Sub-Sub Menu 2' }, { key: 'subsubmenu3', text: 'Sub-Sub Menu 3' }],
          onChange: this.handleOnChange,
          routingStackBack: this.fakeRoutingBack,
          selectedMenuKey: this.state.selectedMenuKey,
          selectedChildKey: this.state.selectedChildKey
        });
      }

      return _react2.default.createElement(
        _terraBase2.default,
        null,
        _react2.default.createElement(
          'div',
          { style: {
              height: '450px', width: '300px', position: 'relative', border: '1px solid lightgrey'
            }
          },
          content
        )
      );
    }
  }]);

  return NavigationSideMenuDefault;
}(_react2.default.Component);

exports.default = NavigationSideMenuDefault;