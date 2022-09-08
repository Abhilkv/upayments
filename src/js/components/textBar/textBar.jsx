import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.scss';

const TextBar = () => (
  <div
    className={styles.textBar}
  >
    <i><span><Link to="/home" className={styles.links}>UPayments Store</Link></span></i>
    <i><span><Link to="/create" className={styles.links}>Register</Link></span></i>
  </div>
);

export default TextBar;
