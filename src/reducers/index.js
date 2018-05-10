import { combineReducers } from 'redux';

const appReducer = combineReducers({
  test: () => ({ test: true }),
});

export default appReducer;
