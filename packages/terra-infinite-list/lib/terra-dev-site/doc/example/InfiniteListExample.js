'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconInformation = require('terra-icon/lib/icon/IconInformation');

var _IconInformation2 = _interopRequireDefault(_IconInformation);

var _LoadingOverlay = require('terra-overlay/lib/LoadingOverlay');

var _LoadingOverlay2 = _interopRequireDefault(_LoadingOverlay);

var _OverlayContainer = require('terra-overlay/lib/OverlayContainer');

var _OverlayContainer2 = _interopRequireDefault(_OverlayContainer);

var _terraArrange = require('terra-arrange');

var _terraArrange2 = _interopRequireDefault(_terraArrange);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _InfiniteListExample = require('terra-infinite-list/lib/terra-dev-site/doc/example/InfiniteListExample.scss');

var _InfiniteListExample2 = _interopRequireDefault(_InfiniteListExample);

var _InfiniteList = require('terra-infinite-list/lib/InfiniteList');

var _InfiniteList2 = _interopRequireDefault(_InfiniteList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */


/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

var cx = _bind2.default.bind(_InfiniteListExample2.default);

var InfiniteListExample = function (_React$Component) {
  _inherits(InfiniteListExample, _React$Component);

  function InfiniteListExample(props) {
    _classCallCheck(this, InfiniteListExample);

    var _this = _possibleConstructorReturn(this, (InfiniteListExample.__proto__ || Object.getPrototypeOf(InfiniteListExample)).call(this, props));

    _this.addMoreData = _this.debounce(_this.addMoreData.bind(_this), 1000);
    _this.handleOnChange = _this.handleOnChange.bind(_this);

    _this.state = { stillLoading: true, numberOfPages: 0, selectedIndexes: [] };
    return _this;
  }

  _createClass(InfiniteListExample, [{
    key: 'handleOnChange',
    value: function handleOnChange(event, index) {
      this.setState({ selectedIndexes: [index] });
    }
  }, {
    key: 'addMoreData',
    value: function addMoreData() {
      var newState = { numberOfPages: this.state.numberOfPages + 1 };
      if (newState.numberOfPages > 10) {
        return;
      }if (newState.numberOfPages > 9) {
        newState.stillLoading = false;
      }
      this.setState(newState);
    }
  }, {
    key: 'debounce',
    value: function debounce(fn, delay) {
      var _this2 = this;

      var timer = null;
      return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var context = _this2;
        clearTimeout(timer);
        timer = setTimeout(function () {
          fn.apply(context, args);
        }, delay);
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var items = [];
      for (var i = 0; i < 15 * this.state.numberOfPages; i += 1) {
        items.push(_react2.default.createElement(_InfiniteList2.default.Item, {
          key: '' + i,
          content: _react2.default.createElement(_terraArrange2.default, {
            fitStart: _react2.default.createElement(
              'h3',
              { style: { width: '50px' } },
              '' + i
            ),
            fill: _react2.default.createElement(
              'p',
              null,
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor ullamcorper nisi, vel tincidunt dui pharetra vel. Morbi eu rutrum nibh, sit amet placerat libero. Integer vel dapibus nibh. Donec tempor mi vitae lorem congue, ut ultrices metus feugiat. Sed non commodo felis. Aliquam eget maximus dui, ut rhoncus augue.'
            ),
            fitEnd: _react2.default.createElement(
              'div',
              { className: cx(['icon-wrapper']) },
              _react2.default.createElement(_IconInformation2.default, null)
            ),
            align: 'center',
            fitStartAttributes: { style: { textAlign: 'center' } }
          })
        }));
      }

      var fullLoading = _react2.default.createElement(_LoadingOverlay2.default, { isOpen: true, isAnimated: true, isRelativeToContainer: true, backgroundStyle: 'dark' });

      var progressLoading = _react2.default.createElement(
        _OverlayContainer2.default,
        { style: { height: '80px', width: '100%' } },
        _react2.default.createElement(_LoadingOverlay2.default, { isOpen: true, isAnimated: true, isRelativeToContainer: true, backgroundStyle: 'dark' })
      );

      return _react2.default.createElement(
        'div',
        { style: {
            height: '600px', width: '100%', position: 'relative', border: '1px solid black'
          }
        },
        _react2.default.createElement(
          _InfiniteList2.default,
          {
            isSelectable: true,
            isDivided: true,
            onChange: this.handleOnChange,
            selectedIndexes: this.state.selectedIndexes,
            isFinishedLoading: !this.state.stillLoading,
            onRequestItems: this.addMoreData,
            initialLoadingIndicator: fullLoading,
            progressiveLoadingIndicator: progressLoading
          },
          items
        )
      );
    }
  }]);

  return InfiniteListExample;
}(_react2.default.Component);

exports.default = InfiniteListExample;