
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import LoginScreen from './components/LoginScreen/LoginScreen';  // Adjust the path as necessary
 import Signup from './Signups/Signup.jsx';
 import LoginOwner from './components/LoginOwner'
 import LoginEmployee from './components/LoginEmployee'
 import LandinPage from './components/LandingPage.jsx'
 
 const App = () => {
   return (
     <>  
     <Router>
      <Routes>
           
          <Route path="/login" element={<LoginScreen />} />
          <Route path='/Signup' element= {<Signup />} />
          <Route path='/Employee' element= {<LoginEmployee />} />
          <Route path='/Owner' element= {<LoginOwner />} />
      </Routes>
     </Router>
     <LandinPage/>
    
     </>
   )
 }
 
 export default App
 


