import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const Button = (props) => {
  const { data } = props;

  return (
    <div className={styles.productCard}>
      <div className={styles.imageBlock}>
        <img className={styles.image} alt={data.name} src={data.avatar} height={180} width={200} />
      </div>
      <span className={styles.name}>{data.name}</span>
      <span className={styles.price}>$ {data.price}</span>
    </div>
  );
};

Button.propTypes = {
  data: PropTypes.shape()
};

Button.defaultProps = {
  data: {
    name: '',
    price: '',
    avatar: ''
  }
};

export default Button;
