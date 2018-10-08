'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraApplicationMenuLayout = require('terra-application-menu-layout');

var _terraApplicationMenuLayout2 = _interopRequireDefault(_terraApplicationMenuLayout);

var _terraImage = require('terra-image');

var _terraImage2 = _interopRequireDefault(_terraImage);

var _Placeholder = require('terra-application-name/lib/terra-dev-site/doc/common/Placeholder');

var _Placeholder2 = _interopRequireDefault(_Placeholder);

var _ApplicationMenuName = require('terra-application-name/lib/ApplicationMenuName');

var _ApplicationMenuName2 = _interopRequireDefault(_ApplicationMenuName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
var size = { height: '450px', width: '300px' };
var ApplicationMenuNameStandard = function ApplicationMenuNameStandard() {
  return _react2.default.createElement(_terraApplicationMenuLayout2.default, {
    style: size,
    header: _react2.default.createElement(
      'div',
      { style: { backgroundColor: 'green', width: '100%' } },
      _react2.default.createElement(_ApplicationMenuName2.default, {
        title: 'App-Name',
        accessory: _react2.default.createElement(_terraImage2.default, { variant: 'rounded', src: 'https://github.com/cerner/terra-core/raw/master/terra.png', height: '26px', width: '26px', isFluid: true })
      })
    ),
    extensions: _react2.default.createElement(_Placeholder2.default, { text: 'Extensions', height: '50px' }),
    content: _react2.default.createElement(_Placeholder2.default, { text: 'Content' }),
    footer: _react2.default.createElement(_Placeholder2.default, { text: 'Footer', height: '50px' })
  });
};

exports.default = ApplicationMenuNameStandard;