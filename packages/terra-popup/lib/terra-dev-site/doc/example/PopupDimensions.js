'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _Popup = require('terra-popup/lib/Popup');

var _Popup2 = _interopRequireDefault(_Popup);

var _ExamplePopupContent = require('terra-popup/lib/terra-dev-site/doc/common/ExamplePopupContent');

var _ExamplePopupContent2 = _interopRequireDefault(_ExamplePopupContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */


/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

var HEIGHT_KEYS = Object.keys(_Popup2.default.Opts.heights);
var WIDTH_KEYS = Object.keys(_Popup2.default.Opts.widths);

var PopupDimensions = function (_React$Component) {
  _inherits(PopupDimensions, _React$Component);

  _createClass(PopupDimensions, null, [{
    key: 'generateOptions',
    value: function generateOptions(values) {
      return values.map(function (currentValue, index) {
        var keyValue = index;
        return _react2.default.createElement(
          'option',
          { key: keyValue, value: currentValue },
          currentValue
        );
      });
    }
  }]);

  function PopupDimensions(props) {
    _classCallCheck(this, PopupDimensions);

    var _this = _possibleConstructorReturn(this, (PopupDimensions.__proto__ || Object.getPrototypeOf(PopupDimensions)).call(this, props));

    _this.handleButtonClick = _this.handleButtonClick.bind(_this);
    _this.handleRequestClose = _this.handleRequestClose.bind(_this);
    _this.handleOnChange = _this.handleOnChange.bind(_this);
    _this.handleSelectChange = _this.handleSelectChange.bind(_this);
    _this.getId = _this.getId.bind(_this);
    _this.state = { open: false };
    return _this;
  }

  _createClass(PopupDimensions, [{
    key: 'getId',
    value: function getId(name) {
      return name + this.state.id;
    }
  }, {
    key: 'handleButtonClick',
    value: function handleButtonClick() {
      this.setState({ open: true });
    }
  }, {
    key: 'handleRequestClose',
    value: function handleRequestClose() {
      this.setState({ open: false });
    }
  }, {
    key: 'handleOnChange',
    value: function handleOnChange() {
      this.setState({ open: false });
    }
  }, {
    key: 'handleSelectChange',
    value: function handleSelectChange(event) {
      this.setState(_defineProperty({}, event.target.name, event.target.value));
    }
  }, {
    key: 'render',
    value: function render() {
      var contentDimensions = {};
      if (this.state.popupContentHeight !== 'Default') {
        contentDimensions.contentHeight = this.state.popupContentHeight;
      }

      if (this.state.popupContentWidth !== 'Default') {
        contentDimensions.contentWidth = this.state.popupContentWidth;
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'form',
          null,
          _react2.default.createElement(
            'label',
            { htmlFor: this.getId('popupContentHeight') },
            'Pop Content Height'
          ),
          _react2.default.createElement(
            'select',
            { id: this.getId('popupContentHeight'), name: 'popupContentHeight', value: this.state.popupContentHeight, onChange: this.handleSelectChange },
            _react2.default.createElement(
              'option',
              { value: 'Default' },
              'Default'
            ),
            PopupDimensions.generateOptions(HEIGHT_KEYS)
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'label',
            { htmlFor: this.getId('popupContentWidth') },
            'Pop Content Width'
          ),
          _react2.default.createElement(
            'select',
            { id: this.getId('popupContentWidth'), name: 'popupContentWidth', value: this.state.popupContentWidth, onChange: this.handleSelectChange },
            _react2.default.createElement(
              'option',
              { value: 'Default' },
              'Default'
            ),
            PopupDimensions.generateOptions(WIDTH_KEYS)
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null)
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _Popup2.default,
            _extends({}, contentDimensions, {
              classNameArrow: 'test-arrow',
              classNameContent: 'test-content',
              isOpen: this.state.open,
              onRequestClose: this.handleRequestClose,
              targetRef: function targetRef() {
                return document.getElementById('popup-dimensions');
              }
            }),
            _react2.default.createElement(_ExamplePopupContent2.default, { onChange: this.handleOnChange })
          ),
          _react2.default.createElement(_terraButton2.default, { id: 'popup-dimensions', text: (this.state.popupContentHeight || 'Default') + ' x ' + (this.state.popupContentWidth || 'Default') + ' Popup', onClick: this.handleButtonClick })
        )
      );
    }
  }]);

  return PopupDimensions;
}(_react2.default.Component);

exports.default = PopupDimensions;