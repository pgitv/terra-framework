/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */
import React from 'react';
import PropTypes from 'prop-types';
import {
  MemoryRouter, Link, withRouter,
} from 'react-router-dom';
import { injectIntl, intlShape } from 'terra-base';
import Image from 'terra-image';
import Avatar from 'terra-avatar';
import ActionHeader from 'terra-action-header';
import ContentContainer from 'terra-content-container';
import Button from 'terra-button';
import SelectableList from 'terra-list/lib/SelectableList';
import DemographicsBanner from 'terra-demographics-banner';
import Input from 'terra-form-input';

import ApplicationLayout, { RoutingMenu, Utils } from '../../../ApplicationLayout';
import { ManagedRoutingProvider, ManagedRoutingPrompt } from '../../../ManagedRouting';
import ContentPlaceholder from '../../../ContentPlaceholder';
import { presentNotificationDialog } from '../../../StatelessNotificationDialog';

const ContentComponent = ({ layoutConfig, title, children }) => (
  <ContentContainer
    header={(
      (layoutConfig.size === 'tiny' || layoutConfig.size === 'small') && <ActionHeader onBack={layoutConfig.toggleMenu} title={title} />
    )}
    fill
  >
    {children}
  </ContentContainer>
);

class PageContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isBlockingFirst: false, isBlockingSecond: false };
  }

  render() {
    const { layoutConfig, contentName } = this.props;
    const { isBlockingFirst, isBlockingSecond } = this.state;

    return (
      <ContentComponent title={contentName} layoutConfig={layoutConfig}>
        <div style={{ padding: '5px' }}>
          {contentName}
          <br />
          <Button text={isBlockingFirst ? 'Unblock' : 'Block Routing'} onClick={() => { this.setState({ isBlockingFirst: !isBlockingFirst }); }} />
          {this.state.isBlockingFirst && <ManagedRoutingPrompt id={`first-block-${contentName}`} message={`Blocking for ${contentName}`} />}
          <Button text={isBlockingSecond ? 'Unblock' : 'Block Routing Again'} onClick={() => { this.setState({ isBlockingSecond: !isBlockingSecond }); }} />
          {this.state.isBlockingSecond && (
            <ManagedRoutingPrompt
              id={`second-content-${contentName}`}
              message={`Blocking for ${contentName} Again`}
            />
          )}
        </div>
      </ContentComponent>
    );
  }
}

class ChiefComplaintComponent extends React.Component {
  render() {
    return (
      <ContentContainer
        header={(
          <React.Fragment>
            <DemographicsBanner
              age="25 Years"
              dateOfBirth="May 9, 1993"
              gender="Male"
              personName="Jonathon Doe"
              preferredFirstName="John"
            />
            <ActionHeader
              onBack={this.props.layoutConfig.toggleMenu}
              title="Chief Complaint"
            />
          </React.Fragment>
        )}
        fill
      >
        <div style={{ padding: '0.714rem' }}>Chief Complaint SVG goes here</div>
      </ContentContainer>
    );
  }
}

class OrderComponent extends React.Component {
  render() {
    return (
      <ContentContainer
        header={(
          <React.Fragment>
            <DemographicsBanner
              age="25 Years"
              dateOfBirth="May 9, 1993"
              gender="Male"
              personName="Jonathon Doe"
              preferredFirstName="John"
            />
            <ActionHeader
              onBack={this.props.layoutConfig.toggleMenu}
              title="Order"
            />
          </React.Fragment>
        )}
        fill
      >
        <div style={{ padding: '0.714rem' }}>Order SVG goes here</div>
      </ContentContainer>
    );
  }
}

class ListDetailComponent extends React.Component {
  constructor(props) {
    super(props);

    this.renderContent = this.renderContent.bind(this);

    this.state = {
      mode: 'list',
      items: this.props.items,
    };
  }

  renderContent() {
    let content;
    if (this.state.mode === 'list') {
      content = (
        <SelectableList
          isDivided
          hasChevrons
          onChange={(event, selectedIndex) => {
            this.setState({
              mode: 'detail',
              detailItem: this.state.items[selectedIndex],
            });
          }}
        >
          {this.state.items.map(item => (
            <SelectableList.Item content={<p>{item.display}</p>} key={item.id} />
          ))}
        </SelectableList>
      );
    } else if (this.state.mode === 'detail' && this.state.detailItem) {
      if (this.state.detailItem.id === '1') {
        content = <div>SVG here</div>;
      } else {
        content = <div>Placeholder</div>;
      }
    }

    return (
      <div style={{ height: '100%', padding: '0.714rem' }}>{content}</div>
    );
  }

