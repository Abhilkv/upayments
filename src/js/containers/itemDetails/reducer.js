import Immutable from 'seamless-immutable';
import {
  HOMEPAGE_PRODUCTS_DATA_FETCH_REQUEST,
  HOMEPAGE_PRODUCTS_DATA_FETCH_SUCCESS,
  HOMEPAGE_PRODUCTS_DATA_FETCH_FAIL,
  HOMEPAGE_PRODUCTS_DATA
} from '../../actions';

const defaultState = Immutable.flatMap({
  dummyData: {},
  count: 0
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case HOMEPAGE_PRODUCTS_DATA_FETCH_REQUEST:
      return Immutable.merge(state, { dummyData: {} });

    case HOMEPAGE_PRODUCTS_DATA_FETCH_SUCCESS:
      return Immutable.merge(state, { dummyData: action.data });

    case HOMEPAGE_PRODUCTS_DATA_FETCH_FAIL:
      return Immutable.merge(state, { dummyData: {} });

    case HOMEPAGE_PRODUCTS_DATA:
      return Immutable.merge(state, { dummyData: { ...state.dummyData, [action.key]: [action.user, action.data] }, count: state.count + 1 });

    default:
      return state;
  }
};
