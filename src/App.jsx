
import WelcomeScreen from './components/WelcomeScreen';  // Adjust the path as necessary
import LoginScreen from './components/LoginScreen/LoginScreen';  // Adjust the path as necessary

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
};

export default App;