'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _InfiniteList = require('../../../InfiniteList');

var _InfiniteList2 = _interopRequireDefault(_InfiniteList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InfiniteListUpdating = function InfiniteListUpdating() {
  return _react2.default.createElement(
    _InfiniteList2.default,
    {
      id: 'test-infinite-list',
      selectedIndexes: [0],
      isSelectable: true,
      isFinishedLoading: true
    },
    _react2.default.createElement(_InfiniteList2.default.Item, { key: 'item-0', content: _react2.default.createElement(
        'div',
        { style: { height: '50px', width: '100%' } },
        'Item 0'
      ) }),
    _react2.default.createElement(_InfiniteList2.default.Item, { key: 'item-1', content: _react2.default.createElement(
        'div',
        { style: { height: '50px', width: '100%' } },
        'Item 1'
      ) }),
    _react2.default.createElement(_InfiniteList2.default.Item, { key: 'item-2', content: _react2.default.createElement(
        'div',
        { style: { height: '50px', width: '100%' } },
        'Item 2'
      ) }),
    _react2.default.createElement(_InfiniteList2.default.Item, { key: 'item-3', content: _react2.default.createElement(
        'div',
        { style: { height: '50px', width: '100%' } },
        'Item 3'
      ) })
  );
};

exports.default = InfiniteListUpdating;