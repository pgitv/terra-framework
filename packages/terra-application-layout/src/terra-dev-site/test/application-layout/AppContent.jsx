import React from 'react';
import {
  withRouter, matchPath, Redirect, Switch, Route,
} from 'react-router-dom';
import ContentContainer from 'terra-content-container';
import ActionHeader from 'terra-action-header';
import NavigationSideMenu from 'terra-navigation-side-menu';

import ContentLayout from '../../../ContentLayout';
import RoutingMenu from '../../../menu/RoutingMenu';

const PageContent = ({ contentName, goBack, children }) => (
  <ContentContainer
    fill
    header={<ActionHeader title={contentName} onBack={goBack} />}
  >
    {children || (
    <div style={{ padding: '5px' }}>
      Page Content:
      {' '}
      {contentName}
    </div>

    )}
  </ContentContainer>
);

class AppContent extends React.Component {
  static getStateForLocation(location) {
    if (matchPath(location.pathname, '/page_1/components/1')) {
      return {
        selectedMenuKey: 'components',
        selectedChildKey: 'component_1',
      };
    } if (matchPath(location.pathname, '/page_1/components/2')) {
      return {
        selectedMenuKey: 'components',
        selectedChildKey: 'component_2',
      };
    } if (matchPath(location.pathname, '/page_1/components')) {
      return {
        selectedMenuKey: 'components',
        selectedChildKey: undefined,
      };
    } if (matchPath(location.pathname, '/page_1/tests')) {
      return {
        selectedMenuKey: 'page_1_menu',
        selectedChildKey: 'tests',
      };
    } if (matchPath(location.pathname, '/page_1/about')) {
      return {
        selectedMenuKey: 'page_1_menu',
        selectedChildKey: 'about',
      };
    } if (matchPath(location.pathname, '/page_2')) {
      return {
        selectedMenuKey: undefined,
        selectedChildKey: undefined,
      };
    } if (matchPath(location.pathname, '/page_3')) {
      return {
        selectedMenuKey: undefined,
        selectedChildKey: undefined,
      };
    } if (matchPath(location.pathname, '/page_4')) {
      return {
        selectedMenuKey: undefined,
        selectedChildKey: undefined,
      };
    }

    return undefined;
  }

  // static getDerivedStateFromProps(props) {
  //   return AppContent.getStateForLocation(props.location);
  // }

  constructor(props) {
    super(props);

    const initialState = AppContent.getStateForLocation(props.location);

    // If the initial state is undefined, then the current location does not match any known paths.
    // The About page item is set as the selected item, as that is where the component will redirect to when
    // it renders.
    this.state = initialState || {
      selectedMenuKey: 'page_1_menu',
      selectedChildKey: 'about',
    };
  }

  render() {
    const { history, location } = this.props;
    const {
      selectedMenuKey, selectedChildKey,
    } = this.state;

    let secondaryNavMenu;
    if (matchPath(location.pathname, '/page_1')) {
      secondaryNavMenu = (
        <NavigationSideMenu
          menuItems={[{
            childKeys: ['about', 'components', 'tests'],
            key: 'page_1_menu',
            text: 'Page 1 Menu',
          }, {
            childKeys: ['component_1', 'component_2'],
            key: 'components',
            text: 'Components',
          }, {
            key: 'component_1',
            text: 'Component 1',
            metaData: {
              path: '/page_1/components/1',
            },
          }, {
            key: 'component_2',
            text: 'Component 2',
            metaData: {
              path: '/page_1/components/2',
            },
          }, {
            key: 'about',
            text: 'About',
            metaData: {
              path: '/page_1/about',
            },
          }, {
            key: 'tests',
            text: 'Tests',
            metaData: {
              path: '/page_1/tests',
            },
          }]}
          selectedMenuKey={selectedMenuKey}
          selectedChildKey={selectedChildKey}
          onChange={(event, selectionData) => {
            // If an endpoint has been reached...
            if (selectionData.selectedChildKey && selectionData.metaData && selectionData.metaData.path) {
              this.activeChildKeys = [selectionData.selectedChildKey];

              this.setState({
                selectedChildKey: selectionData.selectedChildKey,
                selectedMenuKey: selectionData.selectedMenuKey,
              }, () => {
                history.push(selectionData.metaData.path);
              });

              return;
            }

            if (this.activeChildKeys) {
              // Going back...
              if (selectionData.selectedChildKey === selectedMenuKey) {
                this.activeChildKeys.push(selectionData.selectedChildKey);

                this.setState({
                  selectedMenuKey: selectionData.selectedMenuKey,
                  selectedChildKey: selectionData.selectedChildKey,
                });

                return;
              }

              // Going down current selection stack...
              if (this.activeChildKeys[this.activeChildKeys.length - 1] === selectionData.selectedMenuKey) {
                this.activeChildKeys.pop();

                this.setState({
                  selectedMenuKey: selectionData.selectedMenuKey,
                  selectedChildKey: this.activeChildKeys[this.activeChildKeys.length - 1],
                });

                return;
              }
            }

            this.setState({
              selectedMenuKey: selectionData.selectedMenuKey,
              selectedChildKey: selectionData.selectedChildKey,
            });
          }}
        />
      );
    }

    return (
      <ContentLayout
        menuIsVisible={!!secondaryNavMenu}
        menuContent={secondaryNavMenu}
      >
        <Switch>
          <Route path="/page_1/about" render={() => <PageContent contentName="About" />} />
          <Route path="/page_1/components/1" render={() => <PageContent contentName="Component 1" />} />
          <Route path="/page_1/components/2" render={() => <PageContent contentName="Component 2" />} />
          <Route path="/page_1/tests" render={() => <PageContent contentName="Tests" />} />
          <Redirect to="/page_1/about" />
        </Switch>
      </ContentLayout>
    );
  }
}

export default withRouter(AppContent);
