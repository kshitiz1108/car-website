import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {  fetchCityData } from '../actions/dataActions';
import { selectCity } from '../actions/cityActions';

import '../styles/CityTabs.css';

const CityTabs = ({ cities, selectedCity, selectCity, fetchCityData }) => {
  useEffect(() => {
    
    fetchCityData();
   
  }, [fetchCityData]);

  const handleCityClick = (city) => {
    
    selectCity(city);
    
  };

  return (
    <div className="city-tabs1">
    <div className='city-tabs2'>
      <h1>Featured Listed Property</h1>
      <p>Real estate can be bought, sold, leased, or rented, and can be a
valuable investment opportunity. The value of real estate can be...</p>
    </div>
    <div className="city-tabs">
    <div className='city'>
      {cities.map((city) => (
        <button 
          key={city}
          className={selectedCity === city ? 'active' : ''}
          onClick={() => handleCityClick(city)}
        >
          {city}
        </button>
      ))}
      </div>
      <div className='view-all-button'>
        <button>View All → </button>
      </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cities: state.dataReducer.cities,
  selectedCity: state.cityReducer.selectedCity,
});

export default connect(mapStateToProps, { selectCity, fetchCityData })(CityTabs);


