
import data from '../data/data.json'; 

export const FETCH_CITY_DATA = 'FETCH_CITY_DATA';
export const FETCH_PROPERTY_DATA = 'FETCH_PROPERTY_DATA';


export const fetchCityData = () => {
 
  const cities = data.cities;
  
  return {
    type: 'FETCH_CITY_DATA',
    payload: cities,
  };
};


export const fetchPropertyData = () => {
  const properties = data.properties;

  return {
    type: 'FETCH_PROPERTY_DATA',
    payload: properties,
  };
};
