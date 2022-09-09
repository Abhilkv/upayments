/* eslint-disable import/prefer-default-export */
import apiCall from '../../../sagas/api';
import {
  HOMEPAGE_PRODUCT_DATA_FETCH_REQUEST,
  HOMEPAGE_PRODUCT_DATA_FETCH_SUCCESS,
  HOMEPAGE_PRODUCT_DATA_FETCH_FAIL
} from '../../../actions';

export const getProductsInfo = async(id) => {
  const url = `/products/${id}`;
  const apiArgs = {
    API_CALL: {
      method: 'GET'
    },
    url,
    TYPES: {
      requestType: HOMEPAGE_PRODUCT_DATA_FETCH_REQUEST,
      successType: HOMEPAGE_PRODUCT_DATA_FETCH_SUCCESS,
      failureType: HOMEPAGE_PRODUCT_DATA_FETCH_FAIL
    },
    isAuthRequired: true
  };
  apiCall(apiArgs);
};
