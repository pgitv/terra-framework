import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import NavigationMenu from './menu/_NavigationMenu';
import ApplicationHeader from './header/_ApplicationHeader';
import ApplicationLayoutPropTypes from './utils/propTypes';
import Helpers, { isSizeCompact } from './utils/helpers';
import UtilityHelpers from './utils/utilityHelpers';
import MenuPanel from './menu/_MenuPanel';

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
   * The string key identifying the navigation item determined to be active.
   */
  activeNavigationItemKey: PropTypes.string,
  /**
   * A function executed upon selection of a navigation item.
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
   * The currently active breakpoint.
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
    this.renderNavigationMenu = this.renderNavigationMenu.bind(this);
  }

  componentDidUpdate() {
    const { activeBreakpoint, menuIsOpen, onMenuToggle } = this.props;
    /**
     * The menu is toggled closed if it determined to be open at medium through enormous breakpoints.
     */
    if (!isSizeCompact(activeBreakpoint) && menuIsOpen) {
      onMenuToggle();
    }
  }

  handleNavigationItemSelection(event, data) {
    const { onSelectNavigationItem } = this.props;

    if (onSelectNavigationItem) {
      onSelectNavigationItem(data.selectedChildKey);
    }
  }

  renderNavigationMenu() {
    const {
      nameConfig, utilityConfig, extensions, activeBreakpoint, onMenuToggle, navigationItems, activeNavigationItemKey,
    } = this.props;

    return (
      <NavigationMenu
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

    const isCompact = isSizeCompact(activeBreakpoint);

    return (
      <div className={cx('application-layout')}>
        <ApplicationHeader
          activeBreakpoint={activeBreakpoint}
          nameConfig={nameConfig}
          utilityConfig={utilityConfig}
          extensions={extensions}
          navigationItems={navigationItems}
          navigationItemAlignment={navigationAlignment}
          activeNavigationItemKey={activeNavigationItemKey}
          onSelectNavigationItem={onSelectNavigationItem}
          onMenuToggle={navigationItems.length ? onMenuToggle : undefined}
        />
        <MenuPanel
          isOpen={menuIsOpen}
          onToggle={onMenuToggle}
          panelContent={isCompact && navigationItems.length ? this.renderNavigationMenu() : undefined}
        >
          {children}
        </MenuPanel>
      </div>
    );
  }
}

ApplicationLayout.propTypes = propTypes;
ApplicationLayout.defaultProps = defaultProps;

export default ApplicationLayout;

const Utils = {
  helpers: Helpers,
  utilityHelpers: UtilityHelpers,
  propTypes: ApplicationLayoutPropTypes,
};

export { Utils };
