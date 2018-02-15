/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Connections from '../index';

storiesOf('Pages/Connections', module)
  .add('Connections', () => (
    <Connections />
  ));
