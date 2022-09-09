import apiCall from '../../../store/api';
import {
  HOMEPAGE_PRODUCTS_DATA_FETCH_REQUEST,
  HOMEPAGE_PRODUCTS_DATA_FETCH_SUCCESS,
  HOMEPAGE_PRODUCTS_DATA_FETCH_FAIL,
  HOMEPAGE_CATEGORIES_DATA_FETCH_REQUEST,
  HOMEPAGE_CATEGORIES_DATA_FETCH_SUCCESS,
  HOMEPAGE_CATEGORIES_DATA_FETCH_FAIL
} from '../../../actions';

export const getProductsInfo = async() => {
  const url = '/products';
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
    isAuthRequired: true // Remove this param, if authToken required
  };

  // Accept response if necessary with await
  apiCall(apiArgs);
};

export const getCategories = async() => {
  const url = '/categories';
  const apiArgs = {
    API_CALL: {
      method: 'GET'
    },
    url,
    TYPES: {
      requestType: HOMEPAGE_CATEGORIES_DATA_FETCH_REQUEST,
      successType: HOMEPAGE_CATEGORIES_DATA_FETCH_SUCCESS,
      failureType: HOMEPAGE_CATEGORIES_DATA_FETCH_FAIL
    },
    isAuthRequired: true // Remove this param, if authToken required
  };

  // Accept response if necessary with await
  apiCall(apiArgs);
}
