import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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

  useEffect(() => {
    getProductsInfo();
    getCategories();
  }, []);

  const filterData = (event) => {
    const { value } = event.target;
    filterCategory(value);
  };


  return (
    <div className={styles.productContainer}>
      {loading && <Loader />}
      <div className={styles.boxContainer}>
        <input value={searchKey} onChange={(event) => { searchProduct(event.target.value); }} className={styles.searchBar} placeholder="Apple Watch, Samsung S21, Macbook Pro iphone 11" />
        <select value={category} onChange={filterData} name="category" id="category" className={styles.category}>
          <option value="" className={styles.optionText}>Category</option>
          {categories.length > 0 && categories.map((item) => (
            <option value={item.name} className={styles.optionText} key={item.name}>{item.name}</option>
          ))}
        </select>
      </div>
      {productsData.length > 0 && (
      <div className={styles.productBlock}>
        {productsData.map((data) => (
          <ProductCard data={data} />
        ))}
      </div>)}
      <div className={styles.fabButton}>
        <Link to="/create" className={styles.addButton}>
          <span className={styles.addCircle} />
        </Link>
      </div>
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
