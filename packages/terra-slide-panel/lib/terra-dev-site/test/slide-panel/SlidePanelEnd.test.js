'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SlidePanel = require('../../../SlidePanel');

var _SlidePanel2 = _interopRequireDefault(_SlidePanel);

var _SlidePanelMainContent = require('../common/SlidePanelMainContent');

var _SlidePanelMainContent2 = _interopRequireDefault(_SlidePanelMainContent);

var _SlidePanelPanelContent = require('../common/SlidePanelPanelContent');

var _SlidePanelPanelContent2 = _interopRequireDefault(_SlidePanelPanelContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SlidePanelEnd = function SlidePanelEnd() {
  return _react2.default.createElement(_SlidePanel2.default, {
    mainContent: _react2.default.createElement(_SlidePanelMainContent2.default, null),
    panelContent: _react2.default.createElement(_SlidePanelPanelContent2.default, null),
    panelBehavior: 'overlay',
    panelPosition: 'end',
    panelSize: 'small',
    isOpen: true
  });
};

exports.default = SlidePanelEnd;