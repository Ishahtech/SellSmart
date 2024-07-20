import { useNavigate } from 'react-router-dom';
import './LoginScreen.css';
import booksell from '../../images/booksell.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';

const LoginScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen text-center bg-gray-100">
      <div className="w-4/5 h-[95%] ml-20 bg-white p-8">
        <div className="flex items-center relative top-8 left-32">
          <FontAwesomeIcon icon={faLessThan} className="h-8 w-8 bg-blue-500 text-white relative right-8 bottom-8 curspr-pointer"  onClick={()=>navigate('/Welcome.jsx')}/>
          <h2 className="text-2xl text-blue-500 relative left-80 bottom-10">Log in</h2>
        </div>
        <h3 className="text-xl relative">Welcome to SellSmart!</h3>
        <h5 className="text-base relative">Select login as the owner or employee first to continue.</h5>
        <img src={booksell} alt="booksell" className="w-52 h-auto relative top-8 left-80" />
        <div className="relative top-12 flex flex-col items-center">
          <button onClick={() => navigate('/store')} className="h-14 mt-2 w-2/3 bg-blue-500 text-white rounded-lg cursor-pointer text-xl flex items-center justify-center">
            <FontAwesomeIcon icon={faUser} className="h-6 w-6 relative right-12" /> Log in as Owner
          </button>
          <div className="mt-4">Or</div>
          <button onClick={() => navigate('/store')} className="h-14 mt-2 w-2/3 bg-blue-500 text-white rounded-lg cursor-pointer text-xl flex items-center justify-center">
            <FontAwesomeIcon icon={faUsers} className="h-6 w-6 relative right-12" /> Log in as Employee
          </button>
        </div>
        <p className="ml-24 mt-4">Don't have an account? <a href="/signup" className="text-blue-500">Sign up</a></p>
      </div>
    </div>
  );
};

export default LoginScreen;