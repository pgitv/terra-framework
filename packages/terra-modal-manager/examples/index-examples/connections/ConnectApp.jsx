import React from 'react';
// import PropTypes from 'prop-types';
import Button from 'terra-button';
import List from 'terra-list';
import { disclosureType } from '../../../src/index';
import Dialog from './Dialog';
import AppDetails from './AppDetails';

const ConnectApp = ({ app }) => {
  const footer = (
    <Button
      text="close"
      onClick={app.closeDisclosure}
    />
  );
  const body = (
    <List>
      <List.Item
        content={
          <Button
            text="garmin"
            onClick={() => {
              app.disclose({
                preferredType: disclosureType,
                size: 'large',
                content: {
                  key: 'garmin',
                  component: <AppDetails name="garmin" isConnected={false} />,
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
      header="Connect an app"
      footer={footer}
      onclose={app.closeDisclosure}
      onback={app.goBack}
    >
      {body}
    </Dialog>
  );
};

export default ConnectApp;
