import React from 'react';
import { storiesOf } from '@storybook/react';
import Loader from './loader';

storiesOf('Loader', module)
  .add('default Loader', () => (
    <Loader />
  ));
