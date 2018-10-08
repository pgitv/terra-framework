'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _NumberField = require('terra-form/lib/NumberField');

var _NumberField2 = _interopRequireDefault(_NumberField);

var _Hookshot = require('terra-hookshot/lib/Hookshot');

var _Hookshot2 = _interopRequireDefault(_Hookshot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions


var ATTACHMENT_POSITIONS = ['top start', 'top center', 'top end', 'middle start', 'middle center', 'middle end', 'bottom start', 'bottom center', 'bottom end'];

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

var attachmentValues = function attachmentValues(attachment) {
  if (attachment === 'middle start') {
    return { vertical: 'middle', horizontal: 'start' };
  }if (attachment === 'middle end') {
    return { vertical: 'middle', horizontal: 'end' };
  }if (attachment === 'middle center') {
    return { vertical: 'middle', horizontal: 'center' };
  }if (attachment === 'top start') {
    return { vertical: 'top', horizontal: 'start' };
  }if (attachment === 'top end') {
    return { vertical: 'top', horizontal: 'end' };
  }if (attachment === 'top center') {
    return { vertical: 'top', horizontal: 'center' };
  }if (attachment === 'bottom start') {
    return { vertical: 'bottom', horizontal: 'start' };
  }if (attachment === 'bottom end') {
    return { vertical: 'bottom', horizontal: 'end' };
  }
  return { vertical: 'bottom', horizontal: 'center' };
};

var HookshotStandard = function (_React$Component) {
  _inherits(HookshotStandard, _React$Component);

  function HookshotStandard(props) {
    _classCallCheck(this, HookshotStandard);

    var _this = _possibleConstructorReturn(this, (HookshotStandard.__proto__ || Object.getPrototypeOf(HookshotStandard)).call(this, props));

    _this.handleButtonClick = _this.handleButtonClick.bind(_this);
    _this.handleRequestClose = _this.handleRequestClose.bind(_this);
    _this.handleSelectChange = _this.handleSelectChange.bind(_this);
    _this.handleInputChange = _this.handleInputChange.bind(_this);
    _this.getId = _this.getId.bind(_this);
    _this.state = {
      isOpen: false,
      hookshotContentAttachment: ATTACHMENT_POSITIONS[1],
      hookshotTargetAttachment: ATTACHMENT_POSITIONS[7],
      hookshotAttachmentBehavior: _Hookshot2.default.attachmentBehaviors[0],
      hookshotAttachmentMargin: 0
    };
    return _this;
  }

  _createClass(HookshotStandard, [{
    key: 'getId',
    value: function getId(name) {
      return name + this.state.id;
    }
  }, {
    key: 'handleButtonClick',
    value: function handleButtonClick() {
      this.setState(function (prevState) {
        return { isOpen: !prevState.isOpen };
      });
    }
  }, {
    key: 'handleRequestClose',
    value: function handleRequestClose() {
      this.setState({ isOpen: false });
    }
  }, {
    key: 'handleSelectChange',
    value: function handleSelectChange(event) {
      this.setState(_defineProperty({}, event.target.name, event.target.value));
    }
  }, {
    key: 'handleInputChange',
    value: function handleInputChange(event) {
      this.setState(_defineProperty({}, event.target.name, Number.parseFloat(event.target.value)));
    }
  }, {
    key: 'render',
    value: function render() {
      var hookshotContent = _react2.default.createElement(
        _Hookshot2.default.Content,
        {
          onEsc: this.handleRequestClose,
          onOutsideClick: this.handleRequestClose,
          onResize: this.handleRequestClose
        },
        _react2.default.createElement(
          'div',
          { style: { height: '40px', width: '200px', backgroundColor: 'red' } },
          'Hookshot'
        )
      );

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'form',
          null,
          _react2.default.createElement(
            'label',
            { htmlFor: this.getId('hookshotAttachmentBehavior') },
            'Attachment Behavior'
          ),
          _react2.default.createElement(
            'select',
            { id: this.getId('hookshotAttachmentBehavior'), name: 'hookshotAttachmentBehavior', value: this.state.hookshotAttachmentBehavior, onChange: this.handleSelectChange },
            generateOptions(_Hookshot2.default.attachmentBehaviors)
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null),
          _react2.default.createElement(_NumberField2.default, {
            label: 'Attachment Margin in Px',
            id: this.getId('hookshotAttachmentMargin'),
            name: 'hookshotAttachmentMargin',
            defaultValue: 0,
            value: this.state.hookshotAttachmentMargin,
            style: { width: '200px' },
            onChange: this.handleInputChange
          }),
          _react2.default.createElement(
            'label',
            { htmlFor: this.getId('hookshotContentAttachment') },
            'Content Attachment'
          ),
          _react2.default.createElement(
            'select',
            { id: this.getId('hookshotContentAttachment'), name: 'hookshotContentAttachment', value: this.state.hookshotContentAttachment, onChange: this.handleSelectChange },
            generateOptions(ATTACHMENT_POSITIONS)
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'label',
            { htmlFor: this.getId('hookshotTargetAttachment') },
            'Target Attachment'
          ),
          _react2.default.createElement(
            'select',
            { id: this.getId('hookshotTargetAttachment'), name: 'hookshotTargetAttachment', value: this.state.hookshotTargetAttachment, onChange: this.handleSelectChange },
            generateOptions(ATTACHMENT_POSITIONS)
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null)
        ),
        _react2.default.createElement(
          _Hookshot2.default,
          {
            attachmentBehavior: this.state.hookshotAttachmentBehavior,
            attachmentMargin: this.state.hookshotAttachmentMargin,
            contentAttachment: attachmentValues(this.state.hookshotContentAttachment),
            isEnabled: true,
            isOpen: this.state.isOpen,
            targetAttachment: attachmentValues(this.state.hookshotTargetAttachment),
            targetRef: function targetRef() {
              return document.getElementById('hookshot-standard-button');
            }
          },
          hookshotContent
        ),
        _react2.default.createElement(_terraButton2.default, { id: 'hookshot-standard-button', text: 'Hookshot Example', onClick: this.handleButtonClick })
      );
    }
  }]);

  return HookshotStandard;
}(_react2.default.Component);

exports.default = HookshotStandard;