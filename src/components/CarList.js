


import React, { useEffect, useState } from 'react';
import { Link, useHistory, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAllProperties } from '../actions/carActions';
import '../styles/CarList.css';
import car from '../assets/ix1ix1rightfrontthreequarter.jpg';
import locicon from '../assets/location.png';
import people from "../assets/2303182_company_couple_group_people_team_icon.png"
import fuel from "../assets/petrol-pump.png"
import avg from "../assets/speedometer.png"
import steer from "../assets/steering-wheel.png"
import heart from '../assets/love.png';
import PropertySearch from './CarSearch';

const PropertyList = ({ properties,selectedCity, fetchAllProperties, match }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 6; // Number of properties per page
  const totalProperties = properties.length;
  const totalPages = Math.ceil(totalProperties / propertiesPerPage);
  const navigate = useNavigate(); // Initialize useHistory

  useEffect(() => {
    // Dispatch the action to fetch all properties when the component mounts
    fetchAllProperties();
  }, [fetchAllProperties]);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * propertiesPerPage;
  const endIndex = startIndex + propertiesPerPage;

  // Filter properties based on the selected city and current page
  const filteredProperties = properties
    .filter((property) => !selectedCity || property.city === selectedCity)
    .slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    // Update the current page and prevent going below page 1 or above the last page
    setCurrentPage(Math.max(1, Math.min(newPage, totalPages)));

    // Push the new page URL to the history
    navigate(`/page/${newPage}`);
  };

  const goToPreviousPage = () => {
    handlePageChange(currentPage - 1);
  };

  const goToNextPage = () => {
    handlePageChange(currentPage + 1);
  };

  return (
    <div className="property-list">
      <PropertySearch />
      <div className="property-row">
        {filteredProperties.map((property) => (
          <div key={property.id} className="property-card">
            <Link to={`/property/${property.id}`}>
              <div className="property-image">
                <img className="image" src={car} alt={property.name} />
                <>
                  <div className="rent-label">
                   
                  </div>
                  
                </>
              </div>
              <div className="property-details">
                <div className='container'>
                <h3 className='names'>{property.name}</h3>
                <h3 className='year'>{property.year}</h3>
                </div>
                <div className="room-details">
                 <div className='rooms'>
                  <div className="room-info">
                 
                    <img className="icons" src={people} alt={property.name} />
                    <span>{property.people} People</span>
                  </div>
                  <div className="room-info">
                    <img className="icons" src={avg} alt={property.name} />
                    <span>{property.average}/1-Litre </span>
                  </div>
                  </div>
                  <div className='rooms'>
                  <div className="room-info">
                    <img className="icons" src={fuel} alt={property.name} />
                    <span>{property.fuel} </span>
                  </div>
                  <div className="room-info1">
                    <img className="icons" src={steer} alt={property.name} />
                    <span>{property.type}</span>
                  </div>
                  </div>
                </div>
                <div className="proper-foot">
                  <div className="pri">
                    <p className="price"> ${property.price}</p>
                    <span className="mon">/month</span>
                  </div>
                  <img className="heart-icon" src={heart} alt={property.name} />
                  <button className="butt">Read More</button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="pagination">
        <div className="page-count">
           {Math.min(endIndex, totalProperties)} from {totalProperties}
        </div>
        <div className="page-buttons">
          <button
            className={`page-button ${currentPage === 1 ? 'disabled' : ''}`}
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <Link
              
              key={i + 1}
              to={`/page/${i + 1}`} 
              className="pagenumber"
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </Link>
          ))}
          <button
            className={`page-button ${currentPage === totalPages ? 'disabled' : ''}`}
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  properties: state.propertyReducer.properties,
  selectedCity: state.cityReducer?.selectedCity,
});

export default connect(mapStateToProps, { fetchAllProperties })(PropertyList);





