import { combineReducers } from 'redux';

import sidesReducer from './sides';
import userReducer from './user';

const rootReducer = combineReducers({
  sides: sidesReducer,
  user: userReducer,
});

export default rootReducer;
