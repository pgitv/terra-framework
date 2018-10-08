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
  var style = { height: '100px', width: '100%' };

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'button',
      { type: 'button', id: 'test-click', onClick: function onClick() {
          document.querySelector('#test-infinite-list').scrollTop = 1600;
        } },
      'button'
    ),
    _react2.default.createElement(
      'div',
      { style: { height: '380px' } },
      _react2.default.createElement(
        _InfiniteList2.default,
        {
          id: 'test-infinite-list',
          isDivided: true,
          isFinishedLoading: true
        },
        _react2.default.createElement(_InfiniteList2.default.Item, { key: 'item-0', content: _react2.default.createElement(
            'div',
            { style: style },
            'Item 0'
          ) }),
        _react2.default.createElement(_InfiniteList2.default.Item, { key: 'item-1', content: _react2.default.createElement(
            'div',
            { style: style },
            'Item 1'
          ) }),
        _react2.default.createElement(_InfiniteList2.default.Item, { key: 'item-2', content: _react2.default.createElement(
            'div',
            { style: style },
            'Item 2'
          ) }),
        _react2.default.createElement(_InfiniteList2.default.Item, { key: 'item-3', content: _react2.default.createElement(
            'div',
            { style: style },
            'Item 3'
          ) }),
        _react2.default.createElement(_InfiniteList2.default.Item, { key: 'item-4', content: _react2.default.createElement(
            'div',
            { style: style },
            'Item 4'
          ) }),
        _react2.default.createElement(_InfiniteList2.default.Item, { key: 'item-5', content: _react2.default.createElement(
            'div',
            { style: style },
            'Item 5'
          ) }),
        _react2.default.createElement(_InfiniteList2.default.Item, { key: 'item-6', content: _react2.default.createElement(
            'div',
            { style: style },
            'Item 6'
          ) }),
        _react2.default.createElement(_InfiniteList2.default.Item, { key: 'item-7', content: _react2.default.createElement(
            'div',
            { style: style },
            'Item 7'
          ) }),
        _react2.default.createElement(_InfiniteList2.default.Item, { key: 'item-8', content: _react2.default.createElement(
            'div',
            { style: style },
            'Item 8'
          ) }),
        _react2.default.createElement(_InfiniteList2.default.Item, { key: 'item-9', content: _react2.default.createElement(
            'div',
            { style: style },
            'Item 9'
          ) }),
        _react2.default.createElement(_InfiniteList2.default.Item, { key: 'item-10', content: _react2.default.createElement(
            'div',
            { style: style },
            'Item 10'
          ) }),
        _react2.default.createElement(_InfiniteList2.default.Item, { key: 'item-11', content: _react2.default.createElement(
            'div',
            { style: style },
            'Item 11'
          ) }),
        _react2.default.createElement(_InfiniteList2.default.Item, { key: 'item-12', content: _react2.default.createElement(
            'div',
            { style: style },
            'Item 12'
          ) }),
        _react2.default.createElement(_InfiniteList2.default.Item, { key: 'item-13', content: _react2.default.createElement(
            'div',
            { style: style },
            'Item 13'
          ) }),
        _react2.default.createElement(_InfiniteList2.default.Item, { key: 'item-14', content: _react2.default.createElement(
            'div',
            { style: style },
            'Item 14'
          ) }),
        _react2.default.createElement(_InfiniteList2.default.Item, { key: 'item-15', content: _react2.default.createElement(
            'div',
            { style: style },
            'Item 15'
          ) })
      )
    )
  );
};

exports.default = InfiniteListUpdating;