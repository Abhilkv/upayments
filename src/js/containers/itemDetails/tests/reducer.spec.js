import Immutable from 'seamless-immutable';
import reducer from '../store/reducer';

const defaultState = Immutable({
  productData: {},
  loading: false
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
      it('should handle HOMEPAGE:PRODUCT_DATA:FETCH:REQUEST', () => {
        const resultState = reducer(defaultState, { type: 'HOMEPAGE:PRODUCT_DATA:FETCH:REQUEST' });
        expect(resultState).toEqual({
          productData: {},
          loading: true
        });
      });
      it('should handle HOMEPAGE:PRODUCT_DATA:FETCH:SUCCESS', () => {
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
        const resultState = reducer(defaultState, { type: 'HOMEPAGE:PRODUCT_DATA:FETCH:SUCCESS', data });
        expect(resultState).toEqual({
          productData: data,
          loading: false
        });
      });
      it('should handle HOMEPAGE:PRODUCT_DATA:FETCH:FAILL', () => {
        const resultState = reducer(defaultState, { type: 'HOMEPAGE:PRODUCT_DATA:FETCH:FAIL' });
        expect(resultState).toEqual({
          productData: {},
          loading: false
        });
      });
    });
  });
});
