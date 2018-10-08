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

require('terra-base/lib/baseStyles');

var _resizeObserverPolyfill = require('resize-observer-polyfill');

var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);

var _terraList = require('terra-list');

var _terraList2 = _interopRequireDefault(_terraList);

var _SelectableUtils = require('terra-list/lib/SelectableUtils');

var _SelectableUtils2 = _interopRequireDefault(_SelectableUtils);

var _InfiniteUtils = require('./_InfiniteUtils');

var _InfiniteUtils2 = _interopRequireDefault(_InfiniteUtils);

var _InfiniteListModule = require('./InfiniteList.module.scss');

var _InfiniteListModule2 = _interopRequireDefault(_InfiniteListModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_InfiniteListModule2.default);

var propTypes = {
  /**
   * The child list items, of type InfiniteList.Item, to be placed within the infinite list.
   * For further documentation of InfiniteList.Item see terra-list's ListItem.
   */
  children: _propTypes2.default.node,
  /**
   * Whether or not unselected items should be disabled.
   * Helpful for enabling max row selection.
   */
  disableUnselectedItems: _propTypes2.default.bool,
  /**
   * Whether or not the child list items has a disclosure indicator presented.
   * The behavior is intended to be used with a single selection style list, as multi selection style list should not perform disclosures.
   */
  hasChevrons: _propTypes2.default.bool,
  /**
   * An indicator to be displayed when no children are yet present.
   */
  initialLoadingIndicator: _propTypes2.default.element,
  /**
   * Whether or not the child list items should have a border color applied.
   */
  isDivided: _propTypes2.default.bool,
  /**
   * Determines whether or not the loading indicator is visible and if callbacks are triggered.
   */
  isFinishedLoading: _propTypes2.default.bool,
  /**
   * Whether or not the list is selectable.
   */
  isSelectable: _propTypes2.default.bool,
  /**
   * A callback event that will be triggered when selection state changes.
   */
  onChange: _propTypes2.default.func,
  /**
   * Callback trigger when new list items are requested.
   */
  onRequestItems: _propTypes2.default.func,
  /**
   * An indicator to be displayed at the end of the current loaded children.
   */
  progressiveLoadingIndicator: _propTypes2.default.element,
  /**
   * An array of the currectly selected indexes.
   */
  selectedIndexes: _propTypes2.default.array
};

var defaultProps = {
  children: [],
  disableUnselectedItems: false,
  hasChevrons: false,
  isDivided: false,
  isFinishedLoading: false,
  isSelectable: false,
  selectedIndexes: []
};

/**
 * Returns a ListItem sized according to the provided height to use as a spacer.
 * @param {number} height - Height to set on the ListItem.
 * @param {number} index - Index to use as part of the spacers key.
 */
var createSpacer = function createSpacer(height, index) {
  return _react2.default.createElement(_terraList2.default.Item, {
    isSelectable: false,
    className: cx(['spacer']),
    style: { height: height },
    key: 'infinite-spacer-' + index
  });
};

