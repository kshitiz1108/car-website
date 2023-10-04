
import React from 'react';
import { connect } from 'react-redux';
import { searchProperties, fetchAllProperties } from '../actions/carActions';
import searchIcon from '../assets/icons8-search-30.png'; 
import '../styles/CarSearch.css'; 

const PropertySearch = ({ searchProperties, fetchAllProperties }) => {
  const handleSearchInput = (e) => {
    const searchTerm = e.target.value;
    if (searchTerm === '') {
      
      fetchAllProperties();
    } else {
    
      searchProperties(searchTerm);
    }
  };

  return (
    <div className="property-search">
      <input
        type="text"
        placeholder="Search"
        onInput={handleSearchInput}
      />
      <img src={searchIcon} alt="Search" className="search-icon" />
      <p className='first' >Relevance</p>
      <p className='second'>AllBrands</p>
    </div>
  );
};

export default connect(null, { searchProperties, fetchAllProperties })(PropertySearch);


