'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _terraAppDelegate = require('terra-app-delegate');

var _terraAppDelegate2 = _interopRequireDefault(_terraAppDelegate);

var _terraContentContainer = require('terra-content-container');

var _terraContentContainer2 = _interopRequireDefault(_terraContentContainer);

var _DisclosureManager = require('../../../DisclosureManager');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HEIGHT_KEYS = Object.keys(_DisclosureManager.availableDisclosureHeights);
var WIDTH_KEYS = Object.keys(_DisclosureManager.availableDisclosureWidths);

var TestExample = function (_React$Component) {
  _inherits(TestExample, _React$Component);

  function TestExample(props) {
    _classCallCheck(this, TestExample);

    var _this = _possibleConstructorReturn(this, (TestExample.__proto__ || Object.getPrototypeOf(TestExample)).call(this, props));

    _this.disclose = _this.disclose.bind(_this);
    _this.dismiss = _this.dismiss.bind(_this);
    _this.closeDisclosure = _this.closeDisclosure.bind(_this);
    _this.goBack = _this.goBack.bind(_this);
    _this.maximize = _this.maximize.bind(_this);
    _this.minimize = _this.minimize.bind(_this);
    _this.requestFocus = _this.requestFocus.bind(_this);
    _this.releaseFocus = _this.releaseFocus.bind(_this);

    _this.generateOptions = _this.generateOptions.bind(_this);
    _this.handleSelectChange = _this.handleSelectChange.bind(_this);
    _this.renderFormButton = _this.renderFormButton.bind(_this);
    _this.renderForm = _this.renderForm.bind(_this);
    _this.getId = _this.getId.bind(_this);
    _this.state = { id: 'disclosureDimensions', disclosureHeight: HEIGHT_KEYS[0], disclosureWidth: WIDTH_KEYS[0] };
    return _this;
  }

  _createClass(TestExample, [{
    key: 'getId',
    value: function getId(name) {
      return this.state.id + '-' + name + '-' + this.props.nestedIndex;
    }
  }, {
    key: 'generateOptions',
    value: function generateOptions(values, name) {
      var _this2 = this;

      return values.map(function (currentValue, index) {
        var keyValue = index;
        return _react2.default.createElement(
          'option',
          { id: name + '-' + currentValue + '-' + _this2.props.nestedIndex, key: keyValue, value: currentValue },
          currentValue
        );
      });
    }
  }, {
    key: 'handleSelectChange',
    value: function handleSelectChange(event) {
      this.setState(_defineProperty({}, event.target.name, event.target.value));
    }
  }, {
    key: 'disclose',
    value: function disclose(size, dimensions) {
      var _this3 = this;

      var _props = this.props,
          disclosureType = _props.disclosureType,
          nestedIndex = _props.nestedIndex;


      var newIndex = nestedIndex + 1;
      return function () {
        _this3.props.app.disclose({
          preferredType: disclosureType,
          size: size,
          dimensions: dimensions,
          content: {
            key: 'DemoContainer-' + newIndex,
            component: _react2.default.createElement(TestExample, { identifier: 'DemoContainer-' + newIndex, nestedIndex: newIndex })
          }
        });
      };
    }
  }, {
    key: 'dismiss',
    value: function dismiss() {
      this.props.app.dismiss();
    }
  }, {
    key: 'closeDisclosure',
    value: function closeDisclosure() {
      this.props.app.closeDisclosure();
    }
  }, {
    key: 'goBack',
    value: function goBack() {
      this.props.app.goBack();
    }
  }, {
    key: 'maximize',
    value: function maximize() {
      this.props.app.maximize();
    }
  }, {
    key: 'minimize',
    value: function minimize() {
      this.props.app.minimize();
    }
  }, {
    key: 'requestFocus',
    value: function requestFocus() {
      this.props.app.requestFocus();
    }
  }, {
    key: 'releaseFocus',
    value: function releaseFocus() {
      this.props.app.releaseFocus();
    }
  }, {
    key: 'renderFormButton',
    value: function renderFormButton() {
      var name = 'Disclose (' + this.state.disclosureHeight + ') x (' + this.state.disclosureWidth + ')';

      return _react2.default.createElement(
        'button',
        {
          type: 'button',
          id: 'disclose-dimension-' + this.props.nestedIndex,
          onClick: this.disclose(undefined, { height: this.state.disclosureHeight, width: this.state.disclosureWidth })
        },
        name
      );
    }
  }, {
    key: 'renderForm',
    value: function renderForm() {
      return _react2.default.createElement(
        'form',
        null,
        _react2.default.createElement(
          'label',
          { htmlFor: this.getId('height') },
          'Pop Content Height'
        ),
        _react2.default.createElement(
          'select',
          { id: this.getId('height'), name: 'disclosureHeight', value: this.state.disclosureHeight, onChange: this.handleSelectChange },
          this.generateOptions(HEIGHT_KEYS, 'height')
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'label',
          { htmlFor: this.getId('width') },
          'Pop Content Width'
        ),
        _react2.default.createElement(
          'select',
          { id: this.getId('width'), name: 'disclosureWidth', value: this.state.disclosureWidth, onChange: this.handleSelectChange },
          this.generateOptions(WIDTH_KEYS, 'width')
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null)
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          app = _props2.app,
          identifier = _props2.identifier;


      return _react2.default.createElement(
        _terraContentContainer2.default,
        { id: identifier, className: 'nested-component', fill: true, header: _react2.default.createElement(
            'h2',
            { style: { margin: '0', borderBottom: '1px solid black' } },
            'Content Component'
          ) },
        _react2.default.createElement(
          'p',
          null,
          'id:',
          ' ',
          identifier
        ),
        app && app.releaseFocus ? _react2.default.createElement(
          'p',
          null,
          'Modal has lost focus!'
        ) : null,
        app && app.requestFocus ? _react2.default.createElement(
          'p',
          null,
          'Modal has gained focus!'
        ) : null,
        _react2.default.createElement(
          'button',
          { type: 'button', className: 'disclose', onClick: this.disclose() },
          'Disclose'
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', className: 'disclose-tiny', onClick: this.disclose('tiny') },
          'Disclose Tiny'
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', className: 'disclose-small', onClick: this.disclose('small') },
          'Disclose Small'
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', className: 'disclose-medium', onClick: this.disclose('medium') },
          'Disclose Medium'
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', className: 'disclose-large', onClick: this.disclose('large') },
          'Disclose Large'
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', className: 'disclose-huge', onClick: this.disclose('huge') },
          'Disclose Huge'
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', className: 'disclose-fullscreen', onClick: this.disclose('fullscreen') },
          'Disclose Fullscreen'
        ),
        _react2.default.createElement(
          'div',
          { style: { padding: '0.7rem' } },
          this.renderForm(),
          this.renderFormButton()
        ),
        app && app.dismiss ? _react2.default.createElement(
          'button',
          { type: 'button', className: 'dismiss', onClick: this.dismiss },
          'Dismiss'
        ) : null,
        app && app.closeDisclosure ? _react2.default.createElement(
          'button',
          { type: 'button', className: 'close-disclosure', onClick: this.closeDisclosure },
          'Close Disclosure'
        ) : null,
        app && app.goBack ? _react2.default.createElement(
          'button',
          { type: 'button', className: 'go-back', onClick: this.goBack },
          'Go Back'
        ) : null,
        app && app.maximize ? _react2.default.createElement(
          'button',
          { type: 'button', className: 'maximize', onClick: this.maximize },
          'Maximize'
        ) : null,
        app && app.minimize ? _react2.default.createElement(
          'button',
          { type: 'button', className: 'minimize', onClick: this.minimize },
          'Minimize'
        ) : null,
        app && app.requestFocus ? _react2.default.createElement(
          'button',
          { type: 'button', className: 'requestFocus', onClick: this.requestFocus },
          'Request Focus'
        ) : null,
        app && app.releaseFocus ? _react2.default.createElement(
          'button',
          { type: 'button', className: 'releaseFocus', onClick: this.releaseFocus },
          'Release Focus'
        ) : null
      );
    }
  }]);

  return TestExample;
}(_react2.default.Component);

TestExample.propTypes = {
  app: _terraAppDelegate2.default.propType,
  identifier: _propTypes2.default.string,
  disclosureType: _propTypes2.default.string,
  nestedIndex: _propTypes2.default.number
};

TestExample.defaultProps = {
  nestedIndex: 0
};

exports.default = TestExample;