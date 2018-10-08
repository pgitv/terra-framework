'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotificationDialogVariants = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _terraAbstractModal = require('terra-abstract-modal');

var _terraAbstractModal2 = _interopRequireDefault(_terraAbstractModal);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

require('terra-base/lib/baseStyles');

var _NotificationDialogModule = require('./NotificationDialog.module.scss');

var _NotificationDialogModule2 = _interopRequireDefault(_NotificationDialogModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_NotificationDialogModule2.default);

var variants = {
  ALERT: 'alert',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
  SUCCESS: 'success',
  CUSTOM: 'custom'
};

var propTypes = {
  /**
   * Header of the notification-dialog.
   */
  header: _propTypes2.default.string,
  /**
   * Title of the notification-dialog.
   */
  title: _propTypes2.default.string,
  /**
   * Message of the notification-dialog.
   */
  message: _propTypes2.default.string,
  /**
   * The Action of the primary button.
   */
  primaryAction: _propTypes2.default.shape({
    text: _propTypes2.default.string,
    onClick: _propTypes2.default.func
  }).isRequired,
  /**
   * The Action of the secondary button.
   */
  secondaryAction: _propTypes2.default.shape({
    text: _propTypes2.default.string,
    onClick: _propTypes2.default.func
  }),
  /**
   * The variant of notification to be rendered.
   * Use one of alert, error, warning, info, success, custom.
   */
  variant: _propTypes2.default.oneOf([variants.ALERT, variants.ERROR, variants.WARNING, variants.INFO, variants.SUCCESS, variants.CUSTOM]),
  /**
   * The icon to be used for a notification of type custom. This will not be used for any other notification types.
   */
  customIcon: _propTypes2.default.element,
  /**
   * Toggle to show notification-dialog or not.
   */
  isOpen: _propTypes2.default.bool.isRequired,
  /**
   * Callback function indicating a close condition was met, should be combined with isOpen for state management.
   */
  onRequestClose: _propTypes2.default.func.isRequired,
  /**
   * A callback function to let the containing component (e.g. modal) to regain focus.
   */
  releaseFocus: _propTypes2.default.func,
  /**
   * A callback function to request focus from the containing component (e.g. modal).
   */
  requestFocus: _propTypes2.default.func
};

var defaultProps = {
  title: null,
  message: null,
  variant: variants.CUSTOM
};

var actionSection = function actionSection(primaryAction, secondaryAction) {
  var actionButton = null;
  var dismissButton = null;
  if (!primaryAction && !secondaryAction) {
    return null;
  }
  if (primaryAction) {
    actionButton = _react2.default.createElement(_terraButton2.default, { text: primaryAction.text, variant: _terraButton2.default.Opts.Variants.EMPHASIS, onClick: primaryAction.onClick });
  }
  if (secondaryAction) {
    dismissButton = _react2.default.createElement(_terraButton2.default, { text: secondaryAction.text, onClick: secondaryAction.onClick });
  }

  return _react2.default.createElement(
    'div',
    { className: cx('actions') },
    actionButton,
    dismissButton
  );
};

var getIcon = function getIcon(intl, variant) {
  var customIcon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  switch (variant) {
    case variants.ALERT:
      return _react2.default.createElement('svg', { className: cx('alert'), role: 'presentation', alt: intl.formatMessage({ id: 'Terra.notification.dialog.alert' }) });
    case variants.ERROR:
      return _react2.default.createElement('svg', { className: cx('error'), role: 'presentation', alt: intl.formatMessage({ id: 'Terra.notification.dialog.error' }) });
    case variants.WARNING:
      return _react2.default.createElement('svg', { className: cx('warning'), role: 'presentation', alt: intl.formatMessage({ id: 'Terra.notification.dialog.warning' }) });
    case variants.INFO:
      return _react2.default.createElement('svg', { className: cx('info'), role: 'presentation', alt: intl.formatMessage({ id: 'Terra.notification.dialog.info' }) });
    case variants.SUCCESS:
      return _react2.default.createElement('svg', { className: cx('success'), role: 'presentation', alt: intl.formatMessage({ id: 'Terra.notification.dialog.success' }) });
    case variants.CUSTOM:
      return customIcon;
    default:
      return null;
  }
};

