'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _classnames2.default;

var ThemeProviderThemes = {
  CONSUMER: 'cerner-consumer-theme',
  MOCK: 'cerner-mock-theme'
};

var propTypes = {
  /**
   * The component(s) that will be wrapped by `<ThemeProvider />`
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Name of class for specified theme. e.g `cerner-consumer-theme`
   */
  themeName: _propTypes2.default.string,
  /**
   * When set to true, applies theme class to HTML element
   */
  isGlobalTheme: _propTypes2.default.bool
};

var defaultProps = {
  isGlobalTheme: false
};

var ThemeProvider = function (_React$Component) {
  _inherits(ThemeProvider, _React$Component);

  function ThemeProvider() {
    _classCallCheck(this, ThemeProvider);

    return _possibleConstructorReturn(this, (ThemeProvider.__proto__ || Object.getPrototypeOf(ThemeProvider)).apply(this, arguments));
  }

  _createClass(ThemeProvider, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.isGlobalTheme === true && this.props.themeName) {
        document.documentElement.classList.add(this.props.themeName);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props === nextProps) return;
      if (nextProps.isGlobalTheme === true) {
        if (this.props.themeName) {
          document.documentElement.classList.remove(this.props.themeName);
        }

        if (nextProps.themeName) {
          document.documentElement.classList.add(nextProps.themeName);
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.isGlobalTheme === true && this.props.themeName) {
        document.documentElement.classList.remove(this.props.themeName);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          themeName = _props.themeName,
          isGlobalTheme = _props.isGlobalTheme,
          children = _props.children,
          customProps = _objectWithoutProperties(_props, ['themeName', 'isGlobalTheme', 'children']);

      return _react2.default.createElement(
        'div',
        _extends({}, customProps, { className: cx(themeName, customProps.className) }),
        children
      );
    }
  }]);

  return ThemeProvider;
}(_react2.default.Component);

ThemeProvider.propTypes = propTypes;
ThemeProvider.defaultProps = defaultProps;
ThemeProvider.Opts = {};
ThemeProvider.Opts.Themes = ThemeProviderThemes;

exports.default = ThemeProvider;