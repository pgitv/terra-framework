import React from 'react';
import ApplicationMenuLayout from '../../src/ApplicationMenuLayout';

const ApplicationMenuDefault = () => (
  <ApplicationMenuLayout
    id="test-menu"
    extensions={<div id="test-extensions">Extensions</div>}
    content={<div style={{ position: 'absolute', top: '50%', transform: 'translate3d(0, -50%, 0)' }} id="test-navigation">Navigation</div>}
    header={<div id="test-logo">Logo</div>}
    footer={<div id="test-utilities">Utilities</div>}
  />
);

export default ApplicationMenuDefault;
