import {
  configureStore,
  createImmutableStateInvariantMiddleware,
  createSerializableStateInvariantMiddleware,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { axiosInstance } from '@app/src/helpers/axiosHelpers';
import rootReducer from '@app/src/reducers/rootReducer';
import { SET_COMMENT } from '@app/src/constants/austriaConstants';

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