var contextTypes = {
  /* eslint-disable consistent-return */
  intl: function intl(context) {
    if (context.intl === undefined) {
      return new Error('Please add locale prop to Base component to load translations');
    }
  }
};

var NotificationDialog = function (_React$Component) {
  _inherits(NotificationDialog, _React$Component);

  function NotificationDialog() {
    _classCallCheck(this, NotificationDialog);

    return _possibleConstructorReturn(this, (NotificationDialog.__proto__ || Object.getPrototypeOf(NotificationDialog)).apply(this, arguments));
  }

  _createClass(NotificationDialog, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.isOpen && this.props.requestFocus) {
        this.props.requestFocus();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.isOpen) {
        if (this.props.requestFocus) {
          this.props.requestFocus();
        }
      } else if (this.props.releaseFocus) {
        this.props.releaseFocus();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.releaseFocus) {
        this.props.releaseFocus();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.isOpen) {
        return null;
      }

      var _props = this.props,
          header = _props.header,
          title = _props.title,
          message = _props.message,
          primaryAction = _props.primaryAction,
          secondaryAction = _props.secondaryAction,
          variant = _props.variant,
          customIcon = _props.customIcon,
          isOpen = _props.isOpen,
          onRequestClose = _props.onRequestClose,
          releaseFocus = _props.releaseFocus,
          requestFocus = _props.requestFocus,
          customProps = _objectWithoutProperties(_props, ['header', 'title', 'message', 'primaryAction', 'secondaryAction', 'variant', 'customIcon', 'isOpen', 'onRequestClose', 'releaseFocus', 'requestFocus']);

      var intl = this.context.intl;


      var defaultHeader = variant === variants.CUSTOM ? '' : intl.formatMessage({ id: 'Terra.notification.dialog.' + variant });
      var notificationDialogClassNames = cx('notification-dialog', customProps.className);

      return _react2.default.createElement(
        _terraAbstractModal2.default,
        {
          ariaLabel: 'Notification Dialog',
          'aria-labelledby': 'notification-dialog-header',
          'aria-describedby': title ? 'notification-dialog-title' : 'notification-dialog-header',
          role: 'alertdialog',
          classNameModal: notificationDialogClassNames,
          isOpen: this.props.isOpen,
          onRequestClose: this.props.onRequestClose,
          closeOnEsc: false,
          closeOnOutsideClick: false,
          zIndex: '9000'
        },
        _react2.default.createElement(
          'div',
          { className: cx('notification-dialog-inner-wrapper') },
          _react2.default.createElement(
            'div',
            { className: cx('notification-dialog-container') },
            _react2.default.createElement(
              'div',
              { id: 'notification-dialog-header', className: cx('header-body') },
              header || defaultHeader
            ),
            _react2.default.createElement(
              'div',
              { className: cx('notification-dialog-body') },
              variant && _react2.default.createElement(
                'div',
                { className: cx('icon-div') },
                getIcon(intl, variant, customIcon)
              ),
              _react2.default.createElement(
                'div',
                null,
                title && _react2.default.createElement(
                  'div',
                  { id: 'notification-dialog-title', className: cx('title') },
                  title
                ),
                message && _react2.default.createElement(
                  'div',
                  { className: cx('message') },
                  message
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: cx('footer-body') },
              actionSection(primaryAction, secondaryAction)
            )
          )
        )
      );
    }
  }]);

  return NotificationDialog;
}(_react2.default.Component);

NotificationDialog.propTypes = propTypes;
NotificationDialog.defaultProps = defaultProps;
NotificationDialog.contextTypes = contextTypes;

exports.NotificationDialogVariants = variants;
exports.default = NotificationDialog;