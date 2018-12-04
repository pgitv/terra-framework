/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */
import React from 'react';
import PropTypes from 'prop-types';
import { MemoryRouter, withRouter } from 'react-router-dom';
import { injectIntl, intlShape } from 'react-intl';
import Image from 'terra-image';
import Avatar from 'terra-avatar';
import ContentContainer from 'terra-content-container';
import Button from 'terra-button';
import NavigationLayout from 'terra-navigation-layout';
import ActionHeader from 'terra-action-header';
import { withDisclosureManager } from 'terra-disclosure-manager';
import ModalManager from 'terra-modal-manager';
import { ActiveBreakpointProvider, withActiveBreakpoint } from 'terra-breakpoints';
import IconChecklist from 'terra-icon/lib/icon/IconChecklist';
import SelectableList from 'terra-list/lib/SelectableList';
import SlidePanel from 'terra-slide-panel';
import SlideGroup from 'terra-slide-group';
import DemographicsBanner from 'terra-demographics-banner';

import ProfilePicture from '../../doc/common/henry.jpg';
import ApplicationLayout, { RoutingMenu, Utils } from '../../../ApplicationLayout';
import PatientProvider, { withPatient } from './PatientProvider';
import ListDetailComponent from './ListDetailComponent';

const DisclosureComponent = withDisclosureManager(({ disclosureManager, text }) => (
  <ContentContainer
    header={(
      <ActionHeader title="Disclosure Component" onBack={disclosureManager.goBack} onClose={disclosureManager.closeDisclosure} />
    )}
    fill
  >
    <div style={{ padding: '5px' }}>
      {text}
    </div>
  </ContentContainer>

));

/**
 * The navigationItems will be used to present the ApplicationLayout's navigation controls. The paths provided here must be present in
 * the routingConfig. If no navigation controls are desired, these items can be omitted.
 *
 * With standard rendering, the items will be presented as tabs within the ApplicationLayout's header.
 * With compact rendering, the items will be presented within the layout's menu region within a ApplicationLayout-managed menu.
 */
const navigationItems = [{
  key: '/chart',
  text: 'Chart',
}];

/**
 * The indexPath will be given to the NavigationLayout to set up the appropriate redirects. If users attempt to navigate to a path unsupported
 * by the routingConfig, they will be redirected to this route. This path should therefore be present in the routingConfig.
 */
const indexPath = '/page_1';

const userAvatar = (
  <Avatar
    image={ProfilePicture}
    variant="user"
    alt="Swanson, Henry"
    ariaLabel="Swanson, Henry"
    key="user_avatar"
  />
);

const userData = {
  name: 'Swanson, Henry',
  detail: 'User Detail',
  photo: userAvatar,
};

/**
 * The data provided for nameConfig will be visible in the ApplicationLayout's header, as well
 * as in any menus at the tiny and small breakpoints.
 */
const nameConfig = Object.freeze({
  title: 'New Charting App',
  accessory: <Image variant="rounded" src="https://github.com/cerner/terra-core/raw/master/terra.png" height="26px" width="26px" />,
});

const patients = [{
  text: 'Adams, Ricardo - DOB: 12/21/1948',
  id: 6778266,
}, {
  text: 'Birch, Dena - DOB: 5/01/1945',
  id: 28032901,
}, {
  text: 'Derosier, Shauna - DOB: 7/24/1929',
  id: 57742980,
}, {
  text: 'Fisk, Chou - DOB: 4/13/1956',
  id: 14600575,
}];

const PatientList = withDisclosureManager(withPatient(({ patientContext, disclosureManager }) => {
  return (
    <ContentContainer
      header={(
        <ActionHeader title="Patient List" onBack={disclosureManager.goBack} onClose={disclosureManager.closeDisclosure} />
      )}
      fill
    >
      <div>
        <SelectableList 
          isDivided
          onChange={(event, selectedIndex) => {
            patientContext.setPatient(patients[selectedIndex].id);
            disclosureManager.dismiss();
          }}
        >
          {patients.map((patient) => (<SelectableList.Item content={<p style={{ paddingLeft: '10px' }}>{patient.text}</p>} key={patient.id} />))}
        </SelectableList>
      </div>
    </ContentContainer>
  );
}));

const ChartMenu = ({ contentLayout }) => {
  const chartMenuItems = [{
    text: 'Review',
    id: 'review',
  }, {
    text: 'Orders',
    id: 'orders',
  }, {
    text: 'Documents',
    id: 'documents',
  }];  

  return (
    <ContentContainer
      header={(
        <ActionHeader title="Chart" onBack={contentLayout.goBack}/>
      )}
      fill
    >
      <div>
        <SelectableList 
          isDivided
          onChange={(event, selectedIndex) => {
            if (chartMenuItems[selectedIndex].id === 'review') {
              contentLayout.goTo('chart-review-menu');
            } else if (chartMenuItems[selectedIndex].id === 'orders') {
              contentLayout.goTo('orders-content');
            } else if (chartMenuItems[selectedIndex].id === 'documents') {
              contentLayout.goTo('documents-content');
            }
          }}
        >
          {chartMenuItems.map((item) => (<SelectableList.Item hasChevron content={<p style={{ paddingLeft: '10px' }}>{item.text}</p>} key={item.id} />))}
        </SelectableList>
      </div>
    </ContentContainer>
  );
};
 
