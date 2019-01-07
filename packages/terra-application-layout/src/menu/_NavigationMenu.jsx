import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import NavigationSideMenu from 'terra-navigation-side-menu';
import Scroll from 'terra-scroll';

import ApplicationLayoutPropTypes from '../utils/propTypes';

import 'terra-base/lib/baseStyles';
import styles from './NavigationMenu.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The array of objects representing the navigation items to render.
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
};

const NavigationMenu = ({ navigationItems, activeNavigationItemKey, onSelectNavigationItem }) => (
  <div className={cx('navigation-menu')}>
    <Scroll>
      <NavigationSideMenu
        menuItems={[{
          childKeys: navigationItems.map(item => item.key),
          key: 'application_layout_navigation_menu',
          text: 'Application Layout Navigation Menu', // Text is a required value here, but it's never actually rendered
          isRootMenu: true,
        }].concat(navigationItems)}
        selectedMenuKey="application_layout_navigation_menu"
        selectedChildKey={activeNavigationItemKey}
        onChange={onSelectNavigationItem}
      />
    </Scroll>
  </div>
);

NavigationMenu.propTypes = propTypes;

export default NavigationMenu;
