import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Button } from 'app/components';

import styles from './styles.scss';

const HomePage = (props) => {
 

  return (
    <div className={styles.container}>
      <div className={styles.parent}>
        <div className={styles.child} />
      </div>
    </div>
  );
};


HomePage.propTypes = {
};

export default HomePage;
