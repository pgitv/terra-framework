import React from 'react';
import PropTypes from 'prop-types';
import { withDisclosureManager } from 'terra-disclosure-manager';
import Aggregator from '../../../Aggregator';

const propTypes = {
  disclosureManager: PropTypes.object,
  items: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    component: PropTypes.element,
  })),
};

const AggregatorContainer = ({ disclosureManager, items }) => (
  <Aggregator
    disclose={disclosureManager ? disclosureManager.disclose : undefined}
    items={items}
  />
);

AggregatorContainer.propTypes = propTypes;

export default withDisclosureManager(AggregatorContainer);
