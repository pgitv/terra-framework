'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _InfiniteList = require('../../../InfiniteList');

var _InfiniteList2 = _interopRequireDefault(_InfiniteList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InfiniteListSameCount = function (_React$Component) {
  _inherits(InfiniteListSameCount, _React$Component);

  function InfiniteListSameCount(props) {
    _classCallCheck(this, InfiniteListSameCount);

    var _this = _possibleConstructorReturn(this, (InfiniteListSameCount.__proto__ || Object.getPrototypeOf(InfiniteListSameCount)).call(this, props));

    _this.handleUpdateItems = _this.handleUpdateItems.bind(_this);
    _this.state = { useItemOne: true };
    return _this;
  }

  _createClass(InfiniteListSameCount, [{
    key: 'handleUpdateItems',
    value: function handleUpdateItems() {
      this.setState(function (prevState) {
        return { useItemOne: !prevState.useItemOne };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var items1 = [_react2.default.createElement(_InfiniteList2.default.Item, { key: 'item-0', content: _react2.default.createElement(
          'div',
          { style: { height: '50px', width: '100%', backgroundColor: 'bisque' } },
          'Item 0'
        ) }), _react2.default.createElement(_InfiniteList2.default.Item, { key: 'item-1', content: _react2.default.createElement(
          'div',
          { style: { height: '50px', width: '100%', backgroundColor: 'darkgoldenrod' } },
          'Item 1'
        ) }), _react2.default.createElement(_InfiniteList2.default.Item, { key: 'item-2', content: _react2.default.createElement(
          'div',
          { style: { height: '50px', width: '100%', backgroundColor: 'bisque' } },
          'Item 2'
        ) }), _react2.default.createElement(_InfiniteList2.default.Item, { key: 'item-3', content: _react2.default.createElement(
          'div',
          { style: { height: '50px', width: '100%', backgroundColor: 'darkgoldenrod' } },
          'Item 3'
        ) })];

      var items2 = [_react2.default.createElement(_InfiniteList2.default.Item, { key: 'item-0', content: _react2.default.createElement(
          'div',
          { style: { height: '50px', width: '100%', backgroundColor: 'cadetblue' } },
          'Item 0'
        ) }), _react2.default.createElement(_InfiniteList2.default.Item, { key: 'item-1', content: _react2.default.createElement(
          'div',
          { style: { height: '50px', width: '100%', backgroundColor: 'crimson' } },
          'Item 1'
        ) }), _react2.default.createElement(_InfiniteList2.default.Item, { key: 'item-2', content: _react2.default.createElement(
          'div',
          { style: { height: '50px', width: '100%', backgroundColor: 'cadetblue' } },
          'Item 2'
        ) }), _react2.default.createElement(_InfiniteList2.default.Item, { key: 'item-3', content: _react2.default.createElement(
          'div',
          { style: { height: '50px', width: '100%', backgroundColor: 'crimson' } },
          'Item 3'
        ) })];

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'button',
          { type: 'button', id: 'test-click', onClick: this.handleUpdateItems },
          'update items'
        ),
        _react2.default.createElement(
          'div',
          { style: { width: '100%', height: '250px' } },
          _react2.default.createElement(
            _InfiniteList2.default,
            {
              id: 'test-infinite-list',
              isFinishedLoading: true
            },
            this.state.useItemOne ? items1 : items2
          )
        )
      );
    }
  }]);

  return InfiniteListSameCount;
}(_react2.default.Component);

exports.default = InfiniteListSameCount;