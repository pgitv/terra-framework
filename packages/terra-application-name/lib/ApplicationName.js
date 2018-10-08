'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ApplicationMenuName = exports.ApplicationHeaderName = undefined;

var _ApplicationHeaderName = require('./ApplicationHeaderName');

var _ApplicationHeaderName2 = _interopRequireDefault(_ApplicationHeaderName);

var _ApplicationMenuName = require('./ApplicationMenuName');

var _ApplicationMenuName2 = _interopRequireDefault(_ApplicationMenuName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ApplicationName = {
  ApplicationHeaderName: _ApplicationHeaderName2.default,
  ApplicationMenuName: _ApplicationMenuName2.default
};

exports.default = ApplicationName;
exports.ApplicationHeaderName = _ApplicationHeaderName2.default;
exports.ApplicationMenuName = _ApplicationMenuName2.default;