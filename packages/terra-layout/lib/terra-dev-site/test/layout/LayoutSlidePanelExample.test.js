'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LayoutSlidePanel = require('../../../_LayoutSlidePanel');

var _LayoutSlidePanel2 = _interopRequireDefault(_LayoutSlidePanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LayoutSlidePanelExample = function (_React$Component) {
  _inherits(LayoutSlidePanelExample, _React$Component);

  function LayoutSlidePanelExample(props) {
    _classCallCheck(this, LayoutSlidePanelExample);

    var _this = _possibleConstructorReturn(this, (LayoutSlidePanelExample.__proto__ || Object.getPrototypeOf(LayoutSlidePanelExample)).call(this, props));

    _this.toggleMenu = _this.toggleMenu.bind(_this);

    _this.state = { isOpen: false };
    return _this;
  }

  _createClass(LayoutSlidePanelExample, [{
    key: 'toggleMenu',
    value: function toggleMenu() {
      this.setState(function (prevState) {
        return { isOpen: !prevState.isOpen };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: { height: '768px', width: '100%', position: 'relative' } },
        _react2.default.createElement(
          _LayoutSlidePanel2.default,
          {
            panelContent: _react2.default.createElement(
              'div',
              { style: {
                  height: '100%', width: '100%', position: 'relative', backgroundColor: 'red'
                }
              },
              _react2.default.createElement(
                'button',
                { type: 'button', id: 'test-toggle-2', onClick: this.toggleMenu },
                'toggle'
              )
            ),
            panelBehavior: 'overlay',
            size: 'medium',
            isOpen: this.state.isOpen,
            isToggleEnabled: true,
            isAnimated: true,
            onToggle: function onToggle() {},
            toggleText: 'toggle text'
          },
          _react2.default.createElement(
            'div',
            { style: {
                height: '100%', width: '100%', position: 'relative', backgroundColor: 'blue'
              }
            },
            _react2.default.createElement(
              'button',
              { type: 'button', id: 'test-toggle-1', onClick: this.toggleMenu },
              'toggle'
            )
          )
        )
      );
    }
  }]);

  return LayoutSlidePanelExample;
}(_react2.default.Component);

exports.default = LayoutSlidePanelExample;