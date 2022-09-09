import axios from 'axios';
import { replace as replaceRouter } from 'react-router-redux';
import registry from 'app-registry';
import { store } from '../store';
import { token } from '../env';

const isAuthTokenValid = (authToken) => (authToken !== null && authToken !== '');

export default async function apiCall(payload) {
  const {
    API_CALL,
    TYPES,
    url,
    data,
    isAuthRequired = true
  } = payload;

  const apiEndpoint = 'https://upayments-studycase-api.herokuapp.com/api';
  const API_URL = `${apiEndpoint}${url}`;

  // Re-routing to login if not authorized
  if (isAuthRequired && !isAuthTokenValid(token)) {
    alert('Token missing');
  }

  // Setting API parameters
  const apiParams = {
    ...API_CALL,
    data,
    url: API_URL,
    ...(isAuthRequired && {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  };

  try {
    //  Setting initial state
    if (TYPES.requestType) {
      store.dispatch({ type: TYPES.requestType });
    }
    // Make API call
    const apiResponse = await axios(apiParams);
    if (apiResponse.data) {
      // API call success
      store.dispatch({ type: TYPES.successType, data: apiResponse.data });
      return apiResponse.data;
    }
  } catch (err) {
    // API call failure
    let errMessage = err.message;
    if (err.response) {
      errMessage = err.response.data.message || err.response.data.error.message;
    }
    // Logging the error
    registry.get('logger').info(`The API ${API_URL} returned this error:`, JSON.stringify(errMessage));
    store.dispatch({ type: TYPES.failureType });
  }
  return null;
}
