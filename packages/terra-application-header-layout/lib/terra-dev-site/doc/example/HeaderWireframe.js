'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ResponsiveElement = require('terra-responsive-element/lib/ResponsiveElement');

var _ResponsiveElement2 = _interopRequireDefault(_ResponsiveElement);

var _ApplicationHeaderLayout = require('terra-application-header-layout/lib/ApplicationHeaderLayout');

var _ApplicationHeaderLayout2 = _interopRequireDefault(_ApplicationHeaderLayout);

var _ExtensionsExample = require('terra-application-header-layout/lib/terra-dev-site/doc/common/ExtensionsExample');

var _ExtensionsExample2 = _interopRequireDefault(_ExtensionsExample);

var _LogoExample = require('terra-application-header-layout/lib/terra-dev-site/doc/common/LogoExample');

var _LogoExample2 = _interopRequireDefault(_LogoExample);

var _NavigationExample = require('terra-application-header-layout/lib/terra-dev-site/doc/common/NavigationExample');

var _NavigationExample2 = _interopRequireDefault(_NavigationExample);

var _ToggleExample = require('terra-application-header-layout/lib/terra-dev-site/doc/common/ToggleExample');

var _ToggleExample2 = _interopRequireDefault(_ToggleExample);

var _UtilitiesExample = require('terra-application-header-layout/lib/terra-dev-site/doc/common/UtilitiesExample');

var _UtilitiesExample2 = _interopRequireDefault(_UtilitiesExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
var HeaderWireframe = function HeaderWireframe() {
  var tinyHeader = _react2.default.createElement(_ApplicationHeaderLayout2.default, {
    logo: _react2.default.createElement(_LogoExample2.default, { size: 'tiny' }),
    utilities: _react2.default.createElement(_UtilitiesExample2.default, { size: 'tiny' }),
    extensions: _react2.default.createElement(_ExtensionsExample2.default, { size: 'tiny' }),
    navigation: _react2.default.createElement(_NavigationExample2.default, { size: 'tiny' }),
    toggle: _react2.default.createElement(_ToggleExample2.default, { size: 'tiny' })
  });

  var smallHeader = _react2.default.createElement(_ApplicationHeaderLayout2.default, {
    logo: _react2.default.createElement(_LogoExample2.default, { size: 'small' }),
    utilities: _react2.default.createElement(_UtilitiesExample2.default, { size: 'small' }),
    extensions: _react2.default.createElement(_ExtensionsExample2.default, { size: 'small' }),
    navigation: _react2.default.createElement(_NavigationExample2.default, { size: 'small' }),
    toggle: _react2.default.createElement(_ToggleExample2.default, { size: 'small' })
  });

  var mediumHeader = _react2.default.createElement(_ApplicationHeaderLayout2.default, {
    logo: _react2.default.createElement(_LogoExample2.default, { size: 'medium' }),
    utilities: _react2.default.createElement(_UtilitiesExample2.default, { size: 'medium' }),
    extensions: _react2.default.createElement(_ExtensionsExample2.default, { size: 'medium' }),
    navigation: _react2.default.createElement(_NavigationExample2.default, { size: 'medium' }),
    toggle: _react2.default.createElement(_ToggleExample2.default, { size: 'medium' })
  });

  return _react2.default.createElement(
    'div',
    { style: { height: '60px', position: 'relative', width: '100%' } },
    _react2.default.createElement(
      'div',
      { style: { height: '100%' } },
      _react2.default.createElement(_ResponsiveElement2.default, {
        defaultElement: tinyHeader,
        tiny: tinyHeader,
        small: smallHeader,
        medium: mediumHeader
      })
    )
  );
};

exports.default = HeaderWireframe;