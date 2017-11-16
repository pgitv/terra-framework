import React from 'react';
import ApplicationToolbar from '../../src/ApplicationToolbar';

const ApplicationToolbarDefault = () => (
  <ApplicationToolbar
    id="test-toolbar"
    content={<div id="test-content">test content</div>}
    logo={<ApplicationToolbar.Logo id="test-logo" />}
    utility={<ApplicationToolbar.Utility id="test-utility" />}
  />
);

export default ApplicationToolbarDefault;
