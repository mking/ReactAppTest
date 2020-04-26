import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { axiosInstance } from './axiosHelpers';
import rootReducer from '../reducers/rootReducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: [
    thunk.withExtraArgument({
      axiosInstance,
    }),
  ],
});
