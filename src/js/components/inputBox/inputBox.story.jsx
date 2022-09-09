import React from 'react';
import { storiesOf } from '@storybook/react';
import InputBox from './inputBox';

storiesOf('InputBox', module)
  .add('default InputBox', () => (
    <InputBox />
  ));
