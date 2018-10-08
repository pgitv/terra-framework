'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

require('terra-base/lib/baseStyles');

var _MockThemeComponent = require('terra-theme-provider/lib/terra-dev-site/doc/example/MockThemeComponent.scss');

var _MockThemeComponent2 = _interopRequireDefault(_MockThemeComponent);

require('terra-theme-provider/lib/terra-dev-site/theme/scoped-theme.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */


/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

var cx = _bind2.default.bind(_MockThemeComponent2.default);

var propTypes = {
  /**
   * Child node. Component to display next to the status indicator.
   */
  children: _propTypes2.default.node.isRequired
};

var MockThemeComponent = function MockThemeComponent(_ref) {
  var children = _ref.children,
      customProps = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    'div',
    _extends({}, customProps, { className: cx('mock-theme-component', customProps.className) }),
    children
  );
};

MockThemeComponent.propTypes = propTypes;

exports.default = MockThemeComponent;