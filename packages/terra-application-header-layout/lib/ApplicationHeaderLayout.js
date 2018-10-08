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

var _ApplicationHeaderLayoutModule = require('./ApplicationHeaderLayout.module.scss');

var _ApplicationHeaderLayoutModule2 = _interopRequireDefault(_ApplicationHeaderLayoutModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cx = _bind2.default.bind(_ApplicationHeaderLayoutModule2.default);

var propTypes = {
  /**
   * Extensions element to be placed before the end of the header.
   * */
  extensions: _propTypes2.default.element,
  /**
   * Logo element to be placed at the start of the header after the toggle element.
   * */
  logo: _propTypes2.default.element,
  /**
   * Navigation element to be placed within the fill area of the header.
   * */
  navigation: _propTypes2.default.element,
  /**
   * Toggle element to be placed at the start of the header.
   * */
  toggle: _propTypes2.default.element,
  /**
   * Utilities element to be placed at the end of the header.
   * */
  utilities: _propTypes2.default.element
};

var ApplicationHeaderLayout = function ApplicationHeaderLayout(_ref) {
  var extensions = _ref.extensions,
      logo = _ref.logo,
      navigation = _ref.navigation,
      toggle = _ref.toggle,
      utilities = _ref.utilities,
      customProps = _objectWithoutProperties(_ref, ['extensions', 'logo', 'navigation', 'toggle', 'utilities']);

  var headerClassNames = cx(['header', 'fill', customProps.className]);

  var logoElement = void 0;
  if (logo) {
    logoElement = _react2.default.createElement(
      'div',
      { className: cx(['fit', 'start', 'logo']) },
      logo
    );
  }

  var navigationElement = void 0;
  if (navigation) {
    navigationElement = _react2.default.createElement(
      'div',
      { className: cx('fill') },
      navigation
    );
  }

  var extensionsElement = void 0;
  if (extensions) {
    extensionsElement = _react2.default.createElement(
      'div',
      { className: cx(['fit', 'end', 'extensions']) },
      extensions
    );
  }

  var utilitiesElement = void 0;
  if (utilities) {
    utilitiesElement = _react2.default.createElement(
      'div',
      { className: cx(['fit', 'end', 'utilities']) },
      utilities
    );
  }

  var headerToggle = void 0;
  if (toggle) {
    headerToggle = _react2.default.createElement(
      'div',
      { className: cx('fit') },
      toggle
    );
  }

  var headerInner = void 0;
  if (navigationElement || extensionsElement) {
    headerInner = _react2.default.createElement(
      'div',
      { className: cx(['fill', 'header-inner']) },
      navigationElement,
      extensionsElement
    );
  }

  var headerBody = void 0;
  if (headerInner || logoElement || utilitiesElement) {
    headerBody = _react2.default.createElement(
      'div',
      { className: cx(['fill', 'header-body']) },
      logoElement,
      headerInner,
      utilitiesElement
    );
  }

  return _react2.default.createElement(
    'div',
    _extends({}, customProps, { className: headerClassNames }),
    headerToggle,
    headerBody
  );
};

ApplicationHeaderLayout.propTypes = propTypes;

exports.default = ApplicationHeaderLayout;