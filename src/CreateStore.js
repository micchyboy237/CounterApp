import {createStore, combineReducers} from 'redux';

export const reducers = combineReducers({
  counter: require('./CounterRedux').reducer,
});

const store = createStore(reducers);

export default store;
