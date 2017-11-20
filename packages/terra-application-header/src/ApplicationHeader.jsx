import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';

import AppDelegate from 'terra-app-delegate';
import IconMenu from 'terra-icon/lib/icon/IconMenu';
import Button from 'terra-button';

import styles from './ApplicationHeader.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The AppDelegate instance provided by the containing component. If present, its properties will propagate to the children components.
   * */
  app: AppDelegate.propType,
  /**
   * Content element to be placed within the fill area of the header.
   * */
  content: PropTypes.element,
  /**
   * Logo element to be placed at the start of the header.
   * */
  logo: PropTypes.element,
  /**
   * Layout configuration to handle size and toggle functionality.
   * */
  layoutConfig: PropTypes.shape({
    size: PropTypes.string,
    toggleMenu: PropTypes.func,
    menuIsOpen: PropTypes.bool,
  }),
  /**
   * Utility element to be placed at the end of the header.
   * */
  utility: PropTypes.element,
  /**
   * Widget element to be placed beforethe end of the header.
   * */
  widget: PropTypes.element,
};

const defaultProps = {
  layoutConfig: {
    menuIsOpen: false,
  },
};

const appendPropsToElement = (app, size, element) => React.cloneElement(element, { app, size });

const ApplicationHeader = ({
  app,
  content,
  layoutConfig,
  logo,
  utility,
  widget,
  ...customProps
}) => {
  const isCompact = layoutConfig.size === 'tiny' || layoutConfig.size === 'small';

  const headerClassNames = cx([
    'header',
    'fill',
    customProps.className,
  ]);

  let logoElement;
  if (logo) {
    const clonedElement = appendPropsToElement(app, layoutConfig.size, logo);
    logoElement = <div className={cx(['fit', 'start', 'logo'])}>{clonedElement}</div>;
  }

  let contentElement;
  if (content) {
    const clonedElement = appendPropsToElement(app, layoutConfig.size, content);
    contentElement = <div className={cx('fill', 'content')}>{clonedElement}</div>;
  }

  let widgetElement;
  if (widget) {
    const clonedElement = appendPropsToElement(app, layoutConfig.size, widget);
    widgetElement = <div className={cx(['fit', 'end', 'widget'])}>{clonedElement}</div>;
  }

  let utilityElement;
  if (utility) {
    const clonedElement = appendPropsToElement(app, layoutConfig.size, utility);
    utilityElement = <div className={cx(['fit', 'end', 'utility'])}>{clonedElement}</div>;
  }

  let headerToggle;
  if (layoutConfig.toggleMenu && isCompact) {
    headerToggle = (
      <div className={cx(['fit', 'header-toggle'])}>
        <Button className={cx('toggle-button')} variant="link" icon={<IconMenu />} onClick={layoutConfig.toggleMenu} />
      </div>
    );
  }

  let headerBody;
  if (logoElement || contentElement || utilityElement) {
    headerBody = (
      <div className={cx(['fill', 'header-body'])}>
        {logoElement}
        <div className={cx(['fill'])}>
          {contentElement}
          {widgetElement}
        </div>
        {utilityElement}
      </div>
    );
  }

  return (
    <div {...customProps} className={headerClassNames}>
      {headerToggle}
      {headerBody}
    </div>
  );
};

ApplicationHeader.propTypes = propTypes;
ApplicationHeader.defaultProps = defaultProps;

export default ApplicationHeader;
