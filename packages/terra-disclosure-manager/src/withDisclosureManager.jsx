import React from 'react';
import DisclosureManagerContext from './DisclosureManagerContext';

const withDisclosureManager = (Component) => {
  const WithDisclosureManagerComp = props => (
    <DisclosureManagerContext.Consumer>
      {disclosureManager => <Component {...props} disclosureManager={disclosureManager} />}
    </DisclosureManagerContext.Consumer>
  );

  WithDisclosureManagerComp.displayName = `withDisclosureManager(${Component.displayName})`;
  WithDisclosureManagerComp.WrappedComponent = Component;

  return WithDisclosureManagerComp;
};

export default withDisclosureManager;
