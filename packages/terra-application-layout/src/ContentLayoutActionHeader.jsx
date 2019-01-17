import React from 'react';

import ActionHeader from 'terra-action-header';
import { withActiveBreakpoint } from 'terra-breakpoints';
import { withContentLayout, isCompactContentLayout } from './ContentLayout';

const ContentLayoutActionHeader = withContentLayout(withActiveBreakpoint(({
  title, contentLayout, activeBreakpoint,
}) => (
  <ActionHeader
    title={title}
    onBack={isCompactContentLayout(activeBreakpoint) ? contentLayout.openMenu : undefined}
    onMaximize={!isCompactContentLayout(activeBreakpoint) && contentLayout.menuIsOpen ? contentLayout.closeMenu : undefined}
    onMinimize={!isCompactContentLayout(activeBreakpoint) && !contentLayout.menuIsOpen ? contentLayout.openMenu : undefined}
  />
)));

export default ContentLayoutActionHeader;
