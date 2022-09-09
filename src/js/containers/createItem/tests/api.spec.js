import {
  CREATEPAGE_PRODUCTS_DATA_SUBMIT_REQUEST,
  CREATEPAGE_PRODUCTS_DATA_SUBMIT_SUCCESS,
  CREATEPAGE_PRODUCTS_DATA_SUBMIT_FAIL
} from '../../../actions';
import * as saga from '../store/api';
import apiCall from '../../../sagas/api';

jest.mock('../../../sagas/api');

it('handles fetchDummyApi', async () => {
  const submitProductData = saga.default;
  submitProductData();
  apiCall.mockReturnValueOnce(true);
  const url = '/products';
  const apiArgs = {
    API_CALL: {
      method: 'POST'
    },
    url,
    TYPES: {
      requestType: CREATEPAGE_PRODUCTS_DATA_SUBMIT_REQUEST,
      successType: CREATEPAGE_PRODUCTS_DATA_SUBMIT_SUCCESS,
      failureType: CREATEPAGE_PRODUCTS_DATA_SUBMIT_FAIL
    },
    isAuthRequired: true
  };
  expect(apiCall).toHaveBeenCalledWith(apiArgs);
});
