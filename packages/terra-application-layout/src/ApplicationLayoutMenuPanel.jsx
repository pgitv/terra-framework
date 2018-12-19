import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Overlay from 'terra-overlay';
import OverlayContainer from 'terra-overlay/lib/OverlayContainer';
import tabbable from 'tabbable';
import { withActiveBreakpoint } from 'terra-breakpoints';
import Helpers from './utils/helpers';

import 'terra-base/lib/baseStyles';

import styles from './ApplicationLayoutMenuPanel.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Enables animations for panel state transitions.
   */
  isAnimated: PropTypes.bool,
  /**
   * Enables panel visibility.
   */
  isOpen: PropTypes.bool,
  /**
   * The element to display in the main content area.
   */
  children: PropTypes.element,
  /**
   * The component to display in the panel content area.
   */
  panelContent: PropTypes.node,
  /**
   * The function called when panel state changes are desired.
   */
  onToggle: PropTypes.func,
};

const defaultProps = {
  isAnimated: false,
  isOpen: false,
};

class ApplicationLayoutMenuPanel extends React.Component {
  constructor(props) {
    super(props);
    this.setPanelNode = this.setPanelNode.bind(this);
    this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
    this.preparePanelForTransition = this.preparePanelForTransition.bind(this);

    this.isHidden = !props.isOpen;
  }

  componentDidMount() {
    if (this.panelNode) {
      this.panelNode.addEventListener('transitionend', this.handleTransitionEnd);
    }
  }

  componentDidUpdate() {
    this.lastIsOpen = this.props.isOpen;
  }

  componentWillUnmount() {
    if (this.panelNode) {
      this.panelNode.removeEventListener('transitionend', this.handleTransitionEnd);
    }
  }

  setPanelNode(node) {
    this.panelNode = node;
  }

  handleTransitionEnd() {
    if (!this.props.isOpen && this.panelNode) {
      this.panelNode.setAttribute('aria-hidden', 'true');
      this.isHidden = true;

      // Sends focus back to the application layout header toggle button if it exists
      if (document.querySelector('button[data-application-header-toggle]')) {
        document.querySelector('button[data-application-header-toggle]').focus();
      // Else, we'll send focus back to first interactable element in the main panel
      } else if (tabbable(document.querySelector('[data-terra-layout-main]'))[0]) {
        tabbable(document.querySelector('[data-terra-layout-main]'))[0].focus();
      }
    }
  }

  preparePanelForTransition() {
    // React 16.3 will be deprecating componentWillRecieveProps and componentWillUpdate, and removed in 17, so code execution prior to render becomes difficult.
    // As a result of this change, we are executing the code in the render block.
    if (this.props.isOpen && !this.lastIsOpen && this.panelNode) {
      // If the panel is opening remove the hidden attribute so the animation performs correctly.
      this.panelNode.setAttribute('aria-hidden', 'false');
      this.isHidden = false;
      if (tabbable(this.panelNode)[0]) {
        tabbable(this.panelNode)[0].focus();
      }
    }
  }

  render() {
    const {
      isAnimated,
      isOpen,
      children,
      panelContent,
      onToggle,
      activeBreakpoint,
      ...customProps
    } = this.props;

    this.preparePanelForTransition();

    const isCompact = Helpers.isSizeCompact(activeBreakpoint);

    const slidePanelClassNames = cx([
      'container',
      { 'is-open': isOpen },
      customProps.className,
    ]);

    const panelClasses = cx([
      'menu-panel',
      { 'is-animated': isAnimated && isCompact && !!panelContent },
    ]);

    return (
      <div
        {...customProps}
        className={slidePanelClassNames}
      >
        <div className={panelClasses} aria-hidden={this.isHidden ? 'true' : 'false'} ref={this.setPanelNode}>
          {panelContent}
        </div>
        <OverlayContainer className={cx('content')}>
          <Overlay isRelativeToContainer onRequestClose={onToggle} isOpen={isOpen && isCompact} backgroundStyle={isCompact ? 'dark' : 'clear'} />
          {children}
        </OverlayContainer>
      </div>
    );
  }
}

ApplicationLayoutMenuPanel.propTypes = propTypes;
ApplicationLayoutMenuPanel.defaultProps = defaultProps;

export default withActiveBreakpoint(ApplicationLayoutMenuPanel);
