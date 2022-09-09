import { connect } from 'react-redux';

import { HOMEPAGE_PRODUCTS_DATA } from '../../actions';
import { getProductsInfo } from './store/api';
import DetailsPage from './detailsPage';
// import submitMessage from './saga';

const mapStateToProps = ({ details }) => ({
  productData: details.productData,
  loading: details.loading
});

const mapDispatchToProps = () => ({
  getProductsInfo
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);
