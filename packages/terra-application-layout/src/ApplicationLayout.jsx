import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ContentContainer from 'terra-content-container';
import { withActiveBreakpoint } from 'terra-breakpoints';
import Overlay from 'terra-overlay';
import OverlayContainer from 'terra-overlay/lib/OverlayContainer';

import RoutingMenu from './menu/RoutingMenu';
import ApplicationMenu from './menu/_ApplicationMenu';
import ApplicationHeader from './header/_ApplicationHeader';
import ApplicationLayoutPropTypes from './utils/propTypes';
import Helpers from './utils/helpers';
import UtilityHelpers from './utils/utilityHelpers';
import ApplicationLayoutMenuPanel from './ApplicationLayoutMenuPanel';

import 'terra-base/lib/baseStyles';

import styles from './ApplicationLayout.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Boolean indicating whether or not the ApplicationLayout's menu (containing extensions, primary navigation, and utilities) should be displayed.
   */
  menuIsOpen: PropTypes.bool,
  /**
   * Function executed by the ApplicationLayout when it wants to toggle the menu's visibility.
   */
  onMenuToggle: PropTypes.func,
  /**
   * The configuration values for the ApplicationName component.
   */
  nameConfig: ApplicationLayoutPropTypes.nameConfigPropType,
  /**
   * The content to be rendered in the ApplicationLayout's extensions region.
   */
  extensions: PropTypes.element,
  /**
   * Alignment of the header's navigation primary tabs. ( e.g start, center, end )
   */
  navigationAlignment: ApplicationLayoutPropTypes.navigationAlignmentPropType,
  /**
   * An array of Objects describing the ApplicationLayout's primary navigation items.
   */
  navigationItems: ApplicationLayoutPropTypes.navigationItemsPropType,
  /**
   * The string key pertaining to the navigation item determined to be active.
   */
  activeNavigationItemKey: PropTypes.string,
  /**
   * Function executed by the ApplicationLayout upon selection of a navigation item.
   */
  onSelectNavigationItem: PropTypes.func,
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
};

const defaultProps = {
  navigationItems: [],
};

class ApplicationLayout extends React.Component {
  constructor(props) {
    super(props);

    this.handleNavigationItemSelection = this.handleNavigationItemSelection.bind(this);
    this.renderApplicationLayoutMenu = this.renderApplicationLayoutMenu.bind(this);
  }

  componentDidUpdate() {
    const { activeBreakpoint, menuIsOpen, onMenuToggle } = this.props;
    /**
     * The menu is toggled closed if it determined to be open at medium through enormous breakpoints.
     */
    if (!Helpers.isSizeCompact(activeBreakpoint) && menuIsOpen) {
      onMenuToggle();
    }
  }

  handleNavigationItemSelection(event, data) {
    const { onSelectNavigationItem } = this.props;

    if (onSelectNavigationItem) {
      onSelectNavigationItem(data.selectedChildKey);
    }
  }

  renderApplicationLayoutMenu() {
    const {
      nameConfig, utilityConfig, extensions, activeBreakpoint, onMenuToggle, navigationItems, activeNavigationItemKey,
    } = this.props;

    return (
      <ApplicationMenu
        nameConfig={nameConfig}
        navigationItems={navigationItems}
        activeNavigationItemKey={activeNavigationItemKey}
        onSelectNavigationItem={this.handleNavigationItemSelection}
        extensions={extensions}
        utilityConfig={utilityConfig}
        activeBreakpoint={activeBreakpoint}
        toggleMenu={onMenuToggle}
      />
    );
  }

  render() {
    const {
      nameConfig, utilityConfig, navigationAlignment, navigationItems, extensions, activeBreakpoint, children, menuIsOpen, onMenuToggle, activeNavigationItemKey, onSelectNavigationItem,
    } = this.props;

    const isCompact = Helpers.isSizeCompact(activeBreakpoint);

    const containerClassNames = cx([
      'application-layout',
      // { 'menu-is-open': menuIsOpen },
    ]);

    return (
      <ApplicationLayoutMenuPanel
        isOpen={menuIsOpen}
        onToggle={onMenuToggle}
        panelContent={isCompact ? this.renderApplicationLayoutMenu() : undefined}
      >
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
              onMenuToggle={onMenuToggle}
            />
            )}
          fill
        >
          <main tabIndex="-1" className={cx('main-container')}>
            {children}
          </main>
        </ContentContainer>
      </ApplicationLayoutMenuPanel>
    );
  }
}

ApplicationLayout.propTypes = propTypes;
ApplicationLayout.defaultProps = defaultProps;

const WrappedApplicationLayout = withActiveBreakpoint(ApplicationLayout);

export default WrappedApplicationLayout;

const Utils = {
  helpers: Helpers,
  utilityHelpers: UtilityHelpers,
  propTypes: ApplicationLayoutPropTypes,
};

export { RoutingMenu, Utils };
