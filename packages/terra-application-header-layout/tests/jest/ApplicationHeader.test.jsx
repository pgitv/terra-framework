import React from 'react';

import ApplicationHeaderLayout from '../../src/ApplicationHeaderLayout';

describe('ApplicationHeader', () => {
  it('should render without optional props', () => {
    const result = shallow((
      <ApplicationHeaderLayout />
    ));
    expect(result).toMatchSnapshot();
  });

  it('should render with provided logo and utility props', () => {
    const result = shallow((
      <ApplicationHeaderLayout
        logo={<ApplicationHeader.Logo />}
        utility={<ApplicationHeader.Utility />}
      />
    ));

    expect(result).toMatchSnapshot();
  });
});
