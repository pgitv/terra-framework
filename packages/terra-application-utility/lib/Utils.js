'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KEY_CODES = {
  ENTER: 13,
  SPACE: 32,
  UP_ARROW: 38,
  DOWN_ARROW: 40,
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39,
  BACK_SPACE: 8
};

var LOCATIONS = {
  BODY: 'body',
  FOOTER: 'footer'
};

var VARIANTS = {
  HEADER: 'header',
  MENU: 'menu'
};

var itemShape = _propTypes2.default.shape({
  /**
   * Array containing the keys of each child item of this item.
   */
  childKeys: _propTypes2.default.arrayOf(_propTypes2.default.string),
  /**
   * The component associated with this item.
   */
  content: _propTypes2.default.object,
  /**
   * The location to place the item. One of Utils.LOCATIONS.BODY, Utils.LOCATIONS.FOOTER.
   */
  contentLocation: _propTypes2.default.oneOf([LOCATIONS.BODY, LOCATIONS.FOOTER]),
  /**
   * Boolean indicating if the item is selected.
   */
  isSelected: _propTypes2.default.bool,
  /**
   * Boolean indicating if the item is selectable.
   */
  isSelectable: _propTypes2.default.bool,
  /**
   * The unique key associated with this item.
   */
  key: _propTypes2.default.string.isRequired,
  /**
   * Optional meta data to be returned along with the item key within the onChange.
   */
  metaData: _propTypes2.default.object,
  /**
   * The text associated with this item.
   */
  title: _propTypes2.default.string
});

var Utils = {
  KEY_CODES: KEY_CODES,
  LOCATIONS: LOCATIONS,
  VARIANTS: VARIANTS,
  itemShape: itemShape
};

exports.default = Utils;