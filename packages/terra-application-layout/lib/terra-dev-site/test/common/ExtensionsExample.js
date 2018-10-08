'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /* eslint-disable import/no-extraneous-dependencies */


var ApplicationHeaderDefault = function ApplicationHeaderDefault(_ref) {
  var customProps = _objectWithoutProperties(_ref, []);

  if (customProps.layoutConfig.size !== 'large') {
    return _react2.default.createElement(
      'div',
      { style: { width: '100%', height: '50px' } },
      'Test Extensions Small'
    );
  }

  return _react2.default.createElement(
    'div',
    { style: { color: '#fff' } },
    'Test Extensions Large'
  );
};

exports.default = ApplicationHeaderDefault;