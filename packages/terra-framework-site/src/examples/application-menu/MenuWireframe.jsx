import React from 'react';
import PropTypes from 'prop-types';
import ApplicationMenu from 'terra-application-menu';
import PlaceHolder from '../common/PlaceHolder';

const Menu = () => (
  <div style={{ height: '450px', width: '300px' }}>
    <ApplicationMenu
      layoutConfig={{ size: 'tiny', toggleMenu: () => {} }}
      header={<PlaceHolder text="Header" height="50px" />}
      footer={<PlaceHolder text="Footer" height="50px" />}
      widget={<PlaceHolder text="Widgets" height="100px" />}
      content={<PlaceHolder text="Content" />}
    />
  </div>
);

export default Menu;
