'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _terraContentContainer = require('terra-content-container');

var _terraContentContainer2 = _interopRequireDefault(_terraContentContainer);

var _TextField = require('terra-form/lib/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _terraAppDelegate = require('terra-app-delegate');

var _terraAppDelegate2 = _interopRequireDefault(_terraAppDelegate);

var _terraActionHeader = require('terra-action-header');

var _terraActionHeader2 = _interopRequireDefault(_terraActionHeader);

var _exampleStyles = require('./example-styles.scss');

var _exampleStyles2 = _interopRequireDefault(_exampleStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_exampleStyles2.default);

var propTypes = {
  app: _terraAppDelegate2.default.propType,
  name: _propTypes2.default.string,
  disclosureType: _propTypes2.default.string
};

var defaultProps = {
  name: 'Disclosure Component'
};

var DisclosureComponent = function (_React$Component) {
  _inherits(DisclosureComponent, _React$Component);

  function DisclosureComponent(props) {
    _classCallCheck(this, DisclosureComponent);

    var _this = _possibleConstructorReturn(this, (DisclosureComponent.__proto__ || Object.getPrototypeOf(DisclosureComponent)).call(this, props));

    _this.checkLockState = _this.checkLockState.bind(_this);

    _this.state = {
      text: undefined
    };
    return _this;
  }

  _createClass(DisclosureComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.app && this.props.app.registerDismissCheck) {
        this.props.app.registerDismissCheck(this.checkLockState);
      }
    }
  }, {
    key: 'checkLockState',
    value: function checkLockState() {
      var _this2 = this;

      if (this.state.text && this.state.text.length) {
        return new Promise(function (resolve, reject) {
          // eslint-disable-next-line no-restricted-globals
          if (!confirm(_this2.props.name + ' has unsaved changes that will be lost. Do you wish to continue?')) {
            // eslint-disable-line no-alert
            reject();
            return;
          }

          resolve();
        });
      }

      return Promise.resolve();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          app = _props.app,
          name = _props.name,
          disclosureType = _props.disclosureType;


      return _react2.default.createElement(
        _terraContentContainer2.default,
        {
          fill: true,
          header: _react2.default.createElement(_terraActionHeader2.default, {
            title: 'Disclosure - ' + name,
            onClose: app.closeDisclosure,
            onBack: app.goBack,
            onMaximize: app.maximize,
            onMinimize: app.minimize
          })
        },
        _react2.default.createElement(
          'div',
          { className: cx('content-wrapper') },
          _react2.default.createElement(
            'h3',
            null,
            name
          ),
          _react2.default.createElement(
            'p',
            null,
            'The disclosed component can disclose content within the same panel.'
          ),
          _react2.default.createElement(
            'p',
            null,
            'It can also render a header (like above) that implements the various DisclosureManager control functions.'
          ),
          _react2.default.createElement(_terraButton2.default, {
            text: 'Dismiss',
            onClick: function onClick() {
              app.dismiss().catch(function () {
                console.log('Dismiss failed. A lock must be in place.'); // eslint-disable-line no-console
              });
            }
          }),
          _react2.default.createElement(_terraButton2.default, {
            text: 'Disclose Again',
            onClick: function onClick() {
              app.disclose({
                preferredType: disclosureType,
                size: 'small',
                content: {
                  key: 'Nested ' + name,
                  component: _react2.default.createElement(DisclosureComponent, { name: 'Nested ' + name, disclosureType: disclosureType })
                }
              });
            }
          }),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'p',
            null,
            'The disclosed component can register a dismiss check function that can interrupt and prevent dismissal. This component will prompt the user if text is detected in the input field below.'
          ),
          _react2.default.createElement(_TextField2.default, {
            value: this.state.text || '',
            onChange: function onChange(event) {
              _this3.setState({
                text: event.target.value
              });
            }
          }),
          this.state.text && this.state.text.length ? _react2.default.createElement(
            'p',
            null,
            'Component has unsaved changes!'
          ) : null
        )
      );
    }
  }]);

  return DisclosureComponent;
}(_react2.default.Component);

DisclosureComponent.propTypes = propTypes;
DisclosureComponent.defaultProps = defaultProps;

exports.default = DisclosureComponent;