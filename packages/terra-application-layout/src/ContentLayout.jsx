import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { withActiveBreakpoint } from 'terra-breakpoints';

import 'terra-base/lib/baseStyles';

import styles from './ContentLayout.module.scss';

const cx = classNames.bind(styles);

const ContentLayoutContext = React.createContext({});

const withContentLayout = (WrappedComponent) => {
  const WithContentLayoutComp = props => (
    <ContentLayoutContext.Consumer>
      {contentLayout => <WrappedComponent {...props} contentLayout={contentLayout} />}
    </ContentLayoutContext.Consumer>
  );

  WithContentLayoutComp.WrappedComponent = WrappedComponent;
  WithContentLayoutComp.displayName = `withContentLayout(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WithContentLayoutComp;
};

const isCompactContentLayout = activeBreakpoint => activeBreakpoint === 'tiny' || activeBreakpoint === 'small';

const propTypes = {
  /**
   * The element to display in the main content area.
   */
  children: PropTypes.element,
  /**
   * The component to display in the panel content area.
   */
  menuContent: PropTypes.node,
  /**
   * @private
   */
  activeBreakpoint: PropTypes.string,
};

class ContentLayout extends React.Component {
  static getDerivedStateFromProps(props, state) {
    /**
     * If the ContentLayout is going from compact mode to side-by-side, we reset the compactMenuIsOpen value to ensure
     * the children are visible if the ContentLayout returns to compact mode.
     */
    if (isCompactContentLayout(state.previousActiveBreakpoint) && !isCompactContentLayout(props.activeBreakpoint)) {
      if (state.compactMenuIsOpen) {
        return {
          compactMenuIsOpen: false,
        };
      }
    }

    return null;
  }

  constructor(props) {
    super(props);

    this.closeCompactMenu = this.closeCompactMenu.bind(this);
    this.openCompactMenu = this.openCompactMenu.bind(this);
    this.pinMenu = this.pinMenu.bind(this);
    this.unpinMenu = this.unpinMenu.bind(this);

    this.state = {
      compactMenuIsOpen: false,
      menuIsPinnedOpen: true,
      previousActiveBreakpoint: props.activeBreakpoint,
    };
  }

  closeCompactMenu() {
    this.setState({
      compactMenuIsOpen: false,
    });
  }

  openCompactMenu() {
    this.setState({
      compactMenuIsOpen: true,
    });
  }

  pinMenu() {
    this.setState({
      menuIsPinnedOpen: true,
    });
  }

  unpinMenu() {
    this.setState({
      menuIsPinnedOpen: false,
    });
  }

  render() {
    const {
      children,
      menuContent,
      activeBreakpoint,
    } = this.props;

    const { compactMenuIsOpen, menuIsPinnedOpen } = this.state;

    let renderMenu;
    if (isCompactContentLayout(activeBreakpoint)) {
      renderMenu = compactMenuIsOpen;
    } else {
      renderMenu = menuIsPinnedOpen;
    }

    return (
      <div className={cx(['container', { 'panel-is-open': renderMenu }])}>
        <div className={cx('panel')}>
          <ContentLayoutContext.Provider
            value={{
              closeMenu: isCompactContentLayout(activeBreakpoint) ? this.closeCompactMenu : () => {},
            }}
          >
            {menuContent}
          </ContentLayoutContext.Provider>
        </div>
        <div className={cx('content')}>
          <ContentLayoutContext.Provider
            value={{
              openMenu: isCompactContentLayout(activeBreakpoint) ? this.openCompactMenu : this.pinMenu,
              closeMenu: isCompactContentLayout(activeBreakpoint) ? undefined : this.unpinMenu,
              menuIsOpen: compactMenuIsOpen || (menuIsPinnedOpen && !isCompactContentLayout(activeBreakpoint)),
            }}
          >
            {children}
          </ContentLayoutContext.Provider>
        </div>
      </div>
    );
  }
}

ContentLayout.propTypes = propTypes;

export default withActiveBreakpoint(ContentLayout);
export {
  ContentLayoutContext,
  withContentLayout,
  isCompactContentLayout,
};