const ChartReviewMenu = ({ contentLayout }) => {
  const chartMenuItems = [{
    text: 'Chief Complaint',
    id: 'chief-complaint',
  }, {
    text: 'Allergies',
    id: 'allergies',
  }, {
    text: 'Problems',
    id: 'problems',
  }, {
    text: 'Labs',
    id: 'labs',
  }];  

  return (
    <ContentContainer
      header={(
        <ActionHeader title="Review" onBack={contentLayout.goBack}/>
      )}
      fill
    >
      <div>
        <SelectableList 
          isDivided
          onChange={(event, selectedIndex) => {
            if (chartMenuItems[selectedIndex].id === 'chief-complaint') {
              contentLayout.goTo('chief-complaint-content');
            } else if (chartMenuItems[selectedIndex].id === 'allergies') {
              contentLayout.goTo('allergies-content');
            } else if (chartMenuItems[selectedIndex].id === 'problems') {
              contentLayout.goTo('problems-content');
            } else if (chartMenuItems[selectedIndex].id === 'labs') {
              contentLayout.goTo('labs-content');
            }
          }}
        >
          {chartMenuItems.map((item) => (<SelectableList.Item hasChevron content={<p style={{ paddingLeft: '10px' }}>{item.text}</p>} key={item.id} />))}
        </SelectableList>
      </div>
    </ContentContainer>
  );
};

const ContentPlaceholder = ({ title, contentLayout }) => {
  return (
    <ContentContainer
      header={(
        <ActionHeader title={title} onBack={contentLayout.goBack}/>
      )}
      fill
    >
      <div>
        <p style={{ paddingLeft: '10px' }}>Placeholder</p>
      </div>
    </ContentContainer>
  );
};

class ContentLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      componentStack: [props.activeComponentKey],
    };
  }

  render() {
    const { componentMap, menuComponentKeys, activeComponentKey, activeBreakpoint } = this.props;
    const { componentStack } = this.state;

    // if (activeBreakpoint === 'tiny' || activeBreakpoint === 'small') {
    return (
      <div style={{ height: '100%', width: '100%' }}>
        <SlideGroup
          items={componentStack.map((componentKey, index) => {
            return (
              <div key={componentKey} style={{ height: '100%' }}>
                {React.cloneElement(componentMap[componentKey].component, {
                  contentLayout: {
                    goTo: (nextComponentKey) => { 
                      this.setState((state) => ({ 
                        componentStack: state.componentStack.concat([nextComponentKey]),
                      }));
                    },
                    goBack: index > 0 ? () => { 
                      this.setState((state) => ({ 
                        componentStack: state.componentStack.slice(0, -1) 
                      }));
                    } : undefined,
                  },
                })}
              </div>
            );
          })}
          isAnimated
        />
      </div>
    );
    // }

    // return (
    //   <SlidePanel
    //     isOpen
    //     panelPosition="start"
    //     panelBehavior="squish"
    //     panelContent={this.props.menu}
    //     mainContent={this.props.content}
    //   />
    // )
  }
}

const WrappedContentLayout = withActiveBreakpoint(ContentLayout);

