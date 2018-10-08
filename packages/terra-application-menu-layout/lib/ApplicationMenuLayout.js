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

var _ApplicationMenuLayoutModule = require('./ApplicationMenuLayout.module.scss');

var _ApplicationMenuLayoutModule2 = _interopRequireDefault(_ApplicationMenuLayoutModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cx = _bind2.default.bind(_ApplicationMenuLayoutModule2.default);

var propTypes = {
  /**
   * Content element to be placed within the fill area of the header.
   * */
  content: _propTypes2.default.element,
  /**
   * Extensions element to be placed before the end of the header.
   * */
  extensions: _propTypes2.default.element,
  /**
   * Footer element to be placed at the end of the header.
   * */
  footer: _propTypes2.default.element,
  /**
   * Header element to be placed at the start of the header.
   * */
  header: _propTypes2.default.element
};

var ApplicationMenuLayout = function ApplicationMenuLayout(_ref) {
  var content = _ref.content,
      extensions = _ref.extensions,
      footer = _ref.footer,
      header = _ref.header,
      customProps = _objectWithoutProperties(_ref, ['content', 'extensions', 'footer', 'header']);

  var menuClassNames = cx(['menu', 'fill', customProps.className]);

  var headerElement = void 0;
  if (header) {
    headerElement = _react2.default.createElement(
      'div',
      { className: cx(['fit', 'header']) },
      header
    );
  }

  var contentElement = void 0;
  if (content) {
    contentElement = _react2.default.createElement(
      'div',
      { className: cx(['fill', 'content']) },
      _react2.default.createElement(
        'div',
        { className: cx('normalizer') },
        content
      )
    );
  }

  var extensionsElement = void 0;
  if (extensions) {
    extensionsElement = _react2.default.createElement(
      'div',
      { className: cx(['fit', 'widget']) },
      extensions
    );
  }

  var footerElement = void 0;
  if (footer) {
    footerElement = _react2.default.createElement(
      'div',
      { className: cx(['fit', 'footer']) },
      footer
    );
  }

  return _react2.default.createElement(
    'div',
    _extends({}, customProps, { className: menuClassNames }),
    headerElement,
    _react2.default.createElement(
      'div',
      { className: cx(['fill', 'body']) },
      extensionsElement,
      contentElement
    ),
    footerElement
  );
};

ApplicationMenuLayout.propTypes = propTypes;

exports.default = ApplicationMenuLayout;