import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { routerMiddleware } from 'react-router-redux';

import reducers from './reducers';

import history from './utils/history';

const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk, routerMiddleware(history)],
});

export default store;
