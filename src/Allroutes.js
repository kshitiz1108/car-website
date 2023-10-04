import React from 'react';


import { Route,Routes} from 'react-router-dom';
import PropertyPage from './components/CarPage';
import PropertyList from './components/CarList';

function AllRoutes() {
  
  return (
    
    
      <>
        <Routes>
        <Route exact path="/" element={<>
         
        <PropertyList/></>} />
        <Route path="/page/:page" element={<PropertyList/>} />
        <Route path="/property/:id" element={<PropertyPage/>} />
        
        </Routes>
      </>
      
   
  );
}

export default AllRoutes;