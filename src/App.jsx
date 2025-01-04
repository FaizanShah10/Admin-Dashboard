import React from 'react';
import { Outlet } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import ThemeSetting from './Components/ThemeSetting';
import { useStateContext } from './Context/ContextProvider';

const MainLayout = () => {
  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <div className="flex h-screen">
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
