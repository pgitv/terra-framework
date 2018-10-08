'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _InfiniteList = require('../../../InfiniteList');

var _InfiniteList2 = _interopRequireDefault(_InfiniteList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InfiniteListLoading = function InfiniteListLoading() {
  return _react2.default.createElement(_InfiniteList2.default, {
    id: 'test-infinite-list',
    isFinishedLoading: false,
    initialLoadingIndicator: _react2.default.createElement(
      'div',
      { style: {
          height: '100%', width: '100%', position: 'relative', backgroundColor: 'aliceblue'
        }
      },
      'Loading'
    )
  });
};

exports.default = InfiniteListLoading;