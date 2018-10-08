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

var _ApplicationHeaderNameModule = require('./ApplicationHeaderName.module.scss');

var _ApplicationHeaderNameModule2 = _interopRequireDefault(_ApplicationHeaderNameModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cx = _bind2.default.bind(_ApplicationHeaderNameModule2.default);

var propTypes = {
  /**
   * The accessory element to be displayed next to the title.
   * */
  accessory: _propTypes2.default.element,
  /**
   * The title branding of the application name.
   * */
  title: _propTypes2.default.node
};

var ApplicationHeaderName = function ApplicationHeaderName(_ref) {
  var accessory = _ref.accessory,
      title = _ref.title,
      customProps = _objectWithoutProperties(_ref, ['accessory', 'title']);

  var ApplicationHeaderNameClassNames = cx(['application-header-name', customProps.className]);

  return _react2.default.createElement(
    'div',
    _extends({}, customProps, { className: ApplicationHeaderNameClassNames }),
    accessory && _react2.default.createElement(
      'div',
      { className: cx('accessory') },
      accessory
    ),
    title && _react2.default.createElement(
      'div',
      { className: cx('title') },
      title
    )
  );
};

ApplicationHeaderName.propTypes = propTypes;

exports.default = ApplicationHeaderName;