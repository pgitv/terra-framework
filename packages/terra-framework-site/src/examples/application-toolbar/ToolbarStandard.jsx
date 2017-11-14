import React from 'react';
import Toolbar from 'terra-application-toolbar';
import IconPrinter from 'terra-icon/lib/icon/IconPrinter';
import IconPill from 'terra-icon/lib/icon/IconPill';
import NavTabs from 'terra-application-toolbar/lib/NavTabs';

const items = [
  <Toolbar.Utility.Item
    text="Utility Menu Item 1"
    key="Toggle1"
  />,
  <Toolbar.Utility.Item
    text="Utility Menu Item 2"
    key="Toggle2"
  />,
];

const toolbar = () => (
  <Toolbar
    content={<NavTabs links={[{ path: '123', text: 'Tab 1' }, { path: '234', text: 'Tab 2' }]} />}
    layoutConfig={{
      size: 'small',
      toggleMenu: () => {},
    }}
    logo={(
      <Toolbar.Logo
        accessory={<IconPill />}
        title="Title"
        subtitle="subtitle"
      />
    )}
    utility={(
      <Toolbar.Utility
        accessory={<IconPrinter />}
        contentHeight="80"
        contentWidth="240"
        menuItems={items}
        title="Utility Title"
      />
    )}
  />
);

export default toolbar;
