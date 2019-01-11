import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { withActiveBreakpoint } from 'terra-breakpoints';

import 'terra-base/lib/baseStyles';

import styles from './ContentLayout.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Enables panel visibility.
   */
  menuIsVisible: PropTypes.bool,
  /**
   * The element to display in the main content area.
   */
  children: PropTypes.element,
  /**
   * The component to display in the panel content area.
   */
  menuContent: PropTypes.node,
};

class ContentLayout extends React.Component {
  render() {
    const {
      menuIsVisible,
      children,
      menuContent,
      activeBreakpoint,
    } = this.props;

    if (activeBreakpoint === 'tiny' || activeBreakpoint === 'small') {
      if (menuContent && menuIsVisible) {
        return (
          <div className={cx('container')}>
            {menuContent}
          </div>
        );
      }

      if (children) {
        return (
          <div className={cx('container')}>
            {children}
          </div>
        );
      }
    }

    if (menuContent && menuIsVisible) {
      return (
        <div className={cx(['container'])}>
          <div className={cx('panel')}>
            {menuContent}
          </div>
          <div className={cx('content')}>
            {children}
          </div>
        </div>
      );
    }

    return (
      <div className={cx(['container'])}>
        {children}
      </div>
    );
  }
}

ContentLayout.propTypes = propTypes;

export default withActiveBreakpoint(ContentLayout);
