import { combineReducers } from 'redux';
import { caseSlice } from '../actions/switzerlandActions';

export default combineReducers(caseSlice.reducers);