var InfiniteList = function (_React$Component) {
  _inherits(InfiniteList, _React$Component);

  function InfiniteList(props) {
    _classCallCheck(this, InfiniteList);

    var _this = _possibleConstructorReturn(this, (InfiniteList.__proto__ || Object.getPrototypeOf(InfiniteList)).call(this, props));

    _this.update = _this.update.bind(_this);
    _this.enableListeners = _this.enableListeners.bind(_this);
    _this.disableListeners = _this.disableListeners.bind(_this);
    _this.setContentNode = _this.setContentNode.bind(_this);
    _this.updateItemCache = _this.updateItemCache.bind(_this);
    _this.initializeItemCache = _this.initializeItemCache.bind(_this);
    _this.updateScrollGroups = _this.updateScrollGroups.bind(_this);
    _this.handleRenderCompletion = _this.handleRenderCompletion.bind(_this);
    _this.handleResize = _this.resizeDebounce(_this.handleResize.bind(_this));
    _this.resetTimeout = _this.resetTimeout.bind(_this);
    _this.wrapChild = _this.wrapChild.bind(_this);

    _this.initializeItemCache(props);
    return _this;
  }

  _createClass(InfiniteList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.listenersAdded) {
        this.enableListeners();
      }
      this.updateScrollGroups();
      this.handleRenderCompletion();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      var newChildCount = _react2.default.Children.count(newProps.children);
      if (newChildCount > this.childCount) {
        this.lastChildIndex = this.childCount;
        this.loadingIndex += 1;
        this.updateItemCache(newProps);
      } else if (newChildCount < this.childCount) {
        this.initializeItemCache(newProps);
      } else {
        this.childrenArray = _react2.default.Children.toArray(newProps.children);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (!this.listenersAdded) {
        this.enableListeners();
      }
      this.handleRenderCompletion();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.disableListeners();
    }

    /**
     * Sets the html node of contentNode and if it was previously undefined trigger updateScrollGroups.
     * @param {node} node - Html node of the List.
     */

  }, {
    key: 'setContentNode',
    value: function setContentNode(node) {
      var wasUndefined = !this.contentNode;
      this.contentNode = node;

      if (this.contentNode && wasUndefined) {
        this.updateScrollGroups();
      }
    }

    /**
     * If a request for items has not been made and/or updates are not pending trigger onRequestItems.
     */

  }, {
    key: 'triggerItemRequest',
    value: function triggerItemRequest() {
      if (!this.props.isFinishedLoading && !this.hasRequestedItems && !this.isRenderingNew && this.props.onRequestItems) {
        this.hasRequestedItems = true;
        this.props.onRequestItems();
      }
    }

    /**
     * Following a render reset newChildren values. If new items were render trigger an update calculation.
     */

  }, {
    key: 'handleRenderCompletion',
    value: function handleRenderCompletion() {
      this.renderNewChildren = false;
      this.preventUpdate = false;
      this.lastChildIndex = this.childCount;
      if (this.isRenderingNew) {
        this.isRenderingNew = false;
        this.update(null, false, true); // Prevent from triggering an item request to avoid infinite loop of loading.
      } else if (this.contentNode && _InfiniteUtils2.default.shouldTriggerItemRequest(_InfiniteUtils2.default.getContentData(this.contentNode))) {
        this.triggerItemRequest();
      }
    }

    /**
     * Cache the value for the child count and convert the children props to an array.
     * @param {object} props - React element props.
     */

  }, {
    key: 'updateItemCache',
    value: function updateItemCache(props) {
      this.childCount = _react2.default.Children.count(props.children);
      this.childrenArray = _react2.default.Children.toArray(props.children);
      this.hasRequestedItems = false;
      this.renderNewChildren = true;
    }

    /**
     * Set the initial state of the virtualization values for the list.
     * @param {object} props - React element props.
     */

  }, {
    key: 'initializeItemCache',
    value: function initializeItemCache(props) {
      this.loadingIndex = 0;
      this.lastChildIndex = -1;
      this.itemsByIndex = [];
      this.scrollGroups = [];
      this.boundary = {
        topBoundryIndex: -1,
        hiddenTopHeight: -1,
        bottomBoundryIndex: -1,
        hiddenBottomHeight: -1
      };
      this.updateItemCache(props);
    }

    /**
     * Adds a resize observer and scroll event listener to the contentNode.
     */

  }, {
    key: 'enableListeners',
    value: function enableListeners() {
      var _this2 = this;

      if (!this.contentNode) {
        return;
      }
      this.resizeObserver = new _resizeObserverPolyfill2.default(function (entries) {
        _this2.handleResize(entries[0].contentRect);
      });
      this.resizeObserver.observe(this.contentNode);
      this.contentNode.addEventListener('scroll', this.update);
      this.listenersAdded = true;
    }

    /**
     * Removes the resize observer and scroll event listener from the contentNode.
     */

  }, {
    key: 'disableListeners',
    value: function disableListeners() {
      if (!this.contentNode) {
        return;
      }
      this.resizeObserver.disconnect(this.contentNode);
      this.contentNode.removeEventListener('scroll', this.update);
      this.listenersAdded = false;
    }

    /**
     * Reset the timeout on this.timer.
     * @param {function} fn - The handleResize function.
     * @param {object} args - Arguments passed to the handleResize function.
     * @param {context} context - Javascript context.
     * @param {double} now - DOMHighResTimeStamp.
     */

  }, {
    key: 'resetTimeout',
    value: function resetTimeout(fn, args, context, now) {
      var _this3 = this;

      clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        _this3.last = now;
        _this3.disableScroll = false;
        fn.apply(context, args);
      }, 250);
    }

    /**
     * Debounce the size event and prevent updates from scrolling.
     * @param {function} fn - The handleResize function.
     */

  }, {
    key: 'resizeDebounce',
    value: function resizeDebounce(fn) {
      var _this4 = this;

      return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var context = _this4;
        var now = performance.now();
        if (_this4.last && now < _this4.last + 250) {
          _this4.resetTimeout(fn, args, context, now);
        } else {
          _this4.last = now;
          _this4.disableScroll = true;
          _this4.resetTimeout(fn, args, context, now);
        }
      };
    }

    /**
     * Triggers a height adjustment if the height or scroll height changes.
     */

  }, {
    key: 'handleResize',
    value: function handleResize() {
      if (this.scrollHeight !== this.contentNode.scrollHeight || this.clientHeight !== this.contentNode.clientHeight) {
        this.adjustHeight();
      }
    }

    /**
     * Calculates the visible scroll items and if the hidden items have changed force an update.
     * @param {object} event - Browser DOM event.
     * @param {bool} ensureUpdate - Regardless of calculation ensure a forceUpdate occurs.
     * @param {bool} preventRequest - Should triggerItemRequest be prevented.
     */

  }, {
    key: 'update',
    value: function update(event, ensureUpdate, preventRequest) {
      if (!this.contentNode || this.disableScroll || this.preventUpdate) {
        return;
      }

      var contentData = _InfiniteUtils2.default.getContentData(this.contentNode);
      var hiddenItems = _InfiniteUtils2.default.getHiddenItems(this.scrollGroups, contentData, this.boundary.topBoundryIndex, this.boundary.bottomBoundryIndex);
      this.scrollHeight = contentData.scrollHeight;
      this.clientHeight = contentData.clientHeight;

      if (ensureUpdate || hiddenItems.topHiddenItem.index !== this.boundary.topBoundryIndex || hiddenItems.bottomHiddenItem.index !== this.boundary.bottomBoundryIndex) {
        this.preventUpdate = true;
        this.boundary = {
          topBoundryIndex: hiddenItems.topHiddenItem.index,
          hiddenTopHeight: hiddenItems.topHiddenItem.height,
          bottomBoundryIndex: hiddenItems.bottomHiddenItem.index,
          hiddenBottomHeight: hiddenItems.bottomHiddenItem.height
        };
        this.forceUpdate();
      }

      if (!preventRequest && _InfiniteUtils2.default.shouldTriggerItemRequest(contentData)) {
        this.triggerItemRequest();
      }
    }

    /**
     * Groups scroll items by height to reduce the number of refreshs that occur on scroll.
     */

  }, {
    key: 'updateScrollGroups',
    value: function updateScrollGroups() {
      if (!this.contentNode) {
        return;
      }

      var groupHeight = 0;
      var groupIndex = 0;
      var captureOffsetTop = true;
      var maxGroupHeight = 1 * this.contentNode.clientHeight;
      this.scrollGroups = [];
      for (var i = 0; i < this.itemsByIndex.length; i += 1) {
        var item = this.itemsByIndex[i];
        if (this.scrollGroups[groupIndex] && item.height >= maxGroupHeight) {
          groupHeight = 0;
          groupIndex += 1;
          captureOffsetTop = true;
        }

        groupHeight += item.height;
        this.scrollGroups[groupIndex] = this.scrollGroups[groupIndex] || { items: [] };
        this.scrollGroups[groupIndex].items.push(i);
        this.scrollGroups[groupIndex].height = groupHeight;
        this.itemsByIndex[i].groupIndex = groupIndex;
        if (captureOffsetTop) {
          this.scrollGroups[groupIndex].offsetTop = this.itemsByIndex[i].offsetTop;
          captureOffsetTop = false;
        }

        if (groupHeight >= maxGroupHeight) {
          groupHeight = 0;
          groupIndex += 1;
          captureOffsetTop = true;
        }
      }
    }

    /**
     * Checks the boundingClientRect for the scroll item's height and offsetTop then caches it.
     * @param {node} node - The child node for the scroll item.
     * @param {number} index - Index of the child.
     */

  }, {
    key: 'updateHeight',
    value: function updateHeight(node, index) {
      if (node) {
        this.itemsByIndex[index] = this.itemsByIndex[index] || {};
        var updatedHeight = false;
        var newHeight = node.getBoundingClientRect().height;
        if (!this.itemsByIndex[index].height || Math.abs(this.itemsByIndex[index].height - newHeight) > 1) {
          this.itemsByIndex[index].height = newHeight;
          updatedHeight = true;
        }
        if (!this.itemsByIndex[index].offsetTop || Math.abs(this.itemsByIndex[index].offsetTop - node.offsetTop) > 1) {
          this.itemsByIndex[index].offsetTop = node.offsetTop;
        }
        if (this.itemsByIndex.length === this.childCount) {
          if (!this.scrollGroups.length) {
            this.updateScrollGroups();
          } else if (updatedHeight) {
            this.adjustHeight();
          }
        }
      }
    }

    /**
     * Detects which scroll items are on the dom and reads the heights to see if resize has changed the boundClientRect.
     */

  }, {
    key: 'adjustHeight',
    value: function adjustHeight() {
      var _this5 = this;

      if (this.contentNode) {
        this.itemsByIndex.forEach(function (item, itemIndex) {
          var scrollItemNode = _this5.contentNode.querySelector('[data-infinite-list-index="' + itemIndex + '"]');
          if (scrollItemNode) {
            var newHeight = scrollItemNode.getBoundingClientRect().height;
            if (!_this5.itemsByIndex[itemIndex].height || Math.abs(newHeight - _this5.itemsByIndex[itemIndex].height) > 1) {
              _this5.itemsByIndex[itemIndex].height = newHeight;
            }
            if (!_this5.itemsByIndex[itemIndex].offsetTop || Math.abs(_this5.itemsByIndex[itemIndex].offsetTop - scrollItemNode.offsetTop) > 1) {
              _this5.itemsByIndex[itemIndex].offsetTop = scrollItemNode.offsetTop;
            }
            _this5.adjustTrailingItems(itemIndex);
          }
        });

        // needs to update offset tops of every other save
        this.updateScrollGroups();
        this.boundary = {
          topBoundryIndex: -1,
          hiddenTopHeight: -1,
          bottomBoundryIndex: -1,
          hiddenBottomHeight: -1
        };
        this.update(null, true);
      }
    }

    /**
     * Updates the offsetTop of scroll items following the element that adjusted it's height.
     * @param {number} index - Index of the scroll item that had adjusted it's height.
     */

  }, {
    key: 'adjustTrailingItems',
    value: function adjustTrailingItems(index) {
      var lastTop = this.itemsByIndex[index].offsetTop;
      var lastHeight = this.itemsByIndex[index].height;
      for (var i = index + 1; i < this.itemsByIndex.length; i += 1) {
        lastTop += lastHeight;
        lastHeight = this.itemsByIndex[i].height;
        this.itemsByIndex[i].offsetTop = lastTop;
      }
    }

    /**
     * Clones the child element with new props for selection, refCallback,  and data attributes.
     * @param {element} child - React child element.
     * @param {number} index - Index of the child element.
     */

  }, {
    key: 'wrapChild',
    value: function wrapChild(child, index) {
      var _this6 = this;

      var wrappedCallBack = function wrappedCallBack(node) {
        _this6.updateHeight(node, index);
        if (child.props.refCallback) {
          child.props.refCallback(node);
        }
      };

      var newProps = {};
      if (this.props.isSelectable) {
        var wrappedOnClick = _SelectableUtils2.default.wrappedOnClickForItem(child, index, this.props.onChange);
        var wrappedOnKeyDown = _SelectableUtils2.default.wrappedOnKeyDownForItem(child, index, this.props.onChange);
        newProps = _SelectableUtils2.default.newPropsForItem(child, index, wrappedOnClick, wrappedOnKeyDown, this.props.hasChevrons, this.props.selectedIndexes, this.props.disableUnselectedItems);
      }

      newProps.refCallback = wrappedCallBack;
      newProps['data-infinite-list-index'] = index;
      newProps.style = child.props.style ? _extends({}, child.props.style, { overflow: 'hidden' }) : { overflow: 'hidden' };
      return _react2.default.cloneElement(child, newProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          disableUnselectedItems = _props.disableUnselectedItems,
          hasChevrons = _props.hasChevrons,
          initialLoadingIndicator = _props.initialLoadingIndicator,
          isDivided = _props.isDivided,
          isFinishedLoading = _props.isFinishedLoading,
          isSelectable = _props.isSelectable,
          onRequestItems = _props.onRequestItems,
          progressiveLoadingIndicator = _props.progressiveLoadingIndicator,
          selectedIndexes = _props.selectedIndexes,
          customProps = _objectWithoutProperties(_props, ['children', 'disableUnselectedItems', 'hasChevrons', 'initialLoadingIndicator', 'isDivided', 'isFinishedLoading', 'isSelectable', 'onRequestItems', 'progressiveLoadingIndicator', 'selectedIndexes']);

      var topSpacer = createSpacer((this.boundary.hiddenTopHeight > 0 ? this.boundary.hiddenTopHeight : 0) + 'px', 0);
      var bottomSpacer = createSpacer((this.boundary.hiddenBottomHeight > 0 ? this.boundary.hiddenBottomHeight : 0) + 'px', 1);

      var loadingSpinner = void 0;
      var visibleChildren = void 0;
      var showDivided = isDivided;

      if (!isFinishedLoading) {
        if (this.childCount > 0) {
          loadingSpinner = _react2.default.createElement(_terraList2.default.Item, {
            content: progressiveLoadingIndicator,
            isSelectable: false,
            key: 'infinite-spinner-row-' + this.loadingIndex
          });
        } else {
          visibleChildren = _react2.default.createElement(_terraList2.default.Item, {
            content: initialLoadingIndicator,
            isSelectable: false,
            key: 'infinite-spinner-full',
            style: { height: '100%', position: 'relative' }
          });
          showDivided = false;
        }
      }

      var newChildren = void 0;
      if (!visibleChildren) {
        var upperChildIndex = this.lastChildIndex;
        if (!this.scrollGroups.length && this.lastChildIndex <= 0 || !this.renderNewChildren) {
          upperChildIndex = this.childCount;
        } else {
          newChildren = _react2.default.createElement(
            _terraList2.default,
            _extends({}, customProps, { isDivided: isDivided, className: cx(['infinite-hidden']) }),
            _InfiniteUtils2.default.getNewChildren(this.lastChildIndex, this.childrenArray, this.wrapChild)
          );
          this.isRenderingNew = true;
        }
        visibleChildren = _InfiniteUtils2.default.getVisibleChildren(this.scrollGroups, this.childrenArray, this.boundary.topBoundryIndex, this.boundary.bottomBoundryIndex, this.wrapChild, upperChildIndex);
      }

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          _terraList2.default,
          _extends({}, customProps, { isDivided: showDivided, className: cx(['infinite-list', customProps.className]), refCallback: this.setContentNode }),
          topSpacer,
          visibleChildren,
          bottomSpacer,
          loadingSpinner
        ),
        newChildren
      );
    }
  }]);

  return InfiniteList;
}(_react2.default.Component);

InfiniteList.propTypes = propTypes;
InfiniteList.defaultProps = defaultProps;
InfiniteList.Item = _terraList2.default.Item;

exports.default = InfiniteList;