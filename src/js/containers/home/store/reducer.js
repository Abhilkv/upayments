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

const filterData = (state, key) => {

}

export default (state = defaultState, action) => {
  switch (action.type) {
    case HOMEPAGE_PRODUCTS_DATA_FETCH_REQUEST:
      return Immutable.merge(state, { loading: true, productsData: [] });

    case HOMEPAGE_PRODUCTS_DATA_FETCH_SUCCESS:
      return Immutable.merge(state, { loading: false, actualData: action.data && action.data.products, productsData: action.data && action.data.products });

    case HOMEPAGE_PRODUCTS_DATA_FETCH_FAIL:
      return Immutable.merge(state, { loading: false, productsData: [] });


    case HOMEPAGE_CATEGORIES_DATA_FETCH_REQUEST:
      return Immutable.merge(state, { loading: true, categories: [] });

    case HOMEPAGE_CATEGORIES_DATA_FETCH_SUCCESS:
      return Immutable.merge(state, { loading: false, categories: action.data && action.data.categories });

    case HOMEPAGE_CATEGORIES_DATA_FETCH_FAIL:
      return Immutable.merge(state, { loading: false, categories: [] });

    case HOMEPAGE_PRODUCTS_DATA_SEARCH:
      return Immutable.merge(state, { searchKey: action.key, category: '', productsData: action.key ? [...(state.actualData.filter((item) => (((item.name).toLowerCase()).includes((action.key).toLowerCase()))))] : state.actualData });

    case HOMEPAGE_PRODUCTS_DATA_FILTER:
      return Immutable.merge(state, { searchKey: '', category: action.category, productsData: action.category ? [...(state.actualData.filter((item) => ((item.category).toLowerCase() === (action.category).toLowerCase())))] : state.actualData });

    default:
      return state;
  }
};
