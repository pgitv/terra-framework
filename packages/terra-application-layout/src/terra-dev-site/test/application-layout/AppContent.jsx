import React from 'react';
import { withRouter, matchPath, Redirect } from 'react-router-dom';
import ContentContainer from 'terra-content-container';
import ActionHeader from 'terra-action-header';

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
  static pathForKey(key) {
    let path;
    switch (key) {
      case 'page_1_item_1_thing_1_content':
        path = '/page_1/item_1/thing_1';
        break;
      case 'page_1_item_1_thing_2_content':
        path = '/page_1/item_1/thing_2';
        break;
      case 'page_1_item_1_menu':
        path = '/page_1/item_1';
        break;
      case 'page_1_item_2_content':
        path = '/page_1/item_2';
        break;
      case 'page_1_menu':
        path = '/page_1';
        break;
      case 'page_2_content':
        path = '/page_2';
        break;
      case 'page_3_content':
        path = '/page_3';
        break;
      case 'page_4_content':
        path = '/page_4';
        break;
      default:
        break;
    }

    return path;
  }

  static getActivePage(location) {
    if (matchPath(location.pathname, '/page_1/item_1/thing_1')) {
      return 'page_1_item_1_thing_1_content';
    } if (matchPath(location.pathname, '/page_1/item_1/thing_2')) {
      return 'page_1_item_1_thing_2_content';
    } if (matchPath(location.pathname, '/page_1/item_1')) {
      return 'page_1_item_1_menu';
    } if (matchPath(location.pathname, '/page_1/item_2')) {
      return 'page_1_item_2_content';
    } if (matchPath(location.pathname, '/page_1')) {
      return 'page_1_menu';
    } if (matchPath(location.pathname, '/page_2')) {
      return 'page_2_content';
    } if (matchPath(location.pathname, '/page_3')) {
      return 'page_3_content';
    } if (matchPath(location.pathname, '/page_4')) {
      return 'page_4_content';
    }

    return undefined;
  }

  static getDerivedStateFromProps(props) {
    return {
      activePage: AppContent.getActivePage(props.location),
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      activePage: undefined,
    };
  }

  render() {
    const { history } = this.props;
    const { activePage } = this.state;

    if (!activePage) {
      return <Redirect to="/page_1" />;
    }

    const routingStackDelegate = {
      show: ({ path }) => {
        history.push(path);
      },
    };

    const componentMap = {
      page_1_menu: {
        component: (
          <PageContent contentName="Page 1 Menu">
            <RoutingMenu
              layoutConfig={{}}
              routingStackDelegate={routingStackDelegate}
              title="Page 1 Menu"
              menuItems={[{
                text: 'Item 1',
                path: '/page_1/item_1',
                hasSubMenu: true,
              }, {
                text: 'Item 2',
                path: '/page_1/item_2',
              }]}
            />
          </PageContent>
        ),
        descendantKeys: ['page_1_item_1_menu', 'page_1_item_2_content'],
      },
      page_1_item_1_menu: {
        component: (
          <PageContent contentName="Page 1 Item 1 Menu" goBack={() => { history.push('/page_1'); }}>
            <RoutingMenu
              layoutConfig={{}}
              routingStackDelegate={routingStackDelegate}
              title="Page 1 Item 1 Menu"
              menuItems={[{
                text: 'Thing 1',
                path: '/page_1/item_1/thing_1',
                hasSubMenu: true,
              }, {
                text: 'Thing 2',
                path: '/page_1/item_1/thing_2',
              }]}
            />
          </PageContent>
        ),
        descendantKeys: ['page_1_item_1_thing_1_content', 'page_1_item_1_thing_2_content'],
      },
      page_1_item_1_thing_1_content: {
        component: (
          <PageContent contentName="Page 1 Item 1 Thing 1 Content" />
        ),
      },
      page_1_item_1_thing_2_content: {
        component: (
          <PageContent contentName="Page 1 Item 1 Thing 2 Content" />
        ),
      },
      page_1_item_2_content: {
        component: (
          <PageContent contentName="Page 1 Item 2 Content" />
        ),
      },
      page_2_content: {
        component: (
          <PageContent contentName="Page 2 Content" />
        ),
      },
      page_3_content: {
        component: (
          <PageContent contentName="Page 3 Content" />
        ),
      },
      page_4_content: {
        component: (
          <PageContent contentName="Page 4 Content" />
        ),
      },
    };

    return (
      <ContentLayout
        isOpen
        panelContent={(
          <div>hi</div>
        )}
      >
        {componentMap[activePage].component}
      </ContentLayout>
    );
  }
}

export default withRouter(AppContent);
