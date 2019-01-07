import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Overlay from 'terra-overlay';
import tabbable from 'tabbable';

import 'terra-base/lib/baseStyles';

import styles from './MenuPanel.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Enables panel visibility.
   */
  isOpen: PropTypes.bool,
  /**
   * The function called when panel state changes are desired.
   */
  onToggle: PropTypes.func,
  /**
   * The element to display in the main content area.
   */
  children: PropTypes.element,
  /**
   * The component to display in the panel content area.
   */
  panelContent: PropTypes.node,
};

class MenuPanel extends React.Component {
  constructor(props) {
    super(props);
    this.setPanelNode = this.setPanelNode.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { isOpen } = this.props;

    if (isOpen && !prevProps.isOpen) {
      if (tabbable(this.panelNode)[0]) {
        tabbable(this.panelNode)[0].focus();
      }
    } else if (!isOpen && prevProps.isOpen) {
      // Sends focus back to the application layout header toggle button if it exists
      if (document.querySelector('button[data-application-header-toggle]')) {
        document.querySelector('button[data-application-header-toggle]').focus();
        // Else, we'll send focus back to first interactable element in the main panel
      } else if (tabbable(document.querySelector('[data-terra-application-layout-main]'))[0]) {
        tabbable(document.querySelector('[data-terra-application-layout-main]'))[0].focus();
      }
    }
  }

  setPanelNode(node) {
    this.panelNode = node;
  }

  render() {
    const {
      isOpen,
      children,
      panelContent,
      onToggle,
    } = this.props;

    return (
      <div className={cx(['container', { 'panel-is-open': isOpen }])}>
        <div className={cx('panel')} aria-hidden={!isOpen ? 'true' : null} ref={this.setPanelNode}>
          {panelContent}
        </div>
        <main tabIndex="-1" className={cx('content')} data-terra-application-layout-main>
          <Overlay isRelativeToContainer onRequestClose={onToggle} isOpen={isOpen} backgroundStyle="dark" />
          {children}
        </main>
      </div>
    );
  }
}

MenuPanel.propTypes = propTypes;

export default MenuPanel;
