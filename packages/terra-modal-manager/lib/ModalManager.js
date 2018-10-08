'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withModalManager = exports.disclosureType = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _terraAbstractModal = require('terra-abstract-modal');

var _terraAbstractModal2 = _interopRequireDefault(_terraAbstractModal);

var _terraAppDelegate = require('terra-app-delegate');

var _terraAppDelegate2 = _interopRequireDefault(_terraAppDelegate);

var _terraSlideGroup = require('terra-slide-group');

var _terraSlideGroup2 = _interopRequireDefault(_terraSlideGroup);

var _terraDisclosureManager = require('terra-disclosure-manager');

var _terraDisclosureManager2 = _interopRequireDefault(_terraDisclosureManager);

require('terra-base/lib/baseStyles');

var _ModalManagerModule = require('./ModalManager.module.scss');

var _ModalManagerModule2 = _interopRequireDefault(_ModalManagerModule);

var _withModalManager = require('./withModalManager');

var _withModalManager2 = _interopRequireDefault(_withModalManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/* eslint-disable-next-line import/no-cycle */


var disclosureType = 'modal';
exports.disclosureType = disclosureType;


var cx = _bind2.default.bind(_ModalManagerModule2.default);

var propTypes = {
  app: _terraAppDelegate2.default.propType,
  children: _propTypes2.default.node
};

var heightFromSize = {
  tiny: 240,
  small: 420,
  medium: 600,
  large: 870,
  huge: 960
};

var widthFromSize = {
  tiny: 320,
  small: 640,
  medium: 960,
  large: 1280,
  huge: 1600
};

var ModalManager = function (_React$Component) {
  _inherits(ModalManager, _React$Component);

  function ModalManager(props) {
    _classCallCheck(this, ModalManager);

    var _this = _possibleConstructorReturn(this, (ModalManager.__proto__ || Object.getPrototypeOf(ModalManager)).call(this, props));

    _this.renderModal = _this.renderModal.bind(_this);
    return _this;
  }

  _createClass(ModalManager, [{
    key: 'renderModal',
    value: function renderModal(manager) {
      var _props = this.props,
          app = _props.app,
          children = _props.children,
          customProps = _objectWithoutProperties(_props, ['app', 'children']);

      var containerClassNames = cx(['container', customProps.className]);

      var classArray = ['modal-manager'];
      var isFullscreen = manager.disclosure.isMaximized || manager.disclosure.size === _terraDisclosureManager.availableDisclosureSizes.FULLSCREEN;
      if (!isFullscreen) {
        if (manager.disclosure.dimensions) {
          classArray.push('height-' + manager.disclosure.dimensions.height, 'width-' + manager.disclosure.dimensions.width);
        } else if (manager.disclosure.size) {
          classArray.push('height-' + heightFromSize[manager.disclosure.size], 'width-' + widthFromSize[manager.disclosure.size]);
        }
      }

      return _react2.default.createElement(
        'div',
        _extends({}, customProps, { className: containerClassNames }),
        manager.children.components,
        _react2.default.createElement(
          _terraAbstractModal2.default,
          {
            isFocused: manager.disclosure.isFocused,
            isOpen: manager.disclosure.isOpen,
            isFullscreen: isFullscreen,
            classNameModal: cx(classArray),
            onRequestClose: function onRequestClose() {
              manager.closeDisclosure();
            },
            closeOnEsc: true,
            closeOnOutsideClick: false,
            ariaLabel: 'Modal'
          },
          _react2.default.createElement(_terraSlideGroup2.default, { items: manager.disclosure.components, isAnimated: !isFullscreen })
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          app = _props2.app,
          children = _props2.children;


      return _react2.default.createElement(
        _terraDisclosureManager2.default,
        {
          app: app,
          supportedDisclosureTypes: [disclosureType],
          render: this.renderModal
        },
        children
      );
    }
  }]);

  return ModalManager;
}(_react2.default.Component);

ModalManager.propTypes = propTypes;

exports.default = ModalManager;
exports.withModalManager = _withModalManager2.default;