  render() {
    return (
      <ContentContainer
        header={(
          <React.Fragment>
            <DemographicsBanner
              age="25 Years"
              dateOfBirth="May 9, 1993"
              gender="Male"
              personName="Jonathon Doe"
              preferredFirstName="John"
            />
            <ActionHeader
              onBack={this.state.mode === 'detail' ? () => { this.setState({ mode: 'list', detailItem: undefined }); } : this.props.layoutConfig.toggleMenu}
              title={(this.state.detailItem && this.state.detailItem.display) || this.props.title}
            />
          </React.Fragment>
        )}
        fill
      >
        {this.renderContent()}
      </ContentContainer>
    );
  }
}

class DemographicsRoutingMenu extends React.Component {
  render() {
    const isCompact = this.props.layoutConfig.size === 'tiny' || this.props.layoutConfig.size === 'small';

    return (
      <ContentContainer
        header={isCompact ? (
          <DemographicsBanner
            age="25 Years"
            dateOfBirth="May 9, 1993"
            gender="Male"
            personName="Jonathon Doe"
            preferredFirstName="John"
          />
        ) : undefined}
        fill
      >
        <RoutingMenu {...this.props} />
      </ContentContainer>
    );
  }
}

const TestExtensions = () => (
  <Button text="Extensions" />
);

const blankPlaceholder = (
  <div style={{
    height: '100%', width: '100%', backgroundColor: 'grey', boxShadow: 'inset 0 0 5px black',
  }}
  />
);

class InputHeaderBase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      path: props.location.pathname,
    };
  }

  render() {
    return (
      <React.Fragment>
        <Input
          value={this.state.path}
          onChange={(event) => {
            this.setState({
              path: event.target.value,
            });
          }}
        />
        <Button
          onClick={() => {
            this.props.history.push(this.state.path);
          }}
          text="Go"
        />
      </React.Fragment>
    );
  }
}

const InputHeader = withRouter(InputHeaderBase);

/**
 * The routingConfig API matches that of the NavigationLayout. Routing specifications for the
 * menu and content regions are supported; the header region is not configurable.
 */
