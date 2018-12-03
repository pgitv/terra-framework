import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ContentContainer from 'terra-content-container';
import ModalManager from 'terra-modal-manager';
import { ActiveBreakpointProvider, withActiveBreakpoint } from 'terra-breakpoints';
import NavigationSideMenu from 'terra-navigation-side-menu';
import Overlay from 'terra-overlay';
import OverlayContainer from 'terra-overlay/lib/OverlayContainer';

import RoutingMenu from './menu/RoutingMenu';
import ApplicationMenu from './menu/_ApplicationMenu';
import ApplicationHeader from './header/_ApplicationHeader';
import ApplicationLayoutPropTypes from './utils/propTypes';
import Helpers from './utils/helpers';
import UtilityHelpers from './utils/utilityHelpers';

import 'terra-base/lib/baseStyles';

import styles from './ApplicationLayout.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The content to be rendered in the ApplicationLayout's extensions region.
   */
  extensions: PropTypes.element,
  /**
   * The configuration values for the ApplicationName component.
   */
  nameConfig: ApplicationLayoutPropTypes.nameConfigPropType,
  /**
   * Alignment of the header's navigation primary tabs. ( e.g start, center, end )
   */
  navigationAlignment: ApplicationLayoutPropTypes.navigationAlignmentPropType,
  /**
   * An array of Objects describing the ApplicationLayout's primary navigation items.
   */
  navigationItems: ApplicationLayoutPropTypes.navigationItemsPropType,
  /**
   * The configuration values for the ApplicationUtility component.
   */
  utilityConfig: ApplicationLayoutPropTypes.utilityConfigPropType,
  /**
   * Content to render within the body of the ApplicationLayout.
   */
  children: PropTypes.node,
  /**
   * The active breakpoint for the current window size. Provided automatically by withActiveBreakpoint().
   */
  activeBreakpoint: PropTypes.string,
  menuIsOpen: PropTypes.bool,
  onMenuToggle: PropTypes.func,
  activeNavigationItemKey: PropTypes.string,
  onSelectNavigationItem: PropTypes.func,
};

const defaultProps = {
  navigationItems: [],
};

class ApplicationLayout extends React.Component {
  constructor(props) {
    super(props);

    this.renderApplicationLayoutMenu = this.renderApplicationLayoutMenu.bind(this);
  }

  componentDidUpdate() {
    const { activeBreakpoint, menuIsOpen, onMenuToggle } = this.props;

    /**
     * The menu is toggled if it determined to be open at medium through enormous breakpoints.
     */
    if (activeBreakpoint !== 'tiny' && activeBreakpoint !== 'small' && menuIsOpen) {
      onMenuToggle();
    }
  }

  renderApplicationLayoutMenu() {
    const {
      nameConfig, utilityConfig, extensions, activeBreakpoint, onMenuToggle, navigationItems, activeNavigationItemKey, onSelectNavigationItem,
    } = this.props;

    let navigationSideMenu;
    if (navigationItems.length) {
      navigationSideMenu = (
        <NavigationSideMenu
          menuItems={[{
            childKeys: navigationItems.map(item => item.key),
            key: 'application_layout_menu',
            text: 'Application Layout Menu',
            isRootMenu: true,
          }].concat(navigationItems)}
          selectedMenuKey="application_layout_menu"
          selectedChildKey={activeNavigationItemKey}
          onChange={(event, data) => {
            if (onSelectNavigationItem) {
              onSelectNavigationItem(data.selectedChildKey);
            }
          }}
        />
      );
    }

    return (
      <ApplicationMenu
        extensions={extensions}
        nameConfig={nameConfig}
        utilityConfig={utilityConfig}
        activeBreakpoint={activeBreakpoint}
        toggleMenu={onMenuToggle}
        content={navigationSideMenu}
      />
    );
  }

  render() {
    const {
      nameConfig, utilityConfig, navigationAlignment, navigationItems, extensions, activeBreakpoint, children, menuIsOpen, onMenuToggle, activeNavigationItemKey, onSelectNavigationItem,
    } = this.props;

    const isCompact = activeBreakpoint === 'tiny' || activeBreakpoint === 'small';

    const containerClassNames = cx([
      'application-layout',
      { 'menu-is-open': menuIsOpen },
    ]);

    return (
      <div
        className={containerClassNames}
      >
        <div className={cx('menu-panel')} aria-hidden={!menuIsOpen}>
          {isCompact ? this.renderApplicationLayoutMenu() : undefined}
        </div>
        <OverlayContainer className={cx('content')}>
          <Overlay isRelativeToContainer onRequestClose={onMenuToggle} isOpen={menuIsOpen} backgroundStyle="dark" style={{ zIndex: '1500' }} />
          <ContentContainer
            header={(
              <ApplicationHeader
                activeBreakpoint={activeBreakpoint}
                nameConfig={nameConfig}
                utilityConfig={utilityConfig}
                extensions={extensions}
                navigationItems={navigationItems}
                navigationItemAlignment={navigationAlignment}
                activeNavigationItemKey={activeNavigationItemKey}
                onSelectNavigationItem={onSelectNavigationItem}
                onMenuToggle={isCompact ? onMenuToggle : undefined}
              />
              )}
            fill
          >
            {children}
          </ContentContainer>
        </OverlayContainer>
      </div>
    );
  }
}

ApplicationLayout.propTypes = propTypes;
ApplicationLayout.defaultProps = defaultProps;

const WrappedApplicationLayout = withActiveBreakpoint(ApplicationLayout);

const ApplicationLayoutHarness = props => (
  // <ActiveBreakpointProvider>
  //   <ModalManager>
  <WrappedApplicationLayout {...props} />
  //   </ModalManager>
  // </ActiveBreakpointProvider>
);

export default ApplicationLayoutHarness;

const Utils = {
  helpers: Helpers,
  utilityHelpers: UtilityHelpers,
  propTypes: ApplicationLayoutPropTypes,
};

export { RoutingMenu, Utils };
