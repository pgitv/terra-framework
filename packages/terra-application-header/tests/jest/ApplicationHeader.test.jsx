import React from 'react';

import ApplicationHeader from '../../src/ApplicationHeader';

describe('ApplicationHeader', () => {
  it('should render without optional props', () => {
    const result = shallow((
      <ApplicationHeader />
    ));
    expect(result).toMatchSnapshot();
  });

  it('should render with provided logo and utility props', () => {
    const result = shallow((
      <ApplicationHeader
        logo={<ApplicationHeader.Logo />}
        utility={<ApplicationHeader.Utility />}
      />
    ));

    expect(result).toMatchSnapshot();
  });
});
