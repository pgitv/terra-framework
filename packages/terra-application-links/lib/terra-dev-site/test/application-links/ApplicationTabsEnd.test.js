'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _terraBase = require('terra-base');

var _terraBase2 = _interopRequireDefault(_terraBase);

var _ApplicationTabs = require('../../../tabs/ApplicationTabs');

var _ApplicationTabs2 = _interopRequireDefault(_ApplicationTabs);

var _testShortConfig = require('../common/testShortConfig');

var _testShortConfig2 = _interopRequireDefault(_testShortConfig);

var _enUS = require('../../../../translations/en-US.json');

var _enUS2 = _interopRequireDefault(_enUS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    _terraBase2.default,
    { locale: 'en-US', customMessages: _enUS2.default },
    _react2.default.createElement(
      _reactRouterDom.MemoryRouter,
      {
        initialEntries: _testShortConfig2.default.map(function (link) {
          return link.path;
        }),
        initialIndex: 0
      },
      _react2.default.createElement(
        'div',
        { style: {
            border: '1px solid lightGray', width: '100%', backgroundColor: 'green', height: '39px', position: 'relative'
          }
        },
        _react2.default.createElement(_ApplicationTabs2.default, { id: 'test-tabs', alignment: 'end', links: _testShortConfig2.default })
      )
    )
  );
};