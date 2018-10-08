'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('terra-base/lib/baseStyles');

var _Utils = require('./Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var _UtilityButton = require('./utility/_UtilityButton');

var _UtilityButton2 = _interopRequireDefault(_UtilityButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * The array containing the menu items to be rendered within the menu.
   */
  menuItems: _propTypes2.default.arrayOf(_Utils2.default.itemShape).isRequired,
  /**
   * The function to trigger when a menu item is selected.
   * Returns `(event, { key: String, metaData: Object})`
   */
  onChange: _propTypes2.default.func.isRequired,
  /**
   * The function that discloses the menu.
   */
  onDisclose: _propTypes2.default.func.isRequired,
  /**
   * The key of the top level menu page.
   */
  initialSelectedKey: _propTypes2.default.string.isRequired,
  /**
   * The text to be displayed.
   */
  title: _propTypes2.default.string,
  /**
   * The accessory element to be displayed next to the title.
   */
  accessory: _propTypes2.default.element
};

var ApplicationHeaderUtility = function ApplicationHeaderUtility(_ref) {
  var menuItems = _ref.menuItems,
      onChange = _ref.onChange,
      onDisclose = _ref.onDisclose,
      initialSelectedKey = _ref.initialSelectedKey,
      title = _ref.title,
      accessory = _ref.accessory,
      customProps = _objectWithoutProperties(_ref, ['menuItems', 'onChange', 'onDisclose', 'initialSelectedKey', 'title', 'accessory']);

  return _react2.default.createElement(_UtilityButton2.default, _extends({}, customProps, {
    menuItems: menuItems,
    onChange: onChange,
    onDisclose: onDisclose,
    initialSelectedKey: initialSelectedKey,
    title: title,
    accessory: accessory,
    variant: _Utils2.default.VARIANTS.MENU
  }));
};

ApplicationHeaderUtility.propTypes = propTypes;

exports.default = ApplicationHeaderUtility;