import React from 'react';
// import PropTypes from 'prop-types';
import Button from 'terra-button';
import Dialog from './Dialog';

const AppDetails = ({
  app,
  name,
  isConnected,
}) => (
  <Dialog
    header="App Details"
    footer={<Button text={isConnected ? 'disconnect' : 'connect'} />}
    onclose={app.closeDisclosure}
    onback={app.goBack}
  >
    <div>{name}</div>
  </Dialog>
);

export default AppDetails;
