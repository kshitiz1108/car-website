import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import { connect } from 'react-redux';
import { fetchPropertyById } from '../actions/carActions';
import car from '../assets/ix1ix1rightfrontthreequarter.jpg';
import "../styles/CarPage.css"

const PropertyPage = ({ selectedProperty, fetchPropertyById }) => {
  const { id } = useParams();
  const navigate = useNavigate(); 

  useEffect(() => {
    fetchPropertyById(id);
  }, [id, fetchPropertyById]);

  if (!selectedProperty) {
    return <div>Loading...</div>;
  }

  
  const navigateToHomePage = () => {
   navigate('/'); 
  };

  return (
    <div className="property-page">
      <h2>{selectedProperty.name}</h2>
      <img className='img1' src={car} alt={selectedProperty.name} />
      {/* <p>{selectedProperty.description}</p> */}
      <p>Price: ${selectedProperty.price}/month</p>
      
      <button onClick={navigateToHomePage}>Back to Home</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedProperty: state.propertyReducer.selectedProperty,
});

export default connect(mapStateToProps, { fetchPropertyById })(PropertyPage);



