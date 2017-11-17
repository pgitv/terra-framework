import React from 'react';
import ApplicationMenu from 'terra-application-menu';

const Menu = () => (
  <div style={{ height: '450px', width: '300px' }}>
    <ApplicationMenu
      layoutConfig={{ size: 'tiny', toggleMenu: () => {} }}
    />
  </div>
);

export default Menu;
