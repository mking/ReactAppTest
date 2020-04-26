import { combineReducers } from 'redux';
import { recordSlice, setFoo } from '../actions/austriaActions';
import { createReducer } from '@reduxjs/toolkit';

const fooReducer = createReducer(0, {
  [setFoo]: (state, action) => action.payload,
});

export default combineReducers({
  ...recordSlice.reducers,
  foo: fooReducer,
});
