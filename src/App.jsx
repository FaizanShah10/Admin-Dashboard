import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import ThemeSetting from './Components/ThemeSetting';
import { useStateContext } from './Context/ContextProvider';
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";


const MainLayout = () => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // To handle initial loading
  const navigate = useNavigate();

  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();

  useEffect(() => {
    // Check for user authentication state
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); 
        console.log(user?.displayName)
      } else {
        setUser(null);
      }
      setLoading(false); 
    });

    // Cleanup the listener on component unmount
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!loading) {
      if (user) {
        navigate("/ecommerce"); // Redirect to the dashboard
      } else {
        navigate("/login"); // Redirect to login
      }
    }
  }, [user, loading, navigate]);

      if (loading) {
        return <div className='flex justify-center items-center w-screen h-screen bg-zinc-800'>
                <div  role="status">
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              </div>;
      }

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <div className="flex h-screen bg-white dark:bg-zinc-900">
        {/* Settings Button */}
        <div className="fixed right-4 bottom-4" style={{ zIndex: 1000 }}>
          <button
            type="button"
            onClick={() => setThemeSettings(true)}
            style={{ background: currentColor, borderRadius: '50%' }}
            className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <FiSettings />
          </button>
        </div>

        {/* Sidebar */}
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white overflow-y-auto">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}

        {/* Main Content */}
        <div
          className={`flex-1 ${
            activeMenu ? 'md:ml-72' : 'ml-0'
          } dark:bg-main-dark-bg bg-main-bg`}
        >
          {/* Navbar */}
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <Navbar />
          </div>

          {/* Theme Settings */}
          {themeSettings && <ThemeSetting />}

          {/* Page Content */}
          <div className="overflow-y-auto h-full p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export const AuthLayout = ({ children }) => {
  const { currentMode } = useStateContext();
  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <div className="flex justify-center items-center h-screen dark:bg-main-dark-bg bg-main-bg">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
