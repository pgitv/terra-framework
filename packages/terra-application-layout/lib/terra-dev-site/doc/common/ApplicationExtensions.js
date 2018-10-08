'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraAppDelegate = require('terra-app-delegate');

var _terraAppDelegate2 = _interopRequireDefault(_terraAppDelegate);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _IconSettings = require('terra-icon/lib/icon/IconSettings');

var _IconSettings2 = _interopRequireDefault(_IconSettings);

var _IconCalendar = require('terra-icon/lib/icon/IconCalendar');

var _IconCalendar2 = _interopRequireDefault(_IconCalendar);

var _IconFeaturedOutline = require('terra-icon/lib/icon/IconFeaturedOutline');

var _IconFeaturedOutline2 = _interopRequireDefault(_IconFeaturedOutline);

var _ExtensionsDisclosure = require('./ExtensionsDisclosure');

var _ExtensionsDisclosure2 = _interopRequireDefault(_ExtensionsDisclosure);

var _ApplicationLayout = require('../../../ApplicationLayout');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  app: _terraAppDelegate2.default.propType,
  layoutConfig: _ApplicationLayout.Utils.propTypes.layoutConfigPropType
};

var ApplicationExtensions = function (_React$Component) {
  _inherits(ApplicationExtensions, _React$Component);

  function ApplicationExtensions(props) {
    _classCallCheck(this, ApplicationExtensions);

    var _this = _possibleConstructorReturn(this, (ApplicationExtensions.__proto__ || Object.getPrototypeOf(ApplicationExtensions)).call(this, props));

    _this.discloseExtensionContent = _this.discloseExtensionContent.bind(_this);
    return _this;
  }

  _createClass(ApplicationExtensions, [{
    key: 'discloseExtensionContent',
    value: function discloseExtensionContent(extensionName) {
      var app = this.props.app;


      app.disclose({
        preferredType: 'modal',
        size: 'tiny',
        content: {
          key: extensionName + '-disclosure',
          component: _react2.default.createElement(_ExtensionsDisclosure2.default, { name: extensionName })
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var layoutConfig = this.props.layoutConfig;

      var isCompactSize = _ApplicationLayout.Utils.helpers.isSizeCompact(layoutConfig.size);

      var containerProps = void 0;
      var variant = void 0;
      if (isCompactSize) {
        containerProps = {
          style: { padding: '10px', width: '100%', backgroundColor: 'lightgrey' }
        };

        variant = _terraButton2.default.Opts.Variants.ACTION;
      }

      return _react2.default.createElement(
        'div',
        containerProps,
        _react2.default.createElement(_terraButton2.default, { icon: _react2.default.createElement(_IconSettings2.default, null), text: 'Settings', variant: variant, isIconOnly: true, style: { marginRight: '5px' }, onClick: function onClick() {
            return _this2.discloseExtensionContent('Settings');
          } }),
        _react2.default.createElement(_terraButton2.default, { icon: _react2.default.createElement(_IconCalendar2.default, null), text: 'Calendar', variant: variant, isIconOnly: true, style: { marginRight: '5px' }, onClick: function onClick() {
            return _this2.discloseExtensionContent('Calendar');
          } }),
        _react2.default.createElement(_terraButton2.default, { icon: _react2.default.createElement(_IconFeaturedOutline2.default, null), text: 'Favorites', variant: variant, isIconOnly: true, style: { marginRight: '5px' }, onClick: function onClick() {
            return _this2.discloseExtensionContent('Favorites');
          } })
      );
    }
  }]);

  return ApplicationExtensions;
}(_react2.default.Component);

ApplicationExtensions.propTypes = propTypes;

exports.default = ApplicationExtensions;