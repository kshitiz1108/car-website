
const initialState = {
    selectedCity: '', 
  };
  
  const cityReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SELECT_CITY':
        return {
          ...state,
          selectedCity: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default cityReducer;
  