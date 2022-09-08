import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.scss';

const TextBar = () => (
  <div
    className={styles.loaderContainer}
  >
    <div className={styles.loader} />
  </div>
);

export default TextBar;
