import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { auth } from '../firebase'; // Firebase auth instance
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(null);

    if (!fullName) {
      setError('Full name is required.');
      return;
    }

    if (!email) {
      setError('Email is required.');
      return;
    }

    if (!password) {
      setError('Password is required.');
      return;
    }

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Update user profile with full name
      await updateProfile(userCredential.user, {
        displayName: fullName,
      });

      // Redirect to the dashboard after successful signup
      navigate('/ecommerce');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="h-screen w-full bg-gray-100 flex items-center justify-center">
      <div className="h-[85vh] w-[80vw] bg-white rounded-3xl flex shadow-2xl p-4">
        <div className="h-full w-1/2 bg-orange-500 rounded-3xl overflow-hidden">
          <h2 className="text-left ml-10 mt-20 text-5xl font-bold text-white leading-normal">
            Start your journey with us
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
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Create Your Account</h2>
              {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="mb-4 relative">
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
              <button
                onClick={handleSignup}
                className="w-full bg-orange-500 text-white font-medium py-3 rounded-lg hover:bg-orange-600 transition duration-300"
              >
                Signup
              </button>
              <div className="flex items-center justify-center my-6">
                <hr className="w-full border-gray-300" />
                <span className="text-sm text-gray-500 mx-3 whitespace-nowrap">
                  Or Signup with
                </span>
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
                  Already have an account?{' '}
                  <a href="/login" className="text-orange-500 font-medium hover:underline">
                    Login
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

export default Signup;
