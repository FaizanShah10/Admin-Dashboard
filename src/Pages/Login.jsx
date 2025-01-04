import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // For navigation
import { auth } from '../firebase'; // Import Firebase authentication

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook for navigation

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }

    try {
      // Firebase authentication
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/ecommerce'); // Redirect to the dashboard or homepage
    } catch (err) {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="h-screen w-full bg-gray-100 flex items-center justify-center">
      <div className="h-[85vh] w-[80vw] bg-white rounded-3xl flex shadow-2xl p-4">
        <div className="h-full w-1/2 bg-orange-500 rounded-3xl overflow-hidden">
          <h2 className="text-left ml-10 mt-20 text-5xl font-bold text-white leading-normal">
            Simplify <br /> management with <br /> our Dashboard
          </h2>
          <hr className="m-10 border-[1px]" />
          <p className="ml-10 text-white text-sm w-80">
            Simplify your e-commerce management with our user-friendly admin dashboard
          </p>
        </div>
        <div className="h-full w-1/2 bg-transparent">
          <div className="flex justify-center items-center h-full bg-white">
            <div className="w-[85%] max-w-[400px]">
              <div className="flex justify-center items-center mb-6">
                <div className="flex items-center gap-2">
                  <div className="bg-orange-500 rounded-full w-12 h-12 flex justify-center items-center">
                    <span className="text-white font-bold text-2xl">S</span>
                  </div>
                  <h1 className="font-bold text-2xl text-gray-800">Shoppy</h1>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Welcome Back</h2>
              <p className="text-center text-sm text-gray-500 mb-6">
                Please login to your account
              </p>
              {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="mb-1 relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-500"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
              <div className="flex justify-end mb-6">
                <a href="#" className="text-orange-500 text-sm hover:underline">
                  Forgot password?
                </a>
              </div>
              <button
                className="w-full bg-orange-500 text-white font-medium py-3 rounded-lg hover:bg-orange-600 transition duration-300"
                onClick={handleLogin}
              >
                Login
              </button>
              <div className="flex items-center justify-center my-6">
                <hr className="w-full border-gray-300" />
                <span className="text-sm text-gray-500 mx-3 whitespace-nowrap">Or Login with</span>
                <hr className="w-full border-gray-300" />
              </div>
              <div className="flex justify-between gap-4">
                <button className="flex items-center justify-center gap-2 w-full py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100">
                  <FcGoogle />
                  Google
                </button>
                <button className="flex items-center justify-center gap-2 w-full py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100">
                  <FaFacebook className="text-blue-500" />
                  Facebook
                </button>
              </div>
              <div className="text-center mt-6">
                <p className="text-gray-500 text-sm">
                  Don’t have an account?{' '}
                  <a href="/signup" className="text-orange-500 font-medium hover:underline">
                    Signup
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
