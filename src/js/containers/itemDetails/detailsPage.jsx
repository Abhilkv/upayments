import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Button } from 'app/components';

import styles from './styles.scss';

const HomePage = (props) => {
  // const query = new URLSearchParams(props.location.search);
  // const name = query.get('name');
  const [resestCircle, setResetCircle] = useState(true);
  const [rotationValue, setRotationValue] = useState(270);

  const reset = () => {
    setResetCircle(false);
    setTimeout(() => { setResetCircle(true); }, 0);
    setRotationValue(0);
  };

  useEffect(() => {
    document.getElementsByClassName('circleWrapper').style.tranform = `rotate(${rotationValue}deg)`;
  }, []);

  return (
    <div className={styles.container}>
      <span>
        {name}
      </span>
    </div>
  );
};


HomePage.propTypes = {
};

export default HomePage;
