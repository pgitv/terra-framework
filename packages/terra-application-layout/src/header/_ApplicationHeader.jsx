import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl, intlShape } from 'react-intl';
import { withDisclosureManager, disclosureManagerShape } from 'terra-disclosure-manager';
import ApplicationHeaderLayout from 'terra-application-header-layout';
import { ApplicationHeaderUtility } from 'terra-application-utility';
import { ApplicationHeaderName } from 'terra-application-name';
import IconMenu from 'terra-icon/lib/icon/IconMenu';
import Popup from 'terra-popup';
import { processedRoutesPropType } from 'terra-navigation-layout/lib/configurationPropTypes';

import 'terra-base/lib/baseStyles';

import ApplicationTabs from './tabs/ApplicationTabs';
import ApplicationLayoutPropTypes from '../utils/propTypes';
import Helpers from '../utils/helpers';

import styles from './ApplicationHeader.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The element to be placed within the fit start area for extensions within the layout.
   */
  extensions: PropTypes.element,
  /**
   * The Object of layout-related APIs provided to the components of the Layout.
   */
  layoutConfig: ApplicationLayoutPropTypes.layoutConfigPropType,
  /**
   * The set of routes currently identified by the NavigationLayout. This prop is provided by the NavigationLayout.
   */
  navigationLayoutRoutes: PropTypes.arrayOf(processedRoutesPropType),
  /**
   * The window size currently identified by the NavigationLayout. This prop is provided by the NavigationLayout.
   */
  navigationLayoutSize: PropTypes.string,
  /**
   * Configuration values for the ApplicationName component.
   */
  nameConfig: ApplicationLayoutPropTypes.nameConfigPropType,
  /**
   * Configuration to be provided to the ApplicationUtility component.
   */
  utilityConfig: ApplicationLayoutPropTypes.utilityConfigPropType,
  /**
   * Internationalization object with translation APIs. Provided by `injectIntl`.
   */
  intl: intlShape,
  /**
   * DisclosureManagerDelegate instance automatically provided by a DisclosureManagerProvider.
   */
  disclosureManager: disclosureManagerShape,
  onToggle: PropTypes.func,
  activeBreakpoint: PropTypes.string,
  navigationItems: PropTypes.array,
  navigationItemAlignment: PropTypes.string,
  activeNavigationItemKey: PropTypes.string,
  onSelectNavigationItem: PropTypes.func,
};

const defaultProps = {
  navigationItems: [],
  navigationItemAlignment: 'center',
};

class ApplicationHeader extends React.Component {
  constructor(props) {
    super(props);

    this.handleUtilityDiscloseRequest = this.handleUtilityDiscloseRequest.bind(this);
    this.handleUtilityPopupCloseRequest = this.handleUtilityPopupCloseRequest.bind(this);
    this.handleUtilityOnChange = this.handleUtilityOnChange.bind(this);
    this.getTargetRef = this.getTargetRef.bind(this);
    this.setContentNode = this.setContentNode.bind(this);
    this.renderToggle = this.renderToggle.bind(this);
    this.renderAppName = this.renderAppName.bind(this);
    this.renderExtensions = this.renderExtensions.bind(this);
    this.renderNavigation = this.renderNavigation.bind(this);
    this.renderUtilities = this.renderUtilities.bind(this);
    this.renderUtilitiesPopup = this.renderUtilitiesPopup.bind(this);

    this.state = { utilityComponent: undefined };
  }

  setContentNode(node) {
    this.contentNode = node;
  }

  getTargetRef() {
    if (this.contentNode) {
      return this.contentNode.querySelector('[data-application-header-utility]');
    }
    return undefined;
  }

  handleUtilityDiscloseRequest(utility) {
    this.setState({
      utilityComponent: React.cloneElement(utility, { onRequestClose: this.handleUtilityPopupCloseRequest }),
    });
  }

  handleUtilityPopupCloseRequest() {
    if (this.state.utilityComponent) {
      this.setState({ utilityComponent: undefined });
    }
  }

