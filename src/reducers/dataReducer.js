
import { FETCH_CITY_DATA, FETCH_PROPERTY_DATA } from '../actions/dataActions';

const initialState = {
  cities: [],     
  properties: [],  
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CITY_DATA:
      return {
        ...state,
        cities: action.payload, 
      };

    case FETCH_PROPERTY_DATA:
      return {
        ...state,
        properties: action.payload,
      };

  

    default:
      return state;
  }
};

export default dataReducer;
