import {
  HOMEPAGE_PRODUCTS_DATA_FETCH_REQUEST,
  HOMEPAGE_PRODUCTS_DATA_FETCH_SUCCESS,
  HOMEPAGE_PRODUCTS_DATA_FETCH_FAIL
} from '../../../actions';
import * as api from '../store/api';
import apiCall from '../../../api/api';

jest.mock('../../../sagas/api');

it('handles fetchDummyApi', async () => {
  const fetchDummyApiTest = api.default;
  fetchDummyApiTest();
  apiCall.mockReturnValueOnce(true);
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
    isAuthRequired: false
  };
  expect(apiCall).toHaveBeenCalledWith(apiArgs);
});
