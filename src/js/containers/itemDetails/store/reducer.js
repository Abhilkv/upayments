import Immutable from 'seamless-immutable';
import {
  HOMEPAGE_PRODUCT_DATA_FETCH_REQUEST,
  HOMEPAGE_PRODUCT_DATA_FETCH_SUCCESS,
  HOMEPAGE_PRODUCT_DATA_FETCH_FAIL
} from '../../../actions';

const defaultState = Immutable.flatMap({
  productData: {},
  loading: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case HOMEPAGE_PRODUCT_DATA_FETCH_REQUEST:
      return Immutable.merge(state, { productData: {}, loading: true });

    case HOMEPAGE_PRODUCT_DATA_FETCH_SUCCESS:
      return Immutable.merge(state, { productData: action.data && action.data.product, loading: false });

    case HOMEPAGE_PRODUCT_DATA_FETCH_FAIL:
      return Immutable.merge(state, { productData: {}, loading: false });

    default:
      return state;
  }
};
