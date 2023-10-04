
const initialState = {
    properties: [], 
    selectedProperty: null, 
  };
  
  const propertyReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_ALL_PROPERTIES':
        return {
          ...state,
          properties: action.payload,
        };
      case 'FETCH_PROPERTY_BY_ID':
        return {
          ...state,
          selectedProperty: action.payload,
        };
        case 'SEARCH_PROPERTIES':
          return {
            ...state,
            properties: action.payload,
          };
      default:
        return state;
    }
  };
  
  export default propertyReducer;
  