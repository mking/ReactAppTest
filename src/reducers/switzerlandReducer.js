import { combineReducers } from 'redux';
import { caseSlice } from '@app/src/actions/switzerlandActions';

export default combineReducers(caseSlice.reducers);
