import React from 'react';

import ActionHeader from 'terra-action-header';
import { withContentLayout } from './ContentLayout';

const ContentLayoutActionHeader = withContentLayout(({
  title, contentLayout,
}) => (
  <ActionHeader
    title={title}
    onBack={contentLayout.openMenu}
    onMaximize={contentLayout.menuIsPinned ? contentLayout.unpinMenu : undefined}
    onMinimize={!contentLayout.menuIsPinned ? contentLayout.pinMenu : undefined}
  />
));

export default ContentLayoutActionHeader;
