import {
  configureStore,
  createImmutableStateInvariantMiddleware,
  createSerializableStateInvariantMiddleware,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { axiosInstance } from './axiosHelpers';
import rootReducer from '../reducers/rootReducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: [
    thunk.withExtraArgument({
      axiosInstance,
    }),
    ...(process.env.NODE_ENV === 'development'
      ? [
          createImmutableStateInvariantMiddleware({}),
          createSerializableStateInvariantMiddleware({}),
        ]
      : []),
  ],
});
