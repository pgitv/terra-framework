'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TestExample = require('terra-disclosure-manager/lib/terra-dev-site/test/common/TestExample');

var _TestExample2 = _interopRequireDefault(_TestExample);

var _SelectableList = require('terra-list/lib/SelectableList');

var _SelectableList2 = _interopRequireDefault(_SelectableList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AggregatorItem = function (_React$Component) {
  _inherits(AggregatorItem, _React$Component);

  function AggregatorItem(props) {
    _classCallCheck(this, AggregatorItem);

    var _this = _possibleConstructorReturn(this, (AggregatorItem.__proto__ || Object.getPrototypeOf(AggregatorItem)).call(this, props));

    _this.handleSelection = _this.handleSelection.bind(_this);
    return _this;
  }

  _createClass(AggregatorItem, [{
    key: 'handleSelection',
    value: function handleSelection(event, index) {
      var _props = this.props,
          aggregatorDelegate = _props.aggregatorDelegate,
          name = _props.name;


      if (aggregatorDelegate.hasFocus && aggregatorDelegate.itemState.index === index) {
        aggregatorDelegate.releaseFocus();
        return;
      }

      aggregatorDelegate.requestFocus({
        index: index
      }).then(function (_ref) {
        var disclose = _ref.disclose;

        if (disclose) {
          disclose({
            preferredType: 'panel',
            size: 'small',
            content: {
              key: 'Disclosure for ' + name,
              component: _react2.default.createElement(_TestExample2.default, { identifier: 'Disclosure for ' + name })
            }
          });
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          name = _props2.name,
          aggregatorDelegate = _props2.aggregatorDelegate,
          targetId = _props2.targetId;


      var selectedIndex = void 0;
      if (aggregatorDelegate.hasFocus && aggregatorDelegate.itemState && aggregatorDelegate.itemState.index !== undefined) {
        selectedIndex = aggregatorDelegate.itemState.index;
      }

      return _react2.default.createElement(
        _SelectableList2.default,
        {
          isDivided: true,
          selectedIndexes: selectedIndex !== undefined ? [selectedIndex] : [],
          onChange: this.handleSelection
        },
        _react2.default.createElement(_SelectableList2.default.Item, {
          content: _react2.default.createElement(
            'div',
            { id: targetId },
            name
          )
        })
      );
    }
  }]);

  return AggregatorItem;
}(_react2.default.Component);

AggregatorItem.propTypes = {
  name: _propTypes2.default.string,
  aggregatorDelegate: _propTypes2.default.shape({}),
  targetId: _propTypes2.default.string
};

exports.default = AggregatorItem;