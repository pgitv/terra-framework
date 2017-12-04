import React from 'react';
import ApplicationHeaderLayout from 'terra-application-header-layout';
import PlaceHolder from '../../app/common/Placeholder';

const HeaderWireframe = () => (
  <div style={{ height: '60px', position: 'relative', width: '100%' }}>
    <ApplicationHeaderLayout
      layoutConfig={{ size: 'large', toggleMenu: () => {} }}
      logo={<PlaceHolder text="Logo" width="150px" />}
      utilities={<PlaceHolder text="Utilities" width="150px" />}
      extensions={<PlaceHolder text="Extensions" width="150px" />}
      toggle={<PlaceHolder text="Toggle" width="150px" />}
    />
  </div>
);


export default HeaderWireframe;
