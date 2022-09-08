import { connect } from 'react-redux';

import { HOMEPAGE_PRODUCTS_DATA_SEARCH,
  HOMEPAGE_PRODUCTS_DATA_FILTER } from '../../actions';
import { getProductsInfo, getCategories } from './store/api';
import HomePage from './homePage';
// import submitMessage from './saga';

const mapStateToProps = ({ homePage }) => ({
  productsData: homePage.productsData,
  categories: homePage.categories,
  loading: homePage.loading,
  searchKey: homePage.searchKey,
  category: homePage.category
});

const mapDispatchToProps = (dispatch) => ({
  getProductsInfo,
  getCategories,
  searchProduct: (key) => {
    dispatch({ type: HOMEPAGE_PRODUCTS_DATA_SEARCH, key });
  },
  filterCategory: (category) => {
    dispatch({ type: HOMEPAGE_PRODUCTS_DATA_FILTER, category });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
