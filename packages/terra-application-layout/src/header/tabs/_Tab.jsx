import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import 'terra-base/lib/baseStyles';
import TabUtils from './_TabUtils';
import styles from './ApplicationTabs.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Whether or not the tab is collapsed styled and present in the menu.
   */
  isCollapsed: PropTypes.bool,
  /**
   * The path to push to the route.
   */
  path: PropTypes.string.isRequired,
  /**
   * The display text for the tab.
   */
  text: PropTypes.string.isRequired,
  /**
   * The click callback of the tab.
   */
  onTabClick: PropTypes.func,
  isSelected: PropTypes.bool,
};

class ApplicationTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false, focused: false };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }

  handleOnBlur() {
    this.setState({ focused: false });
  }

  handleKeyDown(event) {
    // Add active state to FF browsers
    if (event.nativeEvent.keyCode === TabUtils.KEYCODES.SPACE) {
      this.setState({ active: true });
    }

    // Add focus styles for keyboard navigation
    if (event.nativeEvent.keyCode === TabUtils.KEYCODES.SPACE || event.nativeEvent.keyCode === TabUtils.KEYCODES.ENTER) {
      this.setState({ focused: true });

      event.preventDefault();
      this.handleOnClick(event);
    }
  }

  handleKeyUp(event) {
    // Remove active state from FF broswers
    if (event.nativeEvent.keyCode === TabUtils.KEYCODES.SPACE) {
      this.setState({ active: false });
    }

    // Apply focus styles for keyboard navigation
    if (event.nativeEvent.keyCode === TabUtils.KEYCODES.TAB) {
      event.preventDefault();
      event.stopPropagation();
      this.setState({ focused: true });
    }
  }

  handleOnClick() {
    if (this.props.onTabClick) {
      this.props.onTabClick(this.props.path);
    }
  }

  render() {
    const {
      isCollapsed,
      text,
      isSelected,
    } = this.props;

    // const isCurrent = this.isCurrentPath();
    const tabClassNames = cx([
      { tab: !isCollapsed },
      { 'collapsed-tab': isCollapsed },
      { 'is-disabled': isSelected && !isCollapsed },
      { 'is-active': this.state.active },
      { 'is-focused': this.state.focused },
    ]);
    const tabAttr = { 'aria-current': isSelected };

    let ComponentClass = 'div';
    if (!isCollapsed) {
      tabAttr.role = 'tab';
      ComponentClass = 'button';
    }

    return (
      <ComponentClass
        {...tabAttr}
        tabIndex="0"
        className={tabClassNames}
        onClick={this.handleOnClick}
        onKeyDown={this.handleKeyDown}
        onKeyUp={this.handleKeyUp}
        onBlur={this.handleOnBlur}
      >
        <span className={cx(['tab-inner'])}>
          {text}
        </span>
      </ComponentClass>
    );
  }
}

ApplicationTab.propTypes = propTypes;

export default ApplicationTab;
