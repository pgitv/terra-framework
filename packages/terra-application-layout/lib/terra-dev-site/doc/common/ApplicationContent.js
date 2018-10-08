'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _terraAppDelegate = require('terra-app-delegate');

var _terraAppDelegate2 = _interopRequireDefault(_terraAppDelegate);

var _reactRouterDom = require('react-router-dom');

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _DisclosureComponent = require('terra-disclosure-manager/lib/terra-dev-site/doc/example/DisclosureComponent');

var _DisclosureComponent2 = _interopRequireDefault(_DisclosureComponent);

var _terraContentContainer = require('terra-content-container');

var _terraContentContainer2 = _interopRequireDefault(_terraContentContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var dummyContent = _react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(
    'h2',
    null,
    'Lorem ipsum dolor sit amet'
  ),
  _react2.default.createElement('hr', null),
  _react2.default.createElement(
    'p',
    null,
    'Nullam ornare sapien at sapien aliquam commodo. Pellentesque auctor, metus consectetur elementum venenatis, lectus libero tristique leo, ac blandit nunc metus vitae sem. Nam finibus orci quis aliquet elementum. Duis in pretium dolor, ac commodo nibh.'
  ),
  _react2.default.createElement(
    'p',
    null,
    'Proin pellentesque lectus vitae risus imperdiet tempus. Sed ac justo luctus, iaculis quam in, cursus augue. In quis erat tincidunt, pellentesque velit in, pharetra ipsum. Praesent et tincidunt arcu. Ut imperdiet risus id leo eleifend vehicula. Maecenas non tempor arcu, nec posuere lectus. Pellentesque varius magna nunc, sit amet vehicula nisi fermentum et. Ut nibh sem, feugiat blandit lacus ut, mattis maximus libero. Ut tincidunt nibh in imperdiet finibus. Phasellus eu hendrerit justo. Aliquam ac dolor sit amet metus ornare tristique at viverra sem. Vivamus non erat enim. Praesent tempor lorem felis, in aliquam lacus aliquet in. Phasellus quam felis, porttitor eget dictum at, hendrerit in sem. Duis volutpat orci sed mauris pharetra, at mollis diam placerat. Phasellus sed leo dolor. Praesent leo risus, finibus elementum aliquam at, bibendum non eros. Nunc feugiat semper nisi nec sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam sed feugiat lectus. Proin tellus justo, rhoncus vel arcu eget, molestie placerat lacus. Aliquam diam urna, finibus nec nisi ultricies, egestas vulputate tellus. Suspendisse varius metus eget orci sollicitudin lacinia. Morbi ornare arcu leo, non auctor mauris finibus ac. Etiam placerat orci at dui iaculis, ornare sagittis augue euismod. Etiam in justo vel ex gravida placerat eget quis libero. Etiam sit amet nisl neque. Sed id fringilla elit. Vestibulum vitae varius enim, sed luctus magna.'
  ),
  _react2.default.createElement(
    'p',
    null,
    'Cras et ante blandit, tincidunt lacus non, tincidunt quam. Duis id eros gravida, eleifend leo non, mattis mi. Phasellus rutrum sapien at vehicula facilisis. Curabitur elementum, lacus vitae auctor interdum, sem turpis maximus urna, a vulputate sapien felis faucibus turpis. Pellentesque nec tempor libero. Nunc est augue, luctus non lorem quis, ultricies elementum tortor. Nam blandit lacus varius orci rutrum dignissim. Donec a vehicula odio. Nam lobortis metus vel nisi tincidunt, eget viverra quam tempor. Nam sed dictum metus. Ut laoreet ex eget dapibus condimentum. Sed quis bibendum ligula. Integer nec mollis urna, gravida pharetra massa. Sed nec tortor posuere, volutpat magna at, rhoncus orci.'
  ),
  _react2.default.createElement(
    'h2',
    null,
    'Orci varius natoque penatibus et.'
  ),
  _react2.default.createElement('hr', null),
  _react2.default.createElement(
    'p',
    null,
    'Nullam ornare sapien at sapien aliquam commodo. Pellentesque auctor, metus consectetur elementum venenatis, lectus libero tristique leo, ac blandit nunc metus vitae sem. Nam finibus orci quis aliquet elementum. Duis in pretium dolor, ac commodo nibh.'
  ),
  _react2.default.createElement(
    'p',
    null,
    'Proin pellentesque lectus vitae risus imperdiet tempus. Sed ac justo luctus, iaculis quam in, cursus augue. In quis erat tincidunt, pellentesque velit in, pharetra ipsum. Praesent et tincidunt arcu. Ut imperdiet risus id leo eleifend vehicula. Maecenas non tempor arcu, nec posuere lectus. Pellentesque varius magna nunc, sit amet vehicula nisi fermentum et. Ut nibh sem, feugiat blandit lacus ut, mattis maximus libero. Ut tincidunt nibh in imperdiet finibus. Phasellus eu hendrerit justo. Aliquam ac dolor sit amet metus ornare tristique at viverra sem. Vivamus non erat enim. Praesent tempor lorem felis, in aliquam lacus aliquet in. Phasellus quam felis, porttitor eget dictum at, hendrerit in sem. Duis volutpat orci sed mauris pharetra, at mollis diam placerat. Phasellus sed leo dolor. Praesent leo risus, finibus elementum aliquam at, bibendum non eros. Nunc feugiat semper nisi nec sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam sed feugiat lectus. Proin tellus justo, rhoncus vel arcu eget, molestie placerat lacus. Aliquam diam urna, finibus nec nisi ultricies, egestas vulputate tellus. Suspendisse varius metus eget orci sollicitudin lacinia. Morbi ornare arcu leo, non auctor mauris finibus ac. Etiam placerat orci at dui iaculis, ornare sagittis augue euismod. Etiam in justo vel ex gravida placerat eget quis libero. Etiam sit amet nisl neque. Sed id fringilla elit. Vestibulum vitae varius enim, sed luctus magna.'
  ),
  _react2.default.createElement(
    'p',
    null,
    'Cras et ante blandit, tincidunt lacus non, tincidunt quam. Duis id eros gravida, eleifend leo non, mattis mi. Phasellus rutrum sapien at vehicula facilisis. Curabitur elementum, lacus vitae auctor interdum, sem turpis maximus urna, a vulputate sapien felis faucibus turpis. Pellentesque nec tempor libero. Nunc est augue, luctus non lorem quis, ultricies elementum tortor. Nam blandit lacus varius orci rutrum dignissim. Donec a vehicula odio. Nam lobortis metus vel nisi tincidunt, eget viverra quam tempor. Nam sed dictum metus. Ut laoreet ex eget dapibus condimentum. Sed quis bibendum ligula. Integer nec mollis urna, gravida pharetra massa. Sed nec tortor posuere, volutpat magna at, rhoncus orci.'
  ),
  _react2.default.createElement(
    'h2',
    null,
    'Pellentesque et odio nibh. Donec.'
  ),
  _react2.default.createElement('hr', null),
  _react2.default.createElement(
    'p',
    null,
    'Nullam ornare sapien at sapien aliquam commodo. Pellentesque auctor, metus consectetur elementum venenatis, lectus libero tristique leo, ac blandit nunc metus vitae sem. Nam finibus orci quis aliquet elementum. Duis in pretium dolor, ac commodo nibh.'
  ),
  _react2.default.createElement(
    'p',
    null,
    'Proin pellentesque lectus vitae risus imperdiet tempus. Sed ac justo luctus, iaculis quam in, cursus augue. In quis erat tincidunt, pellentesque velit in, pharetra ipsum. Praesent et tincidunt arcu. Ut imperdiet risus id leo eleifend vehicula. Maecenas non tempor arcu, nec posuere lectus. Pellentesque varius magna nunc, sit amet vehicula nisi fermentum et. Ut nibh sem, feugiat blandit lacus ut, mattis maximus libero. Ut tincidunt nibh in imperdiet finibus. Phasellus eu hendrerit justo. Aliquam ac dolor sit amet metus ornare tristique at viverra sem. Vivamus non erat enim. Praesent tempor lorem felis, in aliquam lacus aliquet in. Phasellus quam felis, porttitor eget dictum at, hendrerit in sem. Duis volutpat orci sed mauris pharetra, at mollis diam placerat. Phasellus sed leo dolor. Praesent leo risus, finibus elementum aliquam at, bibendum non eros. Nunc feugiat semper nisi nec sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam sed feugiat lectus. Proin tellus justo, rhoncus vel arcu eget, molestie placerat lacus. Aliquam diam urna, finibus nec nisi ultricies, egestas vulputate tellus. Suspendisse varius metus eget orci sollicitudin lacinia. Morbi ornare arcu leo, non auctor mauris finibus ac. Etiam placerat orci at dui iaculis, ornare sagittis augue euismod. Etiam in justo vel ex gravida placerat eget quis libero. Etiam sit amet nisl neque. Sed id fringilla elit. Vestibulum vitae varius enim, sed luctus magna.'
  ),
  _react2.default.createElement(
    'p',
    null,
    'Cras et ante blandit, tincidunt lacus non, tincidunt quam. Duis id eros gravida, eleifend leo non, mattis mi. Phasellus rutrum sapien at vehicula facilisis. Curabitur elementum, lacus vitae auctor interdum, sem turpis maximus urna, a vulputate sapien felis faucibus turpis. Pellentesque nec tempor libero. Nunc est augue, luctus non lorem quis, ultricies elementum tortor. Nam blandit lacus varius orci rutrum dignissim. Donec a vehicula odio. Nam lobortis metus vel nisi tincidunt, eget viverra quam tempor. Nam sed dictum metus. Ut laoreet ex eget dapibus condimentum. Sed quis bibendum ligula. Integer nec mollis urna, gravida pharetra massa. Sed nec tortor posuere, volutpat magna at, rhoncus orci.'
  ),
  _react2.default.createElement(
    'h2',
    null,
    'Lorem ipsum dolor sit amet'
  ),
  _react2.default.createElement('hr', null),
  _react2.default.createElement(
    'p',
    null,
    'Nullam ornare sapien at sapien aliquam commodo. Pellentesque auctor, metus consectetur elementum venenatis, lectus libero tristique leo, ac blandit nunc metus vitae sem. Nam finibus orci quis aliquet elementum. Duis in pretium dolor, ac commodo nibh.'
  ),
  _react2.default.createElement(
    'p',
    null,
    'Proin pellentesque lectus vitae risus imperdiet tempus. Sed ac justo luctus, iaculis quam in, cursus augue. In quis erat tincidunt, pellentesque velit in, pharetra ipsum. Praesent et tincidunt arcu. Ut imperdiet risus id leo eleifend vehicula. Maecenas non tempor arcu, nec posuere lectus. Pellentesque varius magna nunc, sit amet vehicula nisi fermentum et. Ut nibh sem, feugiat blandit lacus ut, mattis maximus libero. Ut tincidunt nibh in imperdiet finibus. Phasellus eu hendrerit justo. Aliquam ac dolor sit amet metus ornare tristique at viverra sem. Vivamus non erat enim. Praesent tempor lorem felis, in aliquam lacus aliquet in. Phasellus quam felis, porttitor eget dictum at, hendrerit in sem. Duis volutpat orci sed mauris pharetra, at mollis diam placerat. Phasellus sed leo dolor. Praesent leo risus, finibus elementum aliquam at, bibendum non eros. Nunc feugiat semper nisi nec sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam sed feugiat lectus. Proin tellus justo, rhoncus vel arcu eget, molestie placerat lacus. Aliquam diam urna, finibus nec nisi ultricies, egestas vulputate tellus. Suspendisse varius metus eget orci sollicitudin lacinia. Morbi ornare arcu leo, non auctor mauris finibus ac. Etiam placerat orci at dui iaculis, ornare sagittis augue euismod. Etiam in justo vel ex gravida placerat eget quis libero. Etiam sit amet nisl neque. Sed id fringilla elit. Vestibulum vitae varius enim, sed luctus magna.'
  ),
  _react2.default.createElement(
    'p',
    null,
    'Cras et ante blandit, tincidunt lacus non, tincidunt quam. Duis id eros gravida, eleifend leo non, mattis mi. Phasellus rutrum sapien at vehicula facilisis. Curabitur elementum, lacus vitae auctor interdum, sem turpis maximus urna, a vulputate sapien felis faucibus turpis. Pellentesque nec tempor libero. Nunc est augue, luctus non lorem quis, ultricies elementum tortor. Nam blandit lacus varius orci rutrum dignissim. Donec a vehicula odio. Nam lobortis metus vel nisi tincidunt, eget viverra quam tempor. Nam sed dictum metus. Ut laoreet ex eget dapibus condimentum. Sed quis bibendum ligula. Integer nec mollis urna, gravida pharetra massa. Sed nec tortor posuere, volutpat magna at, rhoncus orci.'
  ),
  _react2.default.createElement(
    'h2',
    null,
    'Orci varius natoque penatibus et.'
  ),
  _react2.default.createElement('hr', null),
  _react2.default.createElement(
    'p',
    null,
    'Nullam ornare sapien at sapien aliquam commodo. Pellentesque auctor, metus consectetur elementum venenatis, lectus libero tristique leo, ac blandit nunc metus vitae sem. Nam finibus orci quis aliquet elementum. Duis in pretium dolor, ac commodo nibh.'
  ),
  _react2.default.createElement(
    'p',
    null,
    'Proin pellentesque lectus vitae risus imperdiet tempus. Sed ac justo luctus, iaculis quam in, cursus augue. In quis erat tincidunt, pellentesque velit in, pharetra ipsum. Praesent et tincidunt arcu. Ut imperdiet risus id leo eleifend vehicula. Maecenas non tempor arcu, nec posuere lectus. Pellentesque varius magna nunc, sit amet vehicula nisi fermentum et. Ut nibh sem, feugiat blandit lacus ut, mattis maximus libero. Ut tincidunt nibh in imperdiet finibus. Phasellus eu hendrerit justo. Aliquam ac dolor sit amet metus ornare tristique at viverra sem. Vivamus non erat enim. Praesent tempor lorem felis, in aliquam lacus aliquet in. Phasellus quam felis, porttitor eget dictum at, hendrerit in sem. Duis volutpat orci sed mauris pharetra, at mollis diam placerat. Phasellus sed leo dolor. Praesent leo risus, finibus elementum aliquam at, bibendum non eros. Nunc feugiat semper nisi nec sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam sed feugiat lectus. Proin tellus justo, rhoncus vel arcu eget, molestie placerat lacus. Aliquam diam urna, finibus nec nisi ultricies, egestas vulputate tellus. Suspendisse varius metus eget orci sollicitudin lacinia. Morbi ornare arcu leo, non auctor mauris finibus ac. Etiam placerat orci at dui iaculis, ornare sagittis augue euismod. Etiam in justo vel ex gravida placerat eget quis libero. Etiam sit amet nisl neque. Sed id fringilla elit. Vestibulum vitae varius enim, sed luctus magna.'
  ),
  _react2.default.createElement(
    'p',
    null,
    'Cras et ante blandit, tincidunt lacus non, tincidunt quam. Duis id eros gravida, eleifend leo non, mattis mi. Phasellus rutrum sapien at vehicula facilisis. Curabitur elementum, lacus vitae auctor interdum, sem turpis maximus urna, a vulputate sapien felis faucibus turpis. Pellentesque nec tempor libero. Nunc est augue, luctus non lorem quis, ultricies elementum tortor. Nam blandit lacus varius orci rutrum dignissim. Donec a vehicula odio. Nam lobortis metus vel nisi tincidunt, eget viverra quam tempor. Nam sed dictum metus. Ut laoreet ex eget dapibus condimentum. Sed quis bibendum ligula. Integer nec mollis urna, gravida pharetra massa. Sed nec tortor posuere, volutpat magna at, rhoncus orci.'
  ),
  _react2.default.createElement(
    'h2',
    null,
    'Pellentesque et odio nibh. Donec.'
  ),
  _react2.default.createElement('hr', null),
  _react2.default.createElement(
    'p',
    null,
    'Nullam ornare sapien at sapien aliquam commodo. Pellentesque auctor, metus consectetur elementum venenatis, lectus libero tristique leo, ac blandit nunc metus vitae sem. Nam finibus orci quis aliquet elementum. Duis in pretium dolor, ac commodo nibh.'
  ),
  _react2.default.createElement(
    'p',
    null,
    'Proin pellentesque lectus vitae risus imperdiet tempus. Sed ac justo luctus, iaculis quam in, cursus augue. In quis erat tincidunt, pellentesque velit in, pharetra ipsum. Praesent et tincidunt arcu. Ut imperdiet risus id leo eleifend vehicula. Maecenas non tempor arcu, nec posuere lectus. Pellentesque varius magna nunc, sit amet vehicula nisi fermentum et. Ut nibh sem, feugiat blandit lacus ut, mattis maximus libero. Ut tincidunt nibh in imperdiet finibus. Phasellus eu hendrerit justo. Aliquam ac dolor sit amet metus ornare tristique at viverra sem. Vivamus non erat enim. Praesent tempor lorem felis, in aliquam lacus aliquet in. Phasellus quam felis, porttitor eget dictum at, hendrerit in sem. Duis volutpat orci sed mauris pharetra, at mollis diam placerat. Phasellus sed leo dolor. Praesent leo risus, finibus elementum aliquam at, bibendum non eros. Nunc feugiat semper nisi nec sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam sed feugiat lectus. Proin tellus justo, rhoncus vel arcu eget, molestie placerat lacus. Aliquam diam urna, finibus nec nisi ultricies, egestas vulputate tellus. Suspendisse varius metus eget orci sollicitudin lacinia. Morbi ornare arcu leo, non auctor mauris finibus ac. Etiam placerat orci at dui iaculis, ornare sagittis augue euismod. Etiam in justo vel ex gravida placerat eget quis libero. Etiam sit amet nisl neque. Sed id fringilla elit. Vestibulum vitae varius enim, sed luctus magna.'
  ),
  _react2.default.createElement(
    'p',
    null,
    'Cras et ante blandit, tincidunt lacus non, tincidunt quam. Duis id eros gravida, eleifend leo non, mattis mi. Phasellus rutrum sapien at vehicula facilisis. Curabitur elementum, lacus vitae auctor interdum, sem turpis maximus urna, a vulputate sapien felis faucibus turpis. Pellentesque nec tempor libero. Nunc est augue, luctus non lorem quis, ultricies elementum tortor. Nam blandit lacus varius orci rutrum dignissim. Donec a vehicula odio. Nam lobortis metus vel nisi tincidunt, eget viverra quam tempor. Nam sed dictum metus. Ut laoreet ex eget dapibus condimentum. Sed quis bibendum ligula. Integer nec mollis urna, gravida pharetra massa. Sed nec tortor posuere, volutpat magna at, rhoncus orci.'
  )
);

