import { combineReducers } from 'redux';
import {
  recordSlice,
  setFoo,
  setComment,
} from '@app/src/actions/austriaActions';
import { createReducer } from '@reduxjs/toolkit';

const fooReducer = createReducer(0, {
  [setFoo]: (state, action) => action.payload,
});

const commentReducer = createReducer(null, {
  [setComment]: (state, action) => action.payload,
});

export default combineReducers({
  ...recordSlice.reducers,
  foo: fooReducer,
  comment: commentReducer,
});
