import React from 'react';

import Logo from '../../src/Logo';

describe('Logo', () => {
  it('should render without optional props', () => {
    const result = shallow((
      <Logo />
    ));
    expect(result).toMatchSnapshot();
  });

  it('should render with provided props', () => {
    const result = shallow((
      <Logo
        accessory={<div>test accessory</div>}
        size="small"
        subtitle="test subtitle"
        title="title"
      />
    ));

    expect(result).toMatchSnapshot();
  });
});
