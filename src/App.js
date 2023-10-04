
import React from 'react';

import { BrowserRouter as Router} from 'react-router-dom';

import AllRoutes from './Allroutes';

function App() {
  
  return (
    
    <Router>
      <div className="App">
        {/* <CityTabs /> */}
       
        <AllRoutes/>
      </div>
      </Router>
   
  );
}

export default App;

