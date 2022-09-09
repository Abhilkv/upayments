import Immutable from 'seamless-immutable';
import reducer from '../store/reducer';

const defaultState = Immutable({
  actualData: [],
  productsData: [],
  categories: [],
  loading: false,
  searchKey: '',
  category: ''
});

describe('containers/home-page/reducers', () => {
  describe('state', () => {
    it('should export `reducer`', () => {
      expect(reducer)
        .toBeDefined();
    });

    it('should return the default state', () => {
      expect(reducer(undefined, {})).toEqual(defaultState);
    });
  });
  describe('actions', () => {
    describe('actions', () => {
      it('should handle HOMEPAGE:PRODUCTS_DATA:FETCH:REQUEST', () => {
        const resultState = reducer(defaultState, { type: 'HOMEPAGE:PRODUCTS_DATA:FETCH:REQUEST' });
        expect(resultState).toEqual({
          actualData: [],
          productsData: [],
          categories: [],
          loading: true,
          searchKey: '',
          category: ''
        });
      });
      it('should handle HOMEPAGE:PRODUCTS_DATA:FETCH:SUCCESS', () => {
        const data = {
          message: 'Success',
          product: {
            _id: '62fc9dab69257f89cdb740c6',
            name: 'Cup',
            avatar: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
            description: 'Elegant Cup',
            price: 14,
            category: 'Accessories',
            developerEmail: 'karaahmethkn@gmail.com',
            createdAt: '2022-08-17T07:50:03.232Z',
            updatedAt: '2022-08-17T07:50:03.232Z',
            __v: 0
          }
        };
        const categories = [
          {
            _id: '62e638f41126b53e1c7deb61',
            name: 'Electronics',
            createdAt: '2022-07-31T08:10:28.145Z',
            updatedAt: '2022-07-31T08:10:28.145Z',
            __v: 0
          },
          {
            _id: '62e638fd1126b53e1c7deb65',
            name: 'Clothing',
            createdAt: '2022-07-31T08:10:37.186Z',
            updatedAt: '2022-07-31T08:10:37.186Z',
            __v: 0
          },
          {
            _id: '62e6390e1126b53e1c7deb69',
            name: 'Accessories',
            createdAt: '2022-07-31T08:10:54.540Z',
            updatedAt: '2022-07-31T08:10:54.540Z',
            __v: 0
          },
          {
            _id: '62e6391f1126b53e1c7deb6d',
            name: 'Furniture',
            createdAt: '2022-07-31T08:11:11.918Z',
            updatedAt: '2022-07-31T08:11:11.918Z',
            __v: 0
          },
          {
            _id: '62e6397e1126b53e1c7deb72',
            name: 'Hobby',
            createdAt: '2022-07-31T08:12:46.096Z',
            updatedAt: '2022-07-31T08:12:46.096Z',
            __v: 0
          }
        ];
        const resultState = reducer(defaultState, { type: 'HOMEPAGE:PRODUCTS_DATA:FETCH:SUCCESS', data });
        expect(resultState).toEqual({
          actualData: [data],
          productsData: [data],
          categories: [categories],
          loading: false,
          searchKey: '',
          category: ''
        });
      });
      it('should handle HOMEPAGE:PRODUCTS_DATA:FETCH:FAIL', () => {
        const resultState = reducer(defaultState, { type: 'HOMEPAGE:PRODUCTS_DATA:FETCH:FAIL' });
        expect(resultState).toEqual({
          actualData: [],
          productsData: [],
          categories: [],
          loading: false,
          searchKey: '',
          category: ''
        });
      });
    });
  });
});
