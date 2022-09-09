import Immutable from 'seamless-immutable';
import reducer from '../store/reducer';

const defaultState = Immutable({
  submitResponse: '',
  loading: false
});

describe('containers/create-page/reducers', () => {
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
      it('should handle CREATEPAGE:PRODUCTS_DATA:SUBMIT:REQUEST', () => {
        const resultState = reducer(defaultState, { type: 'CREATEPAGE:PRODUCTS_DATA:SUBMIT:REQUEST' });
        expect(resultState).toEqual({
          submitResponse: '', loading: true
        });
      });
      it('should handle CREATEPAGE:PRODUCTS_DATA:SUBMIT:SUCCESS', () => {
        const data = {
          id: 'a123'
        };
        const resultState = reducer(defaultState, { type: 'CREATEPAGE:PRODUCTS_DATA:SUBMIT:SUCCESS', data });
        expect(resultState).toEqual({
          submitResponse: 'Success', loading: true
        });
      });
      it('should handle CREATEPAGE:PRODUCTS_DATA:SUBMIT:FAIL', () => {
        const resultState = reducer(defaultState, { type: 'CREATEPAGE:PRODUCTS_DATA:SUBMIT:FAIL' });
        expect(resultState).toEqual({
          submitResponse: '', loading: false
        });
      });
    });
  });
});
