import React from 'react';
import { storiesOf } from '@storybook/react';
import CreatePage from './createPage';

storiesOf('CreatePage', module)
  .add('default CreatePage', () => (
    <CreatePage categories={[]} />
  ));
