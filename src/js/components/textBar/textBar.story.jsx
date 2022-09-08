import React from 'react';
import { storiesOf } from '@storybook/react';
import TextBar from './textBar';

storiesOf('TextBar', module)
  .add('default TextBar', () => (
    <TextBar />
  ));