class ApplicationLayoutTest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkboxItemEnabled: false,
      menuIsOpen: false,
      activeNavigationItem: '/chart',
    };
  }

  componentDidMount() {
    const { disclosureManager, patientContext } = this.props;
    if (!patientContext.patient) {
      disclosureManager.disclose({
        preferredType: 'modal',
        size: 'large',
        content: {
          component: <PatientList />,
        }
      })
    }
  }

  render() {
    const { intl, history, disclosureManager, patientContext } = this.props;
    const { checkboxItemEnabled, menuIsOpen, activeNavigationItem } = this.state;

    const customUtilityItems = [{
      key: 'additional-1',
      title: 'Drill-in Item',
      childKeys: [
        'additional-sub-1',
        'additional-sub-2',
      ],
      parentKey: Utils.utilityHelpers.defaultKeys.MENU,
    }, {
      key: 'additional-sub-1',
      title: 'Additional Item 1 - Sub 1',
      parentKey: 'additional-1',
    }, {
      key: 'additional-sub-2',
      title: 'Additional Item 1 - Sub 2',
      parentKey: 'additional-1',
    }, {
      key: 'checkbox-item',
      title: 'Custom Checkbox Item',
      isSelectable: true,
      isSelected: checkboxItemEnabled,
      parentKey: Utils.utilityHelpers.defaultKeys.MENU,
    }, {
      key: 'additional-3',
      contentLocation: Utils.utilityHelpers.locations.FOOTER,
      title: 'Custom Footer',
      parentKey: Utils.utilityHelpers.defaultKeys.MENU,
    }];

    /**
     * The data provided for utilityConfig will be visible in the ApplicationLayout's header in the
     * standard rendering mode and within the menus in the compact rendering mode.
     *
     * The ApplicationLayout's Utils export provides a helper function named getDefaultUtilityConfig that will
     * generate the configuration for the standard set of utility options. If the standard configuration is not
     * desirable, an entirely custom configuration can be used instead.
     */
    const utilityConfig = Object.freeze({
      title: 'Swanson, Henry',
      accessory: userAvatar,
      menuItems: Utils.utilityHelpers.getDefaultUtilityItems(intl, userData, customUtilityItems),
      initialSelectedKey: Utils.utilityHelpers.defaultKeys.MENU,
      onChange: (event, itemData) => {
        this.setState({
          menuIsOpen: false,
        }, () => {
          disclosureManager.disclose({
            preferredType: 'modal',
            content: {
              component: <DisclosureComponent text={itemData.key} />,
            },
          });
        });
      },
    });

    return (
      <ContentContainer
        fill
        id="application-layout-test"
      >
        <ApplicationLayout
          navigationAlignment="start"
          nameConfig={nameConfig}
          utilityConfig={utilityConfig}
          extensions={(
            <Button
              icon={<IconChecklist />}
              text="Patient List"
              onClick={() => {
                this.setState({
                  menuIsOpen: false,
                }, () => {
                  disclosureManager.disclose({
                    preferredType: 'modal',
                    content: {
                      component: <PatientList />,
                    },
                  });
                });
              }}
            />
          )}
          menuIsOpen={menuIsOpen}
          onMenuToggle={() => {
            this.setState(state => ({
              menuIsOpen: !state.menuIsOpen,
            }));
          }}
          navigationItems={navigationItems}
          activeNavigationItemKey={activeNavigationItem}
          onSelectNavigationItem={(navigationItemKey) => {
            if (this.state.activeNavigationItem !== navigationItemKey) {
              this.setState({
                activeNavigationItem: navigationItemKey,
                menuIsOpen: false,
              }, () => {
                history.push(navigationItemKey);
              });
            } else {
              this.setState({
                menuIsOpen: false,
              });
            }
          }}
        >
          {this.props.patientContext.patient ? (
            <ContentContainer
              fill
              header={(
                <DemographicsBanner
                  age={patientContext.patient.demographics.age}
                  dateOfBirth={patientContext.patient.demographics.dob}
                  gender={patientContext.patient.demographics.gender}
                  personName={patientContext.patient.demographics.name}
                  identifiers={{ MRN: patientContext.patient.demographics.mrn }}
                  applicationContent={<span>{patientContext.patient.demographics.location}</span>}
                />  
              )}
            >
              <ContentLayout
                componentMap={{
                  'chart-menu': {
                    id: 'chart-menu',
                    component: <ChartMenu />
                  },
                  'chart-review-menu': {
                    id: 'chart-review-menu',
                    component: <ChartReviewMenu />
                  },
                  'orders-content': {
                    id: 'orders-content',
                    component: <ListDetailComponent title="Orders" dataKey="orders" />,
                  },
                  'documents-content': {
                    id: 'documents-content',
                    component: <ContentPlaceholder title="Documents" />,
                  },
                  'chief-complaint-content': {
                    id: 'chief-complaint-content',
                    component: <ContentPlaceholder title="Chief Complaint" />,
                  },
                  'allergies-content': {
                    id: 'allergies-content',
                    component: <ListDetailComponent title="Allergies" dataKey="allergies" />,
                  },
                  'problems-content': {
                    id: 'problems-content',
                    component: <ListDetailComponent title="Problems" dataKey="problems" />,
                  },
                  'labs-content': {
                    id: 'labs-content',
                    component: <ListDetailComponent title="Labs" dataKey="labs" />,
                  }
                }}
                menuComponentKeys={['chart-menu', 'chart-review-menu', 'documents-menu']}
                activeComponentKey='chart-menu'
              /> 
            </ContentContainer>
          ) : <div style={{ height: '100%', background: 'grey' }} /> }
        </ApplicationLayout>
      </ContentContainer>
    );
  }
}

ApplicationLayoutTest.propTypes = {
  intl: intlShape,
};

const WrappedApplication = withPatient(withDisclosureManager(withRouter(injectIntl((ApplicationLayoutTest)))));

const AppRouter = () => (
  <div style={{ height: '100%' }}>
    <MemoryRouter>
      <ActiveBreakpointProvider>
        <PatientProvider>
          <ModalManager>
            <WrappedApplication />
          </ModalManager>
        </PatientProvider>
      </ActiveBreakpointProvider>
    </MemoryRouter>
  </div>
);

export default AppRouter;
