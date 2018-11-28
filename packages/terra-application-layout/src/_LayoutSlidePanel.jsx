import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Overlay from 'terra-overlay';
import OverlayContainer from 'terra-overlay/lib/OverlayContainer';

import 'terra-base/lib/baseStyles';

import styles from './_LayoutSlidePanel.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
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
   * Whether or not the panel, when open, should fully cover the content.
   */
  panelIsFullscreen: PropTypes.bool,
  /**
   * The function called when panel state changes are desired.
   */
  onToggle: PropTypes.func,
};

const defaultProps = {
  isOpen: false,
};

const LayoutSlidePanel = ({
  isOpen, children, panelContent, panelIsFullscreen, onToggle,
}) => {
  const slidePanelClassNames = cx([
    'layout-slide-panel',
    { 'is-open': isOpen },
  ]);

  const panelClasses = cx([
    'panel',
    { 'is-fullscreen': panelIsFullscreen },
  ]);

  return (
    <div
      className={slidePanelClassNames}
    >
      <div className={panelClasses} aria-hidden={!isOpen}>
        {panelContent}
      </div>
      <OverlayContainer className={cx('content')}>
        <Overlay isRelativeToContainer onRequestClose={onToggle} isOpen={isOpen} backgroundStyle="dark" style={{ zIndex: '1500' }} />
        {children}
      </OverlayContainer>
    </div>
  );
};

LayoutSlidePanel.propTypes = propTypes;
LayoutSlidePanel.defaultProps = defaultProps;

export default LayoutSlidePanel;
