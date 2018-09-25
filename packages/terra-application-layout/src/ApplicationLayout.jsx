import React from 'react';
import PropTypes from 'prop-types';
import AppDelegate from 'terra-app-delegate';
import NavigationLayout from 'terra-navigation-layout';
import { routeConfigPropType } from 'terra-navigation-layout/lib/configurationPropTypes';
import { withRouter, matchPath } from 'react-router-dom';
import { withModalManager } from 'terra-modal-manager';
import NavigationSideMenu from 'terra-navigation-side-menu';
import {
  getBreakpointSize,
} from 'terra-layout/lib/LayoutUtils';

import LayoutSlidePanel from './_LayoutSlidePanel';
import RoutingMenu from './menu/RoutingMenu';

import ApplicationMenu from './menu/_ApplicationMenu';
import ApplicationHeader from './header/_ApplicationHeader';
import ApplicationLayoutPropTypes from './utils/propTypes';
import Helpers from './utils/helpers';
import UtilityHelpers from './utils/utilityHelpers';


const propTypes = {
  /**
   * The AppDelegate instance provided by `withModalManager`. If an AppDelegate instance is
   * explicitly provided to the ApplicationLayout, the ModalManager will wrap it and
   * fall back to its defined APIs as needed.
   */
  app: AppDelegate.propType,
  /**
   * The content to be rendered in the ApplicationLayout's extensions region. This component will be provided an AppDelegate (as `app`) and
   * a `layoutConfig` as props to facilitate communication with the ApplicationLayout.
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
   * The configuration values for the ApplicationUtility component.
   */
  utilityConfig: ApplicationLayoutPropTypes.utilityConfigPropType,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({}),
  routeNotFoundComponent: PropTypes.node,
};

const defaultProps = {
  navigationItems: [],
  nameConfig: {},
};

class ApplicationLayout extends React.Component {
  /**
   * Builds and returns the menu items for the PrimaryNavigationSideMenu from the navigationItems.
   */
  static buildMenuNavigationItems(props) {
    const { navigationItems } = props;

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

  static getActiveNavigationItem(location, navigationItems) {
    for (let i = 0, numberOfNavigationItems = navigationItems.length; i < numberOfNavigationItems; i += 1) {
      if (matchPath(location.pathname, navigationItems[i].path)) {
        return navigationItems[i];
      }
    }

    return undefined;
  }

  static hasMatchingRoute(location, routingConfig) {
    const menuRoutePaths = routingConfig.menu && Object.keys(routingConfig.menu).map(menuKey => routingConfig.menu[menuKey].path);
    const contentRoutePaths = routingConfig.content && Object.keys(routingConfig.content).map(contentKey => routingConfig.content[contentKey].path);
    const searchPaths = [].concat(menuRoutePaths, contentRoutePaths);

    for (let i = 0, numberOfPaths = searchPaths.length; i < numberOfPaths; i += 1) {
      if (matchPath(location.pathname, searchPaths[i])) {
        return true;
      }
    }

    return false;
  }

  constructor(props) {
    super(props);

    this.updateSize = this.updateSize.bind(this);

    const size = getBreakpointSize();

    const isCompactLayout = size === 'tiny' || size === 'small';

    this.state = {
      size: getBreakpointSize(),
      menuIsOpen: isCompactLayout,
      activeNavigationItem: ApplicationLayout.getActiveNavigationItem(props.location, props.navigationItems),
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateSize);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      activeNavigationItem: ApplicationLayout.getActiveNavigationItem(nextProps.location, nextProps.navigationItems),
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateSize);
  }

  updateSize() {
    this.setState({
      size: getBreakpointSize(),
    });
  }

  render() {
    const {
      app, nameConfig, utilityConfig, navigationAlignment, navigationItems, indexPath, extensions, routingConfig, location, history, routeNotFoundComponent,
    } = this.props;
    const { menuIsOpen, activeNavigationItem, size } = this.state;

    if (!ApplicationLayout.hasMatchingRoute(location, routingConfig)) {
      return routeNotFoundComponent;
    }

    const menuNavigationItems = ApplicationLayout.buildMenuNavigationItems(this.props);

    const menuComponent = (
      <ApplicationMenu
        app={app}
        extensions={extensions}
        nameConfig={nameConfig}
        utilityConfig={utilityConfig}
        size={size}
        content={(
          <NavigationSideMenu
            menuItems={[{
              childKeys: menuNavigationItems.map(item => item.key),
              key: 'root',
              text: 'Root Menu',
              isRootMenu: true,
            }].concat(menuNavigationItems)}
            selectedMenuKey="root"
            selectedChildKey={activeNavigationItem && activeNavigationItem.path}
            onChange={(event, data) => {
              if (data.metaData.externalLink) {
                window.open(data.metaData.externalLink.path, data.metaData.externalLink.target || '_blank');
              } else if (activeNavigationItem === data.metaData.navigationItem) {
                this.setState({
                  menuIsOpen: false,
                });
              } else {
                this.setState({
                  activeNavigationItem: data.metaData.navigationItem,
                  menuIsOpen: false,
                }, () => {
                  history.push(data.metaData.path);
                });
              }
            }}
          />
        )}
      />
    );

    const isCompactLayout = size === 'tiny' || size === 'small';

    const navigationLayout = (
      <NavigationLayout
        app={app}
        config={routingConfig}
        header={(
          <ApplicationHeader
            toggleMenu={isCompactLayout ? () => {
              this.setState({ menuIsOpen: !this.state.menuIsOpen });
            } : null}
            nameConfig={{
              accessory: nameConfig.accessory,
              title: nameConfig.title,
            }}
            utilityConfig={utilityConfig}
            extensions={extensions}
            applicationLinks={{
              alignment: navigationAlignment,
              links: navigationItems ? navigationItems.map((route, index) => ({
                id: `application-layout-tab-${index}`,
                path: route.path,
                text: route.text,
                externalLink: route.externalLink,
              })) : undefined,
            }}
          />
        )}
        indexPath={indexPath}
      />
    );

    return (
      <LayoutSlidePanel
        panelContent={menuComponent}
        panelBehavior="overlay"
        size={size}
        isToggleEnabled={isCompactLayout}
        onToggle={() => {
          this.setState({
            menuIsOpen: !this.state.menuIsOpen,
          });
        }}
        isOpen={menuIsOpen}
        isAnimated
      >
        {navigationLayout}
      </LayoutSlidePanel>
    );
  }
}

ApplicationLayout.propTypes = propTypes;
ApplicationLayout.defaultProps = defaultProps;

/**
 * The ApplicationLayout is wrapped with a ModalManager on export to provide modal functionality
 * for utility presentation and content convenience.
 */
export default withRouter(withModalManager(ApplicationLayout));

const Utils = {
  helpers: Helpers,
  utilityHelpers: UtilityHelpers,
  propTypes: ApplicationLayoutPropTypes,
};

export { RoutingMenu, Utils };
