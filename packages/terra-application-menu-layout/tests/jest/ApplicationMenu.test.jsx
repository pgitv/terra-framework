import React from 'react';

import ApplicationMenu from '../../src/ApplicationMenu';

describe('ApplicationHeader', () => {
  it('should render without optional props', () => {
    const result = shallow((
      <ApplicationMenu />
    ));
    expect(result).toMatchSnapshot();
  });
});
