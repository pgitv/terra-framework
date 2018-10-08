'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Aggregator = require('terra-aggregator/lib/Aggregator');

var _Aggregator2 = _interopRequireDefault(_Aggregator);

var _AggregatorItem = require('terra-aggregator/lib/terra-dev-site/doc/common/AggregatorItem');

var _AggregatorItem2 = _interopRequireDefault(_AggregatorItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable import/no-unresolved, import/extensions */


/* eslint-enable import/no-unresolved, import/extensions */

var items = Object.freeze([{
  key: 'SECTION_0',
  component: _react2.default.createElement(_AggregatorItem2.default, { name: 'Section 0' })
}, {
  key: 'SECTION_1',
  component: _react2.default.createElement(_AggregatorItem2.default, { name: 'Section 1' })
}, {
  key: 'SECTION_2',
  component: _react2.default.createElement(_AggregatorItem2.default, { name: 'Section 2' })
}, {
  key: 'SECTION_3',
  component: _react2.default.createElement(_AggregatorItem2.default, { name: 'Section 3' })
}]);

var StandaloneAggregatorExample = function (_React$Component) {
  _inherits(StandaloneAggregatorExample, _React$Component);

  function StandaloneAggregatorExample(props) {
    _classCallCheck(this, StandaloneAggregatorExample);

    var _this = _possibleConstructorReturn(this, (StandaloneAggregatorExample.__proto__ || Object.getPrototypeOf(StandaloneAggregatorExample)).call(this, props));

    _this.state = {
      flip: false
    };
    return _this;
  }

  _createClass(StandaloneAggregatorExample, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var body = _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'button',
          { type: 'button', onClick: function onClick() {
              _this2.setState(function (prevState) {
                return { flip: !prevState.flip };
              });
            } },
          'Flip Section Order'
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', onClick: function onClick() {
              _this2.forceUpdate();
            } },
          'Force Aggregator Render'
        ),
        _react2.default.createElement(_Aggregator2.default, {
          items: this.state.flip ? _extends([], items).reverse() : items
        })
      );

      return body;
    }
  }]);

  return StandaloneAggregatorExample;
}(_react2.default.Component);

exports.default = StandaloneAggregatorExample;