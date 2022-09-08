import { connect } from 'react-redux';

import { HOMEPAGE_PRODUCTS_DATA } from '../../actions';
import HomePage from './detailsPage';
// import submitMessage from './saga';

const mapStateToProps = ({ homePage }) => ({
  dummyData: homePage.dummyData,
  count: homePage.count
});

const mapDispatchToProps = (dispatch) => ({
  updateFunction: (newValue, user, key) => {
    dispatch({ type: HOMEPAGE_PRODUCTS_DATA, data: newValue, user, key });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
