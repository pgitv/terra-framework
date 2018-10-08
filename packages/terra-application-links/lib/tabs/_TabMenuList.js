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

var _terraList = require('terra-list');

var _terraList2 = _interopRequireDefault(_terraList);

var _ApplicationTabsModule = require('./ApplicationTabs.module.scss');

var _ApplicationTabsModule2 = _interopRequireDefault(_ApplicationTabsModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cx = _bind2.default.bind(_ApplicationTabsModule2.default);

var propTypes = {
  /**
   * The child tabs to be placed in the menu.
   */
  children: _propTypes2.default.node,
  /**
   * Prop from popup, determines if the menu height is bound by the screen.
   */
  isHeightBounded: _propTypes2.default.bool,
  /**
   * Prop from popup, determines if the menu width is bound by the screen.
   */
  isWidthBounded: _propTypes2.default.bool,
  /**
   * Ref callback used by the popup for do positioning.
   */
  refCallback: _propTypes2.default.func
};

var ApplicationTabMenuContent = function ApplicationTabMenuContent(_ref) {
  var children = _ref.children,
      isHeightBounded = _ref.isHeightBounded,
      isWidthBounded = _ref.isWidthBounded,
      refCallback = _ref.refCallback,
      customProps = _objectWithoutProperties(_ref, ['children', 'isHeightBounded', 'isWidthBounded', 'refCallback']);

  return _react2.default.createElement(
    _terraList2.default,
    _extends({}, customProps, {
      'data-application-tab-menu-content': true,
      className: cx(['tab-menu-list', { 'height-bounded': isHeightBounded }, { 'width-bounded': isWidthBounded }]),
      role: 'menu',
      ref: refCallback
    }),
    _react2.default.Children.map(children, function (child) {
      return _react2.default.createElement(_terraList2.default.Item, { content: child, key: child.props.path, role: 'menuitem' });
    })
  );
};

ApplicationTabMenuContent.propTypes = propTypes;

exports.default = ApplicationTabMenuContent;