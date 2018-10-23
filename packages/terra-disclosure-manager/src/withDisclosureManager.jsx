import React from 'react';
import DisclosureManagerContext from './DisclosureManagerContext';

const withDisclosureManager = (Component) => {
  const WithDisclosureManagerComp = props => (
    <DisclosureManagerContext.Consumer>
      {disclosureManager => <Component disclosureManager={disclosureManager} {...props} />}
    </DisclosureManagerContext.Consumer>
  );

  WithDisclosureManagerComp.displayName = `withDisclosureManager(${Component.displayName})`;

  return WithDisclosureManagerComp;
};

export default withDisclosureManager;
