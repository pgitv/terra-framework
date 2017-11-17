import React from 'react';

import Utility from '../../src/Utility';

describe('Utility', () => {
  it('should render without optional props', () => {
    const result = shallow((
      <Utility />
    ));
    expect(result).toMatchSnapshot();
  });

  it('should render with provided props', () => {
    const result = shallow((
      <Utility
        accessory={<div>test accessory</div>}
        size="small"
        contentHeight="auto"
        contentWidth="auto"
        title="title"
      />
    ));

    expect(result).toMatchSnapshot();
  });
});
