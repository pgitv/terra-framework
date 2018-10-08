'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ApplicationLinksPropType = exports.ApplicationTabs = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ApplicationTabs = require('./tabs/ApplicationTabs');

var _ApplicationTabs2 = _interopRequireDefault(_ApplicationTabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ApplicationLinksPropType = _propTypes2.default.shape({
  /**
   * Alignment of the navigational tabs. ( e.g start, center, end )
   */
  alignment: _propTypes2.default.oneOf(['start', 'center', 'end']),
  /**
   * Navigational links that will generate tabs that will update the path. These paths are matched with react-router to selection.
   */
  links: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    /**
     * The id to append to the link.
     */
    id: _propTypes2.default.string,
    /**
     * The path to push to the route.
     */
    path: _propTypes2.default.string.isRequired,
    /**
     * The display text for the link.
     */
    text: _propTypes2.default.string.isRequired
  }))
});

var ApplicationLinks = {
  ApplicationTabs: _ApplicationTabs2.default,
  ApplicationLinksPropType: ApplicationLinksPropType
};

exports.default = ApplicationLinks;
exports.ApplicationTabs = _ApplicationTabs2.default;
exports.ApplicationLinksPropType = ApplicationLinksPropType;