var ApplicationContent = function (_React$Component) {
  _inherits(ApplicationContent, _React$Component);

  function ApplicationContent(props) {
    _classCallCheck(this, ApplicationContent);

    var _this = _possibleConstructorReturn(this, (ApplicationContent.__proto__ || Object.getPrototypeOf(ApplicationContent)).call(this, props));

    _this.handleMenuSelection = _this.handleMenuSelection.bind(_this);

    _this.state = {
      eventState: undefined
    };
    return _this;
  }

  _createClass(ApplicationContent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('applicationMenu.itemSelected', this.handleMenuSelection);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('applicationMenu.itemSelected', this.handleMenuSelection);
    }
  }, {
    key: 'handleMenuSelection',
    value: function handleMenuSelection(event) {
      this.setState({
        eventState: event.detail
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          layoutConfig = _props.layoutConfig,
          app = _props.app,
          basePath = _props.basePath,
          contentName = _props.contentName,
          noMenu = _props.noMenu,
          showDummyContent = _props.showDummyContent;


      var bodyContent = void 0;
      if (showDummyContent) {
        bodyContent = _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h2',
            null,
            'Another Page?'
          ),
          _react2.default.createElement('hr', null),
          _react2.default.createElement(
            'p',
            null,
            'These pages are here to demonstrate the responsive functionality of header navigation tabs. The tabs will collapse into a More tab as space is constrained.'
          ),
          dummyContent
        );
      } else {
        var dynamicContent = void 0;
        if (noMenu) {
          dynamicContent = _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h2',
              null,
              'No Menu? No Problem!'
            ),
            _react2.default.createElement('hr', null),
            _react2.default.createElement(
              'p',
              null,
              'Components for the menu region are optional. The ApplicationLayout will still render a default menu at tiny and small breakpoints to ensure utilities/navigation items are accessible.'
            )
          );
        } else {
          dynamicContent = _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h2',
              null,
              'Nested Routing'
            ),
            _react2.default.createElement('hr', null),
            _react2.default.createElement(
              'p',
              null,
              'The content and menu components will remain mounted as long as their associated path continues to match the current router location. Therefore, we can change what the content components render based on the presence of additional path segments.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'For example, the displayed menu component will update the router location when its items are clicked. This content component will be notified of the location change and render the update below.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Menu item selected:',
              _react2.default.createElement(_reactRouterDom.Route, {
                path: basePath + '/*',
                render: function render(_ref) {
                  var location = _ref.location;
                  return _react2.default.createElement(
                    'b',
                    null,
                    location.pathname
                  );
                }
              })
            ),
            _react2.default.createElement(
              'h2',
              null,
              'Menu/Content Communication'
            ),
            _react2.default.createElement('hr', null),
            _react2.default.createElement(
              'p',
              null,
              'Additionally, communication can occur through custom events or shared context.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Event detected:',
              _react2.default.createElement(
                'b',
                null,
                this.state.eventState
              )
            )
          );
        }

        bodyContent = _react2.default.createElement(
          'div',
          null,
          dynamicContent,
          _react2.default.createElement(
            'h2',
            null,
            'Layout Control'
          ),
          _react2.default.createElement('hr', null),
          _react2.default.createElement(
            'p',
            null,
            'Content and menu components will receive a prop named',
            _react2.default.createElement(
              'b',
              null,
              'layoutConfig'
            ),
            ' ',
            'which contains APIs for manipulating the layout state. When the layout is tiny or small, the layoutConfig will include a function called `toggleMenu` which will present or dismiss the menu.'
          ),
          _react2.default.createElement(_terraButton2.default, { text: 'Toggle Menu', isDisabled: !layoutConfig.toggleMenu, onClick: function onClick() {
              layoutConfig.toggleMenu();
            } }),
          _react2.default.createElement(
            'h2',
            null,
            'Progressive Disclosure'
          ),
          _react2.default.createElement('hr', null),
          _react2.default.createElement(
            'p',
            null,
            'The ApplicationLayout ensures all content and menu components receive an AppDelegate prop (as',
            _react2.default.createElement(
              'b',
              null,
              'app'
            ),
            '), with ModalManager support included by default. The ApplicationLayout can be wrapped in additional DisclosureManagers to provide additional disclosure capabilities.'
          ),
          _react2.default.createElement(_terraButton2.default, {
            text: 'Launch Modal',
            onClick: function onClick() {
              app.disclose({
                preferredType: 'modal',
                size: 'medium',
                content: {
                  key: 'MODAL_TEST',
                  component: _react2.default.createElement(_DisclosureComponent2.default, null)
                }
              });
            }
          })
        );
      }

      return _react2.default.createElement(
        _terraContentContainer2.default,
        {
          fill: true
        },
        _react2.default.createElement(
          'div',
          { style: { padding: '15px' } },
          _react2.default.createElement(
            'h1',
            null,
            contentName
          ),
          bodyContent
        )
      );
    }
  }]);

  return ApplicationContent;
}(_react2.default.Component);

ApplicationContent.propTypes = {
  layoutConfig: _propTypes2.default.shape({
    toggleMenu: _propTypes2.default.func
  }),
  app: _terraAppDelegate2.default.propType,
  basePath: _propTypes2.default.string,
  contentName: _propTypes2.default.string,
  noMenu: _propTypes2.default.bool,
  showDummyContent: _propTypes2.default.bool
};

exports.default = ApplicationContent;