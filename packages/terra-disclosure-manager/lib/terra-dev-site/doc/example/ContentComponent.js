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

var _terraAppDelegate = require('terra-app-delegate');

var _terraAppDelegate2 = _interopRequireDefault(_terraAppDelegate);

var _terraActionHeader = require('terra-action-header');

var _terraActionHeader2 = _interopRequireDefault(_terraActionHeader);

var _DisclosureComponent = require('./DisclosureComponent');

var _DisclosureComponent2 = _interopRequireDefault(_DisclosureComponent);

var _DisclosureManager = require('../../../DisclosureManager');

var _exampleStyles = require('./example-styles.scss');

var _exampleStyles2 = _interopRequireDefault(_exampleStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_exampleStyles2.default);

var propTypes = {
  app: _terraAppDelegate2.default.propType,
  disclosureType: _propTypes2.default.string
};

var HEIGHT_KEYS = Object.keys(_DisclosureManager.availableDisclosureHeights);
var WIDTH_KEYS = Object.keys(_DisclosureManager.availableDisclosureWidths);

var generateOptions = function generateOptions(values) {
  return values.map(function (currentValue, index) {
    var keyValue = index;
    return _react2.default.createElement(
      'option',
      { key: keyValue, value: currentValue },
      currentValue
    );
  });
};

var ContentComponent = function (_React$Component) {
  _inherits(ContentComponent, _React$Component);

  function ContentComponent(props) {
    _classCallCheck(this, ContentComponent);

    var _this = _possibleConstructorReturn(this, (ContentComponent.__proto__ || Object.getPrototypeOf(ContentComponent)).call(this, props));

    _this.renderButton = _this.renderButton.bind(_this);
    _this.handleSelectChange = _this.handleSelectChange.bind(_this);
    _this.getId = _this.getId.bind(_this);

    _this.state = { id: 'dimensions', disclosureHeight: HEIGHT_KEYS[0], disclosureWidth: WIDTH_KEYS[0] };
    return _this;
  }

  _createClass(ContentComponent, [{
    key: 'getId',
    value: function getId(name) {
      return name + this.state.id;
    }
  }, {
    key: 'handleSelectChange',
    value: function handleSelectChange(event) {
      this.setState(_defineProperty({}, event.target.name, event.target.value));
    }
  }, {
    key: 'renderButton',
    value: function renderButton(size) {
      var _props = this.props,
          app = _props.app,
          disclosureType = _props.disclosureType;


      return _react2.default.createElement(_terraButton2.default, {
        text: 'Disclose (' + size + ')',
        onClick: function onClick() {
          app.disclose({
            preferredType: disclosureType,
            size: size,
            content: {
              key: 'Content-Disclosure-' + size,
              component: _react2.default.createElement(_DisclosureComponent2.default, { name: 'Disclosure Component (' + size + ')', disclosureType: disclosureType })
            }
          });
        }
      });
    }
  }, {
    key: 'renderFormButton',
    value: function renderFormButton() {
      var _this2 = this;

      var _props2 = this.props,
          app = _props2.app,
          disclosureType = _props2.disclosureType;

      var name = 'Disclose (' + this.state.disclosureHeight + ') x (' + this.state.disclosureWidth + ')';

      return _react2.default.createElement(_terraButton2.default, {
        text: name,
        onClick: function onClick() {
          app.disclose({
            preferredType: disclosureType,
            dimensions: { height: _this2.state.disclosureHeight, width: _this2.state.disclosureWidth },
            content: {
              key: 'Content-Disclosure-Dimensions',
              component: _react2.default.createElement(_DisclosureComponent2.default, { name: 'Disclosure Component (' + name + ')', disclosureType: disclosureType })
            }
          });
        }
      });
    }
  }, {
    key: 'renderForm',
    value: function renderForm() {
      return _react2.default.createElement(
        'form',
        null,
        _react2.default.createElement(
          'label',
          { htmlFor: this.getId('disclosureHeight') },
          'Pop Content Height'
        ),
        _react2.default.createElement(
          'select',
          { id: this.getId('disclosureHeight'), name: 'disclosureHeight', value: this.state.disclosureHeight, onChange: this.handleSelectChange },
          generateOptions(HEIGHT_KEYS)
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'label',
          { htmlFor: this.getId('disclosureWidth') },
          'Pop Content Width'
        ),
        _react2.default.createElement(
          'select',
          { id: this.getId('disclosureWidth'), name: 'disclosureWidth', value: this.state.disclosureWidth, onChange: this.handleSelectChange },
          generateOptions(WIDTH_KEYS)
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null)
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _terraContentContainer2.default,
        {
          header: _react2.default.createElement(_terraActionHeader2.default, {
            title: 'Manager Child'
          })
        },
        _react2.default.createElement(
          'div',
          { className: cx('content-wrapper') },
          this.renderButton('default'),
          this.renderButton('tiny'),
          this.renderButton('small'),
          this.renderButton('medium'),
          this.renderButton('large'),
          this.renderButton('huge'),
          this.renderButton('fullscreen'),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'p',
            null,
            'The child components can disclose content in the panel at various sizes.'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: cx('content-wrapper') },
          this.renderForm(),
          this.renderFormButton()
        )
      );
    }
  }]);

  return ContentComponent;
}(_react2.default.Component);

ContentComponent.propTypes = propTypes;

exports.default = ContentComponent;