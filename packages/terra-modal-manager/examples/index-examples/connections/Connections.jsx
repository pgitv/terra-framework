import React from 'react';
// import PropTypes from 'prop-types';
import Button from 'terra-button';
import List from 'terra-list';
import { disclosureType } from '../../../src/index';
import Dialog from './Dialog';
import ConnectApp from './ConnectApp';
import AppDetails from './AppDetails';

const Connections = ({ app }) => {
  const footer = (
    <Button
      text="connect an app"
      onClick={() => {
        app.disclose({
          preferredType: disclosureType,
          size: 'large',
          content: {
            key: 'connectapp',
            component: <ConnectApp />,
          },
        });
      }}
    />
  );
  const body = (
    <List>
      <List.Item
        content={
          <Button
            text="Fitbit"
            onClick={() => {
              app.disclose({
                preferredType: disclosureType,
                size: 'large',
                content: {
                  key: 'fitbit',
                  component: <AppDetails name="fitbit" isConnected />,
                },
              });
            }}
          />
        }
      />
    </List>
  );
  return (
    <Dialog
      header="Connections"
      footer={footer}
      onclose={app.closeDisclosure}
    >
      {body}
    </Dialog>
  );
};

export default Connections;
