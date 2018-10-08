'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraGrid = require('terra-grid');

var _terraGrid2 = _interopRequireDefault(_terraGrid);

var _PopupBottomCenter = require('terra-popup/lib/terra-dev-site/doc/example/PopupBottomCenter');

var _PopupBottomCenter2 = _interopRequireDefault(_PopupBottomCenter);

var _PopupBottomLeft = require('terra-popup/lib/terra-dev-site/doc/example/PopupBottomLeft');

var _PopupBottomLeft2 = _interopRequireDefault(_PopupBottomLeft);

var _PopupBottomRight = require('terra-popup/lib/terra-dev-site/doc/example/PopupBottomRight');

var _PopupBottomRight2 = _interopRequireDefault(_PopupBottomRight);

var _PopupMiddleCenter = require('terra-popup/lib/terra-dev-site/doc/example/PopupMiddleCenter');

var _PopupMiddleCenter2 = _interopRequireDefault(_PopupMiddleCenter);

var _PopupMiddleLeft = require('terra-popup/lib/terra-dev-site/doc/example/PopupMiddleLeft');

var _PopupMiddleLeft2 = _interopRequireDefault(_PopupMiddleLeft);

var _PopupMiddleRight = require('terra-popup/lib/terra-dev-site/doc/example/PopupMiddleRight');

var _PopupMiddleRight2 = _interopRequireDefault(_PopupMiddleRight);

var _PopupTopCenter = require('terra-popup/lib/terra-dev-site/doc/example/PopupTopCenter');

var _PopupTopCenter2 = _interopRequireDefault(_PopupTopCenter);

var _PopupTopLeft = require('terra-popup/lib/terra-dev-site/doc/example/PopupTopLeft');

var _PopupTopLeft2 = _interopRequireDefault(_PopupTopLeft);

var _PopupTopRight = require('terra-popup/lib/terra-dev-site/doc/example/PopupTopRight');

var _PopupTopRight2 = _interopRequireDefault(_PopupTopRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

var PopupAttachements = function PopupAttachements() {
  return _react2.default.createElement(
    _terraGrid2.default,
    null,
    _react2.default.createElement(
      _terraGrid2.default.Row,
      null,
      _react2.default.createElement(
        _terraGrid2.default.Column,
        { col: 3 },
        _react2.default.createElement(_PopupBottomLeft2.default, null)
      ),
      _react2.default.createElement(
        _terraGrid2.default.Column,
        { col: 3 },
        _react2.default.createElement(_PopupBottomCenter2.default, null)
      ),
      _react2.default.createElement(
        _terraGrid2.default.Column,
        { col: 3 },
        _react2.default.createElement(_PopupBottomRight2.default, null)
      )
    ),
    _react2.default.createElement(
      _terraGrid2.default.Row,
      null,
      _react2.default.createElement(
        _terraGrid2.default.Column,
        { col: 3 },
        _react2.default.createElement(_PopupMiddleLeft2.default, null)
      ),
      _react2.default.createElement(
        _terraGrid2.default.Column,
        { col: 3 },
        _react2.default.createElement(_PopupMiddleCenter2.default, null)
      ),
      _react2.default.createElement(
        _terraGrid2.default.Column,
        { col: 3 },
        _react2.default.createElement(_PopupMiddleRight2.default, null)
      )
    ),
    _react2.default.createElement(
      _terraGrid2.default.Row,
      null,
      _react2.default.createElement(
        _terraGrid2.default.Column,
        { col: 3 },
        _react2.default.createElement(_PopupTopLeft2.default, null)
      ),
      _react2.default.createElement(
        _terraGrid2.default.Column,
        { col: 3 },
        _react2.default.createElement(_PopupTopCenter2.default, null)
      ),
      _react2.default.createElement(
        _terraGrid2.default.Column,
        { col: 3 },
        _react2.default.createElement(_PopupTopRight2.default, null)
      )
    )
  );
};

/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
// attachment examples
exports.default = PopupAttachements;