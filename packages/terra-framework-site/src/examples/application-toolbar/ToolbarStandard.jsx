import React from 'react';
import Toolbar from 'terra-application-toolbar';

const items = [
  <Toolbar.Utility.Item
    text="Toggle Item 1"
    key="Toggle1"
  />,
  <Toolbar.Utility.Item
    text="Toggle Item 2"
    key="Toggle2"
  />,
];

const logo = (
  <Toolbar.Logo
    title="Title"
    subtitle="subtitle"
  />
);

const utility = (
  <Toolbar.Utility
    contentHeight="80"
    contentWidth="240"
    menuItems={items}
    title="Utilities"
  />
);

const toolbar = () => (
  <Toolbar
    layoutConfig={{
      size: 'tiny',
    }}
    logo={logo}
    utility={utility}
  />
);

export default toolbar;
