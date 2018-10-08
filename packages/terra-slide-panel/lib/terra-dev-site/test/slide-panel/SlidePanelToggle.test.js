'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SlidePanel = require('../../../SlidePanel');

var _SlidePanel2 = _interopRequireDefault(_SlidePanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SlidePanelDemo = function (_React$Component) {
  _inherits(SlidePanelDemo, _React$Component);

  function SlidePanelDemo(props) {
    _classCallCheck(this, SlidePanelDemo);

    var _this = _possibleConstructorReturn(this, (SlidePanelDemo.__proto__ || Object.getPrototypeOf(SlidePanelDemo)).call(this, props));

    _this.state = { panelIsOpen: false };
    _this.handlePanelToggle = _this.handlePanelToggle.bind(_this);
    return _this;
  }

  _createClass(SlidePanelDemo, [{
    key: 'handlePanelToggle',
    value: function handlePanelToggle() {
      this.setState(function (prevState) {
        return { panelIsOpen: !prevState.panelIsOpen };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: {
            border: '1px lightgrey solid', height: '768px', width: '100%', position: 'relative'
          }
        },
        _react2.default.createElement(_SlidePanel2.default, {
          id: 'test-slide',
          mainContent: _react2.default.createElement(
            'div',
            { style: { height: '100%', width: '100%', backgroundColor: 'red' } },
            _react2.default.createElement(
              'button',
              { type: 'button', id: 'test-toggle', style: { backgroundColor: 'green' }, onClick: this.handlePanelToggle },
              'toggle'
            )
          ),
          panelContent: _react2.default.createElement('div', { style: { height: '100%', width: '100%', backgroundColor: 'blue' } }),
          panelSize: 'small',
          panelBehavior: 'overlay',
          isOpen: this.state.panelIsOpen,
          fill: true
        })
      );
    }
  }]);

  return SlidePanelDemo;
}(_react2.default.Component);

exports.default = SlidePanelDemo;