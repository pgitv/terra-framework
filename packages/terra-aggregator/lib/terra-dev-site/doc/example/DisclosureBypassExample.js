'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraAppDelegate = require('terra-app-delegate');

var _terraAppDelegate2 = _interopRequireDefault(_terraAppDelegate);

var _terraModalManager = require('terra-modal-manager');

var _terraModalManager2 = _interopRequireDefault(_terraModalManager);

var _terraSlidePanelManager = require('terra-slide-panel-manager');

var _terraSlidePanelManager2 = _interopRequireDefault(_terraSlidePanelManager);

var _AggregatorContainer = require('terra-aggregator/lib/terra-dev-site/doc/common/AggregatorContainer');

var _AggregatorContainer2 = _interopRequireDefault(_AggregatorContainer);

var _AggregatorItem = require('terra-aggregator/lib/terra-dev-site/doc/common/AggregatorItem');

var _AggregatorItem2 = _interopRequireDefault(_AggregatorItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-unresolved, import/extensions */

/* eslint-disable import/no-unresolved, import/extensions */
var items = Object.freeze([{
  key: 'SECTION_0',
  component: _react2.default.createElement(_AggregatorItem2.default, { name: 'Section 0', disclosureType: 'panel' })
}, {
  key: 'SECTION_1',
  component: _react2.default.createElement(_AggregatorItem2.default, { name: 'Section 1', disclosureType: 'panel' })
}]);

var ModalManagerBypass = function ModalManagerBypass(_ref) {
  var app = _ref.app;

  var updatedItems = items.map(function (item) {
    return {
      key: item.key,
      component: _react2.default.cloneElement(item.component, {
        disclose: app.disclose
      })
    };
  });

  return _react2.default.createElement(
    _terraSlidePanelManager2.default,
    { app: app },
    _react2.default.createElement(_AggregatorContainer2.default, {
      items: updatedItems
    })
  );
};

ModalManagerBypass.propTypes = {
  app: _terraAppDelegate2.default.propType
};

var ModalBypassExample = function ModalBypassExample() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'p',
      null,
      'In this example, the Aggregator items are provided with the ModalManager disclosure function directly. Calling that function does not require Aggregator focus and will bypass the Aggregator entirely. This can be useful for simple Modal workflows that should not impact Aggregator state.'
    ),
    _react2.default.createElement(
      _terraModalManager2.default,
      null,
      _react2.default.createElement(ModalManagerBypass, null)
    )
  );
};

exports.default = ModalBypassExample;