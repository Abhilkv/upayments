import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { ProductCard, Loader } from 'app/components';

import styles from './styles.scss';

const HomePage = (props) => {
  const { getProductsInfo,
    productsData,
    loading,
    getCategories,
    categories,
    searchProduct,
    filterCategory,
    searchKey,
    category } = props;
  // const query = new URLSearchParams(props.location.search);
  // const name = query.get('name');

  useEffect(() => {
    getProductsInfo();
    getCategories();
  }, []);

  const filterData = (event) => {
    const { value } = event.target;
    filterCategory(value);
  };


  return (
    <div className={styles.container}>
      {loading && <Loader />}
      <div className={styles.boxContainer}>
        <input value={searchKey} onChange={(event) => { searchProduct(event.target.value); }} className={styles.searchBar} placeholder="Apple Watch, Samsung S21, Macbook Pro iphone 11" />
        <select value={category} onChange={filterData} name="category" id="category" className={styles.category}>
          <option value="" className={styles.optionText}>Category</option>
          {categories.length > 0 && categories.map((category) => (
            <option value={category.name} className={styles.optionText}>{category.name}</option>
          ))}
        </select>
      </div>
      {productsData.length > 0 && (
      <div className={styles.productBlock}>
        {productsData.map((data) => (
          <ProductCard data={data} />
        ))}
      </div>)}
    </div>
  );
};


HomePage.propTypes = {
  getProductsInfo: PropTypes.func.isRequired,
  productsData: PropTypes.arrayOf(PropTypes.shape()),
  getCategories: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape()),
  searchProduct: PropTypes.func.isRequired,
  filterCategory: PropTypes.func.isRequired,
  searchKey: PropTypes.string,
  category: PropTypes.string
};

HomePage.defaultProps = {
  productsData: [],
  categories: [],
  searchKey: '',
  category: ''

};

export default HomePage;
