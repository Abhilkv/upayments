import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Loader } from 'app/components';

import styles from './styles.scss';

const DetailsPage = (props) => {
  const { getProductsInfo, productData, loading } = props;


  useEffect(() => {
    const query = new URLSearchParams(props.location.search);
    const productId = query.get('id');
    getProductsInfo(productId);
  }, []);

  return (
    <div className={styles.container}>
      {loading ? <Loader /> : (
        <div className={styles.contentbox}>
          <div className={styles.detailsWrapper}>
            <div className={styles.imageWrapper}>
              <img className={styles.image} alt={productData.name} src={productData.avatar} height={280} />
            </div>
            <div className={styles.nameBlock}>
              <span className={styles.name}>
                {productData.name}
              </span>
              <span className={styles.price}>
                ${productData.price}
              </span>
            </div>
          </div>
          <div className={styles.divider} />
          <div className={styles.descriptionBox}>
            <span className={styles.title}>Description</span>
            <span className={styles.description}>{productData.description}</span>
          </div>
        </div>
      )}
    </div>
  );
};


DetailsPage.propTypes = {
  getProductsInfo: PropTypes.func.isRequired,
  productData: PropTypes.shape,
  loading: PropTypes.bool
};

DetailsPage.defaultProps = {
  productData: {},
  loading: false
};

export default DetailsPage;
