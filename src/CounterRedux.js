import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

const {Types, Creators} = createActions({
  increment: null,
  decrement: null,
});

export const CounterTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  count: 0,
});

export const getCount = state => state.counter.count;

export const CounterSelectors = {
  getCount,
};

export const increment = state => state.merge({count: state.count + 1});
export const decrement = state => state.merge({count: state.count - 1});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.INCREMENT]: increment,
  [Types.DECREMENT]: decrement,
});
