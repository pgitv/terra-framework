import React from 'react';
import ApplicationHeader from '../../src/ApplicationHeader';

const ApplicationHeaderDefault = () => (
  <ApplicationHeader
    id="test-header"
    content={<div id="test-content">test content</div>}
    logo={<ApplicationHeader.Logo id="test-logo" />}
    utility={<ApplicationHeader.Utility id="test-utility" />}
  />
);

export default ApplicationHeaderDefault;
