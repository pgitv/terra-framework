'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _terraApplicationUtility = require('terra-application-utility');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Shape for the `layoutConfig` prop provided to components within the ApplicationLayout.
 */
var layoutConfigPropType = _propTypes2.default.shape({
  size: _propTypes2.default.string,
  toggleMenu: _propTypes2.default.func,
  menuIsOpen: _propTypes2.default.bool,
  togglePin: _propTypes2.default.bool,
  menuIsPinned: _propTypes2.default.bool
});

/**
 * Shape for ApplicationLayout's `nameConfig` prop.
 */
var nameConfigPropType = _propTypes2.default.shape({
  accessory: _propTypes2.default.element,
  title: _propTypes2.default.string
});

/**
   * Alignment of the navigational tabs.
   */
var navigationAlignmentPropType = _propTypes2.default.oneOf(['start', 'center', 'end']);

/**
 * Shape for ApplicationLayout's `navigationItems` prop.
 */
var navigationItemsPropType = _propTypes2.default.arrayOf(_propTypes2.default.shape({
  path: _propTypes2.default.string.isRequired,
  text: _propTypes2.default.string.isRequired,
  hasSubMenu: _propTypes2.default.bool
}));

/**
 * Shape for ApplicationLayout's `utilityConfig` prop.
 */
var utilityConfigPropType = _propTypes2.default.shape({
  title: _propTypes2.default.string,
  accessory: _propTypes2.default.element,
  onChange: _propTypes2.default.func.isRequired,
  menuItems: _propTypes2.default.arrayOf(_terraApplicationUtility.UtilityUtils.itemShape).isRequired,
  initialSelectedKey: _propTypes2.default.string.isRequired
});

/**
 * Shape for utilityConfig's menuItem.
 */
var utilityMenuItemPropType = _terraApplicationUtility.UtilityUtils.itemShape;

exports.default = {
  utilityConfigPropType: utilityConfigPropType,
  utilityMenuItemPropType: utilityMenuItemPropType,
  layoutConfigPropType: layoutConfigPropType,
  nameConfigPropType: nameConfigPropType,
  navigationAlignmentPropType: navigationAlignmentPropType,
  navigationItemsPropType: navigationItemsPropType
};