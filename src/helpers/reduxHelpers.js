import {
  configureStore,
  createImmutableStateInvariantMiddleware,
  createSerializableStateInvariantMiddleware,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { axiosInstance } from './axiosHelpers';
import rootReducer from '../reducers/rootReducer';
import { SET_COMMENT } from '../constants/austriaConstants';

export const store = configureStore({
  reducer: rootReducer,
  middleware: [
    thunk.withExtraArgument({
      axiosInstance,
    }),
    ...(process.env.NODE_ENV === 'development'
      ? [
          createImmutableStateInvariantMiddleware({
            ignoredPaths: ['austria.comment'],
          }),
          createSerializableStateInvariantMiddleware({
            ignoredActions: [SET_COMMENT],
            ignoredPaths: ['austria.comment'],
          }),
        ]
      : []),
  ],
});
