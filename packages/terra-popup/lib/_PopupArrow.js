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

var _PopupArrowModule = require('./PopupArrow.module.scss');

var _PopupArrowModule2 = _interopRequireDefault(_PopupArrowModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cx = _bind2.default.bind(_PopupArrowModule2.default);
/**
 * Half the base of the arrow, to use for arrow positioning offset.
 */
var ARROW_OFFSET = 11;
/**
 * Directional attribute to be applied by a presenting component.
 */
var ARROW_ATTR = 'data-align-arrow';

var propTypes = {
  /**
   * The function returning the frame html reference.
   */
  refCallback: _propTypes2.default.func
};

var PopupArrow = function PopupArrow(_ref) {
  var refCallback = _ref.refCallback,
      customProps = _objectWithoutProperties(_ref, ['refCallback']);

  return _react2.default.createElement('div', _extends({}, customProps, { className: cx(['popup-arrow', customProps.className]), ref: refCallback }));
};

PopupArrow.propTypes = propTypes;
PopupArrow.Opts = {
  arrowSize: ARROW_OFFSET,
  positionAttr: ARROW_ATTR
};

exports.default = PopupArrow;