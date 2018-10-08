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

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _resizeObserverPolyfill = require('resize-observer-polyfill');

var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);

var _reactRouterDom = require('react-router-dom');

require('terra-base/lib/baseStyles');

var _Tab = require('./_Tab');

var _Tab2 = _interopRequireDefault(_Tab);

var _TabMenu = require('./_TabMenu');

var _TabMenu2 = _interopRequireDefault(_TabMenu);

var _TabUtils = require('./_TabUtils');

var _TabUtils2 = _interopRequireDefault(_TabUtils);

var _ApplicationTabsModule = require('./ApplicationTabs.module.scss');

var _ApplicationTabsModule2 = _interopRequireDefault(_ApplicationTabsModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_ApplicationTabsModule2.default);

var propTypes = {
  /**
   * Alignment of the navigational tabs. ( e.g start, center, end )
   */
  alignment: _propTypes2.default.oneOf(['start', 'center', 'end']),
  /**
   * Navigational links that will generate tabs that will update the path. These paths are matched with react-router to selection.
   */
  links: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    /**
     * The id to append to the link.
     */
    id: _propTypes2.default.string,
    /**
     * The path to push to the route.
     */
    path: _propTypes2.default.string.isRequired,
    /**
     * The display text for the link.
     */
    text: _propTypes2.default.string.isRequired
  })),
  /**
   * The location as provided by the `withRouter()` HOC.
   */
  location: _propTypes2.default.object.isRequired,
  /**
   * The match as provided by the `withRouter()` HOC.
   */
  match: _propTypes2.default.object.isRequired,
  /**
   * The history as provided by the `withRouter()` HOC.
   */
  history: _propTypes2.default.object.isRequired,
  /**
   * The staticContext as provided by the `withRouter()` HOC. This will only be provided when
   * within a StaticRouter.
   */
  staticContext: _propTypes2.default.object
};

var defaultProps = {
  alignment: 'center',
  links: []
};

var ApplicationTabs = function (_React$Component) {
  _inherits(ApplicationTabs, _React$Component);

  function ApplicationTabs(props) {
    _classCallCheck(this, ApplicationTabs);

    var _this = _possibleConstructorReturn(this, (ApplicationTabs.__proto__ || Object.getPrototypeOf(ApplicationTabs)).call(this, props));

    _this.setContainerNode = _this.setContainerNode.bind(_this);
    _this.handleResize = _this.handleResize.bind(_this);
    _this.resetCalculations();
    return _this;
  }

  _createClass(ApplicationTabs, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.resizeObserver = new _resizeObserverPolyfill2.default(function (entries) {
        _this2.contentWidth = entries[0].contentRect.width;
        if (!_this2.isCalculating) {
          _this2.animationFrameID = window.requestAnimationFrame(function () {
            // Resetting the calculations so that all elements will be rendered face-up for width calculations
            _this2.resetCalculations();
            _this2.forceUpdate();
          });
        }
      });
      this.resizeObserver.observe(this.container);
      this.handleResize(this.contentWidth);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (this.props.links.length !== newProps.links.length) {
        this.resetCalculations();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.isCalculating) {
        this.isCalculating = false;
        this.handleResize(this.contentWidth);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.cancelAnimationFrame(this.animationFrameID);
      this.resizeObserver.disconnect(this.container);
      this.container = null;
    }
  }, {
    key: 'setContainerNode',
    value: function setContainerNode(node) {
      if (node === null) {
        return;
      } // Ref callbacks happen on mount and unmount, element will be null on unmount
      this.container = node;
    }
  }, {
    key: 'resetCalculations',
    value: function resetCalculations() {
      this.animationFrameID = null;
      this.hiddenStartIndex = -1;
      this.menuHidden = false;
      this.isCalculating = true;
    }
  }, {
    key: 'handleResize',
    value: function handleResize(width) {
      // Calculate hide index
      var childrenCount = this.props.links.length;
      var tabWidth = childrenCount > 1 ? this.container.children[0].getBoundingClientRect().width : 0;
      var availableWidth = width - tabWidth;

      var newHideIndex = childrenCount;
      var calcMinWidth = 0;
      var isMenuHidden = true;
      for (var i = 0; i < childrenCount; i += 1) {
        calcMinWidth += tabWidth;
        if (calcMinWidth > availableWidth && !(i === childrenCount - 1 && calcMinWidth <= width)) {
          newHideIndex = i;
          isMenuHidden = false;
          break;
        }
      }

      if (this.hiddenStartIndex !== newHideIndex) {
        this.hiddenStartIndex = newHideIndex;
        this.menuHidden = isMenuHidden;
        this.forceUpdate();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          alignment = _props.alignment,
          links = _props.links,
          location = _props.location,
          match = _props.match,
          history = _props.history,
          staticContext = _props.staticContext,
          customProps = _objectWithoutProperties(_props, ['alignment', 'links', 'location', 'match', 'history', 'staticContext']);

      var visibleChildren = [];
      var hiddenChildren = [];

      links.forEach(function (link, index) {
        var tabProps = {
          id: link.id,
          path: link.path,
          text: link.text,
          key: link.path,
          externalLink: link.externalLink,
          location: location,
          history: history
        };
        if (_this3.hiddenStartIndex < 0) {
          visibleChildren.push(_react2.default.createElement(_Tab2.default, tabProps));
          hiddenChildren.push(_react2.default.createElement(_Tab2.default, _extends({}, tabProps, { isCollapsed: true })));
        } else if (index < _this3.hiddenStartIndex) {
          visibleChildren.push(_react2.default.createElement(_Tab2.default, tabProps));
        } else {
          hiddenChildren.push(_react2.default.createElement(_Tab2.default, _extends({}, tabProps, { isCollapsed: true })));
        }
      });

      return _react2.default.createElement(
        'div',
        _extends({}, customProps, { className: cx(['application-tabs']) }),
        _react2.default.createElement(
          'div',
          {
            className: cx(['tabs-container', { 'is-calculating': this.isCalculating }, alignment]),
            role: 'tablist',
            ref: this.setContainerNode
          },
          visibleChildren,
          _react2.default.createElement(
            _TabMenu2.default,
            { location: location, isHidden: this.menuHidden },
            hiddenChildren
          )
        )
      );
    }
  }]);

  return ApplicationTabs;
}(_react2.default.Component);

ApplicationTabs.propTypes = propTypes;
ApplicationTabs.defaultProps = defaultProps;
ApplicationTabs.Utils = _TabUtils2.default;

exports.default = (0, _reactRouterDom.withRouter)(ApplicationTabs);