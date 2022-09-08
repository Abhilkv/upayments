import apiCall from '../../sagas/api';
import {
  HOMEPAGE_PRODUCTS_DATA_FETCH_REQUEST,
  HOMEPAGE_PRODUCTS_DATA_FETCH_SUCCESS,
  HOMEPAGE_PRODUCTS_DATA_FETCH_FAIL
} from '../../actions';

export default async function submitMessage() {
  const url = '/5d8f5d433200000d00adec03';
  const apiArgs = {
    API_CALL: {
      method: 'GET'
    },
    url,
    TYPES: {
      requestType: HOMEPAGE_PRODUCTS_DATA_FETCH_REQUEST,
      successType: HOMEPAGE_PRODUCTS_DATA_FETCH_SUCCESS,
      failureType: HOMEPAGE_PRODUCTS_DATA_FETCH_FAIL
    },
    isAuthRequired: false // Remove this param, if authToken required
  };

  // Accept response if necessary with await
  apiCall(apiArgs);
}
