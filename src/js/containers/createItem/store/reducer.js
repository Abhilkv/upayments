import Immutable from 'seamless-immutable';
import {
  CREATEPAGE_PRODUCTS_DATA_SUBMIT_REQUEST,
  CREATEPAGE_PRODUCTS_DATA_SUBMIT_SUCCESS,
  CREATEPAGE_PRODUCTS_DATA_SUBMIT_FAIL
} from '../../../actions';

const defaultState = Immutable.flatMap({
  submitResponse: '',
  loading: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case CREATEPAGE_PRODUCTS_DATA_SUBMIT_REQUEST:
      return Immutable.merge(state, { submitResponse: '', loading: true });

    case CREATEPAGE_PRODUCTS_DATA_SUBMIT_SUCCESS:
      return Immutable.merge(state, { submitResponse: action.data && action.data.message, loading: false });

    case CREATEPAGE_PRODUCTS_DATA_SUBMIT_FAIL:
      return Immutable.merge(state, { submitResponse: 'Failed', loading: false });

    default:
      return state;
  }
};
