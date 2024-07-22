
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import LoginScreen from './components/LoginScreen/LoginScreen';  // Adjust the path as necessary
 import Signup from './components/Signup.jsx';
 import LoginOwner from './components/LoginOwner'
 import LoginEmployee from './components/LoginEmployee'
<<<<<<< HEAD
 import LandinPage from './components/LandingPage.jsx'
=======
 import KeyFeatures from './components/LandingPage/KeyFeatures.jsx';
>>>>>>> c3e6ee9cd37a2aece856375a637647f19bb6e758
 
 const App = () => {
   return (
     <>  
     <Router>
      <Routes>
<<<<<<< HEAD
           
=======
        < Route path='/' element={<KeyFeatures />} />
           <Route path="/welcome" element={<WelcomeScreen />} />
>>>>>>> c3e6ee9cd37a2aece856375a637647f19bb6e758
          <Route path="/login" element={<LoginScreen />} />
          <Route path='/Signup' element= {<Signup />} />
          <Route path='/Employee' element= {<LoginEmployee />} />
          <Route path='/Owner' element= {<LoginOwner />} />
          <Route path='Features' element= {<KeyFeatures />} />
      </Routes>
     </Router>
     <LandinPage/>
    
     </>
   )
 }
 
 export default App
 

