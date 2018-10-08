'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _terraActionHeader = require('terra-action-header');

var _terraActionHeader2 = _interopRequireDefault(_terraActionHeader);

var _terraActionFooter = require('terra-action-footer');

var _terraActionFooter2 = _interopRequireDefault(_terraActionFooter);

var _DialogModal = require('../../../DialogModal');

var _DialogModal2 = _interopRequireDefault(_DialogModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DefaultDialogModal = function (_React$Component) {
  _inherits(DefaultDialogModal, _React$Component);

  function DefaultDialogModal() {
    _classCallCheck(this, DefaultDialogModal);

    var _this = _possibleConstructorReturn(this, (DefaultDialogModal.__proto__ || Object.getPrototypeOf(DefaultDialogModal)).call(this));

    _this.state = {
      isOpen: false
    };

    _this.handleOpenModal = _this.handleOpenModal.bind(_this);
    _this.handleCloseModal = _this.handleCloseModal.bind(_this);
    return _this;
  }

  _createClass(DefaultDialogModal, [{
    key: 'handleOpenModal',
    value: function handleOpenModal() {
      this.setState({ isOpen: true });
    }
  }, {
    key: 'handleCloseModal',
    value: function handleCloseModal() {
      this.setState({ isOpen: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var paraOne = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', 'Maecenas molestie in lorem vel facilisis. Quisque ac enim nec lectus malesuada faucibus.', 'Integer congue feugiat ultricies.', ' Nunc non mauris sed tellus cursus vestibulum nec quis ipsum.', 'Vivamus ornare magna justo, et volutpat tortor congue ut. Nulla facilisi.', ' Cras in venenatis turpis. Nullam id odio justo. Etiam vehicula lectus vel purus consectetur cursus id sit amet diam.', 'Donec facilisis dui non orci hendrerit pharetra. Suspendisse blandit dictum turpis, in consectetur ipsum hendrerit eget.', 'Nam vehicula, arcu vitae egestas porttitor,', 'turpis nisi pulvinar neque, ut lacinia urna purus sit amet elit.'];
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _DialogModal2.default,
          {
            ariaLabel: 'Default Dialog Modal',
            isOpen: this.state.isOpen,
            onRequestClose: this.handleCloseModal,
            header: _react2.default.createElement(_terraActionHeader2.default, { title: 'Action Header used here', onClose: this.handleCloseModal }),
            footer: _react2.default.createElement(_terraActionFooter2.default, { start: 'Action Footer used here' })
          },
          _react2.default.createElement(
            'p',
            null,
            paraOne
          )
        ),
        _react2.default.createElement(_terraButton2.default, { text: 'Trigger Dialog Modal', onClick: this.handleOpenModal })
      );
    }
  }]);

  return DefaultDialogModal;
}(_react2.default.Component);

exports.default = DefaultDialogModal;