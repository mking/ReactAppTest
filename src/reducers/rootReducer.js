import { combineReducers } from 'redux';
import switzerlandReducer from './switzerlandReducer';
import austriaReducer from './austriaReducer';

export default combineReducers({
  switzerland: switzerlandReducer,
  austria: austriaReducer,
});
