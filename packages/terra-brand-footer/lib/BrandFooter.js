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

var _BrandFooterModule = require('./BrandFooter.module.scss');

var _BrandFooterModule2 = _interopRequireDefault(_BrandFooterModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cx = _bind2.default.bind(_BrandFooterModule2.default);

var propTypes = {
  /**
  * An array of navigation links with each element specifiying text, href and target keys with appropriate values.
  *
  * **DEPRECATED**: Use `sections` prop instead.
  */
  links: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    /**
    * Text to be disaplyed as navigational link.
    */
    text: _propTypes2.default.string,
    /**
    * URL of the navigational link.
    */
    href: _propTypes2.default.string,
    /**
    * Attribute to open on same or different tab on clicking the navigational link.
    */
    target: _propTypes2.default.string
  })),
  /**
  * A set of navigation links to be displayed with optional headers. Will override the `links` prop if both are provided.
  *
  * ```
  * Array structured like:
  * [
  *   {
  *     headerText: string,
  *     links: [
  *       text: required string,
  *       href: required string,
  *       target: string,
  *     ],
  *   },
  * ]
  * ```
  */
  sections: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    /**
    * The optional text to display as a header
    */
    headerText: _propTypes2.default.string,
    /**
    * An array of navigation links with each element specifiying text, href and target keys with appropriate values.
    */
    links: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      /**
      * Text to be disaplyed as navigational link.
      */
      text: _propTypes2.default.string.isRequired,
      /**
      * URL of the navigational link.
      */
      href: _propTypes2.default.string.isRequired,
      /**
      * Attribute to open on same or different tab on clicking the navigational link.
      */
      target: _propTypes2.default.string
    }))
  })),
  /**
  * If true link sections will be laid out from top to bottom, then left to right if the max width is reached
  */
  isVertical: _propTypes2.default.bool,
  /**
  * The content to be displayed in left side area of the footer.
  */
  contentLeft: _propTypes2.default.node,
  /**
  * The content to be displayed in right side area of the footer.
  */
  contentRight: _propTypes2.default.node,
  /**
  * The content to be displayed in bottom area of the footer.
  */
  contentBottom: _propTypes2.default.node
};

var defaultProps = {
  links: [],
  sections: [],
  isVertical: false,
  contentLeft: null,
  contentRight: null,
  contentBottom: null
};

var BrandFooter = function BrandFooter(_ref) {
  var links = _ref.links,
      sections = _ref.sections,
      isVertical = _ref.isVertical,
      contentLeft = _ref.contentLeft,
      contentRight = _ref.contentRight,
      contentBottom = _ref.contentBottom,
      customProps = _objectWithoutProperties(_ref, ['links', 'sections', 'isVertical', 'contentLeft', 'contentRight', 'contentBottom']);

  var BrandFooterClassNames = cx(['brand-footer', customProps.className]);

  var processedSections = void 0;
  if (links.length > 0 && sections.length === 0) {
    processedSections = [{
      headerText: '',
      links: links,
      id: 0
    }];
  } else {
    processedSections = sections;

    // Assign ids to use as keys
    for (var i = 0; i < processedSections.length; i += 1) {
      processedSections[i].id = i;
    }
  }

  // The old links prop can't have section headers. Needed for vertical layout to insert padding to keep columns without headers aligned
  var containsASectionHeader = processedSections.some(function (linkGroup) {
    return linkGroup.headerText;
  });

  var navigation = void 0;
  if (processedSections.length > 0) {
    navigation = _react2.default.createElement(
      'nav',
      { className: cx(['nav', isVertical ? 'nav-vertical' : 'nav-horizontal']) },
      processedSections.map(function (linkGroup) {
        return _react2.default.createElement(
          'section',
          { className: cx('navigation-section'), key: linkGroup.id },
          // When displaying vertically if one column has a header all columns are aligned as if they have a header
          (containsASectionHeader && isVertical || linkGroup.headerText) && _react2.default.createElement(
            'h3',
            { className: cx('list-header'), key: linkGroup.headerText },
            // Insert a zero width space to act as a placeholder section header that doesn't display but takes vertical space
            linkGroup.headerText || '\u200B'
          ),
          _react2.default.createElement(
            'ul',
            { className: cx('menu') },
            linkGroup.links && linkGroup.links.map(function (link) {
              var spreadTarget = link.target !== undefined ? { target: link.target } : {};
              return _react2.default.createElement(
                'li',
                { className: cx('list-item'), key: link.text + link.href },
                _react2.default.createElement(
                  'a',
                  _extends({ className: cx('link'), href: link.href }, spreadTarget),
                  link.text
                )
              );
            })
          )
        );
      })
    );
  }

  return _react2.default.createElement(
    'footer',
    _extends({ role: 'contentinfo' }, customProps, { className: BrandFooterClassNames }),
    navigation,
    _react2.default.createElement(
      'div',
      { className: cx('footer-content') },
      _react2.default.createElement(
        'div',
        { className: cx('content-top') },
        contentLeft,
        contentRight
      ),
      _react2.default.createElement(
        'div',
        { className: cx('content-bottom') },
        contentBottom
      )
    )
  );
};

BrandFooter.propTypes = propTypes;
BrandFooter.defaultProps = defaultProps;

exports.default = BrandFooter;