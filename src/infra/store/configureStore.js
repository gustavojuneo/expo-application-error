import storeDev from './configureStore.dev';
import storeProd from './configureStore.prod';

const stores = {
  development: storeDev,
  production: storeProd,
};
const store = stores[process.env.NODE_ENV];
export default store;
