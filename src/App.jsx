import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import Signup from './Signups/Signup.jsx';
 import LoginOwner from './components/LoginOwner'
 import LoginEmployee from './components/LoginEmployee'
 
 const App = () => {
   return (
     <>  
     <Router>
      <Routes>
          <Route path='/' element= {<Signup />} />
          <Route path='/Employee' element= {<LoginEmployee />} />
          <Route path='/Owner' element= {<LoginOwner />} />
      </Routes>
     </Router>
    
     </>
   )
 }
 
 export default App
 

