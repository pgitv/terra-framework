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
    if (!isCompactContentLayout(props.activeBreakpoint) && state.compactMenuIsOpen) {
      /**
       * The compact menu state is reset when a non-compact breakpoint is active.
       */
      return {
        compactMenuIsOpen: false,
      };
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
      compactMenuProviderValue: {
        closeMenu: this.closeCompactMenu,
      },
      defaultMenuProviderValue: {
        closeMenu: undefined,
      },
      compactContentProviderValue: {
        openMenu: this.openCompactMenu,
      },
      defaultContentProviderValue: {
        pinMenu: this.pinMenu,
        unpinMenu: this.unpinMenu,
        menuIsPinned: true,
      },
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
      defaultContentProviderValue: {
        pinMenu: this.pinMenu,
        unpinMenu: this.unpinMenu,
        menuIsPinned: true,
      },
    });
  }

  unpinMenu() {
    this.setState({
      menuIsPinnedOpen: false,
      defaultContentProviderValue: {
        pinMenu: this.pinMenu,
        unpinMenu: this.unpinMenu,
        menuIsPinned: false,
      },
    });
  }

  render() {
    const {
      children,
      menuContent,
      activeBreakpoint,
    } = this.props;

    const {
      compactMenuIsOpen, menuIsPinnedOpen, compactMenuProviderValue, compactContentProviderValue, defaultMenuProviderValue, defaultContentProviderValue,
    } = this.state;

    let renderMenu;
    let menuProviderValue;
    let contentProviderValue;
    if (isCompactContentLayout(activeBreakpoint)) {
      renderMenu = compactMenuIsOpen;
      menuProviderValue = compactMenuProviderValue;
      contentProviderValue = compactContentProviderValue;
    } else {
      renderMenu = menuIsPinnedOpen;
      menuProviderValue = defaultMenuProviderValue;
      contentProviderValue = defaultContentProviderValue;
    }

    return (
      <div className={cx(['container', { 'panel-is-open': renderMenu }])}>
        <div className={cx('panel')}>
          <ContentLayoutContext.Provider
            value={menuProviderValue}
          >
            {menuContent}
          </ContentLayoutContext.Provider>
        </div>
        <div className={cx('content')}>
          <ContentLayoutContext.Provider
            value={contentProviderValue}
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
