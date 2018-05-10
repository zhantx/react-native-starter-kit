// @flow

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from '@reducers';
import { EventRegister } from 'react-native-event-listeners';

const crashReporter = () => next => (action) => {
  try {
    return next(action);
  } catch (err) {
    console.error('Caught an exception!', err);
    throw err;
  }
};

const store = createStore(reducers, applyMiddleware(thunk, crashReporter));

let init = false;

const hasInit = () => init;

Promise.all([]).then(() => {
  init = true;
  EventRegister.emit('initFinished', store.getState());
});

export { store as default, hasInit };
