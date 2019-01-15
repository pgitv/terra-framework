import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import SecondaryNavigationMenu from './SecondaryNavigationMenu';

const propTypes = {
  menuItems: PropTypes.array,
  initialSelectedKey: PropTypes.string,
  onChildItemSelection: PropTypes.func,
  history: PropTypes.object,
};

const RoutingSecondaryNavigationMenu = ({
  menuItems, onChildItemSelection, initialSelectedKey, history,
}) => (
  <SecondaryNavigationMenu
    menuItems={menuItems}
    initialSelectedKey={initialSelectedKey}
    onChildItemSelection={(childKey, metaData) => {
      history.push(metaData.path);

      if (onChildItemSelection) {
        onChildItemSelection(childKey, metaData);
      }
    }}
  />
);


RoutingSecondaryNavigationMenu.propTypes = propTypes;

export default withRouter(RoutingSecondaryNavigationMenu);
