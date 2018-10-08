'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SlidePanel = require('../../../SlidePanel');

var _SlidePanel2 = _interopRequireDefault(_SlidePanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SlidePanelSquishLarge = function SlidePanelSquishLarge() {
  return _react2.default.createElement(
    'div',
    { style: { height: '100vh' } },
    _react2.default.createElement(_SlidePanel2.default, {
      mainContent: _react2.default.createElement('div', { style: { height: '100%', width: '100%', backgroundColor: 'red' } }),
      panelContent: _react2.default.createElement('div', { style: { height: '100%', width: '100%', backgroundColor: 'blue' } }),
      panelBehavior: 'squish',
      panelSize: 'large',
      isOpen: true,
      fill: true
    })
  );
};

exports.default = SlidePanelSquishLarge;