import React from 'react';

import ContentContainer from 'terra-content-container';
import ActionHeader from 'terra-action-header';

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

export default PageContent;
