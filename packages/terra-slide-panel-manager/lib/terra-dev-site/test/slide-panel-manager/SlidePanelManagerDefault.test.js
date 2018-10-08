'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TestExample = require('terra-disclosure-manager/lib/terra-dev-site/test/common/TestExample');

var _TestExample2 = _interopRequireDefault(_TestExample);

var _SlidePanelManager = require('../../../SlidePanelManager');

var _SlidePanelManager2 = _interopRequireDefault(_SlidePanelManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SlidePanelManagerDefault = function SlidePanelManagerDefault() {
  return _react2.default.createElement(
    'div',
    { role: 'main', style: { height: '100%' } },
    _react2.default.createElement(
      _SlidePanelManager2.default,
      null,
      _react2.default.createElement(_TestExample2.default, { identifier: 'root-component', disclosureType: 'panel' })
    )
  );
};

exports.default = SlidePanelManagerDefault;