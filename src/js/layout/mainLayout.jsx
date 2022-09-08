import React from 'react';
import { TextBar } from '../components';

import styles from './styles.scss';

const Layout = (props) => (
  <div className={styles.wrapper}>
    <TextBar props={props} />
    {props.children}
  </div>
);

export default Layout;
