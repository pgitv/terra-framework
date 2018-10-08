'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var supportedAttributes = ['location', 'parentPaths', 'showParent', 'showRoot', 'show'];

/**
 * Creates a new RoutingStackDelegate Object instance based on the supportedAttributes.
 */
var create = function create(data) {
  var delegate = {};
  supportedAttributes.forEach(function (attribute) {
    if (data && data[attribute]) {
      delegate[attribute] = data[attribute];
    }
  });

  return Object.freeze(delegate);
};

/**
 * Performs a shallow equality on the supportedAttributes to determine the equality of two
 * RoutingStackDelegate Object instances.
 */
var isEqual = function isEqual(delegateA, delegateB) {
  if (delegateA === delegateB) {
    return true;
  }

  if (!delegateA || !delegateB) {
    return false;
  }

  return !supportedAttributes.some(function (attribute) {
    return delegateA[attribute] !== delegateB[attribute];
  });
};

var RoutingStackDelegate = {
  propType: _propTypes2.default.shape({
    location: _propTypes2.default.shape({
      pathname: _propTypes2.default.string
    }),
    parentPaths: _propTypes2.default.arrayOf(_propTypes2.default.string),
    showParent: _propTypes2.default.func,
    showRoot: _propTypes2.default.func,
    show: _propTypes2.default.func
  }),
  create: create,
  isEqual: isEqual
};

exports.default = RoutingStackDelegate;