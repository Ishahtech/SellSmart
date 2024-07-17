import { useNavigate } from 'react-router-dom';
import sittingSell from '../images/sittingSell.webp';

const WelcomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-100">
      <div className="bg-white flex flex-col items-center w-11/12 md:w-3/4 lg:w-1/2 p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">SellSmart.</h1>
        <img src={sittingSell} alt="sittingsell" className="w-80 mb-6" />
        <p className="text-gray-700 text-lg mb-4">Easy Management for your Store.</p>
        <div className="flex justify-center items-center space-x-2 mb-6">
          <div className="w-8 h-1 bg-blue-500"></div>
          <div className="w-8 h-1 bg-gray-500"></div>
          <div className="w-8 h-1 bg-gray-500"></div>
        </div>
        <button
          onClick={() => navigate('/login')}
          className="w-full md:w-3/4 lg:w-2/3 h-14 mb-4 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-600"
        >
          Create new account
        </button>
        <button
          onClick={() => navigate('/login')}
          className="w-full md:w-3/4 lg:w-2/3 h-14 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-600"
        >
          Log in
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;