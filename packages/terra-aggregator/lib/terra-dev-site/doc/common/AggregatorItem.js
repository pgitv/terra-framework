'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _SelectableList = require('terra-list/lib/SelectableList');

var _SelectableList2 = _interopRequireDefault(_SelectableList);

var _terraContentContainer = require('terra-content-container');

var _terraContentContainer2 = _interopRequireDefault(_terraContentContainer);

var _terraArrange = require('terra-arrange');

var _terraArrange2 = _interopRequireDefault(_terraArrange);

var _terraAppDelegate = require('terra-app-delegate');

var _terraAppDelegate2 = _interopRequireDefault(_terraAppDelegate);

var _terraActionHeader = require('terra-action-header');

var _terraActionHeader2 = _interopRequireDefault(_terraActionHeader);

var _DisclosureComponent = require('terra-disclosure-manager/lib/terra-dev-site/doc/example/DisclosureComponent');

var _DisclosureComponent2 = _interopRequireDefault(_DisclosureComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReadonlyModal = function ReadonlyModal(_ref) {
  var app = _ref.app;
  return _react2.default.createElement(
    _terraContentContainer2.default,
    {
      header: _react2.default.createElement(_terraActionHeader2.default, {
        title: 'Info Modal',
        onClose: app.closeDisclosure,
        onBack: app.goBack
      })
    },
    _react2.default.createElement(
      'div',
      { style: { padding: '15px' } },
      _react2.default.createElement(
        'p',
        null,
        'This modal was not presented through the Aggregator. The Aggregator state was maintained.'
      )
    )
  );
};

ReadonlyModal.propTypes = {
  app: _terraAppDelegate2.default.propType
};

var propTypes = {
  aggregatorDelegate: _propTypes2.default.object,
  name: _propTypes2.default.string,
  disclosureType: _propTypes2.default.string,
  disclose: _propTypes2.default.func,
  registerDismissCheck: _propTypes2.default.func,
  requestDisclosureFocus: _propTypes2.default.func,
  releaseDisclosureFocus: _propTypes2.default.func
};

var AggregatorItem = function (_React$Component) {
  _inherits(AggregatorItem, _React$Component);

  function AggregatorItem(props) {
    _classCallCheck(this, AggregatorItem);

    var _this = _possibleConstructorReturn(this, (AggregatorItem.__proto__ || Object.getPrototypeOf(AggregatorItem)).call(this, props));

    _this.handleSelection = _this.handleSelection.bind(_this);
    _this.launchModal = _this.launchModal.bind(_this);
    return _this;
  }

  _createClass(AggregatorItem, [{
    key: 'handleSelection',
    value: function handleSelection(event, index) {
      var _this2 = this;

      var _props = this.props,
          aggregatorDelegate = _props.aggregatorDelegate,
          name = _props.name;


      var disclosureSizeForIndex = {
        0: 'tiny',
        1: 'small',
        2: 'medium',
        3: 'large',
        4: 'huge',
        5: 'fullscreen'
      };

      if (aggregatorDelegate.hasFocus && aggregatorDelegate.itemState.index === index) {
        aggregatorDelegate.releaseFocus().catch(function () {
          console.log('Section - Focus release failed. Something must be locked.'); // eslint-disable-line no-console
        });
        return;
      }

      aggregatorDelegate.requestFocus({
        index: index
      }).then(function (_ref2) {
        var disclose = _ref2.disclose;

        if (disclose) {
          disclose({
            preferredType: _this2.props.disclosureType,
            size: disclosureSizeForIndex[index],
            content: {
              key: 'Nested ' + name,
              component: _react2.default.createElement(_DisclosureComponent2.default, { name: 'Nested ' + name, disclosureType: _this2.props.disclosureType })
            }
          });
        }
      }).catch(function (error) {
        console.log('Section - Selection denied - ' + error); // eslint-disable-line no-console
      });
    }
  }, {
    key: 'launchModal',
    value: function launchModal() {
      var disclose = this.props.disclose;


      var key = 'ModalContent-' + Date.now();

      disclose({
        preferredType: 'modal',
        size: 'small',
        content: {
          key: key,
          component: _react2.default.createElement(ReadonlyModal, null)
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          name = _props2.name,
          disclosureType = _props2.disclosureType,
          disclose = _props2.disclose,
          aggregatorDelegate = _props2.aggregatorDelegate,
          requestDisclosureFocus = _props2.requestDisclosureFocus,
          releaseDisclosureFocus = _props2.releaseDisclosureFocus,
          registerDismissCheck = _props2.registerDismissCheck,
          customProps = _objectWithoutProperties(_props2, ['name', 'disclosureType', 'disclose', 'aggregatorDelegate', 'requestDisclosureFocus', 'releaseDisclosureFocus', 'registerDismissCheck']);

      var selectedIndex = void 0;
      if (aggregatorDelegate.hasFocus && aggregatorDelegate.itemState && aggregatorDelegate.itemState.index !== undefined) {
        selectedIndex = aggregatorDelegate.itemState.index;
      }

      return _react2.default.createElement(
        _terraContentContainer2.default,
        _extends({}, customProps, {
          header: _react2.default.createElement(_terraArrange2.default, {
            style: { background: '#f4f4f4', padding: '0.71429rem 0.5rem', fontSize: '1.285rem' },
            fitStart: _react2.default.createElement(
              'div',
              { style: { marginRight: '.7rem' } },
              disclose ? _react2.default.createElement(_terraButton2.default, { text: 'Modal (Without Requesting Focus)', onClick: this.launchModal }) : null
            ),
            fill: _react2.default.createElement(
              'div',
              null,
              name
            )
          })
        }),
        _react2.default.createElement(
          _SelectableList2.default,
          {
            isDivided: true,
            selectedIndexes: selectedIndex !== undefined ? [selectedIndex] : [],
            onChange: this.handleSelection
          },
          _react2.default.createElement(_SelectableList2.default.Item, {
            content: _react2.default.createElement(
              'div',
              { style: { padding: '.7rem' } },
              'Row 0'
            )
          }),
          _react2.default.createElement(_SelectableList2.default.Item, {
            content: _react2.default.createElement(
              'div',
              { style: { padding: '.7rem' } },
              'Row 1'
            )
          }),
          _react2.default.createElement(_SelectableList2.default.Item, {
            content: _react2.default.createElement(
              'div',
              { style: { padding: '.7rem' } },
              'Row 2'
            )
          }),
          _react2.default.createElement(_SelectableList2.default.Item, {
            content: _react2.default.createElement(
              'div',
              { style: { padding: '.7rem' } },
              'Row 3'
            )
          }),
          _react2.default.createElement(_SelectableList2.default.Item, {
            content: _react2.default.createElement(
              'div',
              { style: { padding: '.7rem' } },
              'Row 4'
            )
          }),
          _react2.default.createElement(_SelectableList2.default.Item, {
            content: _react2.default.createElement(
              'div',
              { style: { padding: '.7rem' } },
              'Row 5'
            )
          })
        )
      );
    }
  }]);

  return AggregatorItem;
}(_react2.default.Component);

AggregatorItem.propTypes = propTypes;

exports.default = AggregatorItem;