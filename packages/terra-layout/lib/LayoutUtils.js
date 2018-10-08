'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCustomProps = exports.getBreakpointSize = undefined;

var _breakpointsModule = require('terra-responsive-element/lib/breakpoints.module.scss');

var _breakpointsModule2 = _interopRequireDefault(_breakpointsModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var small = _breakpointsModule2.default.small,
    medium = _breakpointsModule2.default.medium,
    large = _breakpointsModule2.default.large,
    huge = _breakpointsModule2.default.huge;


var getBreakpointSize = function getBreakpointSize(queryWidth) {
  var width = queryWidth || window.innerWidth;
  if (width >= huge) {
    return 'huge';
  }if (width >= large) {
    return 'large';
  }if (width >= medium) {
    return 'medium';
  }if (width >= small) {
    return 'small';
  }
  return 'tiny';
};

var getCustomProps = function getCustomProps(props, validPropTypes) {
  return Object.keys(props).filter(function (key) {
    return !Object.keys(validPropTypes).includes(key);
  }).reduce(function (customProps, key) {
    customProps[key] = props[key]; // eslint-disable-line no-param-reassign
    return customProps;
  }, {});
};

exports.getBreakpointSize = getBreakpointSize;
exports.getCustomProps = getCustomProps;