'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.availableDisclosureWidths = exports.availableDisclosureHeights = exports.availableDisclosureSizes = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _terraAppDelegate = require('terra-app-delegate');

var _terraAppDelegate2 = _interopRequireDefault(_terraAppDelegate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var availableDisclosureSizes = {
  TINY: 'tiny',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  HUGE: 'huge',
  FULLSCREEN: 'fullscreen'
};

var availableDisclosureHeights = {
  240: 240,
  420: 420,
  600: 600,
  690: 690,
  780: 780,
  870: 870,
  960: 960,
  1140: 1140
};

var availableDisclosureWidths = {
  320: 320,
  480: 480,
  640: 640,
  800: 800,
  960: 960,
  1120: 1120,
  1280: 1280,
  1440: 1440,
  1600: 1600,
  1760: 1760,
  1920: 1920
};

var defaultDimensions = { height: availableDisclosureHeights['690'], width: availableDisclosureWidths['1120'] };
var defaultSize = availableDisclosureSizes.SMALL;

var isValidDimensions = function isValidDimensions(dimensions) {
  return availableDisclosureHeights[dimensions.height] && availableDisclosureWidths[dimensions.width];
};

var isValidSize = function isValidSize(size) {
  return availableDisclosureSizes[size.toUpperCase()];
};

exports.availableDisclosureSizes = availableDisclosureSizes;
exports.availableDisclosureHeights = availableDisclosureHeights;
exports.availableDisclosureWidths = availableDisclosureWidths;


var propTypes = {
  /**
   * An AppDelegate instance that will be integrated with the DisclosureManager instance. The DisclosureManager will defer to it if unsupported
   * actions occur.
   */
  app: _terraAppDelegate2.default.propType,
  /**
   * The child components that will be provided with an AppDelegate 'app' prop used to interact with the DisclosureManager instance.
   */
  children: _propTypes2.default.node,
  /**
   * A function used to provide rendering capabilities to the DisclosureManager.
   */
  render: _propTypes2.default.func.isRequired,
  /**
   * An array of disclosure types that the DisclosureManager should support. If an unsupported disclosure request occurs, the DisclosureManager will
   * utilize its 'app' prop and forward the request instead of handling the request itself.
   */
  supportedDisclosureTypes: _propTypes2.default.array
};

var defaultProps = {
  supportedDisclosureTypes: []
};

var DisclosureManager = function (_React$Component) {
  _inherits(DisclosureManager, _React$Component);

  _createClass(DisclosureManager, null, [{
    key: 'cloneDisclosureState',

    /**
     * Clones the current disclosure component state objects and returns the structure for further mutation.
     */
    value: function cloneDisclosureState(state) {
      var newState = _extends({}, state);
      newState.disclosureComponentKeys = _extends([], newState.disclosureComponentKeys);
      newState.disclosureComponentData = _extends({}, newState.disclosureComponentData);

      return newState;
    }
  }]);

  function DisclosureManager(props) {
    _classCallCheck(this, DisclosureManager);

    var _this = _possibleConstructorReturn(this, (DisclosureManager.__proto__ || Object.getPrototypeOf(DisclosureManager)).call(this, props));

    _this.resolveDismissPromise = _this.resolveDismissPromise.bind(_this);
    _this.resolveDismissChecksInSequence = _this.resolveDismissChecksInSequence.bind(_this);

    _this.disclosureTypeIsSupported = _this.disclosureTypeIsSupported.bind(_this);
    _this.safelyCloseDisclosure = _this.safelyCloseDisclosure.bind(_this);
    _this.generatePopFunction = _this.generatePopFunction.bind(_this);

    _this.renderContentComponents = _this.renderContentComponents.bind(_this);
    _this.renderDisclosureComponents = _this.renderDisclosureComponents.bind(_this);

    _this.openDisclosure = _this.openDisclosure.bind(_this);
    _this.pushDisclosure = _this.pushDisclosure.bind(_this);
    _this.popDisclosure = _this.popDisclosure.bind(_this);
    _this.closeDisclosure = _this.closeDisclosure.bind(_this);
    _this.requestDisclosureFocus = _this.requestDisclosureFocus.bind(_this);
    _this.releaseDisclosureFocus = _this.releaseDisclosureFocus.bind(_this);
    _this.maximizeDisclosure = _this.maximizeDisclosure.bind(_this);
    _this.minimizeDisclosure = _this.minimizeDisclosure.bind(_this);

    // These cached functions are stored outside of state to prevent unnecessary rerenders.
    _this.dismissChecks = {};
    _this.onDismissResolvers = {};

    _this.state = {
      disclosureIsOpen: false,
      disclosureIsFocused: true,
      disclosureIsMaximized: false,
      disclosureSize: undefined,
      disclosureDimensions: undefined,
      disclosureComponentKeys: [],
      disclosureComponentData: {}
    };
    return _this;
  }

  /**
   * Determines if the provided disclosure type is supported by the DisclosureManager.
   * @return `true` if the type is supported or if there is no fallback `app` present. `false` is returned otherwise.
   */


  _createClass(DisclosureManager, [{
    key: 'disclosureTypeIsSupported',
    value: function disclosureTypeIsSupported(type) {
      var _props = this.props,
          app = _props.app,
          supportedDisclosureTypes = _props.supportedDisclosureTypes;


      return supportedDisclosureTypes.indexOf(type) >= 0 || !app;
    }
  }, {
    key: 'openDisclosure',
    value: function openDisclosure(data) {
      var dimensions = data.dimensions;

      if (dimensions && !isValidDimensions(dimensions)) {
        // dimensions were provided, but are invalid, set the default
        dimensions = defaultDimensions;
      }

      // eslint-disable-next-line prefer-destructuring
      var size = data.size;
      if (!size || size && !isValidSize(size)) {
        // no valid size passed
        if (!dimensions) {
          // no valid size and no valid dimensions, set the default
          dimensions = defaultDimensions;
        }
        // ensure size set for pacivity
        size = defaultSize;
      }

      this.setState({
        disclosureIsOpen: true,
        disclosureIsFocused: true,
        disclosureSize: size,
        disclosureDimensions: dimensions,
        disclosureComponentKeys: [data.content.key],
        disclosureComponentData: _defineProperty({}, data.content.key, {
          key: data.content.key,
          name: data.content.name,
          props: data.content.props,
          component: data.content.component
        })
      });
    }
  }, {
    key: 'pushDisclosure',
    value: function pushDisclosure(data) {
      var newState = DisclosureManager.cloneDisclosureState(this.state);

      newState.disclosureComponentKeys.push(data.content.key);
      newState.disclosureComponentData[data.content.key] = {
        key: data.content.key,
        name: data.content.name,
        props: data.content.props,
        component: data.content.component
      };

      this.setState(newState);
    }
  }, {
    key: 'popDisclosure',
    value: function popDisclosure() {
      var newState = DisclosureManager.cloneDisclosureState(this.state);

      newState.disclosureComponentData[newState.disclosureComponentKeys.pop()] = undefined;

      this.setState(newState);
    }
  }, {
    key: 'closeDisclosure',
    value: function closeDisclosure() {
      this.setState({
        disclosureIsOpen: false,
        disclosureIsFocused: false,
        disclosureIsMaximized: false,
        disclosureSize: undefined,
        disclosureDimensions: undefined,
        disclosureComponentKeys: [],
        disclosureComponentData: {}
      });
    }
  }, {
    key: 'requestDisclosureFocus',
    value: function requestDisclosureFocus() {
      this.setState({
        disclosureIsFocused: true
      });
    }
  }, {
    key: 'releaseDisclosureFocus',
    value: function releaseDisclosureFocus() {
      this.setState({
        disclosureIsFocused: false
      });
    }
  }, {
    key: 'maximizeDisclosure',
    value: function maximizeDisclosure() {
      this.setState({
        disclosureIsMaximized: true
      });
    }
  }, {
    key: 'minimizeDisclosure',
    value: function minimizeDisclosure() {
      this.setState({
        disclosureIsMaximized: false
      });
    }

    /**
     * Looks up the deferred afterDismiss promise for the provided disclosure key and
     * resolves it.
     */

  }, {
    key: 'resolveDismissPromise',
    value: function resolveDismissPromise(key) {
      var resolve = this.onDismissResolvers[key];
      if (resolve) {
        resolve();
      }
      this.onDismissResolvers[key] = undefined;
    }

    /**
     * Resolves the dismiss checks for the current disclosure components in sequence. The Promise will either resolve if all checks resolve or
     * reject on the first detected rejection. This ensures that checks do not occur for components after the first rejection.
     */

  }, {
    key: 'resolveDismissChecksInSequence',
    value: function resolveDismissChecksInSequence(keys) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (!keys.length) {
          resolve();
          return;
        }

        var key = keys.pop();

        _this2.generatePopFunction(key)().then(function () {
          _this2.resolveDismissChecksInSequence(keys).then(resolve).catch(reject);
        }).catch(function () {
          reject();
        });
      });
    }

    /**
     * Closes the disclosure after calling all checks and resolving all deferred promises.
     * @return A Promise, resolved if the close was performed or rejected if it was not.
     */

  }, {
    key: 'safelyCloseDisclosure',
    value: function safelyCloseDisclosure() {
      var _this3 = this;

      var disclosureKeys = _extends([], this.state.disclosureComponentKeys);

      /**
       * Before closing the disclosure, the dismiss checks for components in the stack are
       * executed in stack order. Components will be dismissed in order up until a rejection occurs, at which point
       * the blocking component will be presented.
       */
      return this.resolveDismissChecksInSequence(disclosureKeys).then(function () {
        _this3.dismissChecks = {};
        _this3.closeDisclosure();
      });
    }

    /**
     * Creates an instance of a pop function for the component represented by the given key.
     */

  }, {
    key: 'generatePopFunction',
    value: function generatePopFunction(key) {
      var _this4 = this;

      return function () {
        var promiseRoot = Promise.resolve();

        var dismissCheck = _this4.dismissChecks[key];
        if (dismissCheck) {
          promiseRoot = dismissCheck();
        }

        return promiseRoot.then(function () {
          _this4.dismissChecks[key] = undefined;
          _this4.resolveDismissPromise(key);
        }).then(function () {
          _this4.popDisclosure();
        });
      };
    }
  }, {
    key: 'renderContentComponents',
    value: function renderContentComponents() {
      var _this5 = this;

      var _props2 = this.props,
          children = _props2.children,
          app = _props2.app;


      var appDelegate = {};

      /**
       * The disclose function provided will open the disclosure with the provided content.
       */
      appDelegate.disclose = function (data) {
        if (_this5.disclosureTypeIsSupported(data.preferredType)) {
          return _this5.safelyCloseDisclosure().then(function () {
            _this5.openDisclosure(data);
            /**
             * The disclose Promise chain is resolved with a set of APIs that the disclosing content can use to
             * manipulate the disclosure, if necessary.
             */
            return {
              /**
               * The afterDismiss value is a deferred Promise that will be resolved when the disclosed component is dismissed.
               */
              afterDismiss: new Promise(function (resolve) {
                _this5.onDismissResolvers[data.content.key] = resolve;
              }),
              /**
               * The dismissDisclosure value is a function that the disclosing component can use to manually close the disclosure.
               * Any and all dismiss checks are still performed.
               */
              dismissDisclosure: _this5.safelyCloseDisclosure
            };
          });
        }
        return app.disclose(data);
      };

      return _react2.default.Children.map(children, function (child) {
        return _react2.default.cloneElement(child, {
          app: _terraAppDelegate2.default.clone(app, appDelegate)
        });
      });
    }
  }, {
    key: 'renderDisclosureComponents',
    value: function renderDisclosureComponents() {
      var _this6 = this;

      var app = this.props.app;
      var _state = this.state,
          disclosureComponentKeys = _state.disclosureComponentKeys,
          disclosureComponentData = _state.disclosureComponentData,
          disclosureIsMaximized = _state.disclosureIsMaximized,
          disclosureIsFocused = _state.disclosureIsFocused,
          disclosureSize = _state.disclosureSize;


      return disclosureComponentKeys.map(function (componentKey, index) {
        var componentData = disclosureComponentData[componentKey];
        var isFullscreen = disclosureSize === availableDisclosureSizes.FULLSCREEN;
        var popContent = _this6.generatePopFunction(componentData.key);

        var disclosureApp = {};

        /**
         * The disclose function provided will push content onto the disclosure stack.
         */
        disclosureApp.disclose = function (data) {
          if (_this6.disclosureTypeIsSupported(data.preferredType)) {
            return Promise.resolve().then(function () {
              _this6.pushDisclosure(data);

              return {
                afterDismiss: new Promise(function (resolve) {
                  _this6.onDismissResolvers[data.content.key] = resolve;
                }),
                dismissDisclosure: _this6.generatePopFunction(data.content.key)
              };
            });
          }
          return app.disclose(data);
        };

        /**
         * Allows a component to remove itself from the disclosure stack. If the component is the only element in the disclosure stack,
         * the disclosure is closed.
         */
        disclosureApp.dismiss = index > 0 ? popContent : _this6.safelyCloseDisclosure;

        /**
         * Allows a component to close the entire disclosure stack.
         */
        disclosureApp.closeDisclosure = _this6.safelyCloseDisclosure;

        /**
         * Allows a component to remove itself from the disclosure stack. Functionally similar to `dismiss`, however `onBack` is
         * only provided to components in the stack that have a previous sibling.
         */
        disclosureApp.goBack = index > 0 ? popContent : undefined;

        /**
         * Allows a component to request focus from the disclosure in the event that the disclosure mechanism in use utilizes a focus trap.
         */
        disclosureApp.requestFocus = disclosureIsFocused ? function () {
          return Promise.resolve().then(_this6.releaseDisclosureFocus);
        } : undefined;

        /**
         * Allows a component to release focus from itself and return it to the disclosure.
         */
        disclosureApp.releaseFocus = !disclosureIsFocused ? function () {
          return Promise.resolve().then(_this6.requestDisclosureFocus);
        } : undefined;

        /**
         * Allows a component to maximize its presentation size. This is only provided if the component is not already maximized.
         */
        disclosureApp.maximize = !isFullscreen && !disclosureIsMaximized ? function () {
          return Promise.resolve().then(_this6.maximizeDisclosure);
        } : undefined;

        /**
         * Allows a component to minimize its presentation size. This is only provided if the component is currently maximized.
         */
        disclosureApp.minimize = !isFullscreen && disclosureIsMaximized ? function () {
          return Promise.resolve().then(_this6.minimizeDisclosure);
        } : undefined;

        /**
         * Allows a component to register a function with the DisclosureManager that will be called before the component is dismissed for any reason.
         */
        disclosureApp.registerDismissCheck = function (checkFunc) {
          _this6.dismissChecks[componentData.key] = checkFunc;

          if (app && app.registerDismissCheck) {
            // The combination of all managed dismiss checks is registered to the parent app delegate to ensure
            // that all are accounted for by the parent.
            return app.registerDismissCheck(function () {
              return Promise.all(Object.values(_this6.dismissChecks));
            });
          }

          return Promise.resolve();
        };

        if (componentData.component) {
          return _react2.default.cloneElement(componentData.component, {
            key: componentData.key,
            app: _terraAppDelegate2.default.create(disclosureApp)
          });
        }

        var ComponentClass = _terraAppDelegate2.default.getComponentForDisclosure(componentData.name);
        if (!ComponentClass) {
          return undefined;
        }

        return _react2.default.createElement(ComponentClass, _extends({ key: componentData.key }, componentData.props, { app: _terraAppDelegate2.default.create(disclosureApp) }));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var render = this.props.render;
      var _state2 = this.state,
          disclosureIsOpen = _state2.disclosureIsOpen,
          disclosureIsFocused = _state2.disclosureIsFocused,
          disclosureIsMaximized = _state2.disclosureIsMaximized,
          disclosureSize = _state2.disclosureSize,
          disclosureDimensions = _state2.disclosureDimensions,
          disclosureComponentKeys = _state2.disclosureComponentKeys;


      if (!render) {
        return null;
      }

      return render({
        dismissPresentedComponent: disclosureComponentKeys.length > 1 ? this.generatePopFunction(disclosureComponentKeys[disclosureComponentKeys.length - 1]) : this.safelyCloseDisclosure,
        closeDisclosure: this.safelyCloseDisclosure,
        children: {
          components: this.renderContentComponents()
        },
        disclosure: {
          isOpen: disclosureIsOpen,
          isFocused: disclosureIsFocused,
          isMaximized: disclosureIsMaximized,
          size: disclosureSize,
          dimensions: disclosureDimensions,
          components: this.renderDisclosureComponents()
        }
      });
    }
  }]);

  return DisclosureManager;
}(_react2.default.Component);

DisclosureManager.propTypes = propTypes;
DisclosureManager.defaultProps = defaultProps;

exports.default = DisclosureManager;