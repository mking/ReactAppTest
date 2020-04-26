import set from 'lodash/fp/set';
import { combineReducers } from 'redux';
import {
  configureStore,
  createImmutableStateInvariantMiddleware,
  createSerializableStateInvariantMiddleware,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { axiosInstance } from '@app/src/helpers/axiosHelpers';
import { SET_COMMENT } from '@app/src/constants/austriaConstants';
import switzerlandReducer from '@app/src/reducers/switzerlandReducer';

let reducers = {
  switzerland: switzerlandReducer,
};

export const store = configureStore({
  reducer: combineReducers(reducers),
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

export const injectReducer = ({ reducerKey, reducer }) => {
  reducers = set([reducerKey], reducer)(reducers);
  store.replaceReducer(combineReducers(reducers));
};