const routingConfig = {
  menu: {
    '/patient_list': {
      path: '/patient_list',
      component: {
        default: {
          componentClass: RoutingMenu,
          props: {
            title: 'Patient List',
            menuItems: [{
              text: 'Patient 1',
              path: '/patient_list/1/chart',
              hasSubMenu: true,
            }, {
              text: 'Patient 2',
              path: '/patient_list/2/chart',
              hasSubMenu: true,
            }, {
              text: 'Patient 3',
              path: '/patient_list/3/chart',
              hasSubMenu: true,
            }],
          },
        },
      },
    },
    '/patient_list/:patient_id/chart': {
      path: '/patient_list/:patient_id/chart',
      component: {
        default: {
          componentClass: DemographicsRoutingMenu,
          props: {
            title: 'Patient Chart',
            menuItems: [{
              text: 'Review',
              path: '/patient_list/:patient_id/chart/review',
              hasSubMenu: true,
            }, {
              text: 'Order',
              path: '/patient_list/:patient_id/chart/order',
            }, {
              text: 'Document',
              path: '/patient_list/:patient_id/chart/document',
              hasSubMenu: true,
            }],
          },
        },
      },
    },
    '/patient_list/:patient_id/chart/review': {
      path: '/patient_list/:patient_id/chart/review',
      component: {
        default: {
          componentClass: DemographicsRoutingMenu,
          props: {
            title: 'Review',
            menuItems: [{
              text: 'Chief Complaint',
              path: '/patient_list/:patient_id/chart/review/chief_complaint',
            }, {
              text: 'Allergies',
              path: '/patient_list/:patient_id/chart/review/allergies',
            }, {
              text: 'Problems',
              path: '/patient_list/:patient_id/chart/review/problems',
            }, {
              text: 'Labs',
              path: '/patient_list/:patient_id/chart/review/labs',
            }],
          },
        },
      },
    },
    '/patient_list/:patient_id/chart/document': {
      path: '/patient_list/:patient_id/chart/document',
      component: {
        default: {
          componentClass: DemographicsRoutingMenu,
          props: {
            title: 'Document',
            menuItems: [{
              text: 'My Notes',
              path: '/patient_list/:patient_id/chart/document/my_notes',
            }, {
              text: 'Physician Notes',
              path: '/patient_list/:patient_id/chart/document/physician_notes',
            }, {
              text: 'Nurse Notes',
              path: '/patient_list/:patient_id/chart/document/nurse_notes',
            }],
          },
        },
      },
    },
    '/patient_chart': {
      path: '/patient_chart',
      component: {
        default: {
          componentClass: RoutingMenu,
          props: {
            title: 'Patient Chart',
            menuItems: [{
              text: 'Patient 1',
              path: '/patient_chart/1/chart',
            }, {
              text: 'Patient 2',
              path: '/patient_chart/2/chart',
            }, {
              text: 'Patient 3',
              path: '/patient_chart/3/chart',
            }],
          },
        },
      },
    },
  },
  content: {
    '/patient_list': {
      path: '/patient_list',
      component: {
        default: {
          componentClass: ContentPlaceholder,
          props: {
            placeholderContent: blankPlaceholder,
          },
        },
      },
    },
    '/patient_list/:patient_id/chart': {
      path: '/patient_list/:patient_id/chart',
      component: {
        default: {
          componentClass: ContentPlaceholder,
          props: {
            placeholderContent: blankPlaceholder,
          },
        },
      },
    },
    '/patient_list/:patient_id/chart/review': {
      path: '/patient_list/:patient_id/chart/review',
      component: {
        default: {
          componentClass: ContentPlaceholder,
          props: {
            autoselectPath: '/patient_list/:patient_id/chart/review/chief_complaint',
            placeholderContent: blankPlaceholder,
          },
        },
      },
    },
    '/patient_list/:patient_id/chart/order': {
      path: '/patient_list/:patient_id/chart/order',
      component: {
        default: {
          componentClass: OrderComponent,
        },
      },
    },
    '/patient_list/:patient_id/chart/document': {
      path: '/patient_list/:patient_id/chart/document',
      component: {
        default: {
          componentClass: ContentPlaceholder,
          props: {
            autoselectPath: '/patient_list/:patient_id/chart/document/my_notes',
            placeholderContent: blankPlaceholder,
          },
        },
      },
    },
    '/patient_list/:patient_id/chart/review/chief_complaint': {
      path: '/patient_list/:patient_id/chart/review/chief_complaint',
      component: {
        default: {
          componentClass: ChiefComplaintComponent,
        },
      },
    },
    '/patient_list/:patient_id/chart/review/problems': {
      path: '/patient_list/:patient_id/chart/review/problems',
      component: {
        default: {
          componentClass: ListDetailComponent,
          props: {
            title: 'Problems',
            items: [{
              id: '1',
              display: 'Problem A',
            }, {
              id: '2',
              display: 'Problem B',
            }, {
              id: '3',
              display: 'Problem C',
            }, {
              id: '4',
              display: 'Problem D',
            }],
          },
        },
      },
    },
    '/patient_list/:patient_id/chart/review/allergies': {
      path: '/patient_list/:patient_id/chart/review/allergies',
      component: {
        default: {
          componentClass: ListDetailComponent,
          props: {
            title: 'Allergies',
            items: [{
              id: '1',
              display: 'Allergy A',
            }, {
              id: '2',
              display: 'Allergy B',
            }, {
              id: '3',
              display: 'Allergy C',
            }, {
              id: '4',
              display: 'Allergy D',
            }],
          },
        },
      },
    },
    '/patient_list/:patient_id/chart/review/labs': {
      path: '/patient_list/:patient_id/chart/review/labs',
      component: {
        default: {
          componentClass: ListDetailComponent,
          props: {
            title: 'Labs',
            items: [{
              id: '1',
              display: 'Lab A',
            }, {
              id: '2',
              display: 'Lab B',
            }, {
              id: '3',
              display: 'Lab C',
            }, {
              id: '4',
              display: 'Lab D',
            }],
          },
        },
      },
    },
    '/patient_list/:patient_id/chart/document/my_notes': {
      path: '/patient_list/:patient_id/chart/document/my_notes',
      component: {
        default: {
          componentClass: ListDetailComponent,
          props: {
            title: 'My Notes',
            items: [{
              id: '1',
              display: 'My Note A',
            }, {
              id: '2',
              display: 'My Note B',
            }, {
              id: '3',
              display: 'My Note C',
            }, {
              id: '4',
              display: 'My Note D',
            }],
          },
        },
      },
    },
    '/patient_list/:patient_id/chart/document/physician_notes': {
      path: '/patient_list/:patient_id/chart/document/physician_notes',
      component: {
        default: {
          componentClass: ListDetailComponent,
          props: {
            title: 'Physician Notes',
            items: [{
              id: '1',
              display: 'Physician Note A',
            }, {
              id: '2',
              display: 'Physician Note B',
            }, {
              id: '3',
              display: 'Physician Note C',
            }, {
              id: '4',
              display: 'Physician Note D',
            }],
          },
        },
      },
    },
    '/patient_list/:patient_id/chart/document/nurse_notes': {
      path: '/patient_list/:patient_id/chart/document/nurse_notes',
      component: {
        default: {
          componentClass: ListDetailComponent,
          props: {
            title: 'Nurse Notes',
            items: [{
              id: '1',
              display: 'Nurse Note A',
            }, {
              id: '2',
              display: 'Nurse Note B',
            }, {
              id: '3',
              display: 'Nurse Note C',
            }, {
              id: '4',
              display: 'Nurse Note D',
            }],
          },
        },
      },
    },
    '/patient_chart': {
      path: '/patient_chart',
      component: {
        default: {
          componentClass: PageContent,
          props: {
            contentName: 'Patient Chart',
          },
        },
      },
    },
  },
};

