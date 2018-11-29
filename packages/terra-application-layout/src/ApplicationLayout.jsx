import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import NavigationLayout from 'terra-navigation-layout';
import ContentContainer from 'terra-content-container';
import { routeConfigPropType } from 'terra-navigation-layout/lib/configurationPropTypes';
// import { matchPath } from 'react-router-dom';
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
   * The content to be rendered in the ApplicationLayout's extensions region. This component will be provided
   * a `layoutConfig` prop to facilitate communication with the ApplicationLayout.
   */
  extensions: PropTypes.element,
  /**
   * The index, or default, path of the routing configuration. The ApplicationLayout will redirect to this path
   * when the router reaches an unknown location.
   */
  indexPath: PropTypes.string.isRequired,
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
   * The routing configuration Object. This is very similar to the routingConfig supported by the NavigationLayout; however,
   * the ApplicationLayout only supports configuration for the `menu` and `content` regions of the layout. The '/' path is also blacklisted
   * within this configuration object, as the ApplicationLayout uses it for navigation purposes. Any configuration provided for the '/' path
   * will be disregarded.
   */
  routingConfig: PropTypes.shape({
    menu: routeConfigPropType,
    content: routeConfigPropType,
  }).isRequired,
  /**
   * Content to render within the body of the ApplicationLayout. If a routingConfig is provided, the `children` prop will be ignored.
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
  /**
   * Builds and returns the menu items for the PrimaryNavigationSideMenu from the navigationItems.
   */
  static buildMenuNavigationItems(props) {
    const { navigationItems } = props;

    if (!navigationItems) {
      return [];
    }

    return navigationItems.map(navigationItem => ({
      key: navigationItem.path,
      text: navigationItem.text,
      metaData: {
        path: navigationItem.path,
        externalLink: navigationItem.externalLink,
        navigationItem,
      },
    }));
  }

  constructor(props) {
    super(props);

    this.renderApplicationLayoutMenu = this.renderApplicationLayoutMenu.bind(this);
  }

  renderApplicationLayoutMenu() {
    const {
      nameConfig, utilityConfig, extensions, activeBreakpoint, onMenuToggle, activeNavigationItemKey, onSelectNavigationItem
    } = this.props;

    const menuNavigationItems = ApplicationLayout.buildMenuNavigationItems(this.props);

    let navigationSideMenu;
    if (menuNavigationItems.length) {
      navigationSideMenu = (
        <NavigationSideMenu
          menuItems={[{
            childKeys: menuNavigationItems.map(item => item.key),
            key: 'application_layout_menu',
            isRootMenu: true,
          }].concat(menuNavigationItems)}
          selectedMenuKey="application_layout_menu"
          selectedChildKey={activeNavigationItemKey}
          onChange={(event, data) => {
            if (onSelectNavigationItem) {
              onSelectNavigationItem(data.metaData.navigationItem.path);
            }
          }}
        />
      )
    }

    return (
      <ApplicationMenu
        extensions={extensions}
        nameConfig={nameConfig}
        utilityConfig={utilityConfig}
        activeBreakpoint={activeBreakpoint}
        layoutConfig={{
          size: activeBreakpoint,
        }}
        toggleMenu={onMenuToggle}
        content={navigationSideMenu}
      />
    );
  }

  render() {
    const {
      nameConfig, utilityConfig, navigationAlignment, navigationItems, indexPath, extensions, routingConfig, activeBreakpoint, children, menuIsOpen, onMenuToggle, activeNavigationItemKey, onSelectNavigationItem
    } = this.props;

    const isCompact = activeBreakpoint === 'tiny' || activeBreakpoint === 'small';

    let content = children;
    if (routingConfig) {
      content = (
        <NavigationLayout
          config={routingConfig}
          indexPath={indexPath}
        />
      );
    }

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
                  onToggle={isCompact ? onMenuToggle : undefined}
                  layoutConfig={{
                    toggleMenu: isCompact ? onMenuToggle : undefined,
                    size: activeBreakpoint,
                  }}
                />
              )}
            fill
          > 
            {content}
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
  <ActiveBreakpointProvider>
    <ModalManager>
      <WrappedApplicationLayout {...props} />
    </ModalManager>
  </ActiveBreakpointProvider>
);

export default ApplicationLayoutHarness;

const Utils = {
  helpers: Helpers,
  utilityHelpers: UtilityHelpers,
  propTypes: ApplicationLayoutPropTypes,
};

export { RoutingMenu, Utils };
