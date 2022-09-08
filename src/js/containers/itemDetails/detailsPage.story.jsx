import React from 'react';
import { storiesOf } from '@storybook/react';
import HomePage from './detailsPage';

storiesOf('HomePage', module)
  .add('default HomePage', () => (
    <HomePage />
  ));
