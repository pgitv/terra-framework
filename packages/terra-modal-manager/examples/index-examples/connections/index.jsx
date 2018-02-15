import React from 'react';
// import PropTypes from 'prop-types';
import ModalManager, { disclosureType } from '../../../src/index';
import Button from 'terra-button';
import Connections from './Connections';

const Modal = ({ app }) => (
  <Button
    text="Connections"
    onClick={() => {
      app.disclose({
        preferredType: disclosureType,
        size: 'large',
        content: {
          key: 'connections',
          component: <Connections />,
        },
      });
    }}
  />
);

const App = () => (
  <ModalManager>
    <Modal />
  </ModalManager>
);

export default App;