  handleUtilityOnChange(event, itemData) {
    const { utilityConfig, disclosureManager } = this.props;

    utilityConfig.onChange(event, itemData, disclosureManager && disclosureManager.disclose);
  }

  renderToggle() {
    const { onToggle, intl } = this.props;

    if (onToggle) {
      return (
        <div className={cx('toolbar-toggle')}>
          <button
            type="button"
            className={cx('toggle-button')}
            aria-label={intl.formatMessage({ id: 'Terra.applicationLayout.applicationHeader.menuToggleLabel' })}
            onClick={onToggle}
            data-application-header-toggle
          >
            <IconMenu />
          </button>
        </div>
      );
    }

    return null;
  }

  renderAppName() {
    const { nameConfig } = this.props;

    if (nameConfig && (nameConfig.accessory || nameConfig.title)) {
      return (
        <ApplicationHeaderName accessory={nameConfig.accessory} title={nameConfig.title} />
      );
    }

    return null;
  }

  renderNavigation(isCompact) {
    const {
      navigationItems, navigationItemAlignment, activeNavigationItemKey, onSelectNavigationItem,
    } = this.props;

    if (!isCompact && navigationItems.length) {
      return (
        <ApplicationTabs
          alignment={navigationItemAlignment}
          tabs={navigationItems}
          activeTabKey={activeNavigationItemKey}
          onTabSelect={onSelectNavigationItem}
        />
      );
    }

    /**
     * When compact, the navigation region of the header renders the application name component instead. At compact
     * sizes, the logo region within the ApplicationHeaderLayout is too small to use, so we instead render within
     * the navigation region which renders with a larger width.
     */
    return this.renderAppName();
  }

  renderExtensions(isCompact) {
    const { layoutConfig, extensions } = this.props;

    if (!isCompact && extensions) {
      return React.cloneElement(extensions, { layoutConfig });
    }

    return null;
  }

  renderUtilities(isCompact) {
    const { utilityConfig } = this.props;

    if (!isCompact && utilityConfig) {
      return (
        <ApplicationHeaderUtility
          onChange={this.handleUtilityOnChange}
          onDisclose={this.handleUtilityDiscloseRequest}
          title={utilityConfig.title}
          accessory={utilityConfig.accessory}
          menuItems={utilityConfig.menuItems}
          initialSelectedKey={utilityConfig.initialSelectedKey}
          data-application-header-utility
        />
      );
    }

    return null;
  }

  renderUtilitiesPopup() {
    const { utilityComponent } = this.state;

    if (utilityComponent) {
      return (
        <Popup
          attachmentBehavior="push"
          contentAttachment="top center"
          contentHeight="auto"
          contentWidth="240"
          isArrowDisplayed
          isHeaderDisabled
          isOpen
          onRequestClose={this.handleUtilityPopupCloseRequest}
          targetRef={this.getTargetRef}
        >
          {utilityComponent}
        </Popup>
      );
    }

    return null;
  }

  render() {
    const {
      // disclosureManager,
      // extensions,
      // layoutConfig,
      // nameConfig,
      // utilityConfig,
      // navigationLayoutRoutes,
      // navigationLayoutSize,
      // intl,
      activeBreakpoint,
    } = this.props;

    const headerClassNames = cx([
      'application-header',
    ]);

    const isCompact = Helpers.isSizeCompact(activeBreakpoint);

    return (
      <div className={headerClassNames} ref={this.setContentNode}>
        <ApplicationHeaderLayout
          toggle={this.renderToggle()}
          logo={!isCompact ? this.renderAppName() : null}
          navigation={this.renderNavigation(isCompact)}
          extensions={this.renderExtensions(isCompact)}
          utilities={this.renderUtilities(isCompact)}
        />
        {this.renderUtilitiesPopup()}
      </div>
    );
  }
}

ApplicationHeader.propTypes = propTypes;
ApplicationHeader.defaultProps = defaultProps;

export default injectIntl(withDisclosureManager(ApplicationHeader));
