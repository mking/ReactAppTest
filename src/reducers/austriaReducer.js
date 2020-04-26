import { combineReducers } from 'redux';
import { recordSlice } from '../actions/austriaActions';

export default combineReducers(recordSlice.reducers);
