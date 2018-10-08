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

var _UtilityMenuDividerModule = require('./_UtilityMenuDivider.module.scss');

var _UtilityMenuDividerModule2 = _interopRequireDefault(_UtilityMenuDividerModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cx = _bind2.default.bind(_UtilityMenuDividerModule2.default);

var propTypes = {
  /**
   * If the divider shall be placed before the header
   */
  isTop: _propTypes2.default.bool
};

var UtilityMenuDivider = function UtilityMenuDivider(_ref) {
  var isTop = _ref.isTop,
      customProps = _objectWithoutProperties(_ref, ['isTop']);

  var dividerClassNames = cx(['divider', { 'is-bottom': !isTop }, { 'is-top': isTop }, customProps.className]);

  return _react2.default.createElement('div', _extends({}, customProps, { className: dividerClassNames, role: 'separator' }));
};

UtilityMenuDivider.propTypes = propTypes;
exports.default = UtilityMenuDivider;