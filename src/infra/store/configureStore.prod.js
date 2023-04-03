import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../../rootReducer';
import creatHttpClient from './createHttpClient';

const middlewares = [
  creatHttpClient(),
];

/* eslint-disable no-underscore-dangle */
const configureStore = (preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(applyMiddleware(...middlewares)),
  );

  if (module.hot) {
    module.hot.accept('../../rootReducer', () => {
      store.replaceReducer(rootReducer);
    });
  }
  return store;
};
/* eslint-enable */

export default configureStore;
