import { connect } from 'react-redux';

import { getCategories } from '../home/store/api';
import addProduct from './store/api';

import CreatePage from './createPage';

const mapStateToProps = ({ homePage, create }) => ({
  categories: homePage.categories,
  loading: create.loading,
  submitResponse: create.submitResponse
});

const mapDispatchToProps = () => ({
  getCategories,
  addProduct
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePage);
