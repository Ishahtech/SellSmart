

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomeScreen from './components/WelcomeScreen';  // Adjust the path as necessary
import LoginScreen from './components/LoginScreen/LoginScreen';  // Adjust the path as necessary
 import Signup from './Signups/Signup.jsx';
 import LoginOwner from './components/LoginOwner'
 import LoginEmployee from './components/LoginEmployee'
 
 const App = () => {
   return (
     <>  
     <Router>
      <Routes>
           <Route path="/" element={<WelcomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path='/Signup' element= {<Signup />} />
          <Route path='/Employee' element= {<LoginEmployee />} />
          <Route path='/Owner' element= {<LoginOwner />} />
      </Routes>
     </Router>
    
     </>
   )
 }
 
 export default App
 


