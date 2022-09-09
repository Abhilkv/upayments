import {
  HOMEPAGE_PRODUCT_DATA_FETCH_REQUEST,
  HOMEPAGE_PRODUCT_DATA_FETCH_SUCCESS,
  HOMEPAGE_PRODUCT_DATA_FETCH_FAIL
} from '../../../actions';
import { getProductsInfo } from '../store/api';
import apiCall from '../../../sagas/api';

jest.mock('../../../sagas/api');

it('handles fetchDummyApi', async () => {
  getProductsInfo();
  apiCall.mockReturnValueOnce(true);
  const url = `/products/62fc9dab69257f89cdb740c6`;
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
    isAuthRequired: false // Remove this param, if authToken required
  };
  expect(apiCall).toHaveBeenCalledWith(apiArgs);
});
