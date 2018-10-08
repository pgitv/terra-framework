'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ApplicationLinks = require('terra-application-links/lib/ApplicationLinks');

var _ApplicationLinkConfig = require('terra-application-links/lib/terra-dev-site/doc/common/ApplicationLinkConfig');

var _ApplicationLinkConfig2 = _interopRequireDefault(_ApplicationLinkConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
var ApplicationTabsExample = function ApplicationTabsExample() {
  return _react2.default.createElement(
    'div',
    {
      style: {
        border: '1px solid lightGray', backgroundColor: '#2481ca', width: '100%', height: '50px', position: 'relative'
      }
    },
    _react2.default.createElement(_ApplicationLinks.ApplicationTabs, { alignment: 'end', links: _ApplicationLinkConfig2.default })
  );
};

exports.default = ApplicationTabsExample;