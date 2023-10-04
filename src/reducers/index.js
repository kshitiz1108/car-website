
import { combineReducers } from 'redux';
import dataReducer from './dataReducer'; 

import propertyReducer from './propertyReducer'; 

const rootReducer = combineReducers({
  dataReducer,
  
  propertyReducer,
});

export default rootReducer;
