import React from 'react';
import ApplicationHeaderLayout from '../../src/ApplicationHeaderLayout';

const ApplicationHeaderDefault = () => (
  <ApplicationHeaderLayout
    id="test-header"
    content={<div id="test-content">test content</div>}
    logo={<div id="test-logo" />}
    utility={<div id="test-utility" />}
  />
);

export default ApplicationHeaderDefault;