/**
 * The navigationItems will be used to present the ApplicationLayout's navigation controls. The paths provided here must be present in
 * the routingConfig. If no navigation controls are desired, these items can be omitted.
 *
 * With standard rendering, the items will be presented as tabs within the ApplicationLayout's header.
 * With compact rendering, the items will be presented within the layout's menu region within a ApplicationLayout-managed menu.
 */
const navigationItems = [{
  path: '/patient_list',
  text: 'Patient List',
}, {
  path: '/patient_chart',
  text: 'Patient Chart',
}];

/**
 * The indexPath will be given to the NavigationLayout to set up the appropriate redirects. If users attempt to navigate to a path unsupported
 * by the routingConfig, they will be redirected to this route. This path should therefore be present in the routingConfig.
 */
const indexPath = '/food';

const userAvatar = (
  <Avatar
    variant="user"
    alt="User, Test"
    ariaLabel="User, Test"
    key="user_avatar"
  />
);

const userData = {
  name: 'User, Test',
  detail: 'User Detail',
  photo: userAvatar,
};

/**
 * The data provided for nameConfig will be visible in the ApplicationLayout's header, as well
 * as in any menus at the tiny and small breakpoints.
 */
const nameConfig = Object.freeze({
  title: 'Test Application',
  accessory: <Image variant="rounded" src="https://github.com/cerner/terra-core/raw/master/terra.png" height="26px" width="26px" />,
});

class ApplicationLayoutTest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkboxItemEnabled: false,
    };
  }

  componentDidMount() {
    // if (!matchPath(this.props.location.pathname, '/food') || !matchPath(this.props.location.pathname, '/drink')) {
    //   this.props.history.push('/food');
    // }
  }

  render() {
    const { intl } = this.props;
    const { checkboxItemEnabled } = this.state;

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
      title: 'Test, User',
      accessory: userAvatar,
      menuItems: Utils.utilityHelpers.getDefaultUtilityItems(intl, userData, customUtilityItems),
      initialSelectedKey: Utils.utilityHelpers.defaultKeys.MENU,
      onChange: () => {},
    });

    return (
      <div style={{ height: '100%' }}>
        <MemoryRouter
          initialEntries={['/patient_list']}
          initialIndex={0}
          getUserConfirmation={(message, callback) => {
            presentNotificationDialog({
              intl,
              variant: 'warning',
              title: 'Unsaved changes',
              message,
              primaryAction: {
                text: 'Yarp',
                onClick: () => {
                  callback(true);
                },
              },
              secondaryAction: {
                text: 'Narp',
                onClick: () => {
                  callback(false);
                },
              },
            });
          }}
        >
          <ManagedRoutingProvider>
            <ContentContainer
              header={(
                <InputHeader />
              )}
              fill
            >
              <ApplicationLayout
                nameConfig={nameConfig}
                utilityConfig={utilityConfig}
                routingConfig={routingConfig}
                navigationItems={navigationItems}
                extensions={<TestExtensions />}
                indexPath={indexPath}
                routeNotFoundComponent={(
                  <div style={{ height: '100%' }}>
                    <h1>404 Page Not Found</h1>
                    <Link to="/food">Go to Food</Link>
                  </div>
                )}
              />
            </ContentContainer>
          </ManagedRoutingProvider>
        </MemoryRouter>
      </div>
    );
  }
}

ApplicationLayoutTest.propTypes = {
  intl: intlShape,
};

const WrappedApplication = injectIntl(ApplicationLayoutTest);

const AppRouter = () => (
  <WrappedApplication />
);

export default AppRouter;
