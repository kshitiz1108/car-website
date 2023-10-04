
import data from '../data/data.json'; 

export const FETCH_ALL_PROPERTIES = 'FETCH_ALL_PROPERTIES';
export const FETCH_PROPERTY_BY_ID = 'FETCH_PROPERTY_BY_ID';

export const fetchAllProperties = () => {
 
  
  const properties = data.properties;

  return {
    type: 'FETCH_ALL_PROPERTIES',
    payload: properties,
  };
};



export const fetchPropertyById = (id) => {
    return async (dispatch) => {
      try {
        
        console.log('Fetching property by ID:', id);
  
        
        const property = await fetchPropertyDataById(id);
  
        console.log('Fetched property:', property);
  
        dispatch(fetchPropertyByIdSuccess(property));
      } catch (error) {
      
        console.error('Error fetching property by ID:', error);
      }
    };
  };
  

const fetchPropertyDataById = async (id) => {
  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
        const propertyId = parseInt(id, 10);
      const property = data.properties.find((property) => property.id === propertyId );
      if (property) {
        resolve(property);
      } else {
        reject(new Error('Property not found'));
      }
    }, 1000);
  });
};


const fetchPropertyByIdSuccess = (property) => ({
  type: 'FETCH_PROPERTY_BY_ID',
  payload: property,
});

export const searchProperties = (searchTerm) => (dispatch, getState) => {
  // Perform the search logic based on property names
  const properties = getState().propertyReducer.properties;
  const filteredProperties = properties.filter((property) =>
    property.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Dispatch the filtered properties to update the property list
  dispatch({
    type: 'SEARCH_PROPERTIES',
    payload: filteredProperties,
  });
};
