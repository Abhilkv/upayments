import apiCall from '../../../store/api';
import {
  CREATEPAGE_PRODUCTS_DATA_SUBMIT_REQUEST,
  CREATEPAGE_PRODUCTS_DATA_SUBMIT_SUCCESS,
  CREATEPAGE_PRODUCTS_DATA_SUBMIT_FAIL
} from '../../../actions';

export default async function addProduct(data) {
  const url = '/products';
  const apiArgs = {
    API_CALL: {
      method: 'POST'
    },
    data,
    url,
    TYPES: {
      requestType: CREATEPAGE_PRODUCTS_DATA_SUBMIT_REQUEST,
      successType: CREATEPAGE_PRODUCTS_DATA_SUBMIT_SUCCESS,
      failureType: CREATEPAGE_PRODUCTS_DATA_SUBMIT_FAIL
    },
    isAuthRequired: true
  };
  apiCall(apiArgs);
}
