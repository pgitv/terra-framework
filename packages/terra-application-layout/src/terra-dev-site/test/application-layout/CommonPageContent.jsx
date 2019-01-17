import React from 'react';

import ContentContainer from 'terra-content-container';
import ContentLayoutActionHeader from '../../../ContentLayoutActionHeader';

const PageContent = ({
  contentName, children,
}) => (
  <ContentContainer
    fill
    header={<ContentLayoutActionHeader title={contentName} />}
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
