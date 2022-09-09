import Immutable from 'seamless-immutable';
import {
  HOMEPAGE_PRODUCTS_DATA_FETCH_REQUEST,
  HOMEPAGE_PRODUCTS_DATA_FETCH_SUCCESS,
  HOMEPAGE_PRODUCTS_DATA_FETCH_FAIL,
  HOMEPAGE_CATEGORIES_DATA_FETCH_REQUEST,
  HOMEPAGE_CATEGORIES_DATA_FETCH_SUCCESS,
  HOMEPAGE_CATEGORIES_DATA_FETCH_FAIL,
  HOMEPAGE_PRODUCTS_DATA_SEARCH,
  HOMEPAGE_PRODUCTS_DATA_FILTER
} from '../../../actions';

const defaultState = Immutable.flatMap({
  actualData: [],
  productsData: [],
  categories: [],
  loading: false,
  searchKey: '',
  category: ''
});

const filterData = (data, category, searchKey) => {
  if (category && searchKey) {
    return data.filter((item) => ((item.category).toLowerCase() === (category).toLowerCase() && ((item.name).toLowerCase()).includes((searchKey).toLowerCase())));
  } if (category) {
    return data.filter((item) => ((item.category).toLowerCase() === (category).toLowerCase()));
  } if (searchKey) {
    return data.filter((item) => (((item.name).toLowerCase()).includes((searchKey).toLowerCase())));
  }
  return data;
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case HOMEPAGE_PRODUCTS_DATA_FETCH_REQUEST:
      return Immutable.merge(state, { loading: true, productsData: [] });

    case HOMEPAGE_PRODUCTS_DATA_FETCH_SUCCESS:
      return Immutable.merge(state, { loading: false, actualData: action.data && action.data.products, productsData: filterData(action.data && action.data.products, state.category, state.searchKey) });

    case HOMEPAGE_PRODUCTS_DATA_FETCH_FAIL:
      return Immutable.merge(state, { loading: false, productsData: [] });


    case HOMEPAGE_CATEGORIES_DATA_FETCH_REQUEST:
      return Immutable.merge(state, { loading: true, categories: [] });

    case HOMEPAGE_CATEGORIES_DATA_FETCH_SUCCESS:
      return Immutable.merge(state, { loading: false, categories: action.data && action.data.categories });

    case HOMEPAGE_CATEGORIES_DATA_FETCH_FAIL:
      return Immutable.merge(state, { loading: false, categories: [] });

    case HOMEPAGE_PRODUCTS_DATA_SEARCH:
      return Immutable.merge(state, { searchKey: action.key, productsData: filterData(state.actualData, state.category, action.key) });

    case HOMEPAGE_PRODUCTS_DATA_FILTER:
      return Immutable.merge(state, { searchKey: '', category: action.category, productsData: filterData(state.actualData, action.category, '') });

    default:
      return state;
  }
};
