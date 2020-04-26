import { combineReducers } from 'redux';
import switzerlandReducer from '@app/src/reducers/switzerlandReducer';
import austriaReducer from '@app/src/reducers/austriaReducer';

export default combineReducers({
  switzerland: switzerlandReducer,
  austria: austriaReducer,
});
