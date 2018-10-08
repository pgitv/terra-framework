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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  /**
   * The components that will be managed by the Aggregator. Each component provided will be provided with an 'aggregatorDelegate' prop
   * containing the Aggregator API. Keys must also be provided to allow the Aggregator to uniquely identify the component.
   * Immutable objects are preferred.
   */
  items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    key: _propTypes2.default.string.isRequired,
    component: _propTypes2.default.element.isRequired
  })),
  /**
   * A function that will override the Aggregators default render. The function will receive an Object parameter data necessary for the
   * render process.
   */
  render: _propTypes2.default.func,
  /**
   * A function that will be provided to Aggregator items that have received focus. The function must adhere to the standardized
   * AppDelegate disclosure API.
   */
  disclose: _propTypes2.default.func
};

var defaultProps = {
  items: []
};

var Aggregator = function (_React$Component) {
  _inherits(Aggregator, _React$Component);

  function Aggregator(props) {
    _classCallCheck(this, Aggregator);

    var _this = _possibleConstructorReturn(this, (Aggregator.__proto__ || Object.getPrototypeOf(Aggregator)).call(this, props));

    _this.requestFocus = _this.requestFocus.bind(_this);
    _this.releaseFocus = _this.releaseFocus.bind(_this);
    _this.setFocusState = _this.setFocusState.bind(_this);
    _this.resetFocusState = _this.resetFocusState.bind(_this);
    _this.renderItems = _this.renderItems.bind(_this);

    _this.state = {
      focusedItemId: undefined,
      focusedItemState: undefined
    };
    return _this;
  }

  _createClass(Aggregator, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var items = this.props.items;
      var focusedItemId = this.state.focusedItemId;


      if (nextProps.items !== this.props.items) {
        // If the currently focused item is not present in the new items set,
        // the focus is forcefully released to clean up any presented disclosures.
        var focusItemIsPresent = void 0;
        items.forEach(function (item) {
          if (item.key === focusedItemId) {
            focusItemIsPresent = true;
          }
        });

        if (!focusItemIsPresent) {
          this.releaseFocus(undefined, true);
        }
      }
    }
  }, {
    key: 'setFocusState',
    value: function setFocusState(itemKey, itemState) {
      this.setState({
        focusedItemId: itemKey,
        focusedItemState: itemState
      });
    }
  }, {
    key: 'resetFocusState',
    value: function resetFocusState() {
      this.setFocusState();
    }
  }, {
    key: 'requestFocus',
    value: function requestFocus(itemId, itemState) {
      var _this2 = this;

      var disclose = this.props.disclose;
      var focusedItemId = this.state.focusedItemId;


      return new Promise(function (resolve, reject) {
        _this2.releaseFocus(focusedItemId).then(function () {
          _this2.setFocusState(itemId, Object.freeze(itemState || {}));

          var focusRequestPayload = {};

          /**
           * If the Aggregator is provided with disclosure functionality, the focus request is resolved with a custom
           * disclose implementation.
           */
          if (disclose) {
            focusRequestPayload.disclose = function (data) {
              /**
               * If the itemId no longer matches the focusedItemId, then the disclose is being called after
               * the item has lost focus. This can happen if an Aggregator item caches the disclosue function they're given
               * and calls it later.
               */
              if (_this2.state.focusedItemId !== itemId) {
                return Promise.reject();
              }

              return disclose(data).then(function (_ref) {
                var afterDismiss = _ref.afterDismiss,
                    dismissDisclosure = _ref.dismissDisclosure,
                    other = _objectWithoutProperties(_ref, ['afterDismiss', 'dismissDisclosure']);

                /**
                 * The disclosure's dismissDisclosure instance is cached so it can be called later. If an Aggregator item is
                 * currently presenting a disclosure and releases focus, we will call this function to force
                 * the disclosure to close.
                 */
                _this2.forceDismissInstance = dismissDisclosure;

                /**
                 * A handler is added to the deferred afterDismiss promise chain to remove the cached dismissDisclosure instance (the disclosure is
                 * closing, so it is no longer relevant). The handler also resets the focus state if focus is currently held by a component.
                 */
                afterDismiss.then(function () {
                  _this2.forceDismissInstance = undefined;

                  if (_this2.state.focusedItemId) {
                    _this2.resetFocusState();
                  }
                });

                // We return the same API so as not to disrupt the chain.
                return _extends({ afterDismiss: afterDismiss, dismissDisclosure: dismissDisclosure }, other);
              });
            };
          }

          resolve(focusRequestPayload);
        }).catch(function () {
          reject();
        });
      });
    }
  }, {
    key: 'releaseFocus',
    value: function releaseFocus(itemId, force) {
      var _this3 = this;

      // If nothing is currently in focus, we can resolve immediately.
      if (!this.state.focusedItemId) {
        return Promise.resolve();
      }

      /**
       * If the provided item ID is not the currently focused ID, and the release is not forced,
       * the release is rejected to protect against delayed calls.
       */
      if (itemId !== this.state.focusedItemId && !force) {
        return Promise.reject();
      }

      return new Promise(function (resolve, reject) {
        /**
         * If forceDismissInstance is present, a disclosure must have been opened by the currently focused
         * Aggregator item. Therefore, we will call the forceDismissInstance in order to keep things in sync. The promise
         * returned by forceDismissInstance will be inserted into the Promise chain. If the promise is rejected,
         * the Aggregator's focus state will not be reset.
         *
         * The focus is only reset if the disclosure was dismissed successfully.
         */
        if (_this3.forceDismissInstance) {
          _this3.forceDismissInstance().then(function () {
            _this3.resetFocusState();
            resolve();
          }).catch(function () {
            reject();
          });
        } else {
          // If a previous disclosure is not detected, we can immediately resolve and reset the focus.
          _this3.resetFocusState();
          resolve();
        }
      });
    }
  }, {
    key: 'renderItems',
    value: function renderItems() {
      var _this4 = this;

      var items = this.props.items;
      var _state = this.state,
          focusedItemId = _state.focusedItemId,
          focusedItemState = _state.focusedItemState;


      return items.map(function (item) {
        var childIsActive = focusedItemId === item.key;

        /**
         * Each child given to the Aggregator is provided with an 'aggregatorDelegate' prop with the following values:
         * hasFocus - A Boolean flag indicating whether or not the child is currently focused
         * requestFocus - A function that will attempt to provide focus to the calling child. It takes an Object parameter that
         *                should hold state data relevant to the focus event. The function returns a Promise that is resolved if
         *                the focus request was successful. The Promise is resolved with a 'disclose' function that can be used to
         *                disclose further content in a manner managed by the Aggregator. If the focus request was unsuccessful, the
         *                Promise will be rejected.
         * releaseFocus - A function that will attempt to release the focus held by the calling child. Returns a promse that is
         *                resolved if the release request was successful. If the release request was unsuccessful, the
         *                Promise will be rejected. This function is only provided to components that are focused.
         * itemState     - An Object containing the state given to the Aggregator during the focus request.
         */
        return _react2.default.cloneElement(item.component, {
          key: item.key,
          aggregatorDelegate: {
            hasFocus: childIsActive,
            requestFocus: function requestFocus(state) {
              return _this4.requestFocus(item.key, state);
            },
            releaseFocus: childIsActive ? function () {
              return _this4.releaseFocus(item.key);
            } : undefined,
            itemState: childIsActive ? focusedItemState : undefined
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var renderedItems = this.renderItems();

      if (this.props.render) {
        return this.props.render({ items: renderedItems });
      }

      return _react2.default.createElement(
        'div',
        null,
        renderedItems
      );
    }
  }]);

  return Aggregator;
}(_react2.default.Component);

Aggregator.propTypes = propTypes;
Aggregator.defaultProps = defaultProps;

exports.default = Aggregator;