import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from '../firebase-config';
import { createUserWithEmailAndPassword } from "firebase/auth";


function Signup() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try{
      await createUserWithEmailAndPassword(auth,email,password)
      alert('User created successfully!');
    } catch (err) {
      setError(err.message);
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen rounded-sm bg-gray-200">
      <div className="w-full max-w-lg p-12 my-5 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-4xl font-bold text-center text-blue-500">
          Sign Up
        </h2>
        <form onSubmit={handleSignup} className="space-y-6 pt-10 ">
          <div>
            <label htmlFor="email" className="block text-base text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              name="email"
              required
              className="w-full p-2 mt-1 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter Email"
            />
          </div>
          <div className="mt-10">
            <label htmlFor="phone" className="block text-base  text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full p-2 mt-1 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter Phone Number"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-base text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                required
                className="w-full p-2 mt-1 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter Password"
              />
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <button
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-600"
              >
                {passwordVisible ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full p-2 mb-6 mt-3 text-white bg-blue-500 rounded-xl hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="flex justify-center items-center">
        <p className="block text-base text-gray-700">You have an account?</p>
        <button className="text-blue-500 text-base font-medium ml-2 hover:text-blue-800"><Link to="/login">Log in</Link></button>
      </div>
      </div>

      
    </div>
  );
}

export default Signup;
