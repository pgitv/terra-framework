'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraApplicationHeaderLayout = require('terra-application-header-layout');

var _terraApplicationHeaderLayout2 = _interopRequireDefault(_terraApplicationHeaderLayout);

var _terraImage = require('terra-image');

var _terraImage2 = _interopRequireDefault(_terraImage);

var _Placeholder = require('terra-application-name/lib/terra-dev-site/doc/common/Placeholder');

var _Placeholder2 = _interopRequireDefault(_Placeholder);

var _ApplicationHeaderName = require('terra-application-name/lib/ApplicationHeaderName');

var _ApplicationHeaderName2 = _interopRequireDefault(_ApplicationHeaderName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
var size = { height: '50px', width: '100%' };
var ApplicationHeaderNameStandard = function ApplicationHeaderNameStandard() {
  return _react2.default.createElement(_terraApplicationHeaderLayout2.default, {
    style: size,
    logo: _react2.default.createElement(
      'div',
      { style: { backgroundColor: 'green' } },
      _react2.default.createElement(_ApplicationHeaderName2.default, {
        title: 'App-Name',
        accessory: _react2.default.createElement(_terraImage2.default, { variant: 'rounded', src: 'https://github.com/cerner/terra-core/raw/master/terra.png', height: '26px', width: '26px', isFluid: true })
      })
    ),
    extensions: _react2.default.createElement(_Placeholder2.default, { text: 'Extensions', width: '100px' }),
    navigation: _react2.default.createElement(_Placeholder2.default, { text: 'Content' }),
    utilities: _react2.default.createElement(_Placeholder2.default, { text: 'Utiltities', width: '100px' })
  });
};

exports.default = ApplicationHeaderNameStandard;