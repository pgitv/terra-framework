import React from 'react';

import ApplicationToolbar from '../../src/ApplicationToolbar';

describe('ApplicationToolbar', () => {
  it('should render without optional props', () => {
    const result = shallow((
      <ApplicationToolbar />
    ));
    expect(result).toMatchSnapshot();
  });

  it('should render with provided logo and utility props', () => {
    const result = shallow((
      <ApplicationToolbar
        logo={<ApplicationToolbar.Logo />}
        utility={<ApplicationToolbar.Utility />}
      />
    ));

    expect(result).toMatchSnapshot();
  });
